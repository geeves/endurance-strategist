#!/bin/sh

# Simply starts SpringBoot Application in Docker
# Add to docker-entrypoint.d

IRACING_EMAIL="geeves@gmail.com"
IRACING_PASS="DriveWhiteVinyl808"

#echo "${PATH}"

echo -n $IRACING_PASS$IRACING_EMAIL | openssl dgst -binary -sha256 | openssl base64
#java -version
#java org.springframework.boot.loader.JarLauncher &
exit 0
#ENCODEDPW="mZ+mv4MhOSkPGraR/GPWpvanSot9WbeenMiBgnhy0BY="

#BODY="{\"email\": \"$IRACING_EMAIL\", \"password\": \"$ENCODEDPW\"}"
#{"email": "geeves@gmail.com", "password": "mZ+mv4MhOSkPGraR/GPWpvanSot9WbeenMiBgnhy0BY="}
#/usr/bin/curl -c cookie-jar.txt -X POST -H 'Content-Type: application/json' --data "$BODY" https://members-ng.iracing.com/auth
