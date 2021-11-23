/*  
  Library: Common Functions for Cervical Cancer Screening and Management
  Author: CMS Alliance to Modernize Healthcare, operated by THE MITRE Corporation.

  (C) 2021 The MITRE Corporation. All Rights Reserved. 
  Approved for Public Release: 21-1556. 
  Distribution Unlimited.

  Unless otherwise noted, this work is available under an Apache 2.0 license. 
  It was produced by the MITRE Corporation for the Division of Cancer Prevention 
  and Control, Centers for Disease Control and Prevention in accordance with the 
  Statement of Work, contract number 75FCMC18D0047, task order number 75D30120F09743.
*/

library CCSMCommonFunctions version '1.0.0'

using FHIR version '4.0.1'

include CDSConnectCommonsforFHIRv401 version '1.0.0' called C3F
include FHIRHelpers version '4.0.1' called FHIRHelpers

/*******************************************************************************
 * NOTICE: This following code has been adapted from "Factors to Consider in 
 * Managing Chronic Pain: A Pain Management Summary," available at:
 * https://cds.ahrq.gov/cdsconnect/artifact/factors-consider-managing-chronic-pain-pain-management-summary
 * It is made available via an Apache 2.0 license.
*******************************************************************************/

// Returns the first-found display text for a CodeableConcept, looking first at the `text` attribute, then the
// `display` on each `coding` until it finds a non-null value.  Some PEG codes are normalized due to length.
// @param c - a FHIR CodeableConcept to get text from
// @returns {System.String} the display text or null if none is found
define function ConceptText(c FHIR.CodeableConcept):
  Coalesce(c.text.value, Coalesce((c.coding) c2 return c2.display.value))

// Returns a text representation of a date using the CQL `ToString` function.
// @param d - a FHIR date to get text for
// @returns {System.String} the text representation of the date
define function DateText(d FHIR.date):
  ToString(d.value)

// Returns a text representation of a dateTime using the CQL `ToString` function.
// @param d - a FHIR dateTime to get text for
// @returns {System.String} the text representation of the dateTime
define function DateTimeText(d FHIR.dateTime):
  ToString(d.value)

// Returns a text representation of an instant using the CQL `ToString` function.
// @param i - a FHIR instant to get text for
// @returns {System.String} the text representation of the instant
define function InstantText(i FHIR.instant):
  ToString(i.value)

// Returns a text representation of a Quantity with the Quantity's value and unit.
// If the unit is {score}, then omit it (as it is not useful to display)
// @param q - a FHIR Quantity to get text for
// @returns {System.String} the text representation of the Quantity
define function QuantityText(q FHIR.Quantity):
  if (q is null) then null
  else if (q.unit is not null) then ToString(q.value.value) + ' ' + q.unit.value
  else if (q.code is not null) then ToString(q.value.value) + ' ' + q.code.value
  else ToString(q.value.value)

// Returns a tuple containing a Period's start and end as text representations.
// @param p - a FHIR Period to get a tuple for
// @returns {Tuple<Start System.String, End System.String>} the tuple representation of the Period
define function PeriodObject(p FHIR.Period):
  if p is null then null
  else
    {
      Start: DateTimeText(p."start"),
      End: DateTimeText(p."end")
    }

// Returns a tuple containing a Range's low and high as text representations.
// @param r - a FHIR Range to get a tuple for
// @returns {Tuple<Low System.String, High System.String>} the tuple representation of the Range
define function RangeObject(r FHIR.Range):
  if r is null then null
  else
    {
      Low: QuantityText(r.low),
      High: QuantityText(r.high)
    }

define function ObservationDate(o FHIR.Observation):
  Coalesce(
    (o.effective as FHIR.dateTime).value,
    (o.effective as FHIR.instant).value,
    (o.effective as FHIR.Period)."end".value,
    (o.effective as FHIR.Period)."start".value,
    (o.issued as FHIR.instant).value
  )

// Returns a text representation of a date associated with an Observation, preferring `effectiveDateTime`, then
// `effectivePeriod.start`, then `issued`.
// @param o - a FHIR Observation to get the text date from
// @returns {System.String} the text representation of a relevant date from the Observation
define function ObservationDateString(o FHIR.Observation):
  Coalesce(
    DateTimeText(o.effective as FHIR.dateTime),
    InstantText(o.effective as FHIR.instant),
    DateTimeText((o.effective as FHIR.Period)."end"),
    DateTimeText((o.effective as FHIR.Period)."start"),
    InstantText(o.issued)
  )

