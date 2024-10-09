Instance: ManagementLibrary
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computablelibrary
Title: "Management Library"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computablelibrary"
* url = "http://OUR-PLACEHOLDER-URL.com/Library/ManagementLibrary"
* name = "ManagementLibrary"
* title = "Management Library"
* type = $LTYPE#logic-library "Logic Library"
* description = "Management Library"
* content[+].contentType = urn:ietf:bcp:13#application/elm+json "application/elm+json"
* content[=].data = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvclZlcnNpb24iIDogIjIuNC4wIiwKICAgICAgICAgInRyYW5zbGF0b3JPcHRpb25zIiA6ICIiLAogICAgICAgICAidHlwZSIgOiAiQ3FsVG9FbG1JbmZvIgogICAgICB9IF0sCiAgICAgICJpZGVudGlmaWVyIiA6IHsKICAgICAgICAgImlkIiA6ICJNYW5hZ2VtZW50TGlicmFyeSIsCiAgICAgICAgICJ2ZXJzaW9uIiA6ICIxLjAuMCIKICAgICAgfSwKICAgICAgInNjaGVtYUlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogInVybjpobDctb3JnOmVsbSIsCiAgICAgICAgICJ2ZXJzaW9uIiA6ICJyMSIKICAgICAgfSwKICAgICAgInVzaW5ncyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIlN5c3RlbSIsCiAgICAgICAgICAgICJ1cmkiIDogInVybjpobDctb3JnOmVsbS10eXBlczpyMSIKICAgICAgICAgfSwgewogICAgICAgICAgICAibG9jYWxJZGVudGlmaWVyIiA6ICJGSElSIiwKICAgICAgICAgICAgInVyaSIgOiAiaHR0cDovL2hsNy5vcmcvZmhpciIsCiAgICAgICAgICAgICJ2ZXJzaW9uIiA6ICI0LjAuMSIKICAgICAgICAgfSBdCiAgICAgIH0sCiAgICAgICJpbmNsdWRlcyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkMzRiIsCiAgICAgICAgICAgICJwYXRoIiA6ICJDRFNDb25uZWN0Q29tbW9uc2ZvckZISVJ2NDAxIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVJIZWxwZXJzIiwKICAgICAgICAgICAgInBhdGgiIDogIkZISVJIZWxwZXJzIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkRhc2giLAogICAgICAgICAgICAicGF0aCIgOiAiRGFzaGJvYXJkTGlicmFyeSIsCiAgICAgICAgICAgICJ2ZXJzaW9uIiA6ICIxLjAuMCIKICAgICAgICAgfSwgewogICAgICAgICAgICAibG9jYWxJZGVudGlmaWVyIiA6ICJNYW5hZ2VDb21tb25BYm5vcm1hbGl0eSIsCiAgICAgICAgICAgICJwYXRoIiA6ICJNYW5hZ2VDb21tb25BYm5vcm1hbGl0eSIsCiAgICAgICAgICAgICJ2ZXJzaW9uIiA6ICIxLjEuMCIKICAgICAgICAgfSwgewogICAgICAgICAgICAibG9jYWxJZGVudGlmaWVyIiA6ICJNYW5hZ2VSYXJlQWJub3JtYWxpdHkiLAogICAgICAgICAgICAicGF0aCIgOiAiTWFuYWdlUmFyZUFibm9ybWFsaXR5IiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjEuMS4wIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIk1hbmFnZVNwZWNpYWxQb3B1bGF0aW9uIiwKICAgICAgICAgICAgInBhdGgiIDogIk1hbmFnZVNwZWNpYWxQb3B1bGF0aW9uIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjEuMS4wIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkNvbW1vbiIsCiAgICAgICAgICAgICJwYXRoIiA6ICJDQ1NNQ29tbW9uRnVuY3Rpb25zIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIlN5bXB0b21hdGljIiwKICAgICAgICAgICAgInBhdGgiIDogIlNjcmVlbmluZ1N5bXB0b21hdGljTGlicmFyeSIsCiAgICAgICAgICAgICJ2ZXJzaW9uIiA6ICIxLjAuMCIKICAgICAgICAgfSwgewogICAgICAgICAgICAibG9jYWxJZGVudGlmaWVyIiA6ICJSaXNrVGFibGVMb29rdXAiLAogICAgICAgICAgICAicGF0aCIgOiAiQXV0b2dlbmVyYXRlZFRhYmxlTG9va3VwIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIk9yZGVycyIsCiAgICAgICAgICAgICJwYXRoIiA6ICJPcmRlclNldExpYnJhcnkiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiMS4wLjAiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAicGFyYW1ldGVycyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJCaW9wc3lMb29rYmFja1BlcmlvZCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImRlZmF1bHQiIDogewogICAgICAgICAgICAgICAidmFsdWUiIDogMjUsCiAgICAgICAgICAgICAgICJ1bml0IiA6ICJ5ZWFycyIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJRdWFudGl0eSIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJCaW9wc3lSZWZlcnJhbFBlcmlvZCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImRlZmF1bHQiIDogewogICAgICAgICAgICAgICAidmFsdWUiIDogMSwKICAgICAgICAgICAgICAgInVuaXQiIDogInllYXJzIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIlF1YW50aXR5IgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkV4Y2x1ZGVTeW1wdG9tYXRpYyIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImRlZmF1bHQiIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJIcHZUZXN0aW5nR3JhY2VQZXJpb2QiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJkZWZhdWx0IiA6IHsKICAgICAgICAgICAgICAgInZhbHVlIiA6IDYsCiAgICAgICAgICAgICAgICJ1bml0IiA6ICJtb250aHMiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiUXVhbnRpdHkiCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0sCiAgICAgICJjb250ZXh0cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJQYXRpZW50IgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgInN0YXRlbWVudHMiIDogewogICAgICAgICAiZGVmIiA6IFsgewogICAgICAgICAgICAibmFtZSIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiU2luZ2xldG9uRnJvbSIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgImRhdGFUeXBlIiA6ICJ7aHR0cDovL2hsNy5vcmcvZmhpcn1QYXRpZW50IiwKICAgICAgICAgICAgICAgICAgInRlbXBsYXRlSWQiIDogImh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9QYXRpZW50IiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlJldHJpZXZlIgogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiSGFzUmVjZW50QWJub3JtYWxTY3JlZW5pbmciLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiSGFzUmVjZW50QWJub3JtYWxTY3JlZW5pbmciLAogICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkRhc2giLAogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJIYXNIaWdoR3JhZGVQcmVDYW5jZXJDZXJ2aWNhbExlc2lvbiIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeGlzdHMiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJDZXJ2aWNhbFByZWNhbmNlckRpc29yZGVycyIsCiAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRGFzaCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiSGFzQ2VydmljYWxDYW5jZXJEaWFnbm9zZXMiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhpc3RzIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiQ2VydmljYWxDYW5jZXJEaWFnbm9zZXMiLAogICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkRhc2giLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIklzSW5jbHVkZWQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiQW5kIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJGZW1hbGVvclRyYW5zZ2VuZGVyTWFsZSIsCiAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRGFzaCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJPciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiT3IiLAogICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk9yIiwKICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJPciIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiT3IiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkhhc1JlY2VudEFibm9ybWFsU2NyZWVuaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkhhc0hpZ2hHcmFkZVByZUNhbmNlckNlcnZpY2FsTGVzaW9uIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJIYXNDZXJ2aWNhbENhbmNlckRpYWdub3NlcyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhpc3RzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiSGlnaEdyYWRlT3JDYW5jZXJIaXN0b2xvZ3lSZXN1bHRzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJEYXNoIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4aXN0cyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkNlcnZpeFJlbW92YWxXaXRoSGlnaEdyYWRlUHJlY2FuY2VyT3JDYW5jZXJSZWFzb25Db2RlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJNYW5hZ2VTcGVjaWFsUG9wdWxhdGlvbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeGlzdHMiLAogICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJDZXJ2aWNhbFByZWNhbmNlclRyZWF0bWVudHMiLAogICAgICAgICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIk1hbmFnZVJhcmVBYm5vcm1hbGl0eSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJFeGNsdWRlZCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJJZiIsCiAgICAgICAgICAgICAgICJjb25kaXRpb24iIDogewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiRXhjbHVkZVN5bXB0b21hdGljIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlBhcmFtZXRlclJlZiIKICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgInRoZW4iIDogewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiSXNTeW1wdG9tYXRpYyIsCiAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiU3ltcHRvbWF0aWMiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgImVsc2UiIDogewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJJc0luY2x1ZGVkQW5kTm90RXhjbHVkZWQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiQW5kIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJJc0luY2x1ZGVkIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5vdCIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkV4Y2x1ZGVkIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmFyZUFibm9ybWFsaXR5UmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiUmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIk1hbmFnZVJhcmVBYm5vcm1hbGl0eSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIldoaWNoUmFyaXR5TWFkZVRoZVJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgIm5hbWUiIDogIldoaWNoUmFyaXR5TWFkZVRoZVJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJNYW5hZ2VSYXJlQWJub3JtYWxpdHkiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJTcGVjaWFsUG9wdWxhdGlvblJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgIm5hbWUiIDogIlJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJNYW5hZ2VTcGVjaWFsUG9wdWxhdGlvbiIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIldoaWNoUG9wdWxhdGlvbk1hZGVUaGVSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJuYW1lIiA6ICJXaGljaFBvcHVsYXRpb25NYWRlVGhlUmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIk1hbmFnZVNwZWNpYWxQb3B1bGF0aW9uIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiQ29tbW9uQWJub3JtYWxpdHlSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJuYW1lIiA6ICJSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiTWFuYWdlQ29tbW9uQWJub3JtYWxpdHkiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZWNvbW1lbmRhdGlvbkZyb21SaXNrVGFibGUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiVGFibGVSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiTWFuYWdlQ29tbW9uQWJub3JtYWxpdHkiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJFcnJvcnMiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiVW5pb24iLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlVuaW9uIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJVbmlvbiIsCiAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIKICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiRXJyb3JzIiwKICAgICAgICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJNYW5hZ2VDb21tb25BYm5vcm1hbGl0eSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVW5pb24iLAogICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkVycm9ycyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiTWFuYWdlUmFyZUFibm9ybWFsaXR5IiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkVycm9ycyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiTWFuYWdlU3BlY2lhbFBvcHVsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJFcnJvcnMiLAogICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkRhc2giLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiRXJyb3JzSGF2ZU9jY3VycmVkIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkV4aXN0cyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkVycm9ycyIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTm9FcnJvcnNIYXZlT2NjdXJyZWQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTm90IiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiRXJyb3JzSGF2ZU9jY3VycmVkIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJNYW5hZ2VtZW50UmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiQ29hbGVzY2UiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIlNwZWNpYWxQb3B1bGF0aW9uUmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiUmFyZUFibm9ybWFsaXR5UmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiQ29tbW9uQWJub3JtYWxpdHlSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJIYXNSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJBbmQiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5vdCIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIklzTnVsbCIsCiAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogInNob3J0IiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IiwKICAgICAgICAgICAgICAgICAgICAgICAgInNvdXJjZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYW5hZ2VtZW50UmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTm9FcnJvcnNIYXZlT2NjdXJyZWQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmVjb21tZW5kQ29scG9zY29weSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJPciIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiT3IiLAogICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkVxdWFsIiwKICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJzaG9ydCIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWFuYWdlbWVudFJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiQ29scG9zY29weSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXF1YWwiLAogICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogInNob3J0IiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IiwKICAgICAgICAgICAgICAgICAgICAgICAgInNvdXJjZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYW5hZ2VtZW50UmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJDb2xwb3Njb3B5IG9yIFN1cnZlaWxsYW5jZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkVxdWFsIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJzaG9ydCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIsCiAgICAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWFuYWdlbWVudFJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiQ29scG9zY29weSBvciBUcmVhdG1lbnQiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJlY29tbWVuZFN1cnZlaWxsYW5jZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJPciIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiT3IiLAogICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkVxdWFsIiwKICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJzaG9ydCIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWFuYWdlbWVudFJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiU3VydmVpbGxhbmNlIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFcXVhbCIsCiAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAic2hvcnQiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiLAogICAgICAgICAgICAgICAgICAgICAgICAic291cmNlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIk1hbmFnZW1lbnRSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIkNvbHBvc2NvcHkgb3IgU3VydmVpbGxhbmNlIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXF1YWwiLAogICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogInNob3J0IiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IiwKICAgICAgICAgICAgICAgICAgICAgInNvdXJjZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYW5hZ2VtZW50UmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJTdXJ2ZWlsbGFuY2Ugb3IgVHJlYXRtZW50IiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZWNvbW1lbmRUcmVhdG1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiT3IiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk9yIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFcXVhbCIsCiAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAic2hvcnQiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiLAogICAgICAgICAgICAgICAgICAgICAgICAic291cmNlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIk1hbmFnZW1lbnRSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIlRyZWF0bWVudCIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXF1YWwiLAogICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogInNob3J0IiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IiwKICAgICAgICAgICAgICAgICAgICAgICAgInNvdXJjZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYW5hZ2VtZW50UmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJDb2xwb3Njb3B5IG9yIFRyZWF0bWVudCIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkVxdWFsIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJzaG9ydCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIsCiAgICAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWFuYWdlbWVudFJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiU3VydmVpbGxhbmNlIG9yIFRyZWF0bWVudCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiQ29scG9zY29weU9yZGVyQ29kZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJuYW1lIiA6ICJDb2xwb3Njb3B5Q29kZWFibGVDb25jZXB0IiwKICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJPcmRlcnMiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJTdXJ2ZWlsbGFuY2VPcmRlckNvZGUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiU3VydmVpbGxhbmNlQ29kZWFibGVDb25jZXB0IiwKICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJPcmRlcnMiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcmVhdG1lbnRPcmRlckNvZGUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiVHJlYXRtZW50Q29kZWFibGVDb25jZXB0IiwKICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJPcmRlcnMiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJTZXJ2aWNlUmVxdWVzdE9yZGVyRGV0YWlsIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlF1ZXJ5IiwKICAgICAgICAgICAgICAgInNvdXJjZSIgOiBbIHsKICAgICAgICAgICAgICAgICAgImFsaWFzIiA6ICJEIiwKICAgICAgICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAiZGV0YWlscyIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIsCiAgICAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWFuYWdlbWVudFJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9IF0sCiAgICAgICAgICAgICAgICJyZWxhdGlvbnNoaXAiIDogWyBdLAogICAgICAgICAgICAgICAicmV0dXJuIiA6IHsKICAgICAgICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInRleHQiLAogICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiRCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJBbGlhc1JlZiIKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiU3VnZ2VzdGVkT3JkZXJzIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkV4Y2VwdCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiSWYiLAogICAgICAgICAgICAgICAgICAgICAiY29uZGl0aW9uIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIlJlY29tbWVuZENvbHBvc2NvcHkiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgInRoZW4iIDogewogICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiQ29scG9zY29weSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAiZWxzZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJhc1R5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkFzIiwKICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTnVsbCIKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIklmIiwKICAgICAgICAgICAgICAgICAgICAgImNvbmRpdGlvbiIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJSZWNvbW1lbmRTdXJ2ZWlsbGFuY2UiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgInRoZW4iIDogewogICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiU3VydmVpbGxhbmNlIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICJlbHNlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgImFzVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiQXMiLAogICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOdWxsIgogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiSWYiLAogICAgICAgICAgICAgICAgICAgICAiY29uZGl0aW9uIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIlJlY29tbWVuZFRyZWF0bWVudCIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAidGhlbiIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJUcmVhdG1lbnQiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgImVsc2UiIDogewogICAgICAgICAgICAgICAgICAgICAgICAiYXNUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJBcyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk51bGwiCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUXVlcnkiLAogICAgICAgICAgICAgICAgICAic291cmNlIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAiYWxpYXMiIDogIlgiLAogICAgICAgICAgICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXN0IiwKICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOdWxsIgogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9IF0sCiAgICAgICAgICAgICAgICAgICJyZXR1cm4iIDogewogICAgICAgICAgICAgICAgICAgICAiZGlzdGluY3QiIDogZmFsc2UsCiAgICAgICAgICAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgImFzVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiQXMiLAogICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJYIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkFsaWFzUmVmIgogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJPcmRlckRhdGUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiVG9TdHJpbmciLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJkYXRlIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IiwKICAgICAgICAgICAgICAgICAgInNvdXJjZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYW5hZ2VtZW50UmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmlza1RhYmxlU3VtbWFyeSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJuYW1lIiA6ICJSaXNrVGFibGVTdW1tYXJ5IiwKICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJNYW5hZ2VDb21tb25BYm5vcm1hbGl0eSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkRlY2lzaW9uQWlkcyIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJUdXBsZSIsCiAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAicmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAic2hvcnQiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiLAogICAgICAgICAgICAgICAgICAgICAic291cmNlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIk1hbmFnZW1lbnRSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAicmVjb21tZW5kYXRpb25Hcm91cCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJncm91cCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIsCiAgICAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWFuYWdlbWVudFJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJyZWNvbW1lbmRhdGlvbkRldGFpbHMiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAiZGV0YWlscyIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIsCiAgICAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWFuYWdlbWVudFJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJyZWNvbW1lbmRhdGlvbkRhdGUiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiT3JkZXJEYXRlIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiZXJyb3JzIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkVycm9ycyIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc2NsYWltZXIiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiQW4gZXZpZGVuY2UgYmFzZWQgcmVjb21tZW5kYXRpb24gaXMgcHJvdmlkZWQgYmFzZWQgb24gY2xpbmljYWwgZGF0YSBhdmFpbGFibGUgaW4gdGhlIHBhdGllbnQncyBlbGVjdHJvbmljIG1lZGljYWwgcmVjb3JkLiBQbGVhc2UgdmFsaWRhdGUgd2l0aCBwYXRpZW50IGFuZCBkb2N1bWVudCBhbnkgYWRkaXRpb25hbCByZWxldmFudCBoaXN0b3J5IGFuZCBjZXJ2aWNhbCBjYW5jZXIgc2NyZWVuaW5nIHJlbGF0ZWQgcHJvY2VkdXJlcywgYW5kIGxhYiB0ZXN0aW5nIHdpdGggZG9jdW1lbnRlZCB3cml0dGVuIGV2aWRlbmNlLiIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN1Z2dlc3RlZE9yZGVycyIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJTdWdnZXN0ZWRPcmRlcnMiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJyaXNrVGFibGUiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiUmlza1RhYmxlU3VtbWFyeSIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0gXQogICAgICB9CiAgIH0KfQoK"
