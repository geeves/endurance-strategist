#!/bin/sh

# Simply starts SpringBoot Application in Docker
# Add to docker-entrypoint.d

echo "${PATH}"
java -version
java org.springframework.boot.loader.JarLauncher &
exit 0
