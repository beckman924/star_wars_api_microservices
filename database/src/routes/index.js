const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/:model", middlewares.validateModel, controllers.getModel);

router.get("/:model/:id", middlewares.validateModel, controllers.getById);

module.exports = router;
