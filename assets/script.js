let date = dayjs().format("ddd, MMM D, YYYY h:mm A");
const elem = document.querySelector("#testtext");
elem.innerText = date;
let api = "tPrhy7CjHoxq1fl3lMARW0hvdCS0OyKHAIqP80Cs";
let catURL = "https://eonet.gsfc.nasa.gov/api/v2.1/categories?api_key=" + api;
fetch(catURL + 1)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
  });
let eveURL = "https://eonet.gsfc.nasa.gov/api/v2.1/events?api_key=" + api;
fetch(eveURL + 1)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let title0 = data.events[0].title;
    localStorage.setItem("title-0", title0);
    document.getElementById("event-title-0").innerHTML =
      localStorage.getItem("title-0");
    let title1 = data.events[1].title;
    localStorage.setItem("title-1", title1);
    document.getElementById("event-title-1").innerHTML =
      localStorage.getItem("title-1");
    let cat0 = data.events[0].categories[0].title;
    localStorage.setItem("cat-0", cat0);
    document.getElementById("event-category-0").innerHTML =
      localStorage.getItem("cat-0");
    let cat1 = data.events[1].categories[0].title;
    localStorage.setItem("cat-1", cat1);
    document.getElementById("event-category-1").innerHTML =
      localStorage.getItem("cat-1");
    let loc0 = data.events[0].geometries[0].coordinates;
    localStorage.setItem("loc-0", loc0);
    document.getElementById("event-location-0").innerHTML =
      localStorage.getItem("loc-0");
    let loc1 = data.events[1].geometries[0].coordinates;
    localStorage.setItem("loc-1", loc1);
    document.getElementById("event-location-1").innerHTML =
      localStorage.getItem("loc-1");
    let date0 = data.events[0].geometries[0].date;
    localStorage.setItem("date-0", date0);
    document.getElementById("event-date-0").innerHTML =
      localStorage.getItem("date-0");
    let date1 = data.events[1].geometries[0].date;
    localStorage.setItem("date-1", date1);
    document.getElementById("event-date-1").innerHTML =
      localStorage.getItem("date-1");
    let link0 = data.events[0].sources[0].url;
    localStorage.setItem("link-0", link0);
    document.getElementById("event-link-0").innerHTML =
      localStorage.getItem("link-0");
    let link1 = data.events[1].sources[0].url;
    localStorage.setItem("link-1", link1);
    document.getElementById("event-link-1").innerHTML =
      localStorage.getItem("link-1");
  });
let layURL = "https://eonet.gsfc.nasa.gov/api/v2.1/layers?api_key=" + api;
fetch(layURL + 1)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
  });
