
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
    },

    post(newLocation) {
        return fetch(`${remoteURL}/locations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLocation)
        })
            .then(data => data.json())
    }
}

export default LocationManager