const Engineer = require("../lib/Engineer");
const testEmployee = new Engineer("Warfa", "2932374" , "warfa60@gmail.com", "warfaha");

test("testing if new engineer object will work", () => {
    expect(testEmployee.name).toBe("Warfa");
    expect(testEmployee.id).toBe("2932374");
    expect(testEmployee.email).toBe("warfa60@gmail.com");
    expect(testEmployee.githubUsername).toBe("warfaha");
});

test("This test gets the name from getName", () => {
    expect(testEmployee.getName()).toBe("Warfa");
});

test("This test gets the id from getId", () => {
    expect(testEmployee.getId()).toBe("2932374");
});

test("This test gets the email from getEmail", () => {
    expect(testEmployee.getEmail()).toBe("warfa60@gmail.com");
});

test("This test gets the username from githubUsername", () => {
    expect(testEmployee.getGithubUsername()).toBe("warfaha");
});

test("This test gets the role from getRole", () => {
    expect(testEmployee.getRole()).toBe("Engineer");
});