function filterEmployees(data, criteria) {
    const employeesData = JSON.parse(data);
    const [criteriaKey, criteriaValue] = criteria.split('-');
    let counter = 0;

    if (criteria !== 'all') {
        employeesData.forEach(employee => {
            const currValue = employee[criteriaKey];

            if (currValue === criteriaValue) {
                print(employee);
            }
        });

    } else {
        employeesData.forEach(employee => {
            print(employee);
        });
    }

    function print(employee) {
        console.log(`${counter}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        counter++;
    }
}

filterEmployees(`[{

    "id": "1",
    
    "first_name": "Kaylee",
    
    "last_name": "Johnson",
    
    "email": "k0@cnn.com",
    
    "gender": "Female"
    
    }, {"id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female" }, { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]`, 'last_name-Johnson');