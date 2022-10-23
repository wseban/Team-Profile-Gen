const Intern = require('../lib/Intern')
test ('Intern test', () => {
    const emp = new Intern('Jerry', '90909', 'email@test.com', 'SDSU');
    expect (emp.name).toBe('Jerry')
    expect (emp.getName()).toBe('Jerry')
    expect (emp.id).toBe('90909')
    expect (emp.getId()).toBe('90909')
    expect (emp.email).toBe('email@test.com')
    expect (emp.getEmail()).toBe('email@test.com')
    expect (emp.school).toBe('SDSU')
    expect (emp.getSchool()).toBe('SDSU')
    expect (emp.getRole()).toBe('Intern')
    expect (typeof emp).toBe('object')
})