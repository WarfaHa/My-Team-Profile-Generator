// I spent way too long with a type error and I forgot the ; at the end, arggh
const Employee = require("../lib/Employee");
const testEmployee = new Employee("Warfa", "2932374" , "warfa60@gmail.com");

test('testing if new employee object will work', () => {
    expect(testEmployee.name).toBe('Warfa');
    expect(testEmployee.id).toBe('2932374');
    expect(testEmployee.email).toBe('warfa60@gmail.com');
});

test('This test gets the name from getName', () => {
    expect(testEmployee.getName()).toBe('Warfa');
});

test('This test gets the id from getId', () => {
    expect(testEmployee.getId()).toBe('2932374');
});

test('This test gets the email from getEmail', () => {
    expect(testEmployee.getEmail()).toBe('warfa60@gmail.com');
});

test('This test gets the role from getRole', () => {
    expect(testEmployee.getRole()).toBe('Employee');
});