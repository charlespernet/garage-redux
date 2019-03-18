export const FETCH_CARS = 'FETCH_CARS';
export const CREATE_CAR = 'CREATE_CAR';

export function fetchCars() {
  const promise = fetch('https://wagon-garage-api.herokuapp.com/bordeauxREACT/cars')
    .then(response => response.json())

  return {
    type: FETCH_CARS,
    payload: promise
  }
}

export function createCar(car, callback) {
  // const options = {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(car)
  // }
  //
  // const promise = fetch('https://wagon-garage-api.herokuapp.com/bordeauxREACT/cars', { options })
  //   .then(response => response.json())
  //   .then(callback)

  console.log('ici')

  return {
    type: CREATE_CAR,
    payload: promise
  }
}
