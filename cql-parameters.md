# CCSM CDS CQL Parameters
The Cervical Cancer Screening and Management (CCSM) Clinical Decision Support (CDS) code provides several configurable parameters to adjust the behavior of the CDS rules and logic. All parameter names are case sensitive, and have the default values shown below. 

## Parameter names and values
All parameter names are case sensitive, and have the default values shown below. Each parameter is one of four data types:
- Boolean: can be set to either `true` or `false`
- Time Quantity: A CQL time-valued [calendar duration quantity](https://cql.hl7.org/02-authorsguide.html#quantities)
- Date Value: A CQL [Date value](https://cql.hl7.org/02-authorsguide.html#date-datetime-and-time)
- URL: A valid absolute URL (including protocol, domain and path) 

Parameters are set at the time when the CDS is invoked, and are valid for the duration of the CDS execution.

## Table of Parameters

| Name | Type | Default Value |
|------|------|---------------|
|  AbnormalTestLookbackPeriod | Calendar Duration | `8 years` |
|  AllowGradeDExclusion | Boolean | `true` |
|  AllowGradeDRecommendation | Boolean | `true` |
|  Analytics | Boolean | `true` |
|  BiopsyLookbackPeriod | Calendar Duration | `25 years` | 
|  BiopsyReferralPeriod | Calendar Duration | `1 year` | 
|  BirthdayThreshold | Date | `@1980-01-01` |
|  CervicalCytologyLookbackDate | Date | `@1900-01-01` |
|  CervicalCytologyLookbackPeriod | Calendar Duration | `10 years` |
|  CervicalPrecancerTreatmentLookback | Calendar Duration | `7 years` |
|  CotestingCadence | Calendar Duration | `5 years` |
|  CytologyTestingCadence | Calendar Duration | `3 years` |
|  CytologyWindow | Calendar Duration | `18 months` |
|  ExcludeSymptomatic | Boolean | `true` |
|  GradeDAdequatePriorScreeningLookback | Calendar Duration | `10 years` |
|  HpvTestingGracePeriod | Calendar Duration | `6 months` |
|  HrHPVLookbackDate | Date |  `@1900-01-01` |
|  HrHPVLookbackPeriod | Calendar Duration | `10 years` |
|  ManageTreatmentWithoutPreviousBiopsy | Boolean | `true` |
|  MedicationLookbackPeriod | Calendar Duration | `6 months` |
|  MinimumScreeningAge | Calendar Duration | `21 years` |
|  PrimaryHpvTestingCadence | Calendar Duration | `5 years` |
|  QuestionnaireUrl | URL |  `'http://OUR-PLACEHOLDER-URL.com/Questionnaire/ProvideMoreInformation'` |
|  RarelyScreenedGracePeriod | Calendar Duration | `6 months` |
|  SymptomaticLookBack | Calendar Duration | `1 day` |

### AbnormalTestLookbackPeriod
Default: `8 years`
A CQL calendar duration that sets the interval which determines how far in the past the CDS will look when determining if an abnormal Diagnostic Report exists. This is used by the CDS to determine if a patient is eligible for Management recommendations (and ineligible for general Screening recommendations). This value is negative offset from the current date. 

### AllowGradeDExclusion
Default: `true`
Determines whether USPSTF Grade D recommendations for patients who have had a total hysterectomy are shown. The USPSTF recommendation against applying Grade D recommendations in which there is moderate or high certainty the service does not provide a net benefit, or the harms outweigh the benefits.  This applies if a patient has had a total hysterectomy without a history of high-grade precancer or cancer. If set to `true` the CDS will generate recommendations for these cases. For more detail, see the [USPSTF 2018 Recommendation for Cervical Cancer Screening](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening)

### AllowGradeDRecommendation
Default: `true`
Determines whether USPSTF Grade D recommendations for patients under age 21 or patients over age 65 are shown. The USPSTF recommendation against applying Grade D recommendations in which there is moderate or high certainty the service does not provide a net benefit, or the harms outweigh the benefits. This would affect recommendations for patients under age 21 and patients over age 65 who are inadequately screened. If set to `true` the CDS will generate recommendations for these cases. For more detail, see the [USPSTF 2018 Recommendation for Cervical Cancer Screening](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening)

### Analytics
Default: `true`
The CDS includes an Analytics Library which generates a selection of intermediate data elements that can be used for analytics purposes. The CervicalCancerAnalytics Plan Definition is applied when this value is set to `true`. Setting this value to `false` prevents analytics data elements from being produced, but does not affect the operation of the CervicalCancerScreeningAndManagementClinicalDecisionSupport Plan Definition or its output.

### BiopsyLookbackPeriod
Default: `25 years`
A CQL calendar duration that sets the interval which determines how far in the past biopsy (histology) reports will be considered. This is a negative offset from the current date. 

### BiopsyReferralPeriod
Default: `1 year`
Sets the interval which determines how far in the past HPV and Cytology reports are considered to be a referring result for a biopsy (histology). This is a negative offset from the date of the most recent biopsy. For example, if a patient's most recent biopsy report is May 1, 2024, and the BiopsyReferralPeriod is set to `1 year` then the CDS will look for the most recent HPV or Cytology report in the interval from May 1, 2023 (inclusive) to April 30, 2024 (inclusive). Abnormal HPV or Cytology results should usually be followed by a biopsy within a short period, but the default value was set to `1 year` to better match what has been observed with real-world patient histories. 

### BirthdayThreshold
Default: `@1980-01-01`
A CQL Date value representing the latest bithdate for a patient to be considered for inclusion in DES Exposure screening recommendations. Patients born **after** this date are _not_ considered eligible for DES Exposure screening recommendations. The Date value must be in [CQL Date format](https://cql.hl7.org/02-authorsguide.html#date-datetime-and-time).

### CervicalCytologyLookbackDate
Default: `@1900-01-01`
A CQL Date value which sets the earliest date for Cytology reports to be considered by the CDS. Cytology reports on or before this date are excluded from consideration, regardless of result. It may be necessary to set this parameter to a more recent date if older Cytology reports are sparse or results are not documented in a structured format (e.g. older results are only reported as a text narrative or only available in an attachment). The Date value must be in [CQL Date format](https://cql.hl7.org/02-authorsguide.html#date-datetime-and-time).

### CervicalCytologyLookbackPeriod
Default: `10 years`
A CQL calendar duration that sets the interval which determines how far in the past cytology reports will be considered. This is a negative offset from the current date. Cytology reports must be within this interval AND after the `CervicalCytologyLookbackDate` to be considered by the CDS. 

### CervicalPrecancerTreatmentLookback
Default: `7 years`
A CQL calendar duration that defines the lookback period _before_ an abnormal histology result until the current date to determine that no cervical precancer treatments (cervical excision/ablation procedures) have occurred within this interval. This is used when evaluating management for histologic HSIL, CIN2 and CIN3 results. 

### CotestingCadence
Default: `5 years`
A CQL calendar duration that defines the date of the next recommended cotest for average risk screening. It is a positive offset from the date of the most recent negative cotest. If the date occurs in the past, cotesting will be recommended for the current date (now). If the date occurs in the future, cotesting will be recommended on that date. 

### CytologyTestingCadence
Default: `3 years`
A CQL calendar duration that is used to define the date of the next recommended cytology test for average risk screening for patients age 21 through 29. It is a positive offset from the date of the most recent NILM cytology, negative cotest or negative HPV test. If the date occurs in the past, cytology will be recommended for the current date (now). If the date occurs in the future, cytology testing will be recommended on that date. 

### CytologyWindow
Default: `18 months`
A CQL calendar duration that is used to define the sequence of cytology testing expected after immunosuppression onset. The guideline recommendation is for annual cytology screening ([Moscicki, 2019](https://journals.lww.com/jlgtd/abstract/2019/04000/guidelines_for_cervical_cancer_screening_in.1.aspx)) but the default value used by the CDS is 18 months to allow for real-world variance in screening cadence.

### ExcludeSymptomatic
Default: `true`
Determines whether or not symptomatic patients are excluded from the management guidelines. A value of `true` means that symptomatic patients (with recent abnormal bleeding) will be given a recommendation for an immediate diagnostic pelvic exam. See [ASCCP Clinical Practice Statement, "Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding," Published: February 7, 2017](https://www.asccp.org/Assets/9d92e617-858f-43f3-af62-44adf76cfc67/636220616039000000/vaginal-bleeding-statement-final-02-06-17-pdf)
If this value is `false` then the CDS will generate recommendations as per management and screening guidelines. The definition of 'recent abnormal bleeding' is dependent on the parameter `SymptomaticLookback`.

### GradeDAdequatePriorScreeningLookback
Default: `10 years`
A CQL calendar duration that is used to set the lookback period for HPV and Cytology tests to be considered for Grade D recommendations for patients over age 65. It is a negative offset from the current date. This effectively sets the time window for tests to be considered as "adequate screening" used in Grade D recommendations individuals over age 65. The criteria for "adequate screening" is three negative cytology tests or two negative HPV tests within this lookback period.

### HpvTestingGracePeriod
Default: `6 months`
A CQL calendar duration that is added to the default 5 year interval for identifying sequential HPV testing reports. This effectively defines the maximum allowed time between HPV reports to be considered by the CDS. For example, a patient's most recent HPV report must be within `5 years + HpvTestingGracePeriod` from the current date to be considered by the CDS. The second most recent HPV report must be within `5 years + HpvTestingGracePeriod` of the most recent HPV report, and so on. This allows for flexibility in real-world patient histories that do not meet strict 5-year intervals as described in the guidelines. 

### HrHPVLookbackDate
Default: `@1900-01-01`
A CQL Date value which sets the earliest date for HPV reports to be considered by the CDS. HPV reports on or before this date are excluded from consideration, regardless of result. It may be necessary to set this parameter to a more recent date if older HPV reports are sparse or results are not documented in a structured format (e.g. older results are only reported as a text narrative or only available in an attachment). The Date value must be in [CQL Date format](https://cql.hl7.org/02-authorsguide.html#date-datetime-and-time).

### HrHPVLookbackPeriod
Default: `10 years`
A CQL calendar duration that sets the interval which determines how far in the past HPV reports will be considered. This is a negative offset from the current date. HPV reports must be within this interval AND after the `HrHPVLookbackDate` to be considered by the CDS. 

### ManageTreatmentWithoutPreviousBiopsy
Default: `true`
A value of `true` will remove the requirement for a histologic HSIL biopsy or high grade result to be present before treatment in order to manage using Rare Abnormality section J or Risk Table 5. This is to account for real-world patient histories that may have precancer treatments yet are missing prior diagnostic results. The expectation is that those patients would have received precancer treatments for such a result, and therefore the absence of prior diagnostic results being documented in the history should not prevent the CDS from producing a valid recommendation. A value of `false` would force the CDS to consider precancer treatments ONLY if they are after CIN2 or CIN3 histology results documented within the `BiopsyLookbackPeriod`. 

### MedicationLookbackPeriod
Default: `6 months`
A CQL calendar duration that sets the lookback period for immunosuppressant medications. This must be one of: 

- Medication Request (completed) < 6 months ago
- Medication Dispense (completed) < 6 months ago
- Medication Administration (completed) < 6 months ago
- Medication Statement (active) < 6 months ago

Immunosuppressant medications found within this lookback period will be considered as evidence a patient is currently considered 'immunosuppressed' for purposes of guideline recommendations. 

### MinimumScreeningAge
Default: `21 years`
A CQL calendar duration that defines the minimum screening age. Individuals under this age are considered ineligible for CDS screening recommendations.

### PrimaryHpvTestingCadence
Default: `5 years`
A CQL calendar duration that defines the date of the next recommended HPV test for average risk screening for patients age 21 through 29. It is a positive offset from the date of the most recent negative HPV test. If the date occurs in the past, HPV testing will be recommended for the current date (now). If the date occurs in the future, HPV testing will be recommended on that date. 

### QuestionnaireUrl
Default: `'http://OUR-PLACEHOLDER-URL.com/Questionnaire/ProvideMoreInformation'`
Not currently used. 

### RarelyScreenedGracePeriod
Default: `6 months`
A CQL calendar duration that is added to the default 5 year interval for identifying whether a patient is considered as a 'rarely screened individual'. This allows for flexibility in real-world patient histories that do not meet strict 5-year intervals as described in the guidelines. This interval (`5-years + RarelyScreenedGracePeriod`) is a negative offset from the date of the most recent Cytology cotest. 

### SymptomaticLookBack
Default: `1 day`
A CQL calendar duration that defines the lookback interval for recent abnormal bleeding conditions, encounters or observations. If a patient has abnormal bleeding within this lookback interval, they are considered 'symptomatic' and will will be given a recommendation for an immediate diagnostic pelvic exam. 


(C) 2025 The MITRE Corporation. All Rights Reserved. Approved for Public Release: 21-1556. Distribution Unlimited.
