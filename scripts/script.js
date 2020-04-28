const monsterList = [];
const searchForMonsters = document.querySelector('input');
const monsterName = document.querySelector('#monster');

async function getMonsters(){
    const responce = await fetch('https://gist.githubusercontent.com/tkfu/9819e4ac6d529e225e9fc58b358c3479/raw/d4df8804c25a662efc42936db60cfbc0a5b19db8/srd_5e_monsters.json');
    const data = await responce.json();
    monsterList.push(...data);
    // console.log(data);
}
getMonsters();

searchForMonsters.onkeyup = function(keyEvent) {
  const typedText = keyEvent.target.value
  console.log(typedText)
  const resultingArray = monsterList.filter
  (function(monster) {
    return monster.name.toLowerCase(typedText).includes(typedText.toLowerCase())
  })
  console.log(resultingArray)
  monsterName.innerHTML = JSON.stringify(resultingArray, null, 2)
}

// const resultingArray = monsterList.filter(monster => monster.name.toLowerCase(typedText).includes(typedText))