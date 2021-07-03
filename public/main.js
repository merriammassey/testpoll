const form = document.getElementById("vote-form");

//Form submit event
form.addEventListener("submit", (e) => {
  //console.log($('input[name="restaurant"]:checked').serialize());
  //const choice = $('input[name="restaurant"]:checked').serialize();
  const choice = document.querySelector('input[name="restaurant"]:checked')
    .value;
  const data = { restaurant: choice };
  //const data = choice;
  console.log(data);

  fetch("http://localhost:3000/poll", {
    method: "POST",
    //body: data,
    //body: JSON.stringify(data),
    //body: JSON.parse(data),
    //body: JSON.parse(data.trim()),
    //body: data.json(),
    //body: data,
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  })
    //.then((res) => res.text())
    .then((res) => res.json())
    //.then((data) => console.log(data))
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  //console.log(data);
  e.preventDefault();
});
//in video 2 5:23 there is }) after prevent default

//v3 13m get request
fetch("http://localhost:3000/poll")
  //.then((res) => res.text())
  //.then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
//const votes = data.votes;
//console.log(vote.points);
//for chart text
//const totalVotes = votes.length;
//count votes points for each option - take in accumulator and current value
/* const votesCounts = votes.reduce(
  (acc, vote) => (
    (acc[vote.restaurant] =
      (acc[vote.restaurant] || 0) + parseInt(vote.points)),
    //(acc[vote.restaurant] || 0) + vote.points),
    acc
  ),
  {}
); */

//chart this was under the first req prevent default and brackets in video 2
let dataPoints = [
  { y: 1, label: "Maskadores" },
  { y: 2, label: "munichGyro" },
  { y: 3, label: "Starbucks" },
  { y: 4, label: "Other" },
];

const chartContainer = document.querySelector("#chartContainer");

if (chartContainer) {
  const chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "theme1",
    title: {
      //will show number of votes from database
      //text: `Total Votes ${totalVotes}`,
      text: "Total Votes: 6",
    },
    data: [
      {
        type: "column",
        dataPoints: dataPoints,
      },
    ],
  });
  chart.render();
}
//this curly added
// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher("3cb02dbd0c542bff3bd5", {
  cluster: "us3",
});

var channel = pusher.subscribe("tastebuds");
channel.bind("tastebudsvote", function (data) {
  dataPoints = dataPoints.map((x) => {
    if (x.label == data.restaurant) {
      x.y += data.points;
      return x;
    } else {
      return x;
    }
  });
  chart.render();
});
//}
//});
