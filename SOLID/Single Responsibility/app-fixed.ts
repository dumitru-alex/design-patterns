var httpClient = new HttpClient();
filterEmployees(httpClient, []).then(employees => {
    displayEmployees(employees);
    recordEmployee(employees, httpClient);
});

export function filterEmployees(httpClient, filters): Promise<any> {
    try {
        filters = removeDuplicateFilters(filters);
        httpClient.get("/api/employees").then(employees => {
            let result = applyFilters(employees);
            return result;
        }).catch(err => {
            handleError(err, "error message");
        })
    }
    catch(err) {
        handleError(err, "error message");
        return;
    }
}

function recordEmployee(result: any[], httpClient: any) {
    result.forEach(employee => {
        httpClient.post("/api/employees/record", employee);
    });
}

function displayEmployees(result: any[]) {
    let list = document.getElementById("employees-list");
    result.forEach(employee => {
        let employeeItem = document.createElement("li");
        employeeItem.innerHTML = `<strong>${employee.lastName}</strong> ${employee.firstName}`;
        list.appendChild(employeeItem);
    });
}

function handleError(err, msg) {
    console.error(msg);
    let messageBox = new MessageBox();
    messageBox.show(msg);
}

function removeDuplicateFilters(filters){
    // placeholder
}

function applyFilters(filters): any[] {
    return [];
}

export class MessageBox {
    show(msg) {
    } 
}