const remoteURL = "http://localhost:5002"

const EmployeeManager = {
    get(id) {
        return fetch(`${remoteURL}/employees/${id}`).then(response => response.json())
    },

    getAll() {
        return fetch(`${remoteURL}/employees`).then(response => response.json())
    }

}

export default EmployeeManager