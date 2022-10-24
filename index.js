const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const renderHTML = require('./lib/generateHTML')
const team = [];


inquirer
.prompt([
    {
        type: 'list',
        name: 'starter',
        message: "What position would you like to add on the team?",
        choices: ["manager", "engineer", "intern", 'employee'],
    },
])
.then((answers) => {
    if(answers.starter === "manager"){
        addManager()
    }else if(answers.starter === "engineer"){
        addEngineer()
    }else if(answers.starter === "intern"){
        addIntern()
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
        const employee = new Employee(answers.name, answers.id, answers.email);
         team.push(employee)
            console.log(team)
            addOns()

            })
    }

const addManager = () => {
inquirer
.prompt([
    
    {
        type: 'input',
        name: 'name',
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
    const manager = new Manager(answers.name, answers.id, answers.email, answers.number)
    team.push(manager);
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
            addEngineer();
        }else if(addAnswers.teamAdds === "I would like to add an intern"){
            addIntern();
        }else if(addAnswers.teamAdds === "I would like to add a new manager"){
            addManager();
        }
        else{
            writeToFile()
        }
    })
}
const writeToFile = () => {

    let renderFunction = renderHTML(team);
    console.log(team);
    fs.writeFileSync('./dist/index.html', renderHTML(team), 'utf-8');
    // fs.writeFile('./dist/index.html', renderHTML(team), (err) => {
        // err ? console.error(err) : console.log('Success!')
    // })
}
const addEngineer = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
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
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(engineer);
        console.log(team);
        addOns()

    })
    
    }

    const addIntern = () => {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
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
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(intern)
            console.log(team)
            addOns()
        })
        
        }
/*const renderCards = (team) => {
    for(let i = 0; i < team.length-1; i++){
        let name = team[i].name;
        `<div class="card" style="width: 18rem;">
        <div class="card-header">
          ${name}<br>
          ${title}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>`
    }
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