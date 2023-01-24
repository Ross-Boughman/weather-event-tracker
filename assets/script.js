var catUrl = "https://eonet.gsfc.nasa.gov/api/v2.1/categories";
var layUrl = "https://eonet.gsfc.nasa.gov/api/v2.1/layers";
var eveUrl = "https://eonet.gsfc.nasa.gov/api/v2.1/events";
function getApi() {
  fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events?api_key=tPrhy7CjHoxq1fl3lMARW0hvdCS0OyKHAIqP80Cs_per_page=10")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
function getApi() {
  fetch("https://eonet.gsfc.nasa.gov/api/v2.1/layers?api_key=tPrhy7CjHoxq1fl3lMARW0hvdCS0OyKHAIqP80Cs_per_page=10")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
function getApi() {
  fetch("https://eonet.gsfc.nasa.gov/api/v2.1/catergories?api_key=tPrhy7CjHoxq1fl3lMARW0hvdCS0OyKHAIqP80Cs_per_page=10")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
function getApi() {
  fetch("https://api.nasa.gov/planetary/earth/imagery?api_key=tPrhy7CjHoxq1fl3lMARW0hvdCS0OyKHAIqP80Cs")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
getApi(catUrl);
getApi(layUrl);
getApi(eveUrl);
// https://api.nasa.gov/planetary/apod?api_key=tPrhy7CjHoxq1fl3lMARW0hvdCS0OyKHAIqP80Cs