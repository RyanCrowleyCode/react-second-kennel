const baseURL = "http://localhost:5002"

const LocationManager = {
    get(id) {
        return fetch(`${baseURL}/locations/${id}`).then(response => response.json())
    },

    getAll() {
        return fetch(`${baseURL}/locations`)
    }
}

export default LocationManager