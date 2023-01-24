let date = dayjs().format("YYYY-MM-DD");
let api = "?api_key=tPrhy7CjHoxq1fl3lMARW0hvdCS0OyKHAIqP80Cs";
let queryURL =
  "https://api.nasa.gov/planetary/earth/assets?date=" +
  date +
  "&api_key=" +
  api;

fetch(queryURL, {
  method: "GET", //GET is the default.
  credentials: "same-origin", // include, *same-origin, omit
  redirect: "follow", // manual, *follow, error
})
  .then(function (response) {
    return response.json(); // console log response before returning to troubleshoot! See what server is sending you
  })
  .then(function (data) {
    console.log(data);
  });
