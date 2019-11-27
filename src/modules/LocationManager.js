const remoteURL = "http://localhost:5002"

const LocationManager = {
    get(id) {
        return fetch(`${remoteURL}/locations/${id}`).then(response => response.json())
    },

    getAll() {
        return fetch(`${remoteURL}/locations`).then(response => response.json())
    },

    delete(id) {
        return fetch(`${remoteURL}/locations/${id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    }
}

export default LocationManager