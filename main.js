// Baby Names Data (Top 50 Boy/Girl 2022)
// Baby Center (babycenter.com)
// https://www.babycenter.com/baby-names/most-popular/top-baby-names#popularNameList

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("name-count");

// Initialize Array of Character Objects from json file
let babyData = [];
fetch("baby-names-data.json")
    .then((res) => res.json())
    .then((data) => (babyData = data));

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "gender") {
    searchGender();
  } else if (selection === "rank") {
    searchRank();
  } else if (selection === "starting-letter") {
    searchStartingLetter();
  } else if (selection === "length") {
    searchLength();
  }
}

// Display All Baby Names
function displayAll() {
  console.log("Display All");
  let htmlStr = "";
  nameCountSpan.innerHTML = babyData.length + " <br>";
  for (let i = 0; i < babyData.length; i++){
    htmlStr += babyData[i].name.bold() + " (Rank: " + babyData[i].rank + ", Gender: "+ babyData[i].gender + ")"+ " <br> ";
  }
  container.innerHTML = htmlStr;
  // Confirm data load
  console.log(babyData);
}

// Display Names by Gender
function searchGender() {
  let person = prompt("Please enter gender (Boy/Girl):");
  let htmlStr = "";
  let t = 0
  if (person === "Girl") {
    for (let i = 0; i < babyData.length; i++) {
      if (babyData[i].gender === "Girl") {
        t += 1
        htmlStr += babyData[i].name.bold() + " (Rank: " + babyData[i].rank + ", Gender: " + babyData[i].gender + ")" + " <br> ";
      }
    }
  }
  if (person === "Boy") {
    for (let i = 0; i < babyData.length; i++) {
      if (babyData[i].gender === "Boy") {
        htmlStr += babyData[i].name.bold() + " (Rank: " + babyData[i].rank + ", Gender: " + babyData[i].gender + ")" + " <br> ";
        t += 1
      }
    }
  }
  nameCountSpan.innerHTML = String(t) + " <br>";
  container.innerHTML = htmlStr;
  console.log("Search By Gender");
}

// Display Names within a Range of Ranks
function searchRank() {
  let min = prompt("Please enter minimum rank:");
  let max = prompt("Please enter maximum rank:")
  let htmlStr = "";
  let t = 0
  for (let i = 0; i < babyData.length; i++) {
    if (babyData[i].rank >= min && babyData[i].rank <= max) {
      t += 1
      htmlStr += babyData[i].name.bold() + " (Rank: " + babyData[i].rank + ", Gender: " + babyData[i].gender + ")" + " <br> ";
    }
  }
  nameCountSpan.innerHTML = String(t) + " <br>";
  container.innerHTML = htmlStr;
  console.log("Search By Rank");
}

// Display Names with Starting Letter
function searchStartingLetter() {
  let start = prompt("Please enter starting letter:")
  let htmlStr = "";
  let t = 0
  for (let i = 0; i < babyData.length; i++) {
    if (babyData[i].name.startsWith(start) ) {
      t += 1
      htmlStr += babyData[i].name.bold() + " (Rank: " + babyData[i].rank + ", Gender: " + babyData[i].gender + ")" + " <br> ";
    }
  }
  nameCountSpan.innerHTML = String(t) + " <br>";
  container.innerHTML = htmlStr;
  console.log("Search by Starting Letter");
}

// Display Names with a Specific Length
function searchLength() {
  let len = prompt("Please enter name length:")
  let htmlStr = "";
  let t = 0
  for (let i = 0; i < babyData.length; i++) {
    if (babyData[i].name.length == len ) {
      t += 1
      htmlStr += babyData[i].name.bold() + " (Rank: " + babyData[i].rank + ", Gender: " + babyData[i].gender + ")" + " <br> ";
    }
  }
  nameCountSpan.innerHTML = String(t) + " <br>";
  container.innerHTML = htmlStr;
  console.log("Search by Name Length");
}