// Returns a text representation of a date associated with a MedicationStatement, preferring `effectiveDateTime`, then
// `.start`.
// @param s - a FHIR MedicationStatement to get the text date from
// @returns {System.String} the text representation of a relevant date from the MedicationStatement
define function MedicationStatementDate(s FHIR.MedicationStatement):
  Coalesce(
    DateTimeText(s.effective as FHIR.dateTime),
    DateTimeText((s.effective as FHIR.Period)."end"),
    DateTimeText((s.effective as FHIR.Period)."start")
  )

// Returns a text representation of a Condition's onset, whether represented as a dateTime, Period, Quantity (Age),
// Range (Age), or string.
// @param c - a FHIR Condition to get the text representation of the onset from
// @returns {System.String} the text representation of the Condition's onset
define function Onset(c FHIR.Condition):
  Coalesce( List{
    DateTimeText(c.onset as FHIR.dateTime),
    QuantityText(c.onset as FHIR.Age),
    PeriodObject(c.onset as FHIR.Period),
    RangeObject(c.onset as FHIR.Range),
    (c.onset as FHIR.string).value
  })

// Returns a text representation of a Condition's abatement, whether represented as a dateTime, Period, Quantity (Age),
// Range (Age), string, or boolean.
// @param c - a FHIR Condition to get the text representation of the abatement from
// @returns {System.String} the text representation of the Condition's abatement
define function Abatement(c FHIR.Condition):
  Coalesce( List{
    DateTimeText(c.abatement as FHIR.dateTime),
    // QuantityText(c.abatement as FHIR.Age),
    PeriodObject(c.abatement as FHIR.Period),
    RangeObject(c.abatement as FHIR.Range),
    (c.abatement as FHIR.string).value
  })

/*******************************************************************************
 * END: Code adapted from "Factors to Consider in Managing Chronic Pain: A Pain 
 * Management Summary"
*******************************************************************************/

/*******************************************************************************
* DiagnosticReport Functions
*******************************************************************************/

define function ConditionDate(C Condition):
  Coalesce(
    (C.onset as FHIR.dateTime).value,
    (C.onset as FHIR.Period)."end".value,
    (C.onset as FHIR.Period)."start".value,
    C.recordedDate.value
  )

/**
 * The oldest condition.  For each Condition, this algorithm will use the Coalesce function, which uses the
 * first non-null result from these fields: onsetDateTime, onsetPeriod.start, assertedDate, onsetPeriod.end.
 * The found date will be used to compare Conditions and determine the oldest one.
 * @param CondList - a list of Conditions
 * @returns {Condition} the oldest Condition from the list, or null if null was passed in
 */
define function OldestCondition(CondList List<Condition>):
  First(CondList C sort by Coalesce(
    (onset as FHIR.dateTime).value,
    (onset as FHIR.Period)."start".value,
    recordedDate.value,
    (onset as FHIR.Period)."end".value)
  )

/**
 * Date of the oldest condition in a list.  For each Condition, this algorithm will use the Coalesce function, which uses the
 * first non-null result from these fields: onsetDateTime, onsetPeriod.start, assertedDate, onsetPeriod.end.
 * The found date will be used to compare Conditions and determine the oldest one. The date of the oldest Condition
 * will be returned.
 * @param CondList - a list of Conditions
 * @returns {System.String} the text representation of the Condition's date
 */
define function DateOfFirstCondition(CondList List<Condition>):
  ConditionDate(
    OldestCondition(
      CondList
    )
  )

/*******************************************************************************
* DiagnosticReport Functions
*******************************************************************************/

// Returns a text representation of a date associated with a DiagnosticReport, preferring `effectiveDateTime`, then
// `.start`.
// @param s - a FHIR DiagnosticReport to get the text date from
// @returns {System.String} the text representation of a relevant date from the DiagnosticReport
define function DiagnosticReportDateString(d FHIR.DiagnosticReport):
  Coalesce(
    DateTimeText((d.effective as FHIR.Period)."end" as FHIR.dateTime),
    DateTimeText(d.effective as FHIR.dateTime),
    DateTimeText((d.effective as FHIR.Period)."start" as FHIR.dateTime)
  )

