const Card = document.getElementById("Container");
const DropdownBoss = document.getElementById("Boss");
const Next = document.getElementById("Next");
const Prev = document.getElementById("Prev");

let PageNumber = 0;
const NextButton = () => {
  PageNumber++;
  return PageNumber;
};
const PrevButton = () => {
  PageNumber--;
  return PageNumber;
};
//

const BossCard = async () => {
  const BossUrl = `https://eldenring.fanapis.com/api/bosses?limit=20&page=${PageNumber}`;
  const FetchBoss = await fetch(BossUrl);
  const BossJson = await FetchBoss.json();
  const BossData = BossJson.data;
  for (let Data of BossData) {
    const BossOption = document.createElement("option");
    BossOption.value = Data.id;
    BossOption.innerText = Data.name;
    DropdownBoss.appendChild(BossOption);
    const BossCard = document.createElement("div");
    const BossName = document.createElement("h2");
    const BossPicture = document.createElement("img");
    const BossDescription = document.createElement("p");
    const BossLocation = document.createElement("p");
    const BossDropsSec = document.createElement("div");
    const BossDrops = document.createElement("p");
    BossCard.className = "BossCard";
    BossName.innerText = Data.name;
    BossPicture.src = Data.image;
    BossDescription.innerText = "Description: " + Data.description;
    BossLocation.innerText = "Location: " + Data.region;
    BossDrops.innerText = "Drops: " + Data.drops;
    BossDropsSec.className = "BossDrops";
    BossDropsSec.append(BossDrops);
    BossCard.append(
      BossName,
      BossPicture,
      BossDescription,
      BossLocation,
      BossDropsSec
    );
    Card.append(BossCard);
  }
};

const NextPage = () => {
  Card.innerHTML = null;
  NextButton();
  BossCard();
};
const PrevPage = () => {
  Card.innerHTML = null;
  PrevButton();
  BossCard();
};

const Dropselect = async () => {
  Card.innerHTML = null;
  const Id = DropdownBoss.value;
  const DropdownUrl = `https://eldenring.fanapis.com/api/bosses/${Id}`;
  const DropFetch = await fetch(DropdownUrl);
  const DropJson = await DropFetch.json();
  const DropData = DropJson.data;
  const BossCard = document.createElement("div");
  const BossName = document.createElement("h2");
  const BossPicture = document.createElement("img");
  const BossDescription = document.createElement("p");
  const BossLocation = document.createElement("p");
  const BossDropsSec = document.createElement("div");
  const BossDrops = document.createElement("p");
  console.log("Created the divs");
  BossCard.className = "BossCard";
  BossName.innerText = DropData.name;
  BossPicture.src = DropData.image;
  BossDescription.innerText = "Description: " + DropData.description;
  BossLocation.innerText = "Location: " + DropData.region;
  BossDrops.innerText = "Drops: " + DropData.drops;
  BossDropsSec.className = "BossDrops";
  BossDropsSec.append(BossDrops);
  BossCard.append(
    BossName,
    BossPicture,
    BossDescription,
    BossLocation,
    BossDropsSec
  );
  Card.append(BossCard);
};
BossCard();
DropdownBoss.onchange = Dropselect;
Next.onclick = NextPage;
Prev.onclick = PrevPage;
