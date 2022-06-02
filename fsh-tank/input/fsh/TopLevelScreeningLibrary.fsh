Instance: TopLevelScreeningLibrary
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computablelibrary
Title: "Top Level Screening Library"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computablelibrary"
* url = "http://OUR-PLACEHOLDER-URL.com/Library/TopLevelScreeningLibrary"
* name = "TopLevelScreeningLibrary"
* title = "Top Level Screening Library"
* type = $LTYPE#logic-library "Logic Library"
* description = "Top-level Screening Library"
* content[+].contentType = urn:ietf:bcp:13#text/cql "text/cql"
* content[=].data = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRvcExldmVsU2NyZWVuaW5nTGlicmFyeSIsCiAgICAgICAgICJ2ZXJzaW9uIiA6ICIxLjAuMCIKICAgICAgfSwKICAgICAgInNjaGVtYUlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogInVybjpobDctb3JnOmVsbSIsCiAgICAgICAgICJ2ZXJzaW9uIiA6ICJyMSIKICAgICAgfSwKICAgICAgInVzaW5ncyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIlN5c3RlbSIsCiAgICAgICAgICAgICJ1cmkiIDogInVybjpobDctb3JnOmVsbS10eXBlczpyMSIKICAgICAgICAgfSwgewogICAgICAgICAgICAibG9jYWxJZGVudGlmaWVyIiA6ICJGSElSIiwKICAgICAgICAgICAgInVyaSIgOiAiaHR0cDovL2hsNy5vcmcvZmhpciIsCiAgICAgICAgICAgICJ2ZXJzaW9uIiA6ICI0LjAuMSIKICAgICAgICAgfSBdCiAgICAgIH0sCiAgICAgICJpbmNsdWRlcyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkMzRiIsCiAgICAgICAgICAgICJwYXRoIiA6ICJDRFNDb25uZWN0Q29tbW9uc2ZvckZISVJ2NDAxIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVJIZWxwZXJzIiwKICAgICAgICAgICAgInBhdGgiIDogIkZISVJIZWxwZXJzIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgInBhcmFtZXRlcnMiIDogewogICAgICAgICAiZGVmIiA6IFsgewogICAgICAgICAgICAibmFtZSIgOiAiTWluaW11bVNjcmVlbmluZ0FnZSIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImRlZmF1bHQiIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUludGVnZXIiLAogICAgICAgICAgICAgICAidmFsdWUiIDogIjIxIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0sCiAgICAgICJjb2RlU3lzdGVtcyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJHRU5ERVItSURFTlRJVFkiLAogICAgICAgICAgICAiaWQiIDogImh0dHA6Ly9obDcub3JnL2ZoaXIvZ2VuZGVyLWlkZW50aXR5IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAiY29kZXMiIDogewogICAgICAgICAiZGVmIiA6IFsgewogICAgICAgICAgICAibmFtZSIgOiAiVHJhbnNnZW5kZXIgTWFsZSBDb2RlIiwKICAgICAgICAgICAgImlkIiA6ICJ0cmFuc2dlbmRlci1tYWxlIiwKICAgICAgICAgICAgImRpc3BsYXkiIDogInRyYW5zZ2VuZGVyIG1hbGUiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJjb2RlU3lzdGVtIiA6IHsKICAgICAgICAgICAgICAgIm5hbWUiIDogIkdFTkRFUi1JREVOVElUWSIKICAgICAgICAgICAgfQogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImNvbnRleHRzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgIm5hbWUiIDogIlBhdGllbnQiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJTaW5nbGV0b25Gcm9tIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAiZGF0YVR5cGUiIDogIntodHRwOi8vaGw3Lm9yZy9maGlyfVBhdGllbnQiLAogICAgICAgICAgICAgICAgICAidGVtcGxhdGVJZCIgOiAiaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1BhdGllbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUmV0cmlldmUiCiAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGZW1hbGVHZW5kZXIiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiRXF1YWwiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgInBhdGgiIDogInZhbHVlIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IiwKICAgICAgICAgICAgICAgICAgInNvdXJjZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJnZW5kZXIiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiLAogICAgICAgICAgICAgICAgICAgICAic291cmNlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIlBhdGllbnQiLAogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogImZlbWFsZSIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGZW1hbGVCaXJ0aFNleCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeGlzdHMiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJRdWVyeSIsCiAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJhbGlhcyIgOiAiRSIsCiAgICAgICAgICAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogImV4dGVuc2lvbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSBdLAogICAgICAgICAgICAgICAgICAicmVsYXRpb25zaGlwIiA6IFsgXSwKICAgICAgICAgICAgICAgICAgIndoZXJlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXF1YWwiLAogICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIlRvU3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJGSElSSGVscGVycyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJGdW5jdGlvblJlZiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAidXJsIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInNjb3BlIiA6ICJFIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IgogICAgICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiaHR0cDovL2hsNy5vcmcvZmhpci91cy9jb3JlL1N0cnVjdHVyZURlZmluaXRpb24vdXMtY29yZS1iaXJ0aHNleCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXF1YWwiLAogICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkNhc2UiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAiY2FzZUl0ZW0iIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ3aGVuIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImlzVHlwZSIgOiAie2h0dHA6Ly9obDcub3JnL2ZoaXJ9YmFzZTY0QmluYXJ5IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIklzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAidmFsdWUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAic2NvcGUiIDogIkUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInRoZW4iIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVG9TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkZISVJIZWxwZXJzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkZ1bmN0aW9uUmVmIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJhc1R5cGUiIDogIntodHRwOi8vaGw3Lm9yZy9maGlyfWJhc2U2NEJpbmFyeSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJBcyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogInZhbHVlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInNjb3BlIiA6ICJFIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIndoZW4iIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiaXNUeXBlIiA6ICJ7aHR0cDovL2hsNy5vcmcvZmhpcn11cmkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiSXMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJ2YWx1ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJzY29wZSIgOiAiRSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidGhlbiIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJUb1N0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRnVuY3Rpb25SZWYiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImFzVHlwZSIgOiAie2h0dHA6Ly9obDcub3JnL2ZoaXJ9dXJpIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkFzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAidmFsdWUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAic2NvcGUiIDogIkUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAid2hlbiIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJpc1R5cGUiIDogIntodHRwOi8vaGw3Lm9yZy9maGlyfXN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJJcyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogInZhbHVlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInNjb3BlIiA6ICJFIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0aGVuIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIlRvU3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJGSElSSGVscGVycyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJGdW5jdGlvblJlZiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiYXNUeXBlIiA6ICJ7aHR0cDovL2hsNy5vcmcvZmhpcn1zdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiQXMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJ2YWx1ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJzY29wZSIgOiAiRSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ3aGVuIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImlzVHlwZSIgOiAie2h0dHA6Ly9obDcub3JnL2ZoaXJ9c3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIklzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAidmFsdWUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAic2NvcGUiIDogIkUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInRoZW4iIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVG9TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkZISVJIZWxwZXJzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkZ1bmN0aW9uUmVmIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJhc1R5cGUiIDogIntodHRwOi8vaGw3Lm9yZy9maGlyfXN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJBcyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogInZhbHVlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInNjb3BlIiA6ICJFIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIndoZW4iIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiaXNUeXBlIiA6ICJ7aHR0cDovL2hsNy5vcmcvZmhpcn1zdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiSXMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJ2YWx1ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJzY29wZSIgOiAiRSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidGhlbiIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJUb1N0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRnVuY3Rpb25SZWYiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImFzVHlwZSIgOiAie2h0dHA6Ly9obDcub3JnL2ZoaXJ9c3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkFzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAidmFsdWUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAic2NvcGUiIDogIkUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAid2hlbiIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJpc1R5cGUiIDogIntodHRwOi8vaGw3Lm9yZy9maGlyfXVyaSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJJcyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogInZhbHVlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInNjb3BlIiA6ICJFIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0aGVuIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIlRvU3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJGSElSSGVscGVycyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJGdW5jdGlvblJlZiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiYXNUeXBlIiA6ICJ7aHR0cDovL2hsNy5vcmcvZmhpcn11cmkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiQXMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJ2YWx1ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJzY29wZSIgOiAiRSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ3aGVuIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImlzVHlwZSIgOiAie2h0dHA6Ly9obDcub3JnL2ZoaXJ9c3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIklzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAidmFsdWUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAic2NvcGUiIDogIkUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInRoZW4iIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVG9TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkZISVJIZWxwZXJzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkZ1bmN0aW9uUmVmIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJhc1R5cGUiIDogIntodHRwOi8vaGw3Lm9yZy9maGlyfXN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJBcyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogInZhbHVlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInNjb3BlIiA6ICJFIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIndoZW4iIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiaXNUeXBlIiA6ICJ7aHR0cDovL2hsNy5vcmcvZmhpcn11cmkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiSXMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJ2YWx1ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJzY29wZSIgOiAiRSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidGhlbiIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJUb1N0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRnVuY3Rpb25SZWYiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImFzVHlwZSIgOiAie2h0dHA6Ly9obDcub3JnL2ZoaXJ9dXJpIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkFzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAidmFsdWUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAic2NvcGUiIDogIkUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAid2hlbiIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJpc1R5cGUiIDogIntodHRwOi8vaGw3Lm9yZy9maGlyfXVyaSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJJcyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogInZhbHVlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInNjb3BlIiA6ICJFIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0aGVuIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIlRvU3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJGSElSSGVscGVycyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJGdW5jdGlvblJlZiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiYXNUeXBlIiA6ICJ7aHR0cDovL2hsNy5vcmcvZmhpcn11cmkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiQXMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJ2YWx1ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJzY29wZSIgOiAiRSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJQcm9wZXJ0eSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ3aGVuIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImlzVHlwZSIgOiAie2h0dHA6Ly9obDcub3JnL2ZoaXJ9dXJpIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIklzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAidmFsdWUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAic2NvcGUiIDogIkUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInRoZW4iIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVG9TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkZISVJIZWxwZXJzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkZ1bmN0aW9uUmVmIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJhc1R5cGUiIDogIntodHRwOi8vaGw3Lm9yZy9maGlyfXVyaSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJBcyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogInZhbHVlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInNjb3BlIiA6ICJFIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsc2UiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAicmVzdWx0VHlwZU5hbWUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk51bGwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiRiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkZlbWFsZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJPciIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiRmVtYWxlR2VuZGVyIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkZlbWFsZUJpcnRoU2V4IiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkdlbmRlcklkZW50aXR5IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlF1ZXJ5IiwKICAgICAgICAgICAgICAgInNvdXJjZSIgOiBbIHsKICAgICAgICAgICAgICAgICAgImFsaWFzIiA6ICJFIiwKICAgICAgICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAiZXh0ZW5zaW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IiwKICAgICAgICAgICAgICAgICAgICAgInNvdXJjZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9IF0sCiAgICAgICAgICAgICAgICJyZWxhdGlvbnNoaXAiIDogWyBdLAogICAgICAgICAgICAgICAid2hlcmUiIDogewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXF1YWwiLAogICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIlRvU3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgImxpYnJhcnlOYW1lIiA6ICJGSElSSGVscGVycyIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJGdW5jdGlvblJlZiIsCiAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAicGF0aCIgOiAidXJsIiwKICAgICAgICAgICAgICAgICAgICAgICAgInNjb3BlIiA6ICJFIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IgogICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL3BhdGllbnQtZ2VuZGVySWRlbnRpdHkiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcmFuc2dlbmRlck1hbGUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhpc3RzIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUXVlcnkiLAogICAgICAgICAgICAgICAgICAic291cmNlIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAiYWxpYXMiIDogIkUiLAogICAgICAgICAgICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJHZW5kZXJJZGVudGl0eSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0gXSwKICAgICAgICAgICAgICAgICAgInJlbGF0aW9uc2hpcCIgOiBbIF0sCiAgICAgICAgICAgICAgICAgICJ3aGVyZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFcXVpdmFsZW50IiwKICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJUb0NvbmNlcHQiLAogICAgICAgICAgICAgICAgICAgICAgICAibGlicmFyeU5hbWUiIDogIkZISVJIZWxwZXJzIiwKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkZ1bmN0aW9uUmVmIiwKICAgICAgICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJzdHJpY3QiIDogZmFsc2UsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJBcyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInBhdGgiIDogInZhbHVlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInNjb3BlIiA6ICJFIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IgogICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAiYXNUeXBlU3BlY2lmaWVyIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIntodHRwOi8vaGw3Lm9yZy9maGlyfUNvZGVhYmxlQ29uY2VwdCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlRvQ29uY2VwdCIsCiAgICAgICAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIlRyYW5zZ2VuZGVyIE1hbGUgQ29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJDb2RlUmVmIgogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGZW1hbGVvclRyYW5zZ2VuZGVyTWFsZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJPciIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiRmVtYWxlIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIlRyYW5zZ2VuZGVyTWFsZSIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJJc0luY2x1ZGVkIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgIm5hbWUiIDogIkZlbWFsZW9yVHJhbnNnZW5kZXJNYWxlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiRXhjbHVkZWQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiSXNJbmNsdWRlZEFuZE5vdEV4Y2x1ZGVkIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiSXNJbmNsdWRlZCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOb3QiLAogICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJFeGNsdWRlZCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlNlcnZpY2VSZXF1ZXN0IENvZGUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTnVsbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJTZXJ2aWNlUmVxdWVzdCBPcmRlciBEZXRhaWwiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTnVsbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOb0Vycm9yc0hhdmVPY2N1cnJlZCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkVycm9yc0hhdmVPY2N1cnJlZCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJFcnJvcnMgVG8gQ29tbXVuaWNhdGUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTnVsbCIKICAgICAgICAgICAgfQogICAgICAgICB9IF0KICAgICAgfQogICB9Cn0KCg=="