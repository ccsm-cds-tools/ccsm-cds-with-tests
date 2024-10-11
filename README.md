# Cervical Cancer Screening and Management (CCSM) Clinical Decision Support (CDS) with Tests

This repository contains clinical decision support (CDS) which provides recommendations for cervical cancer screening and management (CCSM). The CCSM CDS is expressed in a computer-interpretable format using health information technology (IT) interoperability standards. When used with health IT systems that support the underlying interoperability standards, the CCSM CDS is capable of providing patient-specific recommendations for cervical cancer screening and management decisions. The burden of implementing the CCSM CDS on such health IT systems can be less than what would be needed to develop similar capabilities "from scratch." To verify the correctness of the CCSM CDS, a set of automated tests have been included which use synthetic patient data.

## Cautions and Limitations

This repository contains CDS definitions which are under *active development*. The CCSM CDS has not been tested in a clinical environment and should be considered a *work-in-progress*. Per the [Apache-2.0 License under which the CCSM CDS is released](#licenses), *no warranty is made* and *no liability is assumed*.

## CDS Overview

The CCSM CDS provides recommendations for cervical cancer screening and management based upon the following primary and secondary evidence bases.

### Primary Evidence-Based Guidelines

- [2018 U.S. Preventive Service Task Force Recommendation Statement: Screening for Cervical Cancer](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening)
- [2019 ASCCP Risk Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors](https://www.asccp.org/management-guidelines)
- [Risk Estimates Supporting the 2019 ASCCP Risk-Based Management Consensus Guidelines](https://www.asccp.org/management-guidelines)

### Additional Supporting Guidelines and Evidence

- [ASCCP Clinical Practice Statement: Evaluation of the cervix in patients with abnormal vaginal bleeding](https://www.asccp.org/Assets/9d92e617-858f-43f3-af62-44adf76cfc67/636220616039000000/vaginal-bleeding-statement-final-02-06-17-pdf)
- [Cervical Cancer Screening and Prevention Practice Bulletin No.168](https://pubmed.ncbi.nlm.nih.gov/27661651/)
- [Antenatal Exposure to DES: Lessons Learned...Future Concerns](https://pubmed.ncbi.nlm.nih.gov/17634156/)
- [Guidelines for Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with Human Immunodeficiency Virus (HIV)](https://www.cdc.gov/mmwr/preview/mmwrhtml/rr58e324a1.htm)
- [Guidelines for Screening of Immunosuppressed Women without HIV Infection](https://pubmed.ncbi.nlm.nih.gov/30907775/)

## Utlized Standards
Multiple health IT interoperability standards are used to define the CCSM CDS. These standards are used to define both the structure of the CCSM CDS as well as the logic needed to provide customized recommendations for each patient.

### Fast Healthcare Interoperability Resources (FHIR)
[Fast Healthcare Interoperability Resources (FHIR®)](http://hl7.org/fhir/) is an international IT standard for exchanging healthcare information electronically. FHIR provides general data structures or “[resources](https://www.hl7.org/fhir/resourcelist.html)” for representing a variety of clinical and healthcare-related data. Example resource types include [Condition](http://hl7.org/fhir/condition.html) and [Observation](http://hl7.org/fhir/observation.html), which can respectively be used to represent clinical diagnoses and laboratory test results. FHIR resources are, by design, [general in nature](https://www.hl7.org/fhir/extensibility.html) so that they can support the majority of real-world use cases. But FHIR also allows each resource to be customized for specific applications; [these customizations](https://www.hl7.org/fhir/profiling.html) can themselves be standardized through the use of FHIR extensions, profiles, and implementation guides.

This customizability and flexibility are some of the reasons why FHIR has been growing in popularity despite being a relatively new standard. The use of FHIR in the United States is expected to continue to grow because it is the basis for the application programming interface (API) required by the [21st Century Cures Act Interoperability Final Rule](https://www.healthit.gov/curesrule/). It is for these reasons, flexibility and eventual availability, that FHIR has been selected for use in the CCSM CDS definition.

Several FHIR resources are used to define the *structure* of the CCSM CDS:
- [PlanDefinition](https://www.hl7.org/fhir/plandefinition.html) - Used to define and describe groups of actions that occur under certain circumstances; these groups of actions represent the overall structure of the CCSM CDS. Each action may reference FHIR resources including other PlanDefinition resources.
- [ActivityDefinition](https://www.hl7.org/fhir/activitydefinition.html) - Used to define and describe a single activity, such as a request for a laboratory test or for a communication to be sent to a provider.
- [Questionnaire](https://www.hl7.org/fhir/questionnaire.html) - Used to define forms that can be presented to the CDS user to obtain additional information when necessary.
- [Library](https://www.hl7.org/fhir/library.html) - Used to package the CDS logic, which is referenced by the other FHIR resources and expressed using [CQL](#clinical-quality-language-cql).


#### Clinical Reasoning Module

The [Clinical Reasoning Module (CRM)](http://www.hl7.org/fhir/clinicalreasoning-module.html) is a subset of the base FHIR standard. The CRM provides the FHIR resources and operations needed for [representing and distributing clinical knowledge tools such as CDS](http://www.hl7.org/fhir/clinicalreasoning-cds-on-fhir.html). The structure of the CCSM CDS is based upon the guidance provided by the CRM for designing and building CDS.

#### FHIR Clinical Guidelines Implementation Guide

The [FHIR Clinical Guidelines implementation guide (IG)](http://hl7.org/fhir/uv/cpg/), also known as “Clinical Practice Guidelines (CPG) on FHIR,” provides an [approach and methodology](http://hl7.org/fhir/uv/cpg/documentation-approach-02-04-knowledge-representation.html) for representing the intent of clinical guidelines as computable CDS. The CCSM CDS was developed by following the best practices outline in the CPG on FHIR IG. These best practices include testing and verification of the CCSM CDS. In addition, several extensions and profiles defined in the CPG on FHIR IG have been used in the CCSM CDS representation.

### Clinical Quality Language (CQL)

The [Clinical Quality Language (CQL)](https://cql.hl7.org/01-introduction.html#background) is a domain-specific computer programming language focused on the expression of clinical quality concepts. It can be used to author CDS logic and is designed to interface with FHIR. That latter fact constitutes one of CQL’s advantages over other more general-purpose programming languages when it comes to authoring CDS logic. An additional advantage is that logical expressions written in CQL tend to read more like natural language than as a computer program, making CQL more accessible to audiences outside the realm of software development.n Computer code written in CQL is human readable but can be translated into a more structured format that is interpretable by computers. This computer-friendly format is called the Expression Logical Model (ELM) JavaScript Object Notation (JSON), and it is this format of the logic that is interpreted when the CDS logic is executed against patient data.

While FHIR allows the structure of the CCSM CDS to be described, it can only enumerate the set of all actions that could apply to a patient. The CQL standard allows the CDS logic to be expressed so that it can be determined which actions apply to a specific patient. The follow are example CCSM CDS capabilties which have been implemented using CQL:
- Query patient electronic health record (EHR) for pertinent medical history
- Aggregate and sort pertinent medical history for presentation to the clinician on a dashboard
- Apply inclusion and exclusion logic to determine what actions of the CDS should apply to a particular patient
- Generate recommendations for a particular patient when appropriate
- Identify errors and generate meaningful notifications to be communicated to the clinician

## Underlying Technologies

This section describes the underlying technologies used in this repository.

### Node.js JavaScript Runtime

[Node.js](https://nodejs.org/en/) is a back-end JavaScript runtime environment. Although the CCSM CDS itself does not directly require use of Node.js, this repository uses it to run a number of supporting JavaScript tools for verification and testing (see below).

### Python

The [2019 ASCCP Risk Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors](https://www.asccp.org/management-guidelines) leverages [risk estimates](https://cervixca.nlm.nih.gov/RiskTables/) provided by the National Cancer Institute. To make these risk estimates usable by the CCSM CDS logic, the risk tables must be converted into a CQL library. A [Python script](./risk-tables/generate-cql-risk-tables.py) has been provided for automating this converstion. It requires [Python 3.9](https://www.python.org/downloads/), [pandas](https://pandas.pydata.org/), and [openpyxl](https://openpyxl.readthedocs.io/en/stable/).

### SUSHI

All FHIR resources in this repository have been defined using [FHIR Shorthand (FSH)](http://hl7.org/fhir/uv/shorthand/). Using FSH simplifies the development and maintenance of the CCSM CDS FHIR resources while still maintaining the necessary fidelity. To convert the FSH definitions to full FHIR resources, a JavaScript tool called [SUSHI](https://github.com/FHIR/sushi) is used which requires the Node.js runtime. In addition to converting FSH definitions into FHIR, SUSHI also performs basic verification of resources to ensure they align with the FHIR specification.

### CQL Execution Engine

Once CDS logic written in CQL has been translated into the computer friendly ELM JSON format, software is needed to “execute” or “run” the logic in the context of a patient’s electronic health record. Executing CQL in this way is necessary in order to support verification and testing of the CCSM CDS. Multiple open-source CQL “execution engines” exist; the CCSM CDS has been tested using the [CQL Execution Framework Reference Implementation](https://github.com/cqframework/cql-execution), a software library written in the JavaScript programming language. Additional JavaScript libraries are used to [help interface with FHIR data](https://github.com/cqframework/cql-exec-fhir) and to [help handle clinical codes and value sets](https://github.com/cqframework/cql-exec-vsac).

### CQL Testing Framework

The [CQL Testing Framework](https://github.com/AHRQ-CDS/CQL-Testing-Framework) is a JavaScript software library that facilitates testing of logic written in CQL. While leveraging the CQL Execution Framework Reference Implementation, it provides a convenient short-hand notation for defining test cases. The CQL Testing Framework also automates the process of running the test cases, which greatly increases the efficiency of testing CDS. All tests included in this repository were developed through the use of the CQL Testing Framework.

## Usage

This section describes how this repository can be installed and used for testing and verification purposes.

### Installation

This repository must downloaded or cloned to a local file system. A recent version of the Node.js runtime should be [downloaded and installed](https://nodejs.org/en/download/). Installation of this repository is accomplished by typing `npm install` into a command prompt from within the same directory as this README file. This should download all necessary dependencies including SUSHI and the CQL Testing Framework.

If the risk tables need to be regenerated, then Python 3.9 should also be [downloaded and installed](https://www.python.org/downloads/).

### Generate FHIR Resources

The FSH definitions located in the `./fsh-tank/input` folder can be converted into full FHIR resources by typing `npm run sushi` into a command prompt from within the same directory as this README file. The resulting FHIR resources will be written to the `./fsh-tank/fsh-generated` folder.

### Convert Risk Tables to CQL

The [CQL library containing the risk estimates](./cql/AutogeneratedRiskTables.cql) can be regenerated by running `python3 risk-tables/generate-cql-risk-tables.py` into a command prompt from within the same directory as this README file.

### Translate CQL into ELM JSON

Before the CQL can be tested, it must first be converted to the computer-interpretable ELM JSON representation. This is only necessary if the CQL source is modified and can be accomplished using the [CQL-to-ELM Translator Reference Implementation](https://github.com/cqframework/clinical_quality_language/blob/master/Src/java/cql-to-elm/OVERVIEW.md). The CQL Testing Framework provides a [command for invoking the CQL-to-ELM Translator](https://github.com/AHRQ-CDS/CQL-Testing-Framework/blob/master/README.md#translating-cql-to-elm):

```
npx cql-to-elm cql
```

but note that this requires installing Java 11 SE Development Kit on your system. See [documentation](https://github.com/AHRQ-CDS/CQL-Testing-Framework/blob/master/README.md#translating-cql-to-elm) from the CQL Testing Framework for more information.

### Package ELM JSON into FHIR Library resources
In order to execute CDS logic, the FHIR Clinical Guidelines Implementation guide requires ELM JSON logic to be converted into base64 and embedded into a corresponding FHIR Library resource. `npm run packager` runs the script in `util/packager.js`, encoding ELM JSON files in `cql/` as base64 strings, and overwritting the content strings in the corresponding Library resources in `fsh-tank/`. The script also saves the unencoded ELM JSON off into .js files so it is easier for the dashboard to import them.

### Run CQL Tests

To run the 1000+ tests to verify functionality of the CCSM CDS, type `npm run test-cql` into a command prompt from within the same directory as this README file. Note that this will require a UMLS account and VSAC API key; please see the section below, [Setting Up VSAC](#setting-up-vsac), for further instructions. The results from running the tests against the current CQL definitions can be found in [test-results.txt](./test-results.txt).

### Setting Up VSAC

Retrieve your VSAC API key from [your UMLS profile](https://uts.nlm.nih.gov/uts/profile) if you already have an account.  If you do not have an account, you must [create one](https://uts.nlm.nih.gov/uts/signup-login) to gain access to an API key.

To use the VSAC API, you must set the `UMLS_API_KEY` environment variable on your system. Follow the instructions according to your operating system:

#### Windows

1. Open the Start Menu and search for "Environment Variables".
2. Click on "Edit the system environment variables".
3. In the System Properties window, click on "Environment Variables".
4. Under "User variables" or "System variables", click "New".
5. Enter `UMLS_API_KEY` as the name and your API key as the value.
6. Click "OK" to save.

#### macOS or Linux

1. Open a terminal.
2. Use a text editor to open your shell profile. For example, `nano ~/.bash_profile` or `nano ~/.zshrc`.
3. Add the line: `export UMLS_API_KEY=your_api_key`.
4. Save the file and exit the editor.
5. Run `source ~/.bash_profile` or `source ~/.zshrc` to apply the changes.

After setting the environment variable, you will be able to retrieve valuesets from VSAC.

## Feedback

Feedback on this draft work is welcomed and encouraged. Prospective users can either open an issue on GitHub or reach out to the maintainers directly.

## Licenses

(C) 2021 The MITRE Corporation. All Rights Reserved. Approved for Public Release: 21-1556. Distribution Unlimited.

Unless otherwise noted, the CCSM CDS is available under an [Apache 2.0 license](./LICENSE.txt). It was produced by the MITRE Corporation for the Division of Cancer Prevention and Control, Centers for Disease Control and Prevention in accordance with the Statement of Work, contract number 75FCMC18D0047, task order number 75D30120F09743.

The CCSM CDS reproduces in electronic form the [risk estimates](https://cervixca.nlm.nih.gov/RiskTables/) supporting the 2019 ASCCP Risk-Based Management Consensus Guidelines. These risk estimates were supported by the Intramural Research Program of the National Cancer Institute. The risk estimates are in the public domain in the United States of America and are made freely available elsewhere.

Any LOINC (http://loinc.org) content is copyright &copy; 1995+, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC<sup>&reg;</sup> is a registered United States trademark of Regenstrief Institute, Inc.

The CCSM CDS makes reference to several clinical terminology systems and value sets available through the [Unified Medical Language System (UMLS)](https://www.nlm.nih.gov/research/umls/index.html) and the [Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/), both operated by the United States National Library of Medicine. These resources require an account and license through [UMLS Terminology Services (UTS)](https://uts.nlm.nih.gov/uts/).