let date = dayjs().format("ddd, MMM D, YYYY h:mm A");
const elem = document.querySelector('#testtext')
elem.innerText = date
let api = "tPrhy7CjHoxq1fl3lMARW0hvdCS0OyKHAIqP80Cs";
let catURL =
  "https://eonet.gsfc.nasa.gov/api/v2.1/categories?api_key=" +
  api;
 fetch(catURL +  1,
  ).then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
  });
let eveURL =
  "https://eonet.gsfc.nasa.gov/api/v2.1/events?api_key=" +
  api;
 fetch(eveURL +  1,
  ).then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let title = data.events[0].title
    console.log(data);
    console.log(title);
  });
  let layURL =
  "https://eonet.gsfc.nasa.gov/api/v2.1/layers?api_key=" +
  api;
 fetch(layURL +  1,
  ).then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
  });