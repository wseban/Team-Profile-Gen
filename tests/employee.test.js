const Employee = require('../lib/Employee')
test ('Employee test', () => {
    const emp = new Employee('Jerry', '90909', 'email@test.com');
    expect (emp.name).toBe('Jerry')
    expect (emp.getName()).toBe('Jerry')
    expect (emp.id).toBe('90909')
    expect (emp.getId()).toBe('90909')
    expect (emp.email).toBe('email@test.com')
    expect (emp.getEmail()).toBe('email@test.com')
    expect (emp.getRole()).toBe('Employee')
    expect (typeof emp).toBe('object')
})