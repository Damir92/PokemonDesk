const toCapitalizeFirstLetter = (value: string) => {
  return `${value.charAt(0).toUpperCase()}${value.slice(1).toLocaleLowerCase()}`;
};

export default toCapitalizeFirstLetter;
