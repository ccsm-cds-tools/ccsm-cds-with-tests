# Author: CMS Alliance to Modernize Healthcare, operated by THE MITRE Corporation.
# (C) 2021 The MITRE Corporation. All Rights Reserved. 
# Approved for Public Release: 21-1556. Distribution Unlimited.
#
# Unless otherwise noted, this work is available under an Apache 2.0 license. 
# It was produced by the MITRE Corporation for the Division of Cancer Prevention 
# and Control, Centers for Disease Control and Prevention in accordance with the 
# Statement of Work, contract number 75FCMC18D0047, task order number 75D30120F09743.

import pandas as pd
import os
from datetime import datetime, time
import os.path, time

# This file converts the cervical cancer risk tables from Excel format into one CQL file:
# 1) Read in the five NCI risk spreadsheets
# 2) Use pandas to concatenate the resulting dataframes and strip out the columns which are not of interest (parameterize the names of the columns that ARE of interest)
# 3) Write the resulting dataframe to a CQL file:
# 4) Open a new blank file and write in the necessary header boilerplate
# 5) Write the concatenated dataframe as a list of tuples
# 6) Close the file

## CONFIG ----------------------------------------------------------------------------
# Output Excel file with individual sheets that contain each of the tables' relevant data columns
MASTERTABLE = False
# Generate CQL version of the relevant columns in each risk table
GENERATECQLFILE = True
# Output CQL file contents to the console for debugging
DEBUG = False

INPUT_DIRECTORY = '/risk-tables/risk-tables-excel-new/'
OUTPUT_DIRECTORY_CQL_TABLES = '/cql/'
OUTPUT_DIRECTORY_MASTER_TABLES = '/risk-tables/output/'

# READ INPUT FILES ----------------------------------------------------------------------------
# Define paths for reading and writing
cwd = os.path.abspath(os.getcwd())
input_path = cwd + INPUT_DIRECTORY
output_path_master_tables = cwd + OUTPUT_DIRECTORY_MASTER_TABLES
output_path_cql_tables = cwd + OUTPUT_DIRECTORY_CQL_TABLES

# Import raw risk table files
risk_spreadsheet1 = pd.ExcelFile(input_path + '1-General Table for Screening_locked.xlsx', engine='openpyxl')
risk_spreadsheet2 = pd.ExcelFile(input_path + '2-General Table for Surveillance_locked.xlsx', engine='openpyxl')
risk_spreadsheet3 = pd.ExcelFile(input_path + '3-General Table for Risk Following Colposcpy_locked.xlsx', engine='openpyxl')
risk_spreadsheet4 = pd.ExcelFile(input_path + '4-General Table for Post-Colpo.xlsx', engine='openpyxl')
risk_spreadsheet5 = pd.ExcelFile(input_path + '5-General Table for Post-Treatment_locked.xlsx', engine='openpyxl')

# Helper function to get the "Created" date of a file
def getDateCreated(filePath):
  return time.ctime(os.path.getctime(filePath))

# Get last downloaded dates for risk table
def getLastDownloadedDates():
  download_date1 = getDateCreated((input_path + '1-General Table for Screening_locked.xlsx'))
  download_date2 = getDateCreated((input_path + '2-General Table for Surveillance_locked.xlsx'))
  download_date3 = getDateCreated((input_path + '3-General Table for Risk Following Colposcpy_locked.xlsx'))
  download_date4 = getDateCreated((input_path + '4-General Table for Post-Colpo.xlsx'))
  download_date5 = getDateCreated((input_path + '5-General Table for Post-Treatment_locked.xlsx'))
  return {
          '1 - Screening': download_date1,
          '2 - Surveillance': download_date2,
          '3 - Colposcopy Results': download_date3,
          '4 - Post Colpo Surveillance': download_date4,
          '5 - Post Treatment Surveillance': download_date5
        }

# Read Excel files
risk_table1 = pd.read_excel(risk_spreadsheet1)
risk_table2 = pd.read_excel(risk_spreadsheet2)
risk_table3 = pd.read_excel(risk_spreadsheet3)
risk_table4 = pd.read_excel(risk_spreadsheet4)
risk_table5 = pd.read_excel(risk_spreadsheet5)

