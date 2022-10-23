const fs = require('fs');
const inquirer = require('inquirer');

const team = [];


inquirer
.prompt([
    {
        type: 'list',
        name: 'starter',
        message: "What position would you like to add on the team?",
        choices: ["manager", "engineer", "intern", "employee"],
    },
])
.then((answers) => {
    if(answers.starter === "manager"){
        addManager()
    }else if(answers.starter === "engineer"){
        teamMemberInfo()
    }else if(answers.starter === "intern"){
        teamInternInfo()
    }else {
        addEmployee()
    }
})
const addEmployee = () => {
    inquirer
        .prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?"
    },
    ])
        .then((answers) => {
         team.push(answers)
            console.log(team)
            addOns()

            })
    }

const addManager = () => {
inquirer
.prompt([
    {
        type: 'input',
        name: 'manager',
        message: "What is the team manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?"
    },
    {
        type: 'input',
        name: 'number',
        message: "What is the manager's office phone number?",
    },
])
.then((answers) => {
    
    team.push(answers);
    console.log(team);
    addOns()
})
}
const addOns = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamAdds',
            message: "Who else would you like to add?",
            choices: ["I would like to add a new manager", "I would like to add an Engineer", "I would like to add an intern", "I am done building my team"],
        }
    ])
    .then((addAnswers) => {
        console.log(addAnswers.teamAdds)
        if(addAnswers.teamAdds === "I would like to add an Engineer"){
                teamMemberInfo();
        }else if(addAnswers.teamAdds === "I would like to add an intern"){
            teamInternInfo();
        }else if(addAnswers.teamAdds === "I would like to add a new manager"){
            addManager();
        }
        else{
            renderHTML(answers);
            console.log(answers);
        }
    })
}

const teamMemberInfo = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineer',
            message: "What is the team members's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team member's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this person's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this person's GitHub username?",
        },
    ])
    .then((answers) => {
        team.push(answers)
        console.log(team)
        addOns()

    })
    
    }

    const teamInternInfo = () => {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'intern',
                message: "What is the intern's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "Please input this person's employee ID.",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this person's email address?"
            },
            {
                type: 'input',
                name: 'school',
                message: "Where does this person go to school?",
            },
        ])
        .then((answers) => {
            team.push(answers)
            console.log(team)
            addOns()
        })
        
        }






/*GIVEN a command-line application that accepts user input
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
THEN I exit the application, and the HTML is generated*/