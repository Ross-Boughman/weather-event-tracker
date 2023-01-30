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
      let cityArray = [];
      for (let i = 0; i < 5; i++) {
        let cities = data["_links"]["ua:item"][i]["name"]; // can change the array # to target a different city name
        let cityList = cities.toLowerCase(); // need to be lowercase for the image lookup
        cityArray.push(cityList);
        // pass the top 5 cities listed (alphabetical) to the imgSearch function for the .jpg
        // pass array of same 5 cities so able to iterate over the array as opposed to targetting individuals
      }
      imgSearch(cityArray);
    });
};

let imgSearch = function (cityArray) {
  for (let i = 0; i < 5; i++) {
    let name = cityArray[i];
    let urbanURL = rootURL + urban + image + name + call;
    fetch(urbanURL, {
      method: "GET",
      credentials: "same-origin",
      redirect: "follow",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let img = data["photos"][0]["image"]["mobile"]; // URLs of .jpg image based on city name (cityList)\
        if (i === 0) {
          let imagine = document.querySelector(".one");
          imagine.setAttribute("id", "cityimg");
          imagine.setAttribute("src", img);
        } else if (i === 1) {
          let imagine = document.querySelector(".one");
          imagine.setAttribute("id", "cityimg");
          imagine.setAttribute("src", img);
        } else if (i === 2) {
          let imagine = document.querySelector(".two");
          imagine.setAttribute("id", "cityimg");
          imagine.setAttribute("src", img);
        } else if (i === 3) {
          let imagine = document.querySelector(".three");
          imagine.setAttribute("id", "cityimg");
          imagine.setAttribute("src", img);
        } else if (i === 4) {
          let imagine = document.querySelector(".four");
          imagine.setAttribute("id", "cityimg");
          imagine.setAttribute("src", img);
        } else if (i === 5) {
          let imagine = document.querySelector(".five");
          imagine.setAttribute("id", "cityimg");
          imagine.setAttribute("src", img);
        }
      });
  }
};

citySearch();
