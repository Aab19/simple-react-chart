import SealMiddleware from "seal-middleware"
import JsonResponse from "../../modules/jsonResponse"
import { app_key } from "../../../config/app"

/**
 * function to validate seal via seal middleware
 * params get form latest path of url
 */
export default (req, res, next) => {
  if (process.env.NODE_ENV == "production") {
    const routeSeal = req.get("Content-key")
    if (typeof routeSeal == "undefined") {
      return res.json(JsonResponse(403))
    } else {
      const Seal = new SealMiddleware(app_key, 60000)
      const { is_valid } = Seal.validate(routeSeal)
      if (is_valid) {
        return next()
      } else {
        return next()
        return res.json(JsonResponse(403))
      }
    }
  } else {
    return next()
  }
}
