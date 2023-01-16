const Intern = require("../lib/Intern");
const testEmployee = new Intern("Warfa", "2932374" , "warfa60@gmail.com", "Westerville");

test('testing if new intern object will work', () => {
    expect(testEmployee.name).toBe('Warfa');
    expect(testEmployee.id).toBe('2932374');
    expect(testEmployee.email).toBe('warfa60@gmail.com');
    expect(testEmployee.school).toBe("Westerville");
});

test('This test gets the name from getName', () => {
    expect(testEmployee.getName()).toBe('Warfa');
});

test('This test gets the id from getId', () => {
    expect(testEmployee.getId()).toBe('2932374');
});

test('This test gets the id from getEmail', () => {
    expect(testEmployee.getEmail()).toBe('warfa60@gmail.com');
});

test('This test gets the school name from getSchool', () => {
    expect(testEmployee.getSchool()).toBe('Westerville');
});

test('This test gets the role from getRole', () => {
    expect(testEmployee.getRole()).toBe('Intern');
});