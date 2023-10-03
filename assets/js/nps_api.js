
var baseURL = 'https://developer.nps.gov/api/v1';
var apiKey = 'GpXBVOoADabZe6DAWf2atfIHqSzsdyDMWejfa9rK'

function getStates(){
    const url = 'https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json'
    fetch(url).then(function(response) {
        return response.json()
    })
    .then(function(data) {
    var options = '<option value="">Select a State</option>';
    for (const key in data) {
        options+= `<option value=${key}>${data[key]}</option>`
    }
    document.querySelector('#state-option').innerHTML=options;
    getSelectedState();
    })
    .catch(function(error) {
        console.log(error);
    })
}

function getSelectedState() {
    document.querySelector('#state-option').addEventListener('change', function(event) {
        console.log(event.target.value);
        getParks(event.target.value);
    })
}

function getParks(state) {
    const requestUrl = `${baseURL}/parks?q=${state}&api_key=${apiKey}`
    fetch(requestUrl).then(function(response) {
        return response.json()
    })
    .then(function(data) {
    console.log(data)
    })
    .catch(function(error) {
        console.log(error);
    })
}

function getParkActivites() {
    const requestUrl = `${baseURL}/activities/parks?api_key=${apiKey}`;
    fetch(requestUrl).then(function(response) {
        return response.json()
    })
    .then(function(data) {
    console.log(data)
    })
}

function getParkAlerts() {
    const requestUrl = `${baseURL}/alerts?api_key=${apiKey}`;
    fetch(requestUrl).then(function (response) {
        return response.json()
    })
    .then(function(data) {
    console.log(data)
    })
}

function getParkAmenities() {
    const requestUrl = `${baseURL}/amenities?api_key=${apiKey}`;
    fetch(requestUrl).then(function (response) {
        return response.json()
    })
    .then(function(data) {
    console.log(data)
    })
}



function getGallery() {

}

getStates();
// getParks();
// getParkAmenities();
// getParkAlerts();
// getParkActivites();