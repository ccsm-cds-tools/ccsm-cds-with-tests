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
* content[+].contentType = urn:ietf:bcp:13#text/cql "text/cql"
* content[=].data = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvclZlcnNpb24iIDogIjIuNC4wIiwKICAgICAgICAgInRyYW5zbGF0b3JPcHRpb25zIiA6ICIiLAogICAgICAgICAidHlwZSIgOiAiQ3FsVG9FbG1JbmZvIgogICAgICB9IF0sCiAgICAgICJpZGVudGlmaWVyIiA6IHsKICAgICAgICAgImlkIiA6ICJNYW5hZ2VtZW50TGlicmFyeSIsCiAgICAgICAgICJ2ZXJzaW9uIiA6ICIxLjAuMCIKICAgICAgfSwKICAgICAgInNjaGVtYUlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogInVybjpobDctb3JnOmVsbSIsCiAgICAgICAgICJ2ZXJzaW9uIiA6ICJyMSIKICAgICAgfSwKICAgICAgInVzaW5ncyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIlN5c3RlbSIsCiAgICAgICAgICAgICJ1cmkiIDogInVybjpobDctb3JnOmVsbS10eXBlczpyMSIKICAgICAgICAgfSwgewogICAgICAgICAgICAibG9jYWxJZGVudGlmaWVyIiA6ICJGSElSIiwKICAgICAgICAgICAgInVyaSIgOiAiaHR0cDovL2hsNy5vcmcvZmhpciIsCiAgICAgICAgICAgICJ2ZXJzaW9uIiA6ICI0LjAuMSIKICAgICAgICAgfSBdCiAgICAgIH0sCiAgICAgICJpbmNsdWRlcyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkMzRiIsCiAgICAgICAgICAgICJwYXRoIiA6ICJDRFNDb25uZWN0Q29tbW9uc2ZvckZISVJ2NDAxIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVJIZWxwZXJzIiwKICAgICAgICAgICAgInBhdGgiIDogIkZISVJIZWxwZXJzIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkRhc2giLAogICAgICAgICAgICAicGF0aCIgOiAiRGFzaGJvYXJkTGlicmFyeSIsCiAgICAgICAgICAgICJ2ZXJzaW9uIiA6ICIxLjAuMCIKICAgICAgICAgfSwgewogICAgICAgICAgICAibG9jYWxJZGVudGlmaWVyIiA6ICJNYW5hZ2VDb21tb25BYm5vcm1hbGl0eSIsCiAgICAgICAgICAgICJwYXRoIiA6ICJNYW5hZ2VDb21tb25BYm5vcm1hbGl0eSIsCiAgICAgICAgICAgICJ2ZXJzaW9uIiA6ICIxLjEuMCIKICAgICAgICAgfSwgewogICAgICAgICAgICAibG9jYWxJZGVudGlmaWVyIiA6ICJNYW5hZ2VSYXJlQWJub3JtYWxpdHkiLAogICAgICAgICAgICAicGF0aCIgOiAiTWFuYWdlUmFyZUFibm9ybWFsaXR5IiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjEuMS4wIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIk1hbmFnZVNwZWNpYWxQb3B1bGF0aW9uIiwKICAgICAgICAgICAgInBhdGgiIDogIk1hbmFnZVNwZWNpYWxQb3B1bGF0aW9uIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjEuMS4wIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkNvbW1vbiIsCiAgICAgICAgICAgICJwYXRoIiA6ICJDQ1NNQ29tbW9uRnVuY3Rpb25zIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIlN5bXB0b21hdGljIiwKICAgICAgICAgICAgInBhdGgiIDogIlNjcmVlbmluZ1N5bXB0b21hdGljTGlicmFyeSIsCiAgICAgICAgICAgICJ2ZXJzaW9uIiA6ICIxLjAuMCIKICAgICAgICAgfSwgewogICAgICAgICAgICAibG9jYWxJZGVudGlmaWVyIiA6ICJSaXNrVGFibGVMb29rdXAiLAogICAgICAgICAgICAicGF0aCIgOiAiQXV0b2dlbmVyYXRlZFRhYmxlTG9va3VwIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIk9yZGVycyIsCiAgICAgICAgICAgICJwYXRoIiA6ICJPcmRlclNldExpYnJhcnkiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiMS4wLjAiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAicGFyYW1ldGVycyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJCaW9wc3lMb29rYmFja1BlcmlvZCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImRlZmF1bHQiIDogewogICAgICAgICAgICAgICAidmFsdWUiIDogMjUsCiAgICAgICAgICAgICAgICJ1bml0IiA6ICJ5ZWFycyIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJRdWFudGl0eSIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJCaW9wc3lSZWZlcnJhbFBlcmlvZCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImRlZmF1bHQiIDogewogICAgICAgICAgICAgICAidmFsdWUiIDogMSwKICAgICAgICAgICAgICAgInVuaXQiIDogInllYXJzIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIlF1YW50aXR5IgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkV4Y2x1ZGVTeW1wdG9tYXRpYyIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImRlZmF1bHQiIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJIcHZUZXN0aW5nR3JhY2VQZXJpb2QiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJkZWZhdWx0IiA6IHsKICAgICAgICAgICAgICAgInZhbHVlIiA6IDYsCiAgICAgICAgICAgICAgICJ1bml0IiA6ICJtb250aHMiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiUXVhbnRpdHkiCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0sCiAgICAgICJjb250ZXh0cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJQYXRpZW50IgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgInN0YXRlbWVudHMiIDogewogICAgICAgICAiZGVmIiA6IFsgewogICAgICAgICAgICAibmFtZSIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiU2luZ2xldG9uRnJvbSIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgImRhdGFUeXBlIiA6ICJ7aHR0cDovL2hsNy5vcmcvZmhpcn1QYXRpZW50IiwKICAgICAgICAgICAgICAgICAgInRlbXBsYXRlSWQiIDogImh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9QYXRpZW50IiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlJldHJpZXZlIgogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiSGFzUmVjZW50QWJub3JtYWxTY3JlZW5pbmciLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiSGFzUmVjZW50QWJub3JtYWxTY3JlZW5pbmciLAogICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkRhc2giLAogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJIYXNSZWNlbnRBYm5vcm1hbEhpc3RvbG9neSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJuYW1lIiA6ICJIYXNSZWNlbnRBYm5vcm1hbEhpc3RvbG9neSIsCiAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRGFzaCIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkhhc0hpZ2hHcmFkZVByZUNhbmNlckNlcnZpY2FsTGVzaW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkV4aXN0cyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkNlcnZpY2FsUHJlY2FuY2VyRGlzb3JkZXJzIiwKICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJEYXNoIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJIYXNDZXJ2aWNhbENhbmNlckRpYWdub3NlcyIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeGlzdHMiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJDZXJ2aWNhbENhbmNlckRpYWdub3NlcyIsCiAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRGFzaCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiSXNJbmNsdWRlZCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJBbmQiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkZlbWFsZW9yVHJhbnNnZW5kZXJNYWxlIiwKICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJEYXNoIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk9yIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJPciIsCiAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiT3IiLAogICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk9yIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJPciIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiT3IiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkhhc1JlY2VudEFibm9ybWFsU2NyZWVuaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkhhc1JlY2VudEFibm9ybWFsSGlzdG9sb2d5IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJIYXNIaWdoR3JhZGVQcmVDYW5jZXJDZXJ2aWNhbExlc2lvbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiSGFzQ2VydmljYWxDYW5jZXJEaWFnbm9zZXMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4aXN0cyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkhpZ2hHcmFkZU9yQ2FuY2VySGlzdG9sb2d5UmVzdWx0cyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRGFzaCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJBYnNlbmNlT3JSZW1vdmFsT2ZDZXJ2aXgiLAogICAgICAgICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIk1hbmFnZVJhcmVBYm5vcm1hbGl0eSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhpc3RzIiwKICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiQ2VydmljYWxQcmVjYW5jZXJUcmVhdG1lbnRzIiwKICAgICAgICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJNYW5hZ2VSYXJlQWJub3JtYWxpdHkiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiRXhjbHVkZWQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiSWYiLAogICAgICAgICAgICAgICAiY29uZGl0aW9uIiA6IHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkV4Y2x1ZGVTeW1wdG9tYXRpYyIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQYXJhbWV0ZXJSZWYiCiAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICJ0aGVuIiA6IHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIklzU3ltcHRvbWF0aWMiLAogICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIlN5bXB0b21hdGljIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICJlbHNlIiA6IHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiSXNJbmNsdWRlZEFuZE5vdEV4Y2x1ZGVkIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiSXNJbmNsdWRlZCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOb3QiLAogICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJFeGNsdWRlZCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJhcmVBYm5vcm1hbGl0eVJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgIm5hbWUiIDogIlJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJNYW5hZ2VSYXJlQWJub3JtYWxpdHkiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJXaGljaFJhcml0eU1hZGVUaGVSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJuYW1lIiA6ICJXaGljaFJhcml0eU1hZGVUaGVSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiTWFuYWdlUmFyZUFibm9ybWFsaXR5IiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiU3BlY2lhbFBvcHVsYXRpb25SZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJuYW1lIiA6ICJSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiTWFuYWdlU3BlY2lhbFBvcHVsYXRpb24iLAogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJXaGljaFBvcHVsYXRpb25NYWRlVGhlUmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiV2hpY2hQb3B1bGF0aW9uTWFkZVRoZVJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJNYW5hZ2VTcGVjaWFsUG9wdWxhdGlvbiIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkNvbW1vbkFibm9ybWFsaXR5UmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiUmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIk1hbmFnZUNvbW1vbkFibm9ybWFsaXR5IiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmVjb21tZW5kYXRpb25Gcm9tUmlza1RhYmxlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgIm5hbWUiIDogIlRhYmxlUmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIk1hbmFnZUNvbW1vbkFibm9ybWFsaXR5IiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiRXJyb3JzIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlVuaW9uIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJVbmlvbiIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVW5pb24iLAogICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpc3QiCiAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkVycm9ycyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiTWFuYWdlQ29tbW9uQWJub3JtYWxpdHkiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlVuaW9uIiwKICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJFcnJvcnMiLAogICAgICAgICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIk1hbmFnZVJhcmVBYm5vcm1hbGl0eSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJFcnJvcnMiLAogICAgICAgICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIk1hbmFnZVNwZWNpYWxQb3B1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiRXJyb3JzIiwKICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJEYXNoIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkVycm9yc0hhdmVPY2N1cnJlZCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeGlzdHMiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJFcnJvcnMiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIk5vRXJyb3JzSGF2ZU9jY3VycmVkIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIk5vdCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkVycm9yc0hhdmVPY2N1cnJlZCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWFuYWdlbWVudFJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkNvYWxlc2NlIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJTcGVjaWFsUG9wdWxhdGlvblJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIlJhcmVBYm5vcm1hbGl0eVJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkNvbW1vbkFibm9ybWFsaXR5UmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiSGFzUmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiQW5kIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOb3QiLAogICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJJc051bGwiLAogICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJzaG9ydCIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWFuYWdlbWVudFJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIk5vRXJyb3JzSGF2ZU9jY3VycmVkIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJlY29tbWVuZENvbHBvc2NvcHkiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiT3IiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk9yIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFcXVhbCIsCiAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAic2hvcnQiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiLAogICAgICAgICAgICAgICAgICAgICAgICAic291cmNlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIk1hbmFnZW1lbnRSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIkNvbHBvc2NvcHkiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkVxdWFsIiwKICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJzaG9ydCIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWFuYWdlbWVudFJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiQ29scG9zY29weSBvciBTdXJ2ZWlsbGFuY2UiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFcXVhbCIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAic2hvcnQiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiLAogICAgICAgICAgICAgICAgICAgICAic291cmNlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIk1hbmFnZW1lbnRSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIkNvbHBvc2NvcHkgb3IgVHJlYXRtZW50IiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZWNvbW1lbmRTdXJ2ZWlsbGFuY2UiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiT3IiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk9yIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFcXVhbCIsCiAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAic2hvcnQiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiLAogICAgICAgICAgICAgICAgICAgICAgICAic291cmNlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIk1hbmFnZW1lbnRSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIlN1cnZlaWxsYW5jZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXF1YWwiLAogICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogInNob3J0IiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IiwKICAgICAgICAgICAgICAgICAgICAgICAgInNvdXJjZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYW5hZ2VtZW50UmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJDb2xwb3Njb3B5IG9yIFN1cnZlaWxsYW5jZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkVxdWFsIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJzaG9ydCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIsCiAgICAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWFuYWdlbWVudFJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiU3VydmVpbGxhbmNlIG9yIFRyZWF0bWVudCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmVjb21tZW5kVHJlYXRtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIk9yIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJPciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXF1YWwiLAogICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogInNob3J0IiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IiwKICAgICAgICAgICAgICAgICAgICAgICAgInNvdXJjZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYW5hZ2VtZW50UmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJUcmVhdG1lbnQiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkVxdWFsIiwKICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJzaG9ydCIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWFuYWdlbWVudFJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiQ29scG9zY29weSBvciBUcmVhdG1lbnQiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFcXVhbCIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAic2hvcnQiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiLAogICAgICAgICAgICAgICAgICAgICAic291cmNlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIk1hbmFnZW1lbnRSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIlN1cnZlaWxsYW5jZSBvciBUcmVhdG1lbnQiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkNvbHBvc2NvcHlPcmRlckNvZGUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiQ29scG9zY29weUNvZGVhYmxlQ29uY2VwdCIsCiAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiT3JkZXJzIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiU3VydmVpbGxhbmNlT3JkZXJDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgIm5hbWUiIDogIlN1cnZlaWxsYW5jZUNvZGVhYmxlQ29uY2VwdCIsCiAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiT3JkZXJzIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiVHJlYXRtZW50T3JkZXJDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgIm5hbWUiIDogIlRyZWF0bWVudENvZGVhYmxlQ29uY2VwdCIsCiAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiT3JkZXJzIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiU2VydmljZVJlcXVlc3RPcmRlckRldGFpbCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJRdWVyeSIsCiAgICAgICAgICAgICAgICJzb3VyY2UiIDogWyB7CiAgICAgICAgICAgICAgICAgICJhbGlhcyIgOiAiRCIsCiAgICAgICAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogImRldGFpbHMiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiLAogICAgICAgICAgICAgICAgICAgICAic291cmNlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIk1hbmFnZW1lbnRSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdLAogICAgICAgICAgICAgICAicmVsYXRpb25zaGlwIiA6IFsgXSwKICAgICAgICAgICAgICAgInJldHVybiIgOiB7CiAgICAgICAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ0ZXh0IiwKICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkQiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiQWxpYXNSZWYiCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlN1Z2dlc3RlZE9yZGVycyIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeGNlcHQiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpc3QiLAogICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIklmIiwKICAgICAgICAgICAgICAgICAgICAgImNvbmRpdGlvbiIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJSZWNvbW1lbmRDb2xwb3Njb3B5IiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICJ0aGVuIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIkNvbHBvc2NvcHkiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgImVsc2UiIDogewogICAgICAgICAgICAgICAgICAgICAgICAiYXNUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJBcyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk51bGwiCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJJZiIsCiAgICAgICAgICAgICAgICAgICAgICJjb25kaXRpb24iIDogewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiUmVjb21tZW5kU3VydmVpbGxhbmNlIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICJ0aGVuIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIlN1cnZlaWxsYW5jZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAiZWxzZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJhc1R5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkFzIiwKICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTnVsbCIKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIklmIiwKICAgICAgICAgICAgICAgICAgICAgImNvbmRpdGlvbiIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJSZWNvbW1lbmRUcmVhdG1lbnQiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgInRoZW4iIDogewogICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiVHJlYXRtZW50IiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICJlbHNlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgImFzVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiQXMiLAogICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOdWxsIgogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlF1ZXJ5IiwKICAgICAgICAgICAgICAgICAgInNvdXJjZSIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgImFsaWFzIiA6ICJYIiwKICAgICAgICAgICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTnVsbCIKICAgICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSBdLAogICAgICAgICAgICAgICAgICAicmV0dXJuIiA6IHsKICAgICAgICAgICAgICAgICAgICAgImRpc3RpbmN0IiA6IGZhbHNlLAogICAgICAgICAgICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJhc1R5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkFzIiwKICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiWCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJBbGlhc1JlZiIKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiT3JkZXJEYXRlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlRvU3RyaW5nIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAicGF0aCIgOiAiZGF0ZSIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIsCiAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWFuYWdlbWVudFJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJpc2tUYWJsZVN1bW1hcnkiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiUmlza1RhYmxlU3VtbWFyeSIsCiAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiTWFuYWdlQ29tbW9uQWJub3JtYWxpdHkiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJEZWNpc2lvbkFpZHMiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInJlY29tbWVuZGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogInNob3J0IiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IiwKICAgICAgICAgICAgICAgICAgICAgInNvdXJjZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYW5hZ2VtZW50UmVjb21tZW5kYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInJlY29tbWVuZGF0aW9uR3JvdXAiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAiZ3JvdXAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiLAogICAgICAgICAgICAgICAgICAgICAic291cmNlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIk1hbmFnZW1lbnRSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAicmVjb21tZW5kYXRpb25EZXRhaWxzIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogImRldGFpbHMiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiLAogICAgICAgICAgICAgICAgICAgICAic291cmNlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIk1hbmFnZW1lbnRSZWNvbW1lbmRhdGlvbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAicmVjb21tZW5kYXRpb25EYXRlIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIk9yZGVyRGF0ZSIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImVycm9ycyIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJFcnJvcnMiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJkaXNjbGFpbWVyIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIkFuIGV2aWRlbmNlIGJhc2VkIHJlY29tbWVuZGF0aW9uIGlzIHByb3ZpZGVkIGJhc2VkIG9uIGNsaW5pY2FsIGRhdGEgYXZhaWxhYmxlIGluIHRoZSBwYXRpZW50J3MgZWxlY3Ryb25pYyBtZWRpY2FsIHJlY29yZC4gUGxlYXNlIHZhbGlkYXRlIHdpdGggcGF0aWVudCBhbmQgZG9jdW1lbnQgYW55IGFkZGl0aW9uYWwgcmVsZXZhbnQgaGlzdG9yeSBhbmQgY2VydmljYWwgY2FuY2VyIHNjcmVlbmluZyByZWxhdGVkIHByb2NlZHVyZXMsIGFuZCBsYWIgdGVzdGluZyB3aXRoIGRvY3VtZW50ZWQgd3JpdHRlbiBldmlkZW5jZS4iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJzdWdnZXN0ZWRPcmRlcnMiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiU3VnZ2VzdGVkT3JkZXJzIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAicmlza1RhYmxlIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIlJpc2tUYWJsZVN1bW1hcnkiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9IF0KICAgICAgfQogICB9Cn0KCg=="
