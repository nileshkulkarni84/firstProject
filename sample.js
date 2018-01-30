const MongoAdapter = require('./MongoAdapter.js');
const Employee = require('./Employee.js');
var adapter = new MongoAdapter();

// creation of employee object and calling save method
var employee = new Employee(adapter);
var employeeData = {"firstName": "Nitesh","lastName":"Patil","age":29};
employee.save(employeeData)
///return employee.save()
.then(function(employeeFromDb){
    employeeFromDb.firstName = "Nitesh1"
    console.log(employeeFromDb);
    employee.udpate(employeeFromDb);
})
