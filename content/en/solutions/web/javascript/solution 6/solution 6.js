import Island from "./solution 6/island.js";

export const islands = [
  new Island({ name: "Atlantis" }),
  new Island({
    name: "Maldives",
    country: "Maldives",
    imageUrl: "https://www.planetware.com/photos-large/SEY/best-islands-maldives.jpg",
  }),
  new Island({
    name: "Bora Bora",
    country: "French Polynesia",
    imageUrl: "https://www.planetware.com/photos-large/SEY/best-islands-bora-bora.jpg",
  }),
  new Island({
    name: "Seychelles",
    country: "Seychelles",
    imageUrl: "https://www.planetware.com/photos-large/SEY/best-islands-seychelles.jpg",
  }),
  new Island({
    name: "Diomede",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Little_Diomede_Island_village.jpeg/1280px-Little_Diomede_Island_village.jpeg",
  }),
];

const islandsContainer = document.getElementById("islandsContainer");

for (const island of islands) {
  console.log(island);
  const islandElement = document.createElement("div");
  islandElement.classList.add("island");

  const nameElement = document.createElement("h3");
  nameElement.textContent = island.name;
  islandElement.appendChild(nameElement);

  if (island.country) {
    const countryElement = document.createElement("p");
    countryElement.textContent = `Country: ${island.country}`;
    islandElement.appendChild(countryElement);
  }

  if (island.imageUrl) {
    const imageElement = document.createElement("img");
    imageElement.src = island.imageUrl;
    islandElement.appendChild(imageElement);
  }

  islandsContainer.appendChild(islandElement);
}
