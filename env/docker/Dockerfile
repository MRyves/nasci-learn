FROM jamesdbloom/mockserver
MAINTAINER Yves Hendseth

COPY expectations.json .
CMD ["/opt/mockserver/run_mockserver.sh", "-logLevel", "DEBUG", "-serverPort", "1080", "-jvmOptions", "-Dmockserver.enableCORSForAllResponses='true' -Dmockserver.initializationJsonPath='expectations.json'"]
