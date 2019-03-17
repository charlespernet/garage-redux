import FETCH_CARS from '../actions'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARS:
      console.log('fetch')
      return action.payload;
    default:
      console.log('initial')
      return state;
  }
}
