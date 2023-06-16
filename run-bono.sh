#!/bin/sh


echo "${PATH}"
java -version
java org.springframework.boot.loader.JarLauncher &
exit 0
