const Card = document.getElementById("Card");
//
const FetchHeroesCard = async () => {
  const HeroUrl = `https://eldenring.fanapis.com/api/classes`;
  const HeroFetch = await fetch(HeroUrl);
  const HeroJson = await HeroFetch.json();
  let HerroData = HeroJson.data;
  for (let Herro of HerroData) {
    const HerroCard = document.createElement("div");
    const HerroName = document.createElement("H1");
    const HerroImage = document.createElement("Img");
    const HerroDesc = document.createElement("p");
    const HerroLevel = document.createElement("p");
    const HerroVigor = document.createElement("p");
    const Herromind = document.createElement("p");
    const HerroEndu = document.createElement("p");
    const HerroStren = document.createElement("p");
    const HerroDex = document.createElement("p");
    const HerroInt = document.createElement("p");
    const HerroFaith = document.createElement("p");
    const HerroArc = document.createElement("p");
    const StatCard = document.createElement("div");
    const HerroStatInfo = HerroData;
    HerroName.innerText = Herro.name;
    HerroImage.src = Herro.image;
    HerroDesc.innerText = "Class Description: " + Herro.description;
    HerroLevel.innerText = "Level: " + Herro.stats.level;
    HerroVigor.innerText = "Vigor: " + Herro.stats.vigor;
    Herromind.innerText = "Mind: " + Herro.stats.mind;
    HerroEndu.innerText = "Endurance: " + Herro.stats.endurance;
    HerroStren.innerText = "Strength: " + Herro.stats.strength;
    HerroDex.innerText = "Dexterity: " + Herro.stats.dexterity;
    HerroInt.innerText = "Intelligence: " + Herro.stats.intelligence;
    HerroFaith.innerText = "Faith: " + Herro.stats.faith;
    HerroArc.innerText = "Arcane: " + Herro.stats.arcane;
    StatCard.className = "StatCard";
    HerroCard.className = "HerroCard";
    StatCard.append(
      HerroLevel,
      HerroVigor,
      Herromind,
      HerroEndu,
      HerroStren,
      HerroDex,
      HerroInt,
      HerroFaith,
      HerroArc
    );
    HerroCard.append(HerroName, HerroImage, HerroDesc, StatCard);
    Card.append(HerroCard);
  }
};
FetchHeroesCard();
