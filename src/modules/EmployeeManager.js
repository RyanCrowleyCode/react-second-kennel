const baseURL = "http://localhost5002"

const EmployeeManager = {
    get(id) {
        return fetch(`${baseURL}/employees/${id}`).then(response => response.json())
    },

    getAll() {
        return fetch(`${baseURL}/employees`).then(response => response.json())
    }

}

export default EmployeeManager