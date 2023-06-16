FROM amazoncorretto:20-alpine AS jre


##############################
# Gradle.  Build Spring Boot
#
##############################
FROM gradle:8 AS spring-build

WORKDIR /home/gradle/src/

COPY --chown=gradle:gradle . .

RUN gradle build -x check

RUN cp /home/gradle/src/build/libs/strategist-0.0.1.jar sb-fat.jar
RUN cp /home/gradle/src/build/libs/strategist-0.0.1-plain.jar sb-plain.jar

RUN java -Djarmode=layertools -jar sb-fat.jar extract


##############################
# Node.  Build Web Application
#
##############################
FROM node:18-alpine AS web-build

WORKDIR /usr/src/webapp/
COPY webapp/package*.json ./
RUN npm ci
COPY webapp/ ./
RUN npm run build-dev

##############################
# NGINX.  Put JRE and Spring into application
#
##############################
FROM nginx:alpine

ENV JAVA_HOME=/usr/lib/jvm/default-jvm/bin
ENV PATH="${PATH}:${JAVA_HOME}"

COPY --from=jre /usr/lib/jvm/default-jvm/ /usr/lib/jvm/default-jvm/

COPY run-bono.sh /docker-entrypoint.d/
COPY default.conf /etc/nginx/conf.d/
COPY --from=web-build /usr/src/webapp/public/ /data/www/

RUN chmod a+x /docker-entrypoint.d/run-bono.sh

## https://gihub.com/moby/moby/issues/37965
COPY --from=spring-build /home/gradle/src/dependencies/ ./
RUN true
COPY --from=spring-build /home/gradle/src/snapshot-dependencies/ ./
RUN true
COPY --from=spring-build /home/gradle/src/spring-boot-loader/ ./
RUN true
COPY --from=spring-build /home/gradle/src/application/ ./