# Extract relevant columns from risk tables
def stripRiskTables():
  ROUND_VALUE = 2
  risk_table1_stripped = risk_table1[['PAST HISTORY (most recent)','Current HPV Result', 'Current PAP Result' , 'CIN3+ Immediate risk (%)', 'CIN3+ 5 year risk  (%)', 'Management']].round(ROUND_VALUE)
  risk_table2_stripped = risk_table2[['PAST HISTORY (previous 2)', 'PAST HISTORY (most recent)', 'Current HPV Result', 'Current PAP Result', 'CIN3+ Immediate risk (%)', 'CIN3+ 5 year risk  (%)', 'Management']].round(ROUND_VALUE)
  risk_table3_stripped = risk_table3[['Referral Screen Result', 'Biopsy Result', 'CIN3+ 1 year risk  (%)', 'CIN3+ 5 year risk  (%)', 'Management']].round(ROUND_VALUE)
  risk_table4_stripped = risk_table4[['Pre-Colpo Test Result', 'Post-Colpo Test Result - PAST HISTORY', 'Current HPV Result', 'Current PAP Result', 'CIN3+ Immediate risk (%)', 'CIN3+ 5 year risk  (%)', 'Management']].round(ROUND_VALUE)
  risk_table5_stripped = risk_table5[['Biopsy Result Before Treatment', 'Current HPV Result', 'Current PAP Result', 'CIN3+ Immediate risk (%)', 'CIN3+ 5 year risk  (%)', 'Management']].round(ROUND_VALUE)
  return {
          '1 - Screening': risk_table1_stripped,
          '2 - Surveillance': risk_table2_stripped,
          '3 - Colposcopy Results': risk_table3_stripped,
          '4 - Post Colpo Surveillance': risk_table4_stripped,
          '5 - Post Treatment Surveillance': risk_table5_stripped
         }

# GENERATE MASTER TABLE ----------------------------------------------------------------------------
def createMasterTable(tableDictionary):
  writer = pd.ExcelWriter(output_path_master_tables + 'Master_NCI_Risk_Table.xlsx', engine='xlsxwriter')
  for sheetname, df in tableDictionary.items():  # loop through `dict` of dataframes
    df.to_excel(writer, sheet_name=sheetname, index=False)  # send df to writer
    worksheet = writer.sheets[sheetname]  # pull worksheet object
    for idx, col in enumerate(df.columns):  # loop through all columns
      series = df[col]
      max_len = max((
          series.astype(str).map(len).max(),  # len of largest item
          len(str(series.name))  # len of column name/header
          )) + 1  # adding a little extra space
      worksheet.set_column(idx, idx, max_len)  # set column width

  writer.save()
  print('Master Table written to: ' + output_path_master_tables)


