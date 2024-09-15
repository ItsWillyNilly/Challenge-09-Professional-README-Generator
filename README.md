# Challenge-09-Professional-README-Generator
This is my professional README generator created using Javascript and Node.js.

## Description
I was tasked with adding code to existing code. This is a simple command-line program that allows the user to create a README file from answering a few questions within in the terminal.

## User Story

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Technologies Used
**Node.js**
**inquirer**

## Installation Instructions
**Clone the repository**
```bash
git clone git@github.com:ItsWillyNilly/Challenge-09-Professional-README-Generator.git
```

**Change directory into the "Develop" folder**
example:
```
cd /Users/williamlee/bootcamp/challenge-09/Challenge-09-Professional-README-Generator/Develop
```
**Install the Node Package**
```bash
npm init -y
```

**Install dependencies/inquirer**
```bash
npm i inquirer
```

## Screenshot of the website
Video Demonstration <img src="Develop/assets/videos/READMEDemo.gif">

## GitHub Repo Link
https://github.com/ItsWillyNilly/Challenge-09-Professional-README-Generator

## Resources
[How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
