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