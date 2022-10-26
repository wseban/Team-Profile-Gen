# Team Profile Generator

## Screen-Castify Video

Link
https://watch.screencastify.com/v/orqefl8XZyVeQ9ogD2ua

## Usage
Using the command line on their computer, the user should navigate to the Team Profile Generator generator.  In order to install necessary dependents, the user should run "npm install".  
The user should then proceed with 'node index.js' which initiates the prompts for filling out the HTML.  When finished the user will have a brand new, well formatted webpage that includes the entire teams information.  The HTML will be generated in the dist directory.

![Site](./src/pics/Team%20Cards%20Terminal.png)
 
![Site](./src/pics/Team%20Card%20Finished.png)

## Technologies Used
- Node.js - An asynchronous event-driven program to run Javascript.
- JavaScript - Allows developer to make static webpages dynamic and interactive.  For this exercise it was used to alter the original webpage to change the questions, change the answers, add a dynamic timer/countdown(that also ends the game), as well as, allow saving of scores.
- Git - Git is what I used to work on my personal computer and pushing my work to GitHub.
- GitHub - A cloud based repository that holds my saved code reserved for resetting my personal computer deployment.

## Description

The purpose of this project was to utilize our skills with Node.js and JavaScript to create an HTML with a team profile made up of member cards using nothing more than the Command Line Interface (CLI).  This team profile generator served as practice for some new concepts such as, class constructors and test driven development.

## Installation

Navigate to file using your command line and run 'npm i'.  This will enable you to use the prompt method from inquirer.  After the dependencies have been downloaded run 'node index.js' which will trigger the prompts in the command line.  The answers to these prompts will be displayed on the final product.

## Lessons Learned
The most effective lessons learned for me were...
1. Using Class constructors and self declared methods.  
2. Writing tests for Test Driven Development.


## Code Snippets
JavaScript
```javaScript
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee"
    }
}
```
```JavaScript
const Employee = require('./Employee')
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager"
    }
}
```
```JavaScript
const Manager = require('../lib/Manager')
test ('Manager test', () => {
    const emp = new Manager('Jerry', '90909', 'email@test.com', '1234567890');
    expect (emp.name).toBe('Jerry')
    expect (emp.getName()).toBe('Jerry')
    expect (emp.id).toBe('90909')
    expect (emp.getId()).toBe('90909')
    expect (emp.email).toBe('email@test.com')
    expect (emp.getEmail()).toBe('email@test.com')
    expect (emp.officeNumber).toBe('1234567890')
    expect (emp.getOfficeNumber()).toBe('1234567890')
    expect (emp.getRole()).toBe('Manager')
    expect (typeof emp).toBe('object')
})
```
## Credits

NA

## License
Please refer to the LICENSE in the Repo.