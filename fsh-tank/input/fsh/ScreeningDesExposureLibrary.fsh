Instance: ScreeningDesExposureLibrary
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computablelibrary
Title: "DES Exposure Screening Library"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computablelibrary"
* url = "http://OUR-PLACEHOLDER-URL.com/Library/ScreeningDesExposureLibrary"
* name = "ScreeningDesExposureLibrary"
* title = "DES Exposure Screening Library"
* type = $LTYPE#logic-library "Logic Library"
* description = "DES Exposure Screening Library"
* content[+].contentType = urn:ietf:bcp:13#text/cql "text/cql"
* content[=].data = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlNjcmVlbmluZ0Rlc0V4cG9zdXJlTGlicmFyeSIsCiAgICAgICAgICJ2ZXJzaW9uIiA6ICIxLjAuMCIKICAgICAgfSwKICAgICAgInNjaGVtYUlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogInVybjpobDctb3JnOmVsbSIsCiAgICAgICAgICJ2ZXJzaW9uIiA6ICJyMSIKICAgICAgfSwKICAgICAgInVzaW5ncyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIlN5c3RlbSIsCiAgICAgICAgICAgICJ1cmkiIDogInVybjpobDctb3JnOmVsbS10eXBlczpyMSIKICAgICAgICAgfSwgewogICAgICAgICAgICAibG9jYWxJZGVudGlmaWVyIiA6ICJGSElSIiwKICAgICAgICAgICAgInVyaSIgOiAiaHR0cDovL2hsNy5vcmcvZmhpciIsCiAgICAgICAgICAgICJ2ZXJzaW9uIiA6ICI0LjAuMSIKICAgICAgICAgfSBdCiAgICAgIH0sCiAgICAgICJpbmNsdWRlcyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkMzRiIsCiAgICAgICAgICAgICJwYXRoIiA6ICJDRFNDb25uZWN0Q29tbW9uc2ZvckZISVJ2NDAxIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVJIZWxwZXJzIiwKICAgICAgICAgICAgInBhdGgiIDogIkZISVJIZWxwZXJzIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMS4wMDAiCiAgICAgICAgIH0sIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRGFzaCIsCiAgICAgICAgICAgICJwYXRoIiA6ICJEYXNoYm9hcmRMaWJyYXJ5IiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkNvbW1vbiIsCiAgICAgICAgICAgICJwYXRoIiA6ICJDQ1NNQ29tbW9uRnVuY3Rpb25zIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgInBhcmFtZXRlcnMiIDogewogICAgICAgICAiZGVmIiA6IFsgewogICAgICAgICAgICAibmFtZSIgOiAiQmlydGhkYXlUaHJlc2hvbGQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJkZWZhdWx0IiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkRhdGUiLAogICAgICAgICAgICAgICAieWVhciIgOiB7CiAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9SW50ZWdlciIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiMTk4MCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAibW9udGgiIDogewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUludGVnZXIiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjEiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgImRheSIgOiB7CiAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9SW50ZWdlciIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiMSIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0sCiAgICAgICJjb2RlU3lzdGVtcyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJTTk9NRUQtQ1QiLAogICAgICAgICAgICAiaWQiIDogImh0dHA6Ly9zbm9tZWQuaW5mby9zY3QiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIKICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTE9JTkMiLAogICAgICAgICAgICAiaWQiIDogImh0dHA6Ly9sb2luYy5vcmciLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIKICAgICAgICAgfSBdCiAgICAgIH0sCiAgICAgICJjb250ZXh0cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJQYXRpZW50IgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgInN0YXRlbWVudHMiIDogewogICAgICAgICAiZGVmIiA6IFsgewogICAgICAgICAgICAibmFtZSIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiU2luZ2xldG9uRnJvbSIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgImRhdGFUeXBlIiA6ICJ7aHR0cDovL2hsNy5vcmcvZmhpcn1QYXRpZW50IiwKICAgICAgICAgICAgICAgICAgInRlbXBsYXRlSWQiIDogImh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9QYXRpZW50IiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlJldHJpZXZlIgogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiQm9ybk9uT3JCZWZvcmVCaXJ0aGRheVRocmVzaG9sZCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJTYW1lT3JCZWZvcmUiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIlRvRGF0ZSIsCiAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRnVuY3Rpb25SZWYiLAogICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogImJpcnRoRGF0ZSIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIsCiAgICAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJCaXJ0aGRheVRocmVzaG9sZCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQYXJhbWV0ZXJSZWYiCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkhhc0Rlc0V4cG9zdXJlRGlhZ25vc2VzIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkV4aXN0cyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkRlc0V4cG9zdXJlRGlhZ25vc2VzIiwKICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJEYXNoIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJIYXNEZXNFeHBvc3VyZU9ic2VydmF0aW9ucyIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeGlzdHMiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJEZXNFeHBvc3VyZU9ic2VydmF0aW9ucyIsCiAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRGFzaCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmVjZW50bHlSZXNwb25kZWRZZXNUb0Rlc0V4cG9zdXJlUXVlc3Rpb24iLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhpc3RzIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUXVlcnkiLAogICAgICAgICAgICAgICAgICAic291cmNlIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAiYWxpYXMiIDogIlIiLAogICAgICAgICAgICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJSZXNwb25zZXNUb0Rlc0V4cG9zdXJlUXVlc3Rpb24iLAogICAgICAgICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkRhc2giLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9IF0sCiAgICAgICAgICAgICAgICAgICJyZWxhdGlvbnNoaXAiIDogWyBdLAogICAgICAgICAgICAgICAgICAid2hlcmUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXF1aXZhbGVudCIsCiAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVG9Db25jZXB0IiwKICAgICAgICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJGSElSSGVscGVycyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJGdW5jdGlvblJlZiIsCiAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAgICAiYXNUeXBlIiA6ICJ7aHR0cDovL2hsNy5vcmcvZmhpcn1Db2RlYWJsZUNvbmNlcHQiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiQXMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJ2YWx1ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJzY29wZSIgOiAiUiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVG9Db25jZXB0IiwKICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiWWVzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJEYXNoIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkNvZGVSZWYiCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIldhc0V4cG9zZWRUb0Rlc0luVXRlcm8iLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiT3IiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk9yIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJIYXNEZXNFeHBvc3VyZURpYWdub3NlcyIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJIYXNEZXNFeHBvc3VyZU9ic2VydmF0aW9ucyIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiUmVjZW50bHlSZXNwb25kZWRZZXNUb0Rlc0V4cG9zdXJlUXVlc3Rpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiSXNJbmNsdWRlZCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJBbmQiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiRmVtYWxlb3JUcmFuc2dlbmRlck1hbGUiLAogICAgICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkRhc2giLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiQm9ybk9uT3JCZWZvcmVCaXJ0aGRheVRocmVzaG9sZCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiV2FzRXhwb3NlZFRvRGVzSW5VdGVybyIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJIYXNIaWdoR3JhZGVQcmVDYW5jZXJDZXJ2aWNhbExlc2lvbiIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeGlzdHMiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJDZXJ2aWNhbFByZWNhbmNlckRpc29yZGVycyIsCiAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRGFzaCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiSGFzQ2VydmljYWxDYW5jZXJEaWFnbm9zZXMiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhpc3RzIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiQ2VydmljYWxDYW5jZXJEaWFnbm9zZXMiLAogICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkRhc2giLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkhhc1JlY2VudEFibm9ybWFsU2NyZWVuaW5nIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgIm5hbWUiIDogIkhhc1JlY2VudEFibm9ybWFsU2NyZWVuaW5nIiwKICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJEYXNoIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiSGFzUmVjZW50QWJub3JtYWxIaXN0b2xvZ3kiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiSGFzUmVjZW50QWJub3JtYWxIaXN0b2xvZ3kiLAogICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkRhc2giLAogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJFeGNsdWRlZCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJPciIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiT3IiLAogICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk9yIiwKICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJPciIsCiAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiSGFzSGlnaEdyYWRlUHJlQ2FuY2VyQ2VydmljYWxMZXNpb24iLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiSGFzQ2VydmljYWxDYW5jZXJEaWFnbm9zZXMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4aXN0cyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkhpZ2hHcmFkZU9yQ2FuY2VySGlzdG9sb2d5UmVzdWx0cyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRGFzaCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJIYXNSZWNlbnRBYm5vcm1hbFNjcmVlbmluZyIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiSGFzUmVjZW50QWJub3JtYWxIaXN0b2xvZ3kiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiSXNJbmNsdWRlZEFuZE5vdEV4Y2x1ZGVkIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiSXNJbmNsdWRlZCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOb3QiLAogICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJFeGNsdWRlZCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJlY29tbWVuZGF0aW9uVGV4dCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJJZiIsCiAgICAgICAgICAgICAgICJjb25kaXRpb24iIDogewogICAgICAgICAgICAgICAgICAiYXNUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiQXMiLAogICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJJc0luY2x1ZGVkQW5kTm90RXhjbHVkZWQiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAidGhlbiIgOiB7CiAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJDb25zaWRlciBpbmRpdmlkdWFsaXplZCBjYXJlIGZvciB0aGlzIHBhdGllbnQgZHVlIHRvIGEgZ2FwIGluIGV2aWRlbmNlLWJhc2VkIGNhcmUgcmVjb21tZW5kYXRpb25zIGZvciBpbmRpdmlkdWFscyB3aXRoIERFUyBleHBvc3VyZSBpbiB1dGVyby4gUHJldmlvdXMgZ3VpZGVsaW5lcyAoaS5lLiwgXCJBbnRlbmF0YWwgRXhwb3N1cmUgdG8gREVTOiBMZXNzb25zIExlYXJuZWQuLi5GdXR1cmUgQ29uY2VybnNcIiBDTUUgUmV2aWV3IEFydGljbGUgYW5kIHRoZSBBQ09HIFByYWN0aWNlIEJ1bGxldGluICMxNjggXCJDZXJ2aWNhbCBDYW5jZXIgU2NyZWVuaW5nIGFuZCBQcmV2ZW50aW9uXCIpIHJlY29tbWVuZGVkIGFubnVhbCBjZXJ2aWNhbCBjeXRvbG9neSBzY3JlZW5pbmcgZm9yIGluZGl2aWR1YWxzIHdpdGggREVTIGV4cG9zdXJlIGluIHV0ZXJvLCB3aXRoIHRpc3N1ZSBzYW1wbGluZyB0aGF0IGluY2x1ZGVzIGNvbGxlY3Rpb24gb2YgZW5kb2NlcnZpY2FsIGFuZCBlY3RvY2VydmljYWwgY2VsbHMsIGFzIHdlbGwgYXMgY2VsbHMgZnJvbSB2YWdpbmFsIGZvcm5pY2VzLiIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAiZWxzZSIgOiB7CiAgICAgICAgICAgICAgICAgICJhc1R5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkFzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTnVsbCIKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiQ2l0YXRpb24iLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiSWYiLAogICAgICAgICAgICAgICAiY29uZGl0aW9uIiA6IHsKICAgICAgICAgICAgICAgICAgImFzVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkFzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTm90IiwKICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiSXNOdWxsIiwKICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiUmVjb21tZW5kYXRpb25UZXh0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICJ0aGVuIiA6IHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIkFudGVuYXRhbCBFeHBvc3VyZSB0byBERVM6IExlc3NvbnMgTGVhcm5lZC4uLkZ1dHVyZSBDb25jZXJucyIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAiZWxzZSIgOiB7CiAgICAgICAgICAgICAgICAgICJhc1R5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkFzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTnVsbCIKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiQWN0aW9uU2hvcnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiU2VlIERldGFpbHMiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJJZiIsCiAgICAgICAgICAgICAgICJjb25kaXRpb24iIDogewogICAgICAgICAgICAgICAgICAiYXNUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiQXMiLAogICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJJc0luY2x1ZGVkQW5kTm90RXhjbHVkZWQiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAidGhlbiIgOiB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJUdXBsZSIsCiAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAic2hvcnQiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiQWN0aW9uU2hvcnQiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJkYXRlIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlRvZGF5IgogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRldGFpbHMiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiUmVjb21tZW5kYXRpb25UZXh0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImdyb3VwIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIlNjcmVlbmluZzogREVTIEV4cG9zdXJlIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICJlbHNlIiA6IHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkFzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTnVsbCIKICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgImFzVHlwZVNwZWNpZmllciIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJUdXBsZVR5cGVTcGVjaWZpZXIiLAogICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInNob3J0IiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRhdGUiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURhdGUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRldGFpbHMiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXN0VHlwZVNwZWNpZmllciIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJncm91cCIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiRXJyb3JzIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpc3QiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiRXJyb3JzSGF2ZU9jY3VycmVkIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkV4aXN0cyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkVycm9ycyIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTm9FcnJvcnNIYXZlT2NjdXJyZWQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTm90IiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiRXJyb3JzSGF2ZU9jY3VycmVkIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICB9IF0KICAgICAgfQogICB9Cn0KCg=="