const filteredCharacters = (array, name, specie, number) =>
  array
    .filter((element) => {
      return element.name.toLowerCase().includes(name.toLowerCase());
    })
    .filter((element) => {
      return specie === '' ? true : element.specie === specie;
    })
    .filter((element) => {
      return parseInt(element.episodes) === parseInt(number);
    });

export default filteredCharacters;
