let date = dayjs().format("ddd, MMM D, YYYY h:mm A");
const elem = document.querySelector("#timetext");
elem.innerText = date;
let api = "tPrhy7CjHoxq1fl3lMARW0hvdCS0OyKHAIqP80Cs";

function getCat(num) {
  let catURL = `https://eonet.gsfc.nasa.gov/api/v2.1/categories/${num}`;
  fetch(catURL)
    .then(function (response) {
      console.log("CLICKED " + num);
      return response.json();
    })
    .then(function (data) {
      let title = [];
      let cat = [];
      let loc = [];
      let date = [];
      let link = [];
      for (i = 0; i < 10; i++) {
        title[i] = data.events[i].title;
        cat[i] = data.events[i].categories[0].title;
        loc[i] = data.events[i].geometries[0].coordinates;
        date[i] = data.events[i].geometries[0].date;
        link[i] = data.events[i].sources[0].url;
        localStorage.setItem("title-" + [i], title[i]);
        localStorage.setItem("cat-" + [i], "Category: " + cat[i]);
        localStorage.setItem("loc-" + [i], "Coordinates: " + loc[i]);
        localStorage.setItem("date-" + [i], "Date and Time: " + date[i]);
        localStorage.setItem("link-" + [i], link[i]);
        document.getElementById("event-title-" + [i]).innerHTML =
          localStorage.getItem("title-" + [i]);
        document.getElementById("event-category-" + [i]).innerHTML =
          localStorage.getItem("cat-" + [i]);
        document.getElementById("event-location-" + [i]).innerHTML =
          localStorage.getItem("loc-" + [i]);
        document.getElementById("event-date-" + [i]).innerHTML =
          localStorage.getItem("date-" + [i]);
        document.getElementById("event-link-" + [i]).innerHTML =
          localStorage.getItem("link-" + [i]);
      }
      dojo.addOnLoad(title[i]);
      dojo.addOnLoad(cat[i]);
      dojo.addOnLoad(loc[i]);
      dojo.addOnLoad(date[i]);
      dojo.addOnLoad(link[i]);
    });
}

let eveURL = "https://eonet.gsfc.nasa.gov/api/v2.1/events?api_key=" + api;
function getEve() {
  fetch(eveURL + 1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let title = [];
      let cat = [];
      let loc = [];
      let date = [];
      let link = [];
      for (i = 0; i < 10; i++) {
        title[i] = data.events[i].title;
        cat[i] = data.events[i].categories[0].title;
        loc[i] = data.events[i].geometries[0].coordinates;
        date[i] = data.events[i].geometries[0].date;
        link[i] = data.events[i].sources[0].url;
        localStorage.setItem("title-" + [i], title[i]);
        localStorage.setItem("cat-" + [i], "Category: " + cat[i]);
        localStorage.setItem("loc-" + [i], "Coordinates: " + loc[i]);
        localStorage.setItem("date-" + [i], "Date and Time: " + date[i]);
        localStorage.setItem("link-" + [i], link[i]);
        document.getElementById("event-title-" + [i]).innerHTML =
          localStorage.getItem("title-" + [i]);
        document.getElementById("event-category-" + [i]).innerHTML =
          localStorage.getItem("cat-" + [i]);
        document.getElementById("event-location-" + [i]).innerHTML =
          localStorage.getItem("loc-" + [i]);
        document.getElementById("event-date-" + [i]).innerHTML =
          localStorage.getItem("date-" + [i]);
        document.getElementById("event-link-" + [i]).innerHTML =
          localStorage.getItem("link-" + [i]);
      }
      dojo.addOnLoad(title[i]);
      dojo.addOnLoad(cat[i]);
      dojo.addOnLoad(loc[i]);
      dojo.addOnLoad(date[i]);
      dojo.addOnLoad(link[i]);
    });
}
getEve();
document.getElementById("ice").addEventListener("click", () => {
  document.getElementById("pageType").textContent = "SEA AND LAKE ICE"
  var num = 15;
  return getCat(num);
});
document.getElementById("storm").addEventListener("click", () => {
  document.getElementById("pageType").textContent = "SEVERE STORMS"
  var num = 10;
  return getCat(num);
});
document.getElementById("volcano").addEventListener("click", () => {
  document.getElementById("pageType").textContent = "VOLCANOES"
  var num = 12;
  return getCat(num);
});
document.getElementById("wildfire").addEventListener("click", () => {
  document.getElementById("pageType").textContent = "WILDFIRES"
  var num = 8;
  return getCat(num);
});
 document.getElementById("homeBtn").addEventListener("click", () => {
  document.getElementById("pageType").textContent = "ALL CATEGORIES SHOWN"
   return getEve();
});
document.getElementById("searchbutton").addEventListener("click", (e) => {
var anyresult = false; 
  var searchvalue= document.getElementById("Search-text").value;
if("Sea & Lake Ice".toUpperCase().includes(searchvalue.toUpperCase())){
  document.getElementById("search-ice").style.visibility = "visible"; 
  anyresult = true;
}else{
  document.getElementById("search-ice").style.visibility = "hidden";
}
if("Severe Storms".toUpperCase().includes(searchvalue.toUpperCase())){
  document.getElementById("search-storm").style.visibility = "visible";
  anyresult = true;
}else{
  document.getElementById("search-storm").style.visibility = "hidden";
}
if("Volcanoes".toUpperCase().includes(searchvalue.toUpperCase())){
  document.getElementById("search-volcano").style.visibility = "visible";
  anyresult = true;
}else{
  document.getElementById("search-volcano").style.visibility = "hidden";
}
if("Wildfires".toUpperCase().includes(searchvalue.toUpperCase())){
  document.getElementById("search-wildfire").style.visibility = "visible";
  anyresult = true;
}else{
  document.getElementById("search-wildfire").style.visibility = "hidden";
}
if(anyresult) {
document.getElementById("search-container").style.visibility = "visible";


}else{
  document.getElementById("search-container").style.visibility = "hidden";
}
});

