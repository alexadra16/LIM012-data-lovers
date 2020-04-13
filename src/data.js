// ORDENAR ALFABETICAMENTE
export const sortData = (array, sortOrder) => {
  let outcomeSort = [];
  if (sortOrder === 'za') {
    outcomeSort = array.sort((o1, o2) => {
      if (o1.name > o2.name) { return -1; }
      if (o1.name < o2.name) { return 1; }
      return 0;
    });
  } else if (sortOrder === 'az') {
    outcomeSort = array.sort((o1, o2) => {
      if (o1.name < o2.name) { return -1; }
      if (o1.name > o2.name) { return 1; }
      return 0;
    });
  } return outcomeSort;
};
// FUNCION CALCULAR
// 1.INGRESA UN OBJETO CON VALUES DE LA DATA Y BOTA UN ARRAY CON NUMEROS DE LA PROPIEDAD STATS
export const arrArmorPerLevel = array1 => array1.map(element => element.stats.armorperlevel);

// 2.INGRESA UN ARRAY CON NUMEROS DE LA PROPIEDAD STATS Y BOTA EL PROMEDIO
export const average = (array1) => {
  const sumArmorPerLevel = array1.reduce((previousValue, nowValue) => {
    const sumArmor = previousValue + nowValue;
    return sumArmor;
  });
  return sumArmorPerLevel / array1.length;
};

// 3.INGRESA UN ARRAY DE OBJETOS,PROMEDIO Y VALOR Y BOTA UN ARRAY DE OBJETOS FILTRADOS
export const computeStats = (arr, num, valor) => {
  if (valor === 'higher') {
    const higherPerLevel = arr.filter(element => element.stats.armorperlevel > num);
    return higherPerLevel;
  }
  const lessPerLevel = arr.filter(element => element.stats.armorperlevel < num);
  return lessPerLevel;
};

//  FUNCION FILTRAR
export const filterData = (array, valor) => {
  const arrFiltered = array.filter(eachChampion => eachChampion.tags[0] === valor);
  return arrFiltered;
};

//  FUNCION BUSCAR
export const search = (array, initial) => {
  const champCompare = initial.toLowerCase();
  const filtro = array.filter((element) => {
    const nombreBuscado = element.name.toLowerCase();
    if (nombreBuscado.indexOf(champCompare) !== -1) { return element; }
    return false;
  });
  return filtro;
};
