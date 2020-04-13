import {
  sortData, arrArmorPerLevel, average, computeStats, filterData, search,
} from '../src/data.js';

import { recurses } from './recursesTesting.js';

//  TEST ORDENAR
describe('sortData', () => {
  it('Debe ser una funcion', () => {
    expect(typeof sortData).toBe('function');
  });

  it('Debe ordenar de forma ascendente', () => {
    expect(sortData(recurses.data, recurses.sortOrderAZ)).toEqual(recurses.dataAZ);
  });

  it('Debe ordenar de forma descendente', () => {
    expect(sortData(recurses.data, recurses.sortOrderZA)).toEqual(recurses.dataZA);
  });
});

//  TEST CALCULAR

//  1.
describe('arrArmorPerLevel', () => {
  it('Debe ser una funcion', () => {
    expect(typeof arrArmorPerLevel).toBe('function');
  });
  it('Debe salir un array', () => {
    expect(Array.isArray(arrArmorPerLevel(recurses.arrayValues))).toBe(true);
  });
  it('Debe seleccionar la propiedad armorperlevel de cada campeon', () => {
    expect(arrArmorPerLevel(recurses.arrayValues)).toEqual(recurses.arrayArmorperlevel);
  });
});

//  2.
describe('average', () => {
  it('Debe ser una funcion', () => {
    expect(typeof average).toBe('function');
  });
  it('Debe salir un numero que es el promedio', () => {
    expect(typeof average(recurses.arrayArmorperlevel)).toBe('number');
  });
});

// 3.
describe('computeStats', () => {
  it('Debe ser una funcion', () => {
    expect(typeof computeStats).toBe('function');
  });
  it('Debe salir ordenado menor al promedio', () => {
    expect(computeStats(recurses.arrayValues, recurses.prom, 'less')).toEqual(recurses.afterValuesLess);
  });
  it('Debe salir ordenado mayor al promedio', () => {
    expect(computeStats(recurses.arrayValues, recurses.prom, 'higher')).toEqual(recurses.afterValuesHigher);
  });
});

// TEST FILTRAR

describe('filterData', () => {
  it('Debe ser una funcion', () => {
    expect(typeof filterData).toBe('function');
  });

  it('Debería retornar campeones con valor Fighter', () => {
    // eslint-disable-next-line max-len
    expect(filterData(recurses.dataBeforeFilter, recurses.valorFighter)).toEqual(recurses.dataFilterWithFighter);
  });

  it('Debería retornar campeones con valor Mage', () => {
    // eslint-disable-next-line max-len
    expect(filterData(recurses.dataBeforeFilter, recurses.valorMage)).toEqual(recurses.dataFilterWithMage);
  });

  it('Debería retornar campeones con valor Support', () => {
    // eslint-disable-next-line max-len
    expect(filterData(recurses.dataBeforeFilter, recurses.valorSupport)).toEqual(recurses.dataFilterWithSupport);
  });

  it('Debería retornar campeones con valor Marksman', () => {
    // eslint-disable-next-line max-len
    expect(filterData(recurses.dataBeforeFilter, recurses.valorMarksman)).toEqual(recurses.dataFilterWithMarksman);
  });

  it('Debería retornar campeones con valor Assassin', () => {
    // eslint-disable-next-line max-len
    expect(filterData(recurses.dataBeforeFilter, recurses.valorAssassin)).toEqual(recurses.dataFilterWithAssassin);
  });

  it('Debería retornar campeones con valor Tank', () => {
    // eslint-disable-next-line max-len
    expect(filterData(recurses.dataBeforeFilter, recurses.valorTank)).toEqual(recurses.dataFilterWithTank);
  });
});

//  TEST BUSCAR
describe('search', () => {
  it('Debe ser una funcion', () => {
    expect(typeof search).toBe('function');
  });

  it('Debería retornar un array de objetos con el campeon buscado sin importar como se escribio', () => {
    expect(search(recurses.beforeSearch, 'RivEN')).toStrictEqual(recurses.afterSearch);
    expect(search(recurses.beforeSearch, 'aMUmu')).toStrictEqual(recurses.afterSearchSecond);
  });
  it('Debería retornar un array de objetos con campeones que contengan la letra buscada en el nombre', () => {
    expect(search(recurses.beforeSearch, 'z')).toEqual(recurses.afterSearchByPartWord);
  });
});
