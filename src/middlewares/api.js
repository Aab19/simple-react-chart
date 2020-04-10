import { request } from "../modules/api"

export const CALL_API = Symbol("CALL_API")

export default store => next => action => {
	//container not request data from server
	if (!action[CALL_API]) return next(action)

	// request data from server
	const { method, endpoint, params, type, filter, options } = action[CALL_API] // get action parameters

	return new Promise(resolve => {
		// on request / waiting
		next({
			type,
      filter,
      params,
      options
		})

		// request to api
		const FRONT_HOST = process.env.FRONT_HOST || ""
		request(method, FRONT_HOST + endpoint, params).then(json => {
			next({
				type,
				filter,
				json,
        params,
        options
			})
			resolve()
		})
	})
}