define function DiagnosticReportDate(d FHIR.DiagnosticReport):
  Coalesce(
    (d.effective as FHIR.Period)."end".value,
    (d.effective as FHIR.dateTime).value,
    (d.effective as FHIR.Period)."start".value
  )

define function SortedDiagnosticReports(ReportList List<FHIR.DiagnosticReport>):
  ReportList R sort by Coalesce(
    (effective as FHIR.Period)."end".value,
    (effective as FHIR.dateTime).value,
    (effective as FHIR.Period)."start".value
  )

define function MostRecentDiagnosticReport(ReportList List<FHIR.DiagnosticReport>):
  Last(
    SortedDiagnosticReports(
      ReportList
    )
  )

/**
* Diagnostic Reports that are issued in the specified "look back" period.
* TODO: Rename to LookBack once the execution engine supports overloaded functions.
* @param MedList - a list of MedicationAdministrations
* @param LookBack - the lookback period for when the medication was prescribed
* @returns {List<MedicationStatement>} a list of MedicationAdministrations prescribed in the look back period, or null if null
* was passed in
*/
define function LookBack(DiagnosticReportList List<DiagnosticReport>, LookBack System.Quantity):
  DiagnosticReportList D
    let LookBackInterval: Interval[Now() - LookBack, Now()]
    where (D.effective as FHIR.dateTime).value in LookBackInterval
      or C3F.PeriodToInterval(D.effective as FHIR.Period) overlaps LookBackInterval

// TODO: Parameterize by association window (currently hard-coded to 1 day)
define function AssociateDiagnosticReports(d1 FHIR.DiagnosticReport, d2 FHIR.DiagnosticReport):
  if (
    (d1.effective as FHIR.dateTime).value within 1 day of (d2.effective as FHIR.dateTime).value or
    (d1.effective as FHIR.dateTime).value within 1 day of (d2.effective as FHIR.Period)."start".value or 
    (d1.effective as FHIR.dateTime).value within 1 day of (d2.effective as FHIR.Period)."end".value or
    (d2.effective as FHIR.dateTime).value within 1 day of (d1.effective as FHIR.Period)."start".value or 
    (d2.effective as FHIR.dateTime).value within 1 day of (d1.effective as FHIR.Period)."end".value or
    (d1.effective as FHIR.Period) overlaps (d2.effective as FHIR.Period)
  ) then
    true
  else
    false

define function CoincidentDiagnosticReports(d1 FHIR.DiagnosticReport, d2 FHIR.DiagnosticReport):
  if (
    AssociateDiagnosticReports(d1, d2) or
    d1.encounter = d2.encounter or
    (
      Coalesce((d1.basedOn) R where R.type = 'ServiceRequest' return R.reference) =
      Coalesce((d2.basedOn) R where R.type = 'ServiceRequest' return R.reference)
    )
  ) then
    true
  else
    false


/*******************************************************************************
* Encounter Functions
*******************************************************************************/

/**
 * Encounters that are triaged, in-progress or completed.
 * @see http://hl7.org/fhir/R4/valueset-encounter-status.html
 * @param EncList - a list of Encounters
 * @returns {List<Encounter>} a list of encounters, or null if null was passed in
 */
define function RelevantEncounterStatus(EncList List<Encounter>):
  EncList E
    where E.status.value = 'triaged'
      or E.status.value = 'in-progress'
      or E.status.value = 'finished'


/*******************************************************************************
* Medication Functions
*******************************************************************************/

// Returns a text representation of a date associated with a MedicationAdministration, preferring `effectiveDateTime`, then
// `.start`.
// @param s - a FHIR MedicationAdministration to get the text date from
// @returns {System.String} the text representation of a relevant date from the MedicationAdministration
define function MedicationAdministrationDate(a FHIR.MedicationAdministration):
  Coalesce(
    DateTimeText(a.effective as FHIR.dateTime),
    DateTimeText((a.effective as FHIR.Period)."end"),
    DateTimeText((a.effective as FHIR.Period)."start")
  )

