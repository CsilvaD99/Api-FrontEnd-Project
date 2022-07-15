const Card2 = document.getElementById("Card2");
const ArmorDropdown = document.getElementById("Armor");
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

const ArmorCard = async () => {
  const ArmorUrl = `https://eldenring.fanapis.com/api/armors?limit=60&page=${PageNumber}`;
  const FetchArmor = await fetch(ArmorUrl);
  const ArmorJson = await FetchArmor.json();
  const ArmorData = ArmorJson.data;
  for (let Data of ArmorData) {
    const ArmorOption = document.createElement("option");
    ArmorOption.value = Data.id;
    ArmorOption.innerText = Data.name;
    ArmorDropdown.appendChild(ArmorOption);
    const ArmorCard = document.createElement("div");
    const ArmorName = document.createElement("h3");
    const ArmorPic = document.createElement("img");
    const ArmorCateg = document.createElement("p");
    const ArmorDescr = document.createElement("p");
    const ArmorDmg = document.createElement("p");
    const ArmorResis = document.createElement("p");
    const ArmorDmgInfo = Data.dmgNegation;
    const ArmorResInfo = Data.resistance;
    const DmgResisDiv = document.createElement("div");
    DmgResisDiv.className = "ArmorChart";
    ArmorCard.className = "ArmorCard";
    ArmorName.innerText = Data.name;
    ArmorPic.src = Data.image;
    ArmorCateg.innerText = Data.category;
    ArmorDescr.innerText = Data.description;
    const DmgListname = document.createElement("p");
    DmgListname.innerText = "Damage Negation:";
    ArmorDmg.append(DmgListname);
    const ResisListname = document.createElement("p");
    ResisListname.innerText = "Resistance:";
    ArmorResis.append(ResisListname);
    for (let Dmg of ArmorDmgInfo) {
      const ArmorDmgAtt = Dmg.name;
      const ArmorDmgNum = Dmg.amount;
      const ArmorDmgFusion = document.createElement("li");
      ArmorDmgFusion.innerText = ArmorDmgAtt + ": " + ArmorDmgNum + "\n";
      ArmorDmg.append(ArmorDmgFusion);
    }
    for (let res of ArmorResInfo) {
      const ResisName = " " + res.name;
      const ResisNum = " " + res.amount;
      const ResisFusion = document.createElement("li");
      ResisFusion.innerText = ResisName + ":   " + ResisNum + "\n";
      ArmorResis.append(ResisFusion);
    }
    DmgResisDiv.append(ArmorDmg, ArmorResis);
    ArmorCard.append(ArmorName, ArmorPic, ArmorCateg, ArmorDescr, DmgResisDiv);
    Card2.append(ArmorCard);
  }
};

const NextPage = () => {
  Card2.innerHTML = null;
  NextButton();
  ArmorCard();
};
const PrevPage = () => {
  Card2.innerHTML = null;
  PrevButton();
  ArmorCard();
};

const DropSelect = async () => {
  Card2.innerHTML = null;
  const Id = ArmorDropdown.value;
  const DropUrl = `https://eldenring.fanapis.com/api/armors/${Id}`;
  const FetchArmor = await fetch(DropUrl);
  const ArmorJson = await FetchArmor.json();
  const DropData = ArmorJson.data;

  const ArmorCard = document.createElement("div");
  const ArmorName = document.createElement("h3");
  const ArmorPic = document.createElement("img");
  const ArmorCateg = document.createElement("p");
  const ArmorDescr = document.createElement("p");
  const ArmorDmg = document.createElement("p");
  const ArmorResis = document.createElement("p");
  const ArmorDmgInfo = DropData.dmgNegation;
  const ArmorResInfo = DropData.resistance;
  const DmgResisDiv = document.createElement("div");
  const DmgListname = document.createElement("p");
  const ResisListname = document.createElement("p");
  ResisListname.innerText = "Resistance:";
  ArmorResis.append(ResisListname);
  DmgListname.innerText = "Damage Negation:";
  DmgResisDiv.className = "ArmorChart";
  ArmorCard.className = "ArmorCard";
  ArmorName.innerText = DropData.name;
  ArmorPic.src = DropData.image;
  ArmorCateg.innerText = DropData.category;
  ArmorDescr.innerText = DropData.description;
  ArmorDmg.append(DmgListname);
  for (let Dmg of ArmorDmgInfo) {
    const ArmorDmgAtt = Dmg.name;
    const ArmorDmgNum = Dmg.amount;
    const ArmorDmgFusion = document.createElement("li");
    ArmorDmgFusion.innerText = ArmorDmgAtt + ": " + ArmorDmgNum + "\n";
    ArmorDmg.append(ArmorDmgFusion);
  }
  for (let res of ArmorResInfo) {
    const ResisName = " " + res.name;
    const ResisNum = " " + res.amount;
    const ResisFusion = document.createElement("li");
    ResisFusion.innerText = ResisName + ":   " + ResisNum + "\n";
    ArmorResis.append(ResisFusion);
  }
  DmgResisDiv.append(ArmorDmg, ArmorResis);
  ArmorCard.append(ArmorName, ArmorPic, ArmorCateg, ArmorDescr, DmgResisDiv);
  Card2.append(ArmorCard);
};
//
ArmorCard();
ArmorDropdown.onchange = DropSelect;
Next.onclick = NextPage;
Prev.onclick = PrevPage;
