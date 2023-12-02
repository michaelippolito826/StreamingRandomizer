// content.js
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomEpisodeButton() {
  let episodeSelectorHeaderDiv = document.querySelector(
    ".episodeSelector-header"
  );

  let randomButtonDiv = document.createElement("div");
  let randomButton = document.createElement("button");

  randomButtonDiv.className = "randomButtonDiv";

  randomButton.innerText = "Random Episode";

  randomButton.style.fontFamily =
    "Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif";
  randomButton.style.fontSize = "18px";
  randomButton.style.borderRadius = "0.2em";
  randomButton.style.padding = "0.5em 1em";
  randomButton.style.minWidth = "4em";
  randomButton.style.float = "right";
  randomButton.style.boxSizing = "border-box";
  randomButton.style.backgroundColor = "rgb(36, 36, 36)";
  randomButton.style.border = "0.1em solid rgb(77, 77, 77)";
  randomButton.style.width = "200px";
  randomButton.style.height = "40px";
  randomButton.style.maxHeight = "100px";
  randomButton.style.maxWidth = "200px";
  randomButton.style.paddingTop = "7px";
  randomButton.style.fontWeight = "bold";

  randomButtonDiv.appendChild(randomButton);
  episodeSelectorHeaderDiv.appendChild(randomButtonDiv);

  episodeSelectorHeaderDiv.style.gridTemplateColumns = "1.5fr 1fr 1fr";

  randomButton.addEventListener("click", function () {
    clickSeasonDropDown();
    clickRandomEpisode();
  });
}

function clickRandomEpisode() {
  document.addEventListener("DOMContentLoaded", function () {
    const episodeList = document.querySelectorAll(".titleCardList--container");

    const randomIndex = getRandomInt(0, episodeList.length - 1);
    const randomEpisode = episodeList[randomIndex];

    console.log(episodeList.length);
    console.log(randomIndex);

    // Click on the random episode
    randomEpisode.click();
  });
}

function clickSeasonDropDown() {
  // Check if multiple seasons exists
  const seasonListDropdown = document.querySelectorAll(".dropdown-toggle");
  seasonListDropdown[0].click();

  // Click "See All Episodes" button (which should hopefully be the last button in the ul)
  const seasonButtonUl = document.querySelector('[data-uia="dropdown-menu"]');
  const seeAllEpisodesButton =
    seasonButtonUl.children[seasonButtonUl.children.length - 1];

  seeAllEpisodesButton.click();
}

// Execute the function when the Netflix page is loaded
window.addEventListener("load", () => {
  // Adjust the delay based on the structure and loading time of the Netflix website
  setTimeout(() => {
    randomEpisodeButton();
  }, 3000);
});
