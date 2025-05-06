import { setLocationObject } from "./dataFunctions.js";
import { addSpinner, displayError} from "./domFunctions.js";
import CurrentLocation from "./CurrentLocation.js"
const currentLoc = new CurrentLocation();

const initApp = () => {
    //add listeners
    const geoButton = document.getElementById("getLocation");
    geoButton.addEventListener("click", getGeoweather);
    // set up

    //load weather
};

document.addEventListener("DOMContentLoaded", initApp)

const getGeoweather = (event) => {
    if(event){
        if(event.type === "click"){
            const mapIcon = document.querySelector(".fa-map-marker-alt");
            addSpinner(mapIcon);
        }
    }
    if(!navigator.geolocation) geoError();
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};

const geoError = (errObj) => {
    const errMsg = errObj ? errObj.message : "Geolocation not supported";
    displayError(errMsg, errMsg);
};

const geoSuccess = (position) => {
    const myCoords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        name: `Lat:${position.coords.latitude} Long:${position.coords.longitude}`   
    };
    setLocationObject(currentLoc, myCoords);
    console.log(currentLoc);
    updateDataAndDisplay(currentLoc);
};

const updateDataAndDisplay = async (locationObj) => {
    //const weatherJson = await getWeatherFromCoords(locationObj);
    //if(weatherJson) updateDisplay(weatherJson, locationObj);
}

