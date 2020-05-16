//If anyone is looking at this and wondering why I'm not just doing
//seperate pages: I just really wanted an excuse to use Javascript.

const navButtons = document.getElementsByClassName('navbtn');
const infoBoxes = document.getElementsByClassName('infobox');
const boxNames = {
  ABOUT: 0,
  RESUME: 1,
  PROJECTS: 2,
  SHOUTOUTS: 3,
};

//defines the currently visible box
let visibleBox = infoBoxes[boxNames.ABOUT];

//switches the visible infoBox
function switchBoxes(boxNum) {
  visibleBox.style.display = "none";
  visibleBox = infoBoxes[boxNum];
  visibleBox.style.display = "block";
  return `Switched infoBox to ${boxNum}`;
}

// bit over-engineered, but it saves me from having to add the attribute manually
for(i = 0; i < navButtons.length; i++) {
  navButtons[i].setAttribute("onclick", `switchBoxes(${i})`);
  console.log("Added click attribute");
}
