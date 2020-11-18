// variables
const monsterList = [];
const searchForMonsters = document.querySelector("input");
const monsterName = document.querySelector("#monster");
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
  // monsterName.innerHTML = JSON.stringify(resultingArray, null, 2);
  // render(resultingArray);
};

// const outPut = monsterSearch.map(function (monsters) {
//   return`test`
// })

// function render(resultingArray) {
//   resultingArray.map(function(monster) {
//     // console.log(resultingArray);
//     return `
//     <pre class="monsters">
//     <h2>${monster.name}</h2>
//     <h3>Meta</h3>
//     <h3>Armor Class</h3>
//     <div>
//       <h3>Traits</h3>
//       <p>Trait text</p>
//     </div>
//     <div>
//       <h3>Actions</h3>
//       <p>Action Text</p>
//     </div>
//     <div>
//       <h3>Legendary Actions</h3>
//       <p>Legendary Text</p>
//     </div>
//     <div>
//       <img src="" alt="monster image">
//     </div>
//   </pre>`
//   });
// }

// monsters.innerHTML = outPut;

/* Name
Meta
Armor Class
Hit Points
Speed
Strength
Strength Mod */
