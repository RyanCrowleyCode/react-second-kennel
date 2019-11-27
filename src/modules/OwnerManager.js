const baseURL = "http://localhost:5002"

const OwnerManager = {
    get(id) {
        return fetch(`${baseURL}/owners/${id}`).then(response => response.json())
    },

    getAll() {
        return fetch(`${baseURL}/owners`).then(response => response.json())
    },

    delete(id) {
        return fetch(`${baseURL}/owners/${id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    }
}

export default OwnerManager