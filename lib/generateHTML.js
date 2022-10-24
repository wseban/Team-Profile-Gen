
const addCards = team => {
const html = [];
      
        const addManagerCard = manager =>    
            `<div class="card" style="width: 18rem;">
                    <div class="card-header">
                      ${manager.getName()}<br>
                      Manager
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">${manager.id}</li>
                      <li class="list-group-item">${manager.email}</li>
                      <li class="list-group-item">${manager.officeNumber}</li>
                    </ul>
                  </div>`
        html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => addManagerCard(manager)));
        const addEngineerCard = engineer =>   
            `<div class="card" style="width: 18rem;">
                 <div class="card-header">
                     ${engineer.getName()}<br>
                      Engineer
                     </div>
                     <ul class="list-group list-group-flush">
                     <li class="list-group-item">${engineer.id}</li>
                     <li class="list-group-item">${engineer.email}</li>
                     <li class="list-group-item">https://github.com/${engineer.github}</li>
                    </ul>
                </div>`  
        html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => addEngineerCard(engineer)));
        const addInternCard = intern =>   
                `<div class="card" style="width: 18rem;">
                             <div class="card-header">
                               ${intern.getName()}<br>
                               Intern
                             </div>
                             <ul class="list-group list-group-flush">
                               <li class="list-group-item">${intern.id}</li>
                               <li class="list-group-item">${intern.email}</li>
                               <li class="list-group-item">${intern.school}</li>
                             </ul>
                           </div>`
            html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => addInternCard(intern)));
            console.log(html)
            return html.join("");

        
      }
    

//

module.exports = html => 
    `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
      </head>
      <body>
        <header>
        <h1>Team Roster</h1>
        </header>
        <main>
        ${addCards(html)}
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </body>
    </html>`


