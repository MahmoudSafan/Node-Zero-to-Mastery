// Load planets and return as JSON.
const API_URL = `http://127.0.0.1:8000`;

async function httpGetPlanets() {
    await fetch(`${API_URL}/getAllPlanets`)
        .then((result) => {
            return result;
        }).catch((err) => {
            return err
        });
    // return await response.json();

}

async function httpGetLaunches() {
    // TODO: Once API is ready.
    // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
    // TODO: Once API is ready.
    // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
    // TODO: Once API is ready.
    // Delete launch with given ID.
}

export {
    httpGetPlanets,
    httpGetLaunches,
    httpSubmitLaunch,
    httpAbortLaunch,

};