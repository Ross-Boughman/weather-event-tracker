// Public API with information on cities around the world

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
      for (let i = 0; i < 5; i++) {
        let cities = data["_links"]["ua:item"][i]["name"]; // can change the array # to target a different city name
        let cityList = cities.toLowerCase();
        imgSearch(cityList);
      }
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
      let image = data["photos"][0]["image"]["mobile"];
      let newImg = document.createElement("img");
      let name = document.createElement("p");
      name.innerHTML = cityList;
      console.log(name);
      newImg.setAttribute("src", image);
      let body = document.querySelector("#imagespace");
      body.appendChild(newImg);
      newImg.setAttribute("id", "cityimg");
      body.appendChild(name);
    });
};

citySearch();
