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

  randomButtonDiv.appendChild(randomButton);
  episodeSelectorHeaderDiv.appendChild(randomButtonDiv);

  episodeSelectorHeaderDiv.style.gridTemplateColumns = "1.5fr 1fr 1fr";

  console.log(episodeSelectorHeaderDiv);
}

function clickRandomEpisode() {
  setTimeout(() => {
    // Modify this selector based on the structure of the Netflix website
    const episodeList = document.querySelectorAll(".titleCardList--container");

    const randomIndex = getRandomInt(0, episodeList.length - 1);
    const randomEpisode = episodeList[randomIndex];

    console.log(randomIndex);

    // Click on the random episode
    randomEpisode.click();
  }, 4000);
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
    // clickSeasonDropDown();
    // clickRandomEpisode();
  }, 3000);
});
