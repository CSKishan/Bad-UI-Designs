let count = 0;
let date = new Date();
let earlyDateList = [];
let lateDateList = [];
let lowDate = new Date(1970, 1, 1);
let highDate = new Date();

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

function SortList() {
  earlySortList();
  lateSortList();
}

function earlySortList() {
  earlyDateList.sort(function (a, b) {
    return new Date(a) - new Date(b);
  });
}

function lateSortList() {
  lateDateList.sort(function (a, b) {
    return new Date(b) - new Date(a);
  });
}

function CalculateDate(start = new Date(1970, 1, 1), end = new Date()) {
  do {
    date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  } while (
    earlyDateList.includes(date) === true ||
    lateDateList.includes(date) == true
  );
  SortList();
  console.warn(lowDate.toDateString());
  console.warn(highDate.toDateString());
}

function DisplayOnScreen() {
  let stringDate = date.toDateString();
  console.error(stringDate);
  rBday.innerHTML = stringDate;
}

function AddToEarlyList() {
  let dateString = date.toDateString();
  earlyDateList.push(dateString);
  var node = document.createElement("li");
  var textnode = document.createTextNode(dateString);
  node.appendChild(textnode);
  earlierList.appendChild(node);
  count++;
  gC.innerHTML = `No. of Guesses: ${count}`;
  SortList();
  highDate = new Date(earlyDateList[0]);
  CalculateDate(lowDate, highDate);
  DisplayOnScreen();
}

function AddToLateList() {
  let dateString = date.toDateString();
  lateDateList.push(dateString);
  let node = document.createElement("LI");
  let textnode = document.createTextNode(dateString);
  node.appendChild(textnode);
  laterList.appendChild(node);
  count++;
  gC.innerHTML = `No. of Guesses: ${count}`;
  SortList();
  lowDate = new Date(lateDateList[0]);
  CalculateDate(lowDate, highDate);
  DisplayOnScreen();
}

function StopGuess() {
  let dateString = date.toDateString();
  pBday.innerHTML = dateString;
  eBtn.disabled = true;
  lBtn.disabled = true;
}
