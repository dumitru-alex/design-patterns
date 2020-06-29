export function filterEmployees(httpClient, filters) {
    try {
        filters = removeDuplicateFilters(filters);
        // Good (function responsibility)
        httpClient.get("/api/employees").then(employees => {
            let result = applyFilters(employees);
            return result;
            // BAD 2 (presentation logic)
            let list = document.getElementById("employees-list");
            result.forEach(employee => {
                let employeeItem = document.createElement("li");
                employeeItem.innerHTML = `<strong>${employee.lastName}</strong> ${employee.firstName}`;
                list.appendChild(employeeItem);
            });
            //BAD 3 (handling the persistance layer - i.e. file/db/api read/write outside the responsibility)
            result.forEach(employee => {
                httpClient.post("/api/employees/record", employee);
            });
            // BAD 1 (error handling)
        }).catch(err => {
            console.error("error");
            let messageBox = new MessageBox();
            messageBox.show("Error");
        })
    }
    // BAD 1(error handling)
    catch(err) {
        console.error("error");
        let messageBox = new MessageBox();
        messageBox.show("Error");
    }
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