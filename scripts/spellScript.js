const spellList = [];
const searchForSpells = document.querySelector('input');
const spellName = document.querySelector('#spells');

async function getSpells(){
  const responce = await fetch('https://raw.githubusercontent.com/vorpalhex/srd_spells/master/spells.json');
  const data = await responce.json();
  spellList.push(...data);
}
getSpells();

searchForSpells.onkeyup = function(keyEvent) {
  const typedText = keyEvent.target.value
  console.log(typedText)
  const resultingArray = spellList.filter(function(spell) {
    return spell.name.toLowerCase(typedText).includes(typedText)
  })
  console.log(resultingArray)
  spellName.innerHTML = JSON.stringify(resultingArray, null, 2)
}

// const resultingArray = monsterList.filter(monster => monster.name.toLowerCase(typedText).includes(typedText))