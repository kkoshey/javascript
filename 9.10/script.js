const getCar = (carName) => {
  if (cars[carName] != undefined) {
    console.log(cars[carName]);
  } else {
    console.log('Авто не найдено');
  }
}
