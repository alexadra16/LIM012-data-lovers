// export const multiplicar = (a, b) => a * b;
// export const anotherExample = () => 'OMG';

import lol from './data/lol/lol.js';

const dataChamps = lol.data;
const arrayObjects = Object.keys(dataChamps);
const list = document.getElementById('orderList');
list.addEventListener('change', () => {
  let saveDates = '';
  const valor = document.getElementById('orderList').value;
  if (valor === 'az') {
    const upward = arrayObjects.sort((a, b) => a.localeCompare(b));
    upward.forEach((z) => {
      const name = `<p class='info'>${dataChamps[z].name}</p>`;
      const roleId = `<p class ='info2'>${dataChamps[z].tags}</p>`;
      const attack = `<p class='info2'>Nivel de ataque: ${dataChamps[z].info.attack}</p>`;
      const defense = `<p  class='info2' >Nivel de defensa: ${dataChamps[z].info.defense}</p>`;
      saveDates += `
        <section class='target'style="background:url(${dataChamps[z].splash}); background-size: 100% 100%">
        <div id='Datescard'>
        ${name + roleId + attack + defense} 
        </div>
        </section>
        `;
    });
    document.querySelector('#champions').innerHTML = saveDates;
  } else {
    const falling = arrayObjects.sort((a, b) => b.localeCompare(a));

    falling.forEach((m) => {
      const name = `<p class='info' > ${dataChamps[m].name}</p > `;
      const roleId = `<p class ='info2' > ${dataChamps[m].tags}</p > `;
      const attack = `<p class='info2' > Nivel de ataque: ${dataChamps[m].info.attack}</p > `;
      const defense = `<p  class='info2' > Nivel de defensa: ${dataChamps[m].info.defense}</p > `;
      saveDates += `
          <section class='target'style = "background:url(${dataChamps[m].splash}); background-size: 100% 100%" >
            <div id='Datescard'>
              ${name + roleId + attack + defense}
            </div>
    </section >`;
    });
    document.querySelector('#champions').innerHTML = saveDates;
  }
});
