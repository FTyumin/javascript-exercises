const findTheOldest = function(arr) {
    if (!arr || arr.length === 0) {
        return undefined; // Handle empty or invalid arrays
    }
    let maxAge = 0;
    
    const currentYear = new Date().getFullYear();
    let oldestPerson;
    arr.forEach((person) => {
        // debugging purposes
        console.log("Processing:", person.name);
        
        let yearOfDeath = person.yearOfDeath || currentYear;
        let age = yearOfDeath - person.yearOfBirth;
        if(age>maxAge) {
            oldestPerson = person;
            maxAge=age;
        }
            
    })
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