# GENRATE CQL LIBRARY ----------------------------------------------------------------------------
def createCQLFile(tables, name = 'AutogeneratedRiskTables', version = '1.0.0', fhirVersion = '4.0.1'):
  # CQL boilerplate r
  header = '/*****************************************************' + \
           '\n * This file is generated from code - DO NOT EDIT!!! *' + \
           '\n *****************************************************/' + \
           '\nlibrary ' + name + ' version \'' + version + '\'' + \
           '\nusing FHIR version \'' + fhirVersion + '\'' + \
           '\ninclude "FHIRHelpers" version \'4.0.1\' called FHIRHelpers' + \
           '\n'

  # Metadata
  meta = '// Risk Estimates Supporting the 2019 ASCCP Risk-Based Management Consensus Guidelines' + \
         '\n// Generation of these risk estimates was supported by the Intramural Research Program of the National Cancer Institute.' + \
         '\n// The risk estimates are in the public domain in the United States of America and are made freely available elsewhere.' + \
         '\n' + \
         '\n// METADATA' + \
         '\n\t// Downloaded from: https://cervixca.nlm.nih.gov/RiskTables/' + \
         '\n\t// Date Generated: ' + datetime.now().strftime("%d/%m/%Y %H:%M:%S") + \
         '\n\t// Number of Risk Tables: ' + str(len(tables)) + \
         '\n\t// Risk Tables:'
  downloadDates = getLastDownloadedDates()
  for key in tables:
    if downloadDates[key]:
      meta += '\n\t\t// ' + key + \
              '\n\t\t\t\t// (last downloaded: ' + downloadDates[key] + ')'
    else:
      meta += '\n\t\t// ' + key + \
      '\n\t\t\t\t// (Unable to find file downloaded date)'
  meta += '\n'

  # API to allow other CQL libraries to read from risk tables
  api = '// Export Risk Tables' + \
        '\ndefine ClinicalSituations:' + \
        '\n{'

  # TABLE 1: GeneralScreening
  table1_data = tables['1 - Screening']
  api += '\n\tGeneralScreening: GeneralScreening,'
  screening = '// Table 1: Screening' + \
              '\ndefine GeneralScreening:' + \
              '\n{'

  for i in table1_data.index:
    history = table1_data['PAST HISTORY (most recent)'][i]
    hpv = table1_data['Current HPV Result'][i]
    pap = table1_data['Current PAP Result'][i]
    if (str(table1_data['CIN3+ Immediate risk (%)'][i])!= 'nan') and (str(table1_data['CIN3+ Immediate risk (%)'][i]) != 'NA'):
      immediate = table1_data['CIN3+ Immediate risk (%)'][i]
    else:
      immediate = -1
    if (str(table1_data['CIN3+ 5 year risk  (%)'][i]) != 'nan') and (str(table1_data['CIN3+ 5 year risk  (%)'][i]) != 'NA'):
      five_year = table1_data['CIN3+ 5 year risk  (%)'][i]
    else:
      five_year = -1
    if (str(table1_data['Management'][i])!= 'nan') and (str(table1_data['Management'][i]) != 'NA'):
      management = table1_data['Management'][i]
    else:
      management = ''

    screening += '\n\t{' + \
                 '\n\t\thistory: \'' + history + '\',' + \
                 '\n\t\thpv: \'' + hpv + '\',' + \
                 '\n\t\tpap: \'' + pap + '\',' + \
                 '\n\t\tvalue: { immediate: ' + str(immediate) + ', five_year: ' + str(five_year) + ' },' + \
                 '\n\t\tmanagement: \'' + management + '\'' + \
                 '\n\t},'

  screening = screening[:-1]
  screening += '\n}' + \
               '\n'

  # TABLE 2: Surveillance
  table2_data = tables['2 - Surveillance']
  api += '\n\tSurveillance: Surveillance,'
  surveillance = '// Table 2: Surveillance' + \
              '\ndefine Surveillance:' + \
              '\n{'

  for i in table2_data.index:
    if str(table2_data['PAST HISTORY (previous 2)'][i]) != 'nan':
      history_prev_2 = table2_data['PAST HISTORY (previous 2)'][i]
    else:
      history_prev_2 = 'none'
    history = table2_data['PAST HISTORY (most recent)'][i]
    hpv = table2_data['Current HPV Result'][i]
    pap = table2_data['Current PAP Result'][i]
    if (str(table2_data['CIN3+ Immediate risk (%)'][i])!= 'nan') and (str(table2_data['CIN3+ Immediate risk (%)'][i]) != 'NA'):
      immediate = table2_data['CIN3+ Immediate risk (%)'][i]
    else:
      immediate = -1
    if (str(table2_data['CIN3+ 5 year risk  (%)'][i]) != 'nan') and (str(table2_data['CIN3+ 5 year risk  (%)'][i]) != 'NA'):
      five_year = table2_data['CIN3+ 5 year risk  (%)'][i]
    else:
      five_year = -1
    if (str(table2_data['Management'][i])!= 'nan') and (str(table2_data['Management'][i]) != 'NA'):
      management = table2_data['Management'][i]
    else:
      management = ''

    surveillance += '\n\t{' + \
                 '\n\t\thistory_prev_2: \'' + str(history_prev_2) + '\',' + \
                 '\n\t\thistory: \'' + history + '\',' + \
                 '\n\t\thpv: \'' + hpv + '\',' + \
                 '\n\t\tpap: \'' + pap + '\',' + \
                 '\n\t\tvalue: { immediate: ' + str(immediate) + ', five_year: ' + str(five_year) + ' },' + \
                 '\n\t\tmanagement: \'' + management + '\'' + \
                 '\n\t},'

  surveillance = surveillance[:-1]
  surveillance += '\n}' + \
               '\n'

  # TABLE 3: Colposcopy Results
  table3_data = tables['3 - Colposcopy Results']
  api += '\n\tColposcopyResults: ColposcopyResults,'
  colposcopy_results = '// Table 3: Colposcopy Results' + \
              '\ndefine ColposcopyResults:' + \
              '\n{'

  for i in table3_data.index:
    if str(table3_data['Referral Screen Result'][i]) != '-':
      referral_screen_result = table3_data['Referral Screen Result'][i]
    else:
      referral_screen_result = 'none'
    biopsy = table3_data['Biopsy Result'][i]
    if str(table3_data['CIN3+ 1 year risk  (%)'][i]) != 'NA' and str(table3_data['CIN3+ 1 year risk  (%)'][i]) != 'nan':
      one_year = table3_data['CIN3+ 1 year risk  (%)'][i]
    else:
      one_year = -1
    if str(table3_data['CIN3+ 5 year risk  (%)'][i]) != 'NA' and str(table3_data['CIN3+ 5 year risk  (%)'][i]) != 'nan':
      five_year = table3_data['CIN3+ 5 year risk  (%)'][i]
    else:
      five_year = -1
    management = table3_data['Management'][i]

    colposcopy_results += '\n\t{' + \
                 '\n\t\treferral_screen_result: \'' + str(referral_screen_result) + '\',' + \
                 '\n\t\tbiopsy: \'' + biopsy + '\',' + \
                 '\n\t\tvalue: { immediate: ' + str(one_year) + ', five_year: ' + str(five_year) + ' },' + \
                 '\n\t\tmanagement: \'' + management + '\'' + \
                 '\n\t},'

  colposcopy_results = colposcopy_results[:-1]
  colposcopy_results += '\n}' + \
               '\n'

  # Table 4: Post Colposcopy
  table4_data = tables['4 - Post Colpo Surveillance']
  api += '\n\tPostColposcopy: PostColposcopy,'
  post_colposcopy = '// Table 4: Post Colposcopy Surveillance' + \
              '\ndefine PostColposcopy:' + \
              '\n{'

  for i in table4_data.index:

    pre_colposcopy_result = table4_data['Pre-Colpo Test Result'][i]

    if (str(table4_data['Post-Colpo Test Result - PAST HISTORY'][i]) != 'nan'):
      history = table4_data['Post-Colpo Test Result - PAST HISTORY'][i]
    else:
      history = 'none'
    hpv = table4_data['Current HPV Result'][i]
    pap = table4_data['Current PAP Result'][i]
    immediate = table4_data['CIN3+ Immediate risk (%)'][i]
    five_year = table4_data['CIN3+ 5 year risk  (%)'][i]
    management = table4_data['Management'][i]

    post_colposcopy += '\n\t{' + \
                 '\n\t\tpreColposcopyResult: \'' + pre_colposcopy_result + '\',' + \
                 '\n\t\tpostColposcopyPastHistory: \'' + history + '\',' + \
                 '\n\t\thpv: \'' + hpv + '\',' + \
                 '\n\t\tpap: \'' + pap + '\',' + \
                 '\n\t\tvalue: { immediate: ' + str(immediate) + ', five_year: ' + str(five_year) + ' },' + \
                 '\n\t\tmanagement: \'' + management + '\'' + \
                 '\n\t},'

  post_colposcopy = post_colposcopy[:-1]
  post_colposcopy += '\n}' + \
               '\n'

    # Table 5: Post Treatment
  table5_data = tables['5 - Post Treatment Surveillance']
  api += '\n\tPostTreatment: PostTreatment'
  post_treatment = '// Table 5: Post Treatment Surveillance' + \
              '\ndefine PostTreatment:' + \
              '\n{'

  for i in table5_data.index:
    biopsy = table5_data['Biopsy Result Before Treatment'][i]
    hpv = table5_data['Current HPV Result'][i]
    if (str(table5_data['Current PAP Result'][i]) != 'nan'):
      pap = table5_data['Current PAP Result'][i]
    else:
      pap = 'none'
    immediate = table5_data['CIN3+ Immediate risk (%)'][i]
    five_year = table5_data['CIN3+ 5 year risk  (%)'][i]
    management = table5_data['Management'][i]

    post_treatment += '\n\t{' + \
                 '\n\t\tbiopsy: \'' + biopsy + '\',' + \
                 '\n\t\thpv: \'' + hpv + '\',' + \
                 '\n\t\tpap: \'' + pap + '\',' + \
                 '\n\t\tvalue: { immediate: ' + str(immediate) + ', five_year: ' + str(five_year) + ' },' + \
                 '\n\t\tmanagement: \'' + management + '\'' + \
                 '\n\t},'

  post_treatment = post_treatment[:-1]
  post_treatment += '\n}' + \
               '\n'

  api += '\n}' + \
         '\n'

  # Append parts of CQL Library
  cql = '\n'.join([header, meta, api, screening, surveillance, colposcopy_results, post_colposcopy, post_treatment])
  # Return CQL as a string
  return cql

def writeCqlFile(cqlString):
  file = open(output_path_cql_tables + "AutogeneratedRiskTables.cql", "w")
  file.write(cqlString)
  file.close
  print('CQL Risk Tables written to: ' + output_path_cql_tables)

## MAIN ----------------------------------------------------------------------------
def main():
  tables = stripRiskTables()
  if (MASTERTABLE == True):
    createMasterTable(tables)
  if (GENERATECQLFILE == True):
    cql_output = createCQLFile(tables)
    writeCqlFile(cql_output)

main()
