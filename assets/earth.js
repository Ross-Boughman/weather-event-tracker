let rootURL = "https://api.teleport.org/api/";
let city = "/cities/";
let cityURL = rootURL + city;

fetch(cityURL, {
  method: "GET",
  credentials: "same-origin",
  redirect: "follow",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let cityList =
      data["_embedded"]["city:search-results"][0].matching_full_name;
    console.log(cityList);
  });
