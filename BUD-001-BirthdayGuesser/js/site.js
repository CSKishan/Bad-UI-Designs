let count = 0;
let date;
let DateList = [];

const rBday = document.getElementById("rBday");
const pBday = document.getElementById("pBday");
const gC = document.getElementById("guessCount");
const laterList = document.getElementById("later");
const earlierList = document.getElementById("earlier");
const eBtn = document.getElementById("earlyBtn");
const lBtn = document.getElementById("lateBtn");

function GetDate() {
  CalculateDate();
  DisplayOnScreen();
}

function CalculateDate(start = new Date(1970, 1, 1), end = new Date()) {
  do {
    date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  } while (DateList.includes(date) === true);
  DateList.push(date);
}

function DisplayOnScreen() {
    let stringDate = date.toDateString();
  rBday.innerHTML = stringDate;
}

function AddToEarlyList() {
  let dateString = date.toDateString();
  var node = document.createElement("li");
  var textnode = document.createTextNode(dateString);
  node.appendChild(textnode);
  earlierList.appendChild(node);
  count++;
  gC.innerHTML = `No. of Guesses: ${count}`;
  CalculateDate(new Date(1970, 1, 1), new Date(dateString));
  DisplayOnScreen();
}

function AddToLateList() {
    let dateString = date.toDateString();
    let node = document.createElement("LI");
    let textnode = document.createTextNode(dateString);
    node.appendChild(textnode);
    laterList.appendChild(node);
    count++;
    gC.innerHTML = `No. of Guesses: ${count}`;
    CalculateDate(new Date(dateString), new Date());
    DisplayOnScreen();
}

function StopGuess() {
    let dateString = date.toDateString();
    pBday.innerHTML = dateString;
    eBtn.disabled = true;
    lBtn.disabled = true;
}
