const transferToCards = team => {
    for(let i = 0; i < team.length; i++){
        if(getRole() === "Manager"){
        team[i] = `<div class="card" style="width: 18rem;">
                    <div class="card-header">
                      ${team[i].name}
                      Manager
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">${team[i].id}</li>
                      <li class="list-group-item">${team[i].email}</li>
                      <li class="list-group-item">${team[i].number}</li>
                    </ul>
                  </div>`}
        else if(getRole() === "Engineer"){
            team[i] = `<div class="card" style="width: 18rem;">
                        <div class="card-header">
                          ${team[i].name}
                          Engineer
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">${team[i].id}</li>
                          <li class="list-group-item">${team[i].email}</li>
                          <li class="list-group-item">https://github.com/${team[i].github}</li>
                        </ul>
                      </div>`}
        else if(getRole() === "Engineer"){
            team[i] = `<div class="card" style="width: 18rem;">
                        <div class="card-header">
                        ${team[i].name}
                        Intern
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">${team[i].id}</li>
                         <li class="list-group-item">${team[i].email}</li>
                         <li class="list-group-item">${team[i].school}</li>
                        </ul>
                        </div>`}              
        }
}
//

const renderHTML = (team) => {
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
        <div class="card" style="width: 18rem;">
            <div class="card-header">
              Featured
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
          <div class="card" style="width: 18rem;">
            <div class="card-header">
              Featured
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
      </body>
    </html>`
}

module.exports = renderHTML