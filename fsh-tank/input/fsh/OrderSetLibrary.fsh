Instance: OrderSetLibrary
InstanceOf: Library
Usage: #example
* url = "http://OUR-PLACEHOLDER-URL.com/Library/OrderSetLibrary"
* version = "1.0.0"
* name = "OrderSetLibrary"
* title = "OrderSetLibrary"
* status = #active
* experimental = false
* type.coding.code = #logic-library
* relatedArtifact[0].type = #documentation
* relatedArtifact[=].url = "https://github.com/cqframework/clinical_quality_language/wiki/FHIRHelpers"
* relatedArtifact[=].document.url = "https://github.com/cqframework/clinical_quality_language/wiki/FHIRHelpers"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].resource = "http://hl7.org/fhir/Library/FHIR-ModelInfo"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].resource = "Library/FHIRHelpers"
* content[0].contentType = #text/cql
* content[=].data = "bGlicmFyeSBPcmRlclNldExpYnJhcnkgdmVyc2lvbiAnMS4wLjAnCgp1c2luZyBGSElSIHZlcnNpb24gJzQuMC4xJwoKaW5jbHVkZSBGSElSSGVscGVycyB2ZXJzaW9uICc0LjAuMScgY2FsbGVkIEZISVJIZWxwZXJzCgpjb2Rlc3lzdGVtICJMT0NBTCI6ICdodHRwOi8vT1VSLVBMQUNFSE9MREVSLVVSTC5jb20nCgpjb2RlICJQcmltYXJ5IEhQViI6ICdocHYnIGZyb20gIkxPQ0FMIiBkaXNwbGF5ICdQcmltYXJ5IEhQVicKY29kZSAiQ3l0b2xvZ3kiOiAnY3l0b2xvZ3knIGZyb20gIkxPQ0FMIiBkaXNwbGF5ICdDeXRvbG9neScKY29kZSAiQ290ZXN0IjogJ2NvdGVzdCcgZnJvbSAiTE9DQUwiIGRpc3BsYXkgJ0NvdGVzdCcKCmNvZGUgIkNvbHBvc2NvcHkiOiAnY29scG9zY29weScgZnJvbSAiTE9DQUwiIGRpc3BsYXkgJ0NvbHBvc2NvcHknCmNvZGUgIlN1cnZlaWxsYW5jZSI6ICdzdXJ2ZWlsbGFuY2UnIGZyb20gIkxPQ0FMIiBkaXNwbGF5ICdTdXJ2ZWlsbGFuY2UnCmNvZGUgIlRyZWF0bWVudCI6ICd0cmVhdG1lbnQnIGZyb20gIkxPQ0FMIiBkaXNwbGF5ICdUcmVhdG1lbnQnCgoKZGVmaW5lIGZ1bmN0aW9uIFRvRmhpckNvZGVhYmxlQ29uY2VwdChjIFN5c3RlbS5Db2RlKToKICAgIEZISVIuQ29kZWFibGVDb25jZXB0IHsKICAgICAgY29kaW5nOiB7CiAgICAgICAgRkhJUi5Db2RpbmcgewogICAgICAgICAgc3lzdGVtOiBGSElSLnVyaSB7dmFsdWU6IGMuc3lzdGVtfSwKICAgICAgICAgIGNvZGU6IEZISVIuY29kZSB7dmFsdWU6IGMuY29kZX0sCiAgICAgICAgICBkaXNwbGF5OiBGSElSLnN0cmluZyB7dmFsdWU6IGMuZGlzcGxheX0KICAgICAgICB9CiAgICAgIH0KICAgIH0KCmRlZmluZSBQcmltYXJ5SHB2Q29kZWFibGVDb25jZXB0OgogIFRvRmhpckNvZGVhYmxlQ29uY2VwdCgiUHJpbWFyeSBIUFYiKQoKZGVmaW5lIEN5dG9sb2d5Q29kZWFibGVDb25jZXB0OgogIFRvRmhpckNvZGVhYmxlQ29uY2VwdCgiQ3l0b2xvZ3kiKQoKZGVmaW5lIENvdGVzdENvZGVhYmxlQ29uY2VwdDoKICBUb0ZoaXJDb2RlYWJsZUNvbmNlcHQoIkNvdGVzdCIpCgpkZWZpbmUgQ29scG9zY29weUNvZGVhYmxlQ29uY2VwdDoKICBUb0ZoaXJDb2RlYWJsZUNvbmNlcHQoIkNvbHBvc2NvcHkiKQoKZGVmaW5lIFN1cnZlaWxsYW5jZUNvZGVhYmxlQ29uY2VwdDoKICBUb0ZoaXJDb2RlYWJsZUNvbmNlcHQoIlN1cnZlaWxsYW5jZSIpCgpkZWZpbmUgVHJlYXRtZW50Q29kZWFibGVDb25jZXB0OgogIFRvRmhpckNvZGVhYmxlQ29uY2VwdCgiVHJlYXRtZW50Iik="
* content[+].contentType = #application/elm+json
* content[=].data = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvclZlcnNpb24iIDogIjIuNC4wIiwKICAgICAgICAgInRyYW5zbGF0b3JPcHRpb25zIiA6ICIiLAogICAgICAgICAidHlwZSIgOiAiQ3FsVG9FbG1JbmZvIgogICAgICB9IF0sCiAgICAgICJpZGVudGlmaWVyIiA6IHsKICAgICAgICAgImlkIiA6ICJPcmRlclNldExpYnJhcnkiLAogICAgICAgICAidmVyc2lvbiIgOiAiMS4wLjAiCiAgICAgIH0sCiAgICAgICJzY2hlbWFJZGVudGlmaWVyIiA6IHsKICAgICAgICAgImlkIiA6ICJ1cm46aGw3LW9yZzplbG0iLAogICAgICAgICAidmVyc2lvbiIgOiAicjEiCiAgICAgIH0sCiAgICAgICJ1c2luZ3MiIDogewogICAgICAgICAiZGVmIiA6IFsgewogICAgICAgICAgICAibG9jYWxJZGVudGlmaWVyIiA6ICJTeXN0ZW0iLAogICAgICAgICAgICAidXJpIiA6ICJ1cm46aGw3LW9yZzplbG0tdHlwZXM6cjEiCiAgICAgICAgIH0sIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUiIsCiAgICAgICAgICAgICJ1cmkiIDogImh0dHA6Ly9obDcub3JnL2ZoaXIiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAiaW5jbHVkZXMiIDogewogICAgICAgICAiZGVmIiA6IFsgewogICAgICAgICAgICAibG9jYWxJZGVudGlmaWVyIiA6ICJGSElSSGVscGVycyIsCiAgICAgICAgICAgICJwYXRoIiA6ICJGSElSSGVscGVycyIsCiAgICAgICAgICAgICJ2ZXJzaW9uIiA6ICI0LjAuMSIKICAgICAgICAgfSBdCiAgICAgIH0sCiAgICAgICJjb2RlU3lzdGVtcyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJMT0NBTCIsCiAgICAgICAgICAgICJpZCIgOiAiaHR0cDovL09VUi1QTEFDRUhPTERFUi1VUkwuY29tIiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAiY29kZXMiIDogewogICAgICAgICAiZGVmIiA6IFsgewogICAgICAgICAgICAibmFtZSIgOiAiUHJpbWFyeSBIUFYiLAogICAgICAgICAgICAiaWQiIDogImhwdiIsCiAgICAgICAgICAgICJkaXNwbGF5IiA6ICJQcmltYXJ5IEhQViIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImNvZGVTeXN0ZW0iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiTE9DQUwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiQ3l0b2xvZ3kiLAogICAgICAgICAgICAiaWQiIDogImN5dG9sb2d5IiwKICAgICAgICAgICAgImRpc3BsYXkiIDogIkN5dG9sb2d5IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiY29kZVN5c3RlbSIgOiB7CiAgICAgICAgICAgICAgICJuYW1lIiA6ICJMT0NBTCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJDb3Rlc3QiLAogICAgICAgICAgICAiaWQiIDogImNvdGVzdCIsCiAgICAgICAgICAgICJkaXNwbGF5IiA6ICJDb3Rlc3QiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJjb2RlU3lzdGVtIiA6IHsKICAgICAgICAgICAgICAgIm5hbWUiIDogIkxPQ0FMIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkNvbHBvc2NvcHkiLAogICAgICAgICAgICAiaWQiIDogImNvbHBvc2NvcHkiLAogICAgICAgICAgICAiZGlzcGxheSIgOiAiQ29scG9zY29weSIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImNvZGVTeXN0ZW0iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiTE9DQUwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiU3VydmVpbGxhbmNlIiwKICAgICAgICAgICAgImlkIiA6ICJzdXJ2ZWlsbGFuY2UiLAogICAgICAgICAgICAiZGlzcGxheSIgOiAiU3VydmVpbGxhbmNlIiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiY29kZVN5c3RlbSIgOiB7CiAgICAgICAgICAgICAgICJuYW1lIiA6ICJMT0NBTCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcmVhdG1lbnQiLAogICAgICAgICAgICAiaWQiIDogInRyZWF0bWVudCIsCiAgICAgICAgICAgICJkaXNwbGF5IiA6ICJUcmVhdG1lbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJjb2RlU3lzdGVtIiA6IHsKICAgICAgICAgICAgICAgIm5hbWUiIDogIkxPQ0FMIgogICAgICAgICAgICB9CiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUb0ZoaXJDb2RlYWJsZUNvbmNlcHQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgInR5cGUiIDogIkZ1bmN0aW9uRGVmIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAiY2xhc3NUeXBlIiA6ICJ7aHR0cDovL2hsNy5vcmcvZmhpcn1Db2RlYWJsZUNvbmNlcHQiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiSW5zdGFuY2UiLAogICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImNvZGluZyIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXN0IiwKICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICJjbGFzc1R5cGUiIDogIntodHRwOi8vaGw3Lm9yZy9maGlyfUNvZGluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJJbnN0YW5jZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAic3lzdGVtIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImNsYXNzVHlwZSIgOiAie2h0dHA6Ly9obDcub3JnL2ZoaXJ9dXJpIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkluc3RhbmNlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ2YWx1ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJzeXN0ZW0iLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiUHJvcGVydHkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAic291cmNlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImMiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiT3BlcmFuZFJlZiIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImNvZGUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiY2xhc3NUeXBlIiA6ICJ7aHR0cDovL2hsNy5vcmcvZmhpcn1jb2RlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkluc3RhbmNlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ2YWx1ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJjb2RlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInNvdXJjZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk9wZXJhbmRSZWYiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJkaXNwbGF5IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImNsYXNzVHlwZSIgOiAie2h0dHA6Ly9obDcub3JnL2ZoaXJ9c3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkluc3RhbmNlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ2YWx1ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJwYXRoIiA6ICJkaXNwbGF5IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIlByb3BlcnR5IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInNvdXJjZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIk9wZXJhbmRSZWYiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAibmFtZSIgOiAiYyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kVHlwZVNwZWNpZmllciIgOiB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUNvZGUiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTmFtZWRUeXBlU3BlY2lmaWVyIgogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0gXQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJQcmltYXJ5SHB2Q29kZWFibGVDb25jZXB0IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgIm5hbWUiIDogIlRvRmhpckNvZGVhYmxlQ29uY2VwdCIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJGdW5jdGlvblJlZiIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiUHJpbWFyeSBIUFYiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiQ29kZVJlZiIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiQ3l0b2xvZ3lDb2RlYWJsZUNvbmNlcHQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiVG9GaGlyQ29kZWFibGVDb25jZXB0IiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkZ1bmN0aW9uUmVmIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJDeXRvbG9neSIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJDb2RlUmVmIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJDb3Rlc3RDb2RlYWJsZUNvbmNlcHQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAibmFtZSIgOiAiVG9GaGlyQ29kZWFibGVDb25jZXB0IiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkZ1bmN0aW9uUmVmIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJDb3Rlc3QiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiQ29kZVJlZiIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiQ29scG9zY29weUNvZGVhYmxlQ29uY2VwdCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJuYW1lIiA6ICJUb0ZoaXJDb2RlYWJsZUNvbmNlcHQiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiRnVuY3Rpb25SZWYiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIkNvbHBvc2NvcHkiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiQ29kZVJlZiIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiU3VydmVpbGxhbmNlQ29kZWFibGVDb25jZXB0IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgIm5hbWUiIDogIlRvRmhpckNvZGVhYmxlQ29uY2VwdCIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJGdW5jdGlvblJlZiIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiU3VydmVpbGxhbmNlIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkNvZGVSZWYiCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlRyZWF0bWVudENvZGVhYmxlQ29uY2VwdCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJuYW1lIiA6ICJUb0ZoaXJDb2RlYWJsZUNvbmNlcHQiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiRnVuY3Rpb25SZWYiLAogICAgICAgICAgICAgICAib3BlcmFuZCIgOiBbIHsKICAgICAgICAgICAgICAgICAgIm5hbWUiIDogIlRyZWF0bWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJDb2RlUmVmIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9IF0KICAgICAgfQogICB9Cn0KCg=="