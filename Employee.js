// class employee to store employee information
class Employee{
    // consturctor of employee class
    constructor(adapter){
        this.adapter = adapter
    }

    // returns firstName
    getFirstname(){
        return this.firstName;
    } 

    // returns lastName
    getLastName(){
        return this.lastName;
    }

    // returns age
    getAge(){
        return this.age;
    }


    // save the record to database
    save(employeeJSON){
        console.log("Inside save of employee");
        return this.adapter.save(employeeJSON)
        .then(function(employeeJSON){
            //return new Employee(savedJSON)
            console.log('data saved successfully');
            console.log(employeeJSON);
            return employeeJSON.ops[0];
        })            
    }

    udpate(employeeJSON){
        console.log("Inside updation of employee");
        var employee = employeeJSON;
        return this.adapter.update(employeeJSON)
        .then(function(employeeJSON){
            //return new Employee(savedJSON)
            console.log('data updated successfully');
            console.log(employee);
            //return employeeJSON.ops[0];
        })            
    }
}

module.exports = Employee;