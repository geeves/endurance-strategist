##############################
# Gradle.  Build Spring Boot
#
##############################
FROM gradle:8-jdk23-alpine AS spring-build

WORKDIR /home/gradle/src/

COPY --chown=gradle:gradle . .

RUN gradle build -x check

RUN cp /home/gradle/src/build/libs/strategist-0.0.1.jar sb-fat.jar
RUN cp /home/gradle/src/build/libs/strategist-0.0.1-plain.jar sb-plain.jar

RUN java -Djarmode=layertools -jar sb-fat.jar extract

##############################
# Make a smaller JRE
#
##############################
FROM amazoncorretto:23-alpine AS jre

WORKDIR /deploy/

COPY --from=spring-build /home/gradle/src/strategist-0.0.1.jar ./strategist-0.0.1.jar
COPY --from=spring-build /home/gradle/src/strategist-0.0.1-plain.jar ./strategist-0.0.1-plain.jar

RUN java -Djarmode=layertools -jar strategist-0.0.1.jar extract

RUN ${JAVA_HOME}/bin/jdeps \
    --ignore-missing-deps \
    --multi-release 23 \
    --print-module-deps \
    --class-path="./dependencies/BOOT-INF/lib/*" \
    --class-path="./dependencies/BOOT-INF/lib/*" \
    strategist-.0.0.1-plain.jar > jre-deps.info

RUN ${JAVA_HOME}/bin/jlink \
    --compress 2 \
    --strip-java-debug-attributes \
    --no-header-files \
    --no-man-pages \
    --add-modules $(cat jre-deps.info) \
    --output ./customjre

##############################
# Node.  Build Web Application
#
##############################
FROM node:18-alpine AS web-build

WORKDIR /usr/src/webapp/
COPY web/package*.json ./
RUN npm ci
COPY web/ ./
RUN npm run build

##############################
# NGINX.  Put JRE and Spring into application
#
##############################
FROM nginx:alpine

ENV JAVA_HOME=/jre
ENV PATH="${PATH}:${JAVA_HOME}"

# TODO: Create custom slim JRE via jdeps & jlink save some MBs
#COPY --from=jre /usr/lib/jvm/default-jvm/ /usr/lib/jvm/default-jvm/
COPY --from=jre /deploy/customjre/ ${JAVA_HOME}

COPY run-bono.sh /docker-entrypoint.d/
COPY default.conf /etc/nginx/conf.d/
COPY --from=web-build /usr/src/webapp/public/ /data/www/

# AUTOSTART SpringBoot Application when image boots
RUN chmod a+x /docker-entrypoint.d/run-bono.sh

## https://gihub.com/moby/moby/issues/37965
COPY --from=spring-build /home/gradle/src/dependencies/ ./
RUN true
COPY --from=spring-build /home/gradle/src/snapshot-dependencies/ ./
RUN true
COPY --from=spring-build /home/gradle/src/spring-boot-loader/ ./
RUN true
COPY --from=spring-build /home/gradle/src/application/ ./
