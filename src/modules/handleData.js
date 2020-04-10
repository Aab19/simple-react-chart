export function receiveData(state, action) {
  if (action.json) {
    if (!state[action.filter]) state[action.filter] = {}
    //received data
    state[action.filter].in_progress = false
    return Object.assign({}, state, { [action.filter]: action.json })
  } //waiting
  else {
    if (!state[action.filter]) state[action.filter] = {}
    state[action.filter].in_progress = true
    return Object.assign({}, state)
  }
}