/**
* Medication administrations that are completed, according to a prescription.
* @see https://www.hl7.org/fhir/valueset-medication-admin-status.html
* @param MedList - a list of MedicationAdministrations
* @returns {List<MedicationRequest>} a list of completed medication administrations, or null if null was passed in
*/
define function CompletedMedicationAdministration(MedList List<MedicationAdministration>):
  MedList M
    where M.status.value = 'completed'

define function CompletedMedicationDispense(MedList List<MedicationDispense>):
  MedList M
    where M.status.value = 'completed'

/**
* Diagnostic reports that are completed.
* @see https://www.hl7.org/fhir/valueset-diagnostic-report-status.html
* @param DiagnosticReportList - a list of DiagnosticReports
* @returns {List<DiagnosticReport>} a list of completed diagnostic reports, or null if null was passed in
*/
define function CompletedDiagnosticReport(DiagnosticReportList List<DiagnosticReport>):
  DiagnosticReportList D
    where D.status.value in List{'final', 'amended', 'corrected', 'appended'}

/**
* Medication Administrations that are issued in the specified "look back" period.
* TODO: Rename to LookBack once the execution engine supports overloaded functions.
* @param MedList - a list of MedicationAdministrations
* @param LookBack - the lookback period for when the medication was prescribed
* @returns {List<MedicationStatement>} a list of MedicationAdministrations prescribed in the look back period, or null if null
* was passed in
*/
define function LookBack(MedList List<MedicationAdministration>, LookBack System.Quantity):
  MedList M
    let LookBackInterval: Interval[Now() - LookBack, Now()]
    where (M.effective as FHIR.dateTime).value in LookBackInterval
      or C3F.PeriodToInterval(M.effective as FHIR.Period) overlaps LookBackInterval

/**
* Medication requests that are completed, according to a prescription.
* @see http://hl7.org/fhir/R4/valueset-medicationrequest-status.html
* @param MedList - a list of MedicationRequests
* @returns {List<MedicationRequest>} a list of completed medication requests, or null if null was passed in
*/
define function CompletedMedicationRequest(MedList List<MedicationRequest>):
  MedList M
    where M.status.value = 'completed'


/*******************************************************************************
* Observation Functions
*******************************************************************************/




/*******************************************************************************
* Procedure Functions
*******************************************************************************/

define function ProcedureDate(p FHIR.Procedure):
  Coalesce(
    (p.performed as FHIR.dateTime).value,
    (p.performed as FHIR.Period)."end".value,
    (p.performed as FHIR.Period)."start".value
  )

// TODO: Can replace this with an overloaded function
// Returns a text representation of a date associated with a Procedure, preferring `effectiveDateTime`, then
// `.start`.
// @param s - a FHIR Procedure to get the text date from
// @returns {System.String} the text representation of a relevant date from the Procedure
define function ProcedureDateString(p FHIR.Procedure):
  Coalesce(
    DateTimeText(p.performed as FHIR.dateTime),
    DateTimeText((p.performed as FHIR.Period)."end"),
    DateTimeText((p.performed as FHIR.Period)."start")
  )

  /**
 * The oldest procedure.  For each Procedure, this algorithm will use the Coalesce function, which returns the
 * first non-null result from these fields: performedDateTime, performedPeriod.start, performedPeriod.end.
 * The found date will be used to compare Procedures and determine the oldest one.
 * @param ProcList - a list of Procedures
 * @returns {Procedure} the oldest Procedure from the list, or null if null was passed in
 */
define function OldestProcedure(ProcList List<Procedure>):
  First(ProcList P sort by Coalesce(
    (performed as FHIR.dateTime).value,
    (performed as FHIR.Period)."start".value,
    (performed as FHIR.Period)."end".value)
  )

/**
 * Date of the oldest procedure in a list.  For each Procedure, this algorithm will use the Coalesce function, which returns the
 * first non-null result from these fields: performedDateTime, performedPeriod.end, performedPeriod.start.
 * The found date will be used to compare Procedures and determine the oldest one. The date of the oldest Procedure
 * will be returned.
 * @param ProcList - a list of Procedures
 * @returns {System.String} the text representation of the Procedure's date
 */
define function DateOfFirstProcedure(ProcList List<Procedure>):
  ProcedureDate(
    OldestProcedure(
      ProcList
    )
  )
