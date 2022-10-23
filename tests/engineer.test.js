const Engineer = require('../lib/Engineer')
test ('Engineer test', () => {
    const emp = new Engineer('Jerry', '90909', 'email@test.com', 'jharrison');
    expect (emp.name).toBe('Jerry')
    expect (emp.getName()).toBe('Jerry')
    expect (emp.id).toBe('90909')
    expect (emp.getId()).toBe('90909')
    expect (emp.email).toBe('email@test.com')
    expect (emp.getEmail()).toBe('email@test.com')
    expect (emp.github).toBe('jharrison')
    expect (emp.getGithub()).toBe('jharrison')
    expect (emp.getRole()).toBe('Engineer')
    expect (typeof emp).toBe('object')
})