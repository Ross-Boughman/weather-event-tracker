let rootURL = "https://api.teleport.org/api/";
let urban = "urban_areas/";
let image = "slug:";
let call = "/images/";
let nameURL = rootURL + urban;

let citySearch = function () {
  fetch(nameURL, {
    method: "GET",
    credentials: "same-origin",
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let cities = data["_links"]["ua:item"][3]["name"]; // can change the array # to target a different city name
      let cityList = cities.toLowerCase();
      console.log(cityList);
      imgSearch(cityList);
    });
};

let imgSearch = function (cityList) {
  let urbanURL = rootURL + urban + image + cityList + call;
  console.log(cityList);
  fetch(urbanURL, {
    method: "GET",
    credentials: "same-origin",
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let image = data["photos"][0]["image"]["mobile"];
      console.log(image);
      let newImg = document.createElement("img");
      newImg.setAttribute("src", image);
      let body = document.querySelector("body");
      body.appendChild(newImg);
      newImg.setAttribute("id", "cityimg");
    });
};

citySearch();
