#!/usr/bin/env bash

EMAIL="geeves@gmail.com"
PASSWORD="DriveWhiteVinyl!1"

EMAILLOWER=$(echo -n "$EMAIL" | tr [:upper:] [:lower:])
ENCODEDPW=$(echo -n $PASSWORD$EMAILLOWER | openssl dgst -binary -sha256 | openssl base64)

BODY="{\"email\": \"$EMAIL\", \"password\": \"$ENCODEDPW\"}"

/usr/bin/curl -c cookie-jar.txt -X POST -H 'Content-Type: application/json' --data "$BODY" https://members-ng.iracing.com/auth
