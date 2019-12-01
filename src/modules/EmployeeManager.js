const remoteURL = "http://localhost:5002"

const EmployeeManager = {
    get(id) {
        return fetch(`${remoteURL}/employees/${id}`).then(response => response.json())
    },

    getAll() {
        return fetch(`${remoteURL}/employees`).then(response => response.json())
    },

    delete(id) {
        return fetch(`${remoteURL}/employees/${id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    },

    post(newEmployee) {
        return fetch(`${remoteURL}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        })
            .then(data => data.json())
    }

}

export default EmployeeManager