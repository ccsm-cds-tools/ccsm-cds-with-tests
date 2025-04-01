Instance: AnalyticsLibrary
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computablelibrary
Title: "Cervical Cancer Screening and Management Analytics"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computablelibrary"
* url = "http://OUR-PLACEHOLDER-URL.com/Library/AnalyticsLibrary"
* name = "AnalyticsLibrary"
* title = "Cervical Cancer Screening and Management Analytics"
* type = $LTYPE#logic-library "Logic Library"
* description = "Cervical Cancer Screening and Management Analytics"
* content[+].contentType = urn:ietf:bcp:13#text/cql "text/cql"
* content[=].data = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvclZlcnNpb24iIDogIjIuNC4wIiwKICAgICAgICAgInRyYW5zbGF0b3JPcHRpb25zIiA6ICIiLAogICAgICAgICAidHlwZSIgOiAiQ3FsVG9FbG1JbmZvIgogICAgICB9IF0sCiAgICAgICJpZGVudGlmaWVyIiA6IHsKICAgICAgICAgImlkIiA6ICJBbmFseXRpY3NMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRGFzaCIsCiAgICAgICAgICAgICJwYXRoIiA6ICJEYXNoYm9hcmRMaWJyYXJ5IiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgInBhcmFtZXRlcnMiIDogewogICAgICAgICAiZGVmIiA6IFsgewogICAgICAgICAgICAibmFtZSIgOiAiQW5hbHR5aWNzIiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZGVmYXVsdCIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAiY29udGV4dHMiIDogewogICAgICAgICAiZGVmIiA6IFsgewogICAgICAgICAgICAibmFtZSIgOiAiUGF0aWVudCIKICAgICAgICAgfSBdCiAgICAgIH0sCiAgICAgICJzdGF0ZW1lbnRzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgIm5hbWUiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlNpbmdsZXRvbkZyb20iLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICJkYXRhVHlwZSIgOiAie2h0dHA6Ly9obDcub3JnL2ZoaXJ9UGF0aWVudCIsCiAgICAgICAgICAgICAgICAgICJ0ZW1wbGF0ZUlkIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vUGF0aWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJSZXRyaWV2ZSIKICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkNlcnZpY2FsQ2FuY2VyU2NyZWVuaW5nQW5kTWVkaWNhbEhpc3RvcnkiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiQ2VydmljYWxDYW5jZXJTY3JlZW5pbmdBbmRNZWRpY2FsSGlzdG9yeSIsCiAgICAgICAgICAgICAgICJsaWJyYXJ5TmFtZSIgOiAiRGFzaCIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkRhc2hib2FyZExpYnJhcnlBbmFseXRpY3MiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiRXhjZXB0IiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXN0IiwKICAgICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJDZXJ2aWNhbENhbmNlclNjcmVlbmluZ0FuZE1lZGljYWxIaXN0b3J5IiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJRdWVyeSIsCiAgICAgICAgICAgICAgICAgICJzb3VyY2UiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJhbGlhcyIgOiAiWCIsCiAgICAgICAgICAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpc3QiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk51bGwiCiAgICAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0gXSwKICAgICAgICAgICAgICAgICAgInJldHVybiIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJkaXN0aW5jdCIgOiBmYWxzZSwKICAgICAgICAgICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiQXMiLAogICAgICAgICAgICAgICAgICAgICAgICAib3BlcmFuZCIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJYIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkFsaWFzUmVmIgogICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAiYXNUeXBlU3BlY2lmaWVyIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlVHlwZVNwZWNpZmllciIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAicGF0aWVudEluZm8iLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGVUeXBlU3BlY2lmaWVyIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJuYW1lIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJpZCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXN0VHlwZVNwZWNpZmllciIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7aHR0cDovL2hsNy5vcmcvZmhpcn1JZGVudGlmaWVyIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImlzUHJlZ25hbnQiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJkYXRlT2ZCaXJ0aCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7aHR0cDovL2hsNy5vcmcvZmhpcn1kYXRlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJzZXhBdEJpcnRoIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJhZ2UiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1JbnRlZ2VyIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJnZW5kZXIiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInByaW1hcnlMYW5ndWFnZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAicmFjZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAicGF0aWVudEhpc3RvcnkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGVUeXBlU3BlY2lmaWVyIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb25kaXRpb25zIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpc3RUeXBlU3BlY2lmaWVyIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlVHlwZVNwZWNpZmllciIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAibmFtZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAidmFsdWUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRhdGUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInJlZmVyZW5jZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiZWRpdGVkIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJvYnNlcnZhdGlvbnMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdFR5cGVTcGVjaWZpZXIiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGVUeXBlU3BlY2lmaWVyIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJuYW1lIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ2YWx1ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiZGF0ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAicmVmZXJlbmNlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJlZGl0ZWQiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIm1lZGljYXRpb25zIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpc3RUeXBlU3BlY2lmaWVyIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlVHlwZVNwZWNpZmllciIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAibmFtZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAidmFsdWUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRhdGUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInJlZmVyZW5jZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJwcm9jZWR1cmVzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpc3RUeXBlU3BlY2lmaWVyIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlVHlwZVNwZWNpZmllciIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAibmFtZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAidmFsdWUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRhdGUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInJlZmVyZW5jZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiZWRpdGVkIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJkaWFnbm9zdGljUmVwb3J0cyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXN0VHlwZVNwZWNpZmllciIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJUdXBsZVR5cGVTcGVjaWZpZXIiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIm5hbWUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImxvbmdOYW1lIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ2YWx1ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAibG9uZ1ZhbHVlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpc3RUeXBlU3BlY2lmaWVyIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIntodHRwOi8vaGw3Lm9yZy9maGlyfXN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJsYWJlbCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiZ3JhZGUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1JbnRlZ2VyIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJkYXRlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJyZWZlcmVuY2UiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImVkaXRlZCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiZW5jb3VudGVycyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXN0VHlwZVNwZWNpZmllciIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJUdXBsZVR5cGVTcGVjaWZpZXIiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIm5hbWUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInZhbHVlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIntodHRwOi8vaGw3Lm9yZy9maGlyfUVuY291bnRlclN0YXR1cyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiZGF0ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAicmVmZXJlbmNlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImltbXVuaXphdGlvbnMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdFR5cGVTcGVjaWZpZXIiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGVUeXBlU3BlY2lmaWVyIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJuYW1lIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ2YWx1ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7aHR0cDovL2hsNy5vcmcvZmhpcn1JbW11bml6YXRpb25TdGF0dXMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRhdGUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInJlZmVyZW5jZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiZWRpdGVkIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJOYW1lZFR5cGVTcGVjaWZpZXIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJlcGlzb2RlT2ZDYXJlcyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXN0VHlwZVNwZWNpZmllciIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJUdXBsZVR5cGVTcGVjaWZpZXIiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIm5hbWUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInZhbHVlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJkYXRlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnRUeXBlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk5hbWVkVHlwZVNwZWNpZmllciIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJyZWZlcmVuY2UiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudFR5cGUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1TdHJpbmciLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImVkaXRlZCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50VHlwZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJ1bkFuYWx0eWljcyIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJuYW1lIiA6ICJBbmFsdHlpY3MiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiUGFyYW1ldGVyUmVmIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFuYWx5dGljc091dHB1dCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXN0IiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJEYXNoYm9hcmRMaWJyYXJ5QW5hbHl0aWNzIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0gXQogICAgICB9CiAgIH0KfQoK"