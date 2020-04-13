// TO SORT FUNCTION
const sortOrderAZ = 'az';
const sortOrderZA = 'za';
const data = [{ name: 'Xerath' }, { name: 'Aatrox' }];
const dataAZ = [{ name: 'Aatrox' }, { name: 'Xerath' }];
const dataZA = [{ name: 'Xerath' }, { name: 'Aatrox' }];
// TO CALCULATE FUNCTION
const arrayValues = [{
  name: 'Aatrox',
  stats: { armorperlevel: 3.8 },
},
{
  name: 'Ahri',
  stats: { armorperlevel: 3.5 },
},
{
  name: 'Riven',
  stats: { armorperlevel: 3.2 },
}];

const arrayArmorperlevel = [3.8, 3.5, 3.2];
const prom = 3.4705223;

const afterValuesLess = [{
  name: 'Riven',
  stats: { armorperlevel: 3.2 },
}];
const afterValuesHigher = [{
  name: 'Aatrox',
  stats: { armorperlevel: 3.8 },
},
{
  name: 'Ahri',
  stats:
       { armorperlevel: 3.5 },
}];
// TO FILTER FUNCTION
const dataBeforeFilter = [
  { tags: ['Fighter', 'Tank'] },
  { tags: ['Mage', 'Assassin'] },
  { tags: ['Support', 'Mage'] },
  { tags: ['Marksman', 'Support'] },
  { tags: ['Assassin', 'Tank'] },
  { tags: ['Tank', 'Fighter'] }];

const dataFilterWithFighter = [
  { tags: ['Fighter', 'Tank'] },
];

const dataFilterWithMage = [
  { tags: ['Mage', 'Assassin'] }];

const dataFilterWithSupport = [
  { tags: ['Support', 'Mage'] }];

const dataFilterWithMarksman = [
  { tags: ['Marksman', 'Support'] }];

const dataFilterWithAssassin = [
  { tags: ['Assassin', 'Tank'] }];

const dataFilterWithTank = [
  { tags: ['Tank', 'Fighter'] }];

const valorFighter = 'Fighter';
const valorMage = 'Mage';
const valorSupport = 'Support';
const valorMarksman = 'Marksman';
const valorAssassin = 'Assassin';
const valorTank = 'Tank';

// TO SEARCH FUNCTION
const beforeSearch = [
  { name: 'Amumu' },
  { name: 'Riven' },
  { name: 'Zyra' },
];
const afterSearch = [
  {
    name: 'Riven',
  }];
const afterSearchSecond = [
  {
    name: 'Amumu',
  }];
const afterSearchByPartWord = [
  {
    name: 'Zyra',
  }];
export const recurses = {
  sortOrderAZ,
  sortOrderZA,
  data,
  dataAZ,
  dataZA,
  arrayValues,
  arrayArmorperlevel,
  prom,
  afterValuesLess,
  afterValuesHigher,
  dataBeforeFilter,
  dataFilterWithFighter,
  dataFilterWithMage,
  dataFilterWithSupport,
  dataFilterWithMarksman,
  dataFilterWithAssassin,
  dataFilterWithTank,
  valorMage,
  valorFighter,
  valorSupport,
  valorMarksman,
  valorAssassin,
  valorTank,
  afterSearch,
  beforeSearch,
  afterSearchSecond,
  afterSearchByPartWord,
};
