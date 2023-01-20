var catUrl = "https://eonet.gsfc.nasa.gov/api/v2.1/categories";
var layUrl = "https://eonet.gsfc.nasa.gov/api/v2.1/layers";
var eveUrl = "https://eonet.gsfc.nasa.gov/api/v2.1/events";
function getApi() {
  fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events?per_page=10")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
function getApi() {
  fetch("https://eonet.gsfc.nasa.gov/api/v2.1/layers?per_page=10")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
function getApi() {
  fetch("https://eonet.gsfc.nasa.gov/api/v2.1/catergories?per_page=10")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
getApi(catUrl);
getApi(layUrl);
getApi(eveUrl);
