import { GET_USER } from "./actions"
import { receiveData } from "../../modules/handleData"

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return receiveData(state, action)
    default:
      return state
  }
}
