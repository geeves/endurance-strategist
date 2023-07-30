# Endurance Strategist for iRacing

Interested in [Contributing](Contributing.md)?

## What's this for?

To rival features of the myriad of excellent Excel / Google Sheet Race
Planners. However, not to allow multitude of users introduce bugs
when attempting to fix or improve a Sheet's set of functions.
There is currently no "Reset" button because they received it from
a teammate of a teammate and nobody knows the original author.
It's a game of Excel telephone.

<blockquote style="margin-left:25px">

### Short-term Goals

* To live on its own website, free for general use
* To be distributable for development, bug fixes, and independent use.

### Long-term Goals

* Integrate with iRacing's API as a source of driver, track, car truth.
* Expand to other race systems like ACC, Raceroom, etc.

### Very long-term Goals

* Integrate with iRacing's SDK or another existing product to close the loop with Planned Race vs. Actual Race data
</blockquote>

### Built with

* Postgres
* Spring Boot w/ Kotlin
* React w/ MUI and Typescript

### Requirements

Node 18, Java 20, Docker, Pre-Commit

* [Install Node](https://heynode.com/tutorial/install-nodejs-locally-nvm/) locally with [NVM](https://github.com/nvm-sh/nvm)
* Install Java with [SDKMan](https://sdkman.io/install)
* Docker can be downloaded: https://www.docker.com

This project will stay up to date with at least the LTS version
of Java and latest version of Kotlin. Other STS versions may be
used as the next LTS approaches or as needed by Kotlin. 

Java 21, [the next LTS](https://www.infoworld.com/article/3689880/jdk-21-the-new-features-in-java-21.html) will release in September 2023.

Plans for Node version: Uncertain at this time. LTS is most likely.

#### Pre-Commit

To contribute you should have Pre-Commit Installed.
This will run hooks for general file cleanup, Prettier,
lint, checkstyle, unit tests, etc.

https://pre-commit.com/

Install with [Home Brew](https://formulae.brew.sh/formula/pre-commit)

    $ brew install pre-commit

Alternatively with pip

    $ pip install pre-commit





