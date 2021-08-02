# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Team Profile Generator to generate the team's profile

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#Credits)
- [Images](#images)
- [Videos](#Videos)
- [Tests](#tests)
- [Questions](#questions)

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation

Please download the source code from

https://github.com/SimonMSelvadurai/Team-Profile-Generator

To install dependencies, run the following:

`npm install`
`npm install --save-dev jest`
`npm install inquirer`
`node init`

## Usage

This Project is used to add the team members of an organisation using node.js.
Employees with their respective ID,Name, Email,cotanct number,github,school can be added.
We can add the Manager, Engineer and Intern.The Output team.html will be generated.

Command to run the application

`node index.js`

This will prompt the user to choose the Manager's, Engineer and Intern's detail.
User can succesfully enter all the details validated in questions.js
htmlRenderer.js will render the input values assigning to corresponding html pages.
Main.html page constructs the landing page with the inputs from engineer.html,intern.html etc.
Once the team is been constructed, the generated "team.html" can be found.

## License

This repository is licensed under the MIT license.

## Credits

    Inquirer package : https://www.npmjs.com/package/inquirer.

    Jest package https://www.npmjs.com/package/jest for a suite of unit tests.

    Node JS :  https://www.w3schools.com/nodejs/default.asp

## Images

![Questions](/assets/images/Questions.JPG)

![Team Image](/assets/images/Team.JPG)

![output Folder](/assets/images/output_Team.JPG)

## Videos

![Application Setup and testing](assets/videos/Setup-Testing.gif)

![Application run commands and output](./assets/videos/ApplicationWalkthrough.gif)

## Tests

To run tests, run the following:
`npm run test`

## Questions

Questions about this repository? Please contact me at [Simon.Selvadurai0607@gmail.com](mailto:Simon.Selvadurai0607@gmail.com). View more of my work in GitHub at [SimonMSelvadurai](https://github.com/SimonMSelvadurai)
