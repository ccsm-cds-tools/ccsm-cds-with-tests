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
* content[=].data = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvclZlcnNpb24iIDogIjIuNC4wIiwKICAgICAgICAgInRyYW5zbGF0b3JPcHRpb25zIiA6ICIiLAogICAgICAgICAidHlwZSIgOiAiQ3FsVG9FbG1JbmZvIgogICAgICB9IF0sCiAgICAgICJpZGVudGlmaWVyIiA6IHsKICAgICAgICAgImlkIiA6ICJTY3JlZW5pbmdEZXNFeHBvc3VyZUxpYnJhcnkiLAogICAgICAgICAidmVyc2lvbiIgOiAiMS4wLjAiCiAgICAgIH0sCiAgICAgICJzY2hlbWFJZGVudGlmaWVyIiA6IHsKICAgICAgICAgImlkIiA6ICJ1cm46aGw3LW9yZzplbG0iLAogICAgICAgICAidmVyc2lvbiIgOiAicjEiCiAgICAgIH0sCiAgICAgICJ1c2luZ3MiIDogewogICAgICAgICAiZGVmIiA6IFsgewogICAgICAgICAgICAibG9jYWxJZGVudGlmaWVyIiA6ICJTeXN0ZW0iLAogICAgICAgICAgICAidXJpIiA6ICJ1cm46aGw3LW9yZzplbG0tdHlwZXM6cjEiCiAgICAgICAgIH0sIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUiIsCiAgICAgICAgICAgICJ1cmkiIDogImh0dHA6Ly9obDcub3JnL2ZoaXIiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAiaW5jbHVkZXMiIDogewogICAgICAgICAiZGVmIiA6IFsgewogICAgICAgICAgICAibG9jYWxJZGVudGlmaWVyIiA6ICJDM0YiLAogICAgICAgICAgICAicGF0aCIgOiAiQ0RTQ29ubmVjdENvbW1vbnNmb3JGSElSdjQwMSIsCiAgICAgICAgICAgICJ2ZXJzaW9uIiA6ICIxLjAuMCIKICAgICAgICAgfSwgewogICAgICAgICAgICAibG9jYWxJZGVudGlmaWVyIiA6ICJGSElSSGVscGVycyIsCiAgICAgICAgICAgICJwYXRoIiA6ICJGSElSSGVscGVycyIsCiAgICAgICAgICAgICJ2ZXJzaW9uIiA6ICI0LjAuMSIKICAgICAgICAgfSwgewogICAgICAgICAgICAibG9jYWxJZGVudGlmaWVyIiA6ICJEYXNoIiwKICAgICAgICAgICAgInBhdGgiIDogIkRhc2hib2FyZExpYnJhcnkiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiMS4wLjAiCiAgICAgICAgIH0sIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiQ29tbW9uIiwKICAgICAgICAgICAgInBhdGgiIDogIkNDU01Db21tb25GdW5jdGlvbnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiMS4wLjAiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAicGFyYW1ldGVycyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJCaXJ0aGRheVRocmVzaG9sZCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImRlZmF1bHQiIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiRGF0ZSIsCiAgICAgICAgICAgICAgICJ5ZWFyIiA6IHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1JbnRlZ2VyIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxOTgwIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICJtb250aCIgOiB7CiAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9SW50ZWdlciIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiMSIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAiZGF5IiA6IHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1JbnRlZ2VyIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImNvZGVTeXN0ZW1zIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgIm5hbWUiIDogIlNOT01FRC1DVCIsCiAgICAgICAgICAgICJpZCIgOiAiaHR0cDovL3Nub21lZC5pbmZvL3NjdCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJMT0lOQyIsCiAgICAgICAgICAgICJpZCIgOiAiaHR0cDovL2xvaW5jLm9yZyIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImNvbnRleHRzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgIm5hbWUiIDogIlBhdGllbnQiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJTaW5nbGV0b25Gcm9tIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAiZGF0YVR5cGUiIDogIntodHRwOi8vaGw3Lm9yZy9maGlyfVBhdGllbnQiLAogICAgICAgICAgICAgICAgICAidGVtcGxhdGVJZCIgOiAiaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1BhdGllbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUmV0cmlldmUiCiAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJCb3JuT25PckJlZm9yZUJpcnRoZGF5VGhyZXNob2xkIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlNhbWVPckJlZm9yZSIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVG9EYXRlIiwKICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJGSElSSGVscGVycyIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJGdW5jdGlvblJlZiIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAiYmlydGhEYXRlIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IiwKICAgICAgICAgICAgICAgICAgICAgInNvdXJjZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkJpcnRoZGF5VGhyZXNob2xkIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlBhcmFtZXRlclJlZiIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiSGFzRGVzRXhwb3N1cmVEaWFnbm9zZXMiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhpc3RzIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiRGVzRXhwb3N1cmVEaWFnbm9zZXMiLAogICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkRhc2giLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkhhc0Rlc0V4cG9zdXJlT2JzZXJ2YXRpb25zIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkV4aXN0cyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkRlc0V4cG9zdXJlT2JzZXJ2YXRpb25zIiwKICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJEYXNoIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZWNlbnRseVJlc3BvbmRlZFllc1RvRGVzRXhwb3N1cmVRdWVzdGlvbiIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeGlzdHMiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJRdWVyeSIsCiAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJhbGlhcyIgOiAiUiIsCiAgICAgICAgICAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIlJlc3BvbnNlc1RvRGVzRXhwb3N1cmVRdWVzdGlvbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRGFzaCIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0gXSwKICAgICAgICAgICAgICAgICAgInJlbGF0aW9uc2hpcCIgOiBbIF0sCiAgICAgICAgICAgICAgICAgICJ3aGVyZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFcXVpdmFsZW50IiwKICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJUb0NvbmNlcHQiLAogICAgICAgICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkZISVJIZWxwZXJzIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkZ1bmN0aW9uUmVmIiwKICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJhc1R5cGUiIDogIntodHRwOi8vaGw3Lm9yZy9maGlyfUNvZGVhYmxlQ29uY2VwdCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJBcyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogInZhbHVlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInNjb3BlIiA6ICJSIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJUb0NvbmNlcHQiLAogICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJZZXMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkRhc2giLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiQ29kZVJlZiIKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiV2FzRXhwb3NlZFRvRGVzSW5VdGVybyIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJPciIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiT3IiLAogICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkhhc0Rlc0V4cG9zdXJlRGlhZ25vc2VzIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkhhc0Rlc0V4cG9zdXJlT2JzZXJ2YXRpb25zIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJSZWNlbnRseVJlc3BvbmRlZFllc1RvRGVzRXhwb3N1cmVRdWVzdGlvbiIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJJc0luY2x1ZGVkIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiQW5kIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJGZW1hbGVvclRyYW5zZ2VuZGVyTWFsZSIsCiAgICAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRGFzaCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJCb3JuT25PckJlZm9yZUJpcnRoZGF5VGhyZXNob2xkIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJXYXNFeHBvc2VkVG9EZXNJblV0ZXJvIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkhhc0hpZ2hHcmFkZVByZUNhbmNlckNlcnZpY2FsTGVzaW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkV4aXN0cyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkNlcnZpY2FsUHJlY2FuY2VyRGlzb3JkZXJzIiwKICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJEYXNoIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJIYXNDZXJ2aWNhbENhbmNlckRpYWdub3NlcyIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeGlzdHMiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJDZXJ2aWNhbENhbmNlckRpYWdub3NlcyIsCiAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRGFzaCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiSGFzUmVjZW50QWJub3JtYWxTY3JlZW5pbmciLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiSGFzUmVjZW50QWJub3JtYWxTY3JlZW5pbmciLAogICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkRhc2giLAogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJIYXNSZWNlbnRBYm5vcm1hbEhpc3RvbG9neSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJuYW1lIiA6ICJIYXNSZWNlbnRBYm5vcm1hbEhpc3RvbG9neSIsCiAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRGFzaCIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkV4Y2x1ZGVkIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIk9yIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJPciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiT3IiLAogICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk9yIiwKICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJIYXNIaWdoR3JhZGVQcmVDYW5jZXJDZXJ2aWNhbExlc2lvbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJIYXNDZXJ2aWNhbENhbmNlckRpYWdub3NlcyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhpc3RzIiwKICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiSGlnaEdyYWRlT3JDYW5jZXJIaXN0b2xvZ3lSZXN1bHRzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJEYXNoIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkhhc1JlY2VudEFibm9ybWFsU2NyZWVuaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJIYXNSZWNlbnRBYm5vcm1hbEhpc3RvbG9neSIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJJc0luY2x1ZGVkQW5kTm90RXhjbHVkZWQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiQW5kIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJJc0luY2x1ZGVkIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5vdCIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkV4Y2x1ZGVkIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmVjb21tZW5kYXRpb25UZXh0IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIklmIiwKICAgICAgICAgICAgICAgImNvbmRpdGlvbiIgOiB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJJc0luY2x1ZGVkQW5kTm90RXhjbHVkZWQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgInRoZW4iIDogewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiQ29uc2lkZXIgaW5kaXZpZHVhbGl6ZWQgY2FyZSBmb3IgdGhpcyBwYXRpZW50LiIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJBQ09HIGd1aWRlbGluZXMgcmVjb21tZW5kZWQgYW5udWFsIGNlcnZpY2FsIGN5dG9sb2d5IHNjcmVlbmluZyBmb3IgaW5kaXZpZHVhbHMgd2l0aCBERVMgZXhwb3N1cmUgaW4gdXRlcm8sIHdpdGggdGlzc3VlIHNhbXBsaW5nIHRoYXQgaW5jbHVkZXMgY29sbGVjdGlvbiBvZiBlbmRvY2VydmljYWwgYW5kIGVjdG9jZXJ2aWNhbCBjZWxscywgYXMgd2VsbCBhcyBjZWxscyBmcm9tIHZhZ2luYWwgZm9ybmljZXMuIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAiZWxzZSIgOiB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJBcyIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk51bGwiCiAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICJhc1R5cGVTcGVjaWZpZXIiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdFR5cGVTcGVjaWZpZXIiLAogICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkNpdGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIklmIiwKICAgICAgICAgICAgICAgImNvbmRpdGlvbiIgOiB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOb3QiLAogICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJJc051bGwiLAogICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJSZWNvbW1lbmRhdGlvblRleHQiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICJ0aGVuIiA6IHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIkFudGVuYXRhbCBFeHBvc3VyZSB0byBERVM6IExlc3NvbnMgTGVhcm5lZC4uLkZ1dHVyZSBDb25jZXJucyIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAiZWxzZSIgOiB7CiAgICAgICAgICAgICAgICAgICJhc1R5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkFzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTnVsbCIKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiQWN0aW9uU2hvcnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiU2VlIERldGFpbHMiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJJZiIsCiAgICAgICAgICAgICAgICJjb25kaXRpb24iIDogewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiSXNJbmNsdWRlZEFuZE5vdEV4Y2x1ZGVkIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICJ0aGVuIiA6IHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJzaG9ydCIsCiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJBY3Rpb25TaG9ydCIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRhdGUiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVG9kYXkiCiAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiZGV0YWlscyIsCiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJSZWNvbW1lbmRhdGlvblRleHQiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJncm91cCIsCiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJTY3JlZW5pbmc6IERFUyBFeHBvc3VyZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAiZWxzZSIgOiB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJBcyIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk51bGwiCiAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICJhc1R5cGVTcGVjaWZpZXIiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGVUeXBlU3BlY2lmaWVyIiwKICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJzaG9ydCIsCiAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiZGF0ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURhdGUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRldGFpbHMiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdFR5cGVTcGVjaWZpZXIiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiZ3JvdXAiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJFcnJvcnMiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJFcnJvcnNIYXZlT2NjdXJyZWQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhpc3RzIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiRXJyb3JzIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOb0Vycm9yc0hhdmVPY2N1cnJlZCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOb3QiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJFcnJvcnNIYXZlT2NjdXJyZWQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgIH0gXQogICAgICB9CiAgIH0KfQoK"