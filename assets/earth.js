let rootURL = "https://api.teleport.org/api/";
let city = "cities/";
let urban = "urban_areas/";
let image = "slug:";
let call = "/images/";
let cityURL = rootURL + city;
let urbanURL = rootURL + urban + image + "albuquerque" + call;

let citySearch = function () {
  fetch(cityURL, {
    method: "GET",
    credentials: "same-origin",
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let cityList =
        data["_embedded"]["city:search-results"][0].matching_full_name;
      console.log(data);
    });
};

let imgSearch = function (cityList) {
  citySearch(cityList);
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
      let body = document.querySelector(".block");
      body.appendChild(newImg);
    });
};

imgSearch();