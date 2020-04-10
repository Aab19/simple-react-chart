#!/usr/bin/env node
var express = require("express")
var router = express.Router()

// midlewares
import { dirrectRequest, apiCaller } from "./middlewares/api"
import SealMiddleware from "./middlewares/seal"


router.use("/", SealMiddleware, dirrectRequest, apiCaller)

export default router
