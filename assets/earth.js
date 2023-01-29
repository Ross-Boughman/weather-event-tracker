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
        imgSearch(cityList, cityArray);
        // pass the top 5 cities listed (alphabetical) to the imgSearch function for the .jpg
        // pass array of same 5 cities so able to iterate over the array as opposed to targetting individuals
      }
    });
};

let imgSearch = function (cityList, cityArray) {
  let urbanURL = rootURL + urban + image + cityList + call;
  fetch(urbanURL, {
    method: "GET",
    credentials: "same-origin",
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let image = data["photos"][0]["image"]["mobile"]; // URLs of .jpg image based on city name (cityList)
      console.log(image);
      let img = document.querySelector("#one");
      let img2 = document.querySelector("#two");
      let img3 = document.querySelector("#three");
      let img4 = document.querySelector("#four");
      let img5 = document.querySelector("#five");
      img.setAttribute("src", image);
      img2.setAttribute("src", image);
      img3.setAttribute("src", image);
      img4.setAttribute("src", image);
      img5.setAttribute("src", image);
      img.setAttribute("id", "cityimg");
      img2.setAttribute("id", "cityimg");
      img3.setAttribute("id", "cityimg");
      img4.setAttribute("id", "cityimg");
      img5.setAttribute("id", "cityimg");

      let name = document.createElement("a");
      name.innerHTML = cityList;
      console.log(name);
      img.appendChild(name);
      img2.appendChild(name);
      img3.appendChild(name);
      img4.appendChild(name);
      img5.appendChild(name);

      // img.appendChild(newImg);
    });
};

citySearch();
