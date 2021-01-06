// variables
const monsterList = [];
const searchForMonsters = document.querySelector("input");
// const monsterName = document.querySelector("#monster");
let monsters = document.querySelector(".monsters");

// getting json data
async function getMonsters() {
  const responce = await fetch(
    "https://gist.githubusercontent.com/tkfu/9819e4ac6d529e225e9fc58b358c3479/raw/d4df8804c25a662efc42936db60cfbc0a5b19db8/srd_5e_monsters.json"
  );
  const data = await responce.json();
  monsterList.push(...data);
}
getMonsters();

// search the object
searchForMonsters.onkeyup = function (keyEvent) {
  const typedText = keyEvent.target.value;
  const resultingArray = monsterList.filter(function (monster) {
    return monster.name
      .toLowerCase(typedText)
      .includes(typedText.toLowerCase());
  });
  // monsters.innerHTML = JSON.stringify(resultingArray, null, 2);
  render(resultingArray);
};

// const outPut = monsterSearch.map(function (monsters) {
//   return`test`
// })

function render(resultingArray) {
  resultingArray.map(function(monster) {
    console.log(resultingArray);
    return monsters.innerHTML = `
    <div class="monsters row">
      <div class="col-md-6">
        <h2>${monster.name}</h2>
        <h3>${monster.meta}</h3>
        <h3>Fix this! ${monster.Armor}</h3>
        <div>
          <h3>Stats</h3>
          <p>Charisma: ${monster.CHA ?? "none"}</p>
          <p>Charisma Modifier: ${monster.CHA_mod ?? "none"}</p>
          <p>Consitution: ${monster.CON ?? "none"}</p>
          <p>Consitution Modifier: ${monster.CON_mod ?? "none"}</p>
          <p>Dexterity: ${monster.DEX ?? "none"}</p>
          <p>Dexterity Modifier: ${monster.DEX_mod ?? "none"}</p>
          <p>Intellect: ${monster.INT ?? "none"}</p>
          <p>Intellect Modifier: ${monster.INT_mod ?? "none"}</p>
          <p>Strength: ${monster.STR ?? "none"}</p>
          <p>Strength Modifier: ${monster.STR_mod ?? "none"}</p>
          <p>Wisdom: ${monster.WIS ?? "none"}</p>
          <p>Wisdom Modifier: ${monster.WIS_mod ?? "none"}</p>
        </div>
      </div><!--end of col-->
      <div class="col-md-6">
        <div>
        <h3>Actions</h3>
        <p>${monster.Actions}</p>
        </div>
        <div>
          <h3>Legendary Actions</h3>
          <p>Legendary Text</p>
        </div>
        <div>
          <img src="${monster.img_url}" alt="monster image">
        </div>
        </div>
      </div><!--end of col-->
    </div>`
  }).join("");
}


/* Name
Meta
Armor Class
Hit Points
Speed
Strength
Strength Mod */
