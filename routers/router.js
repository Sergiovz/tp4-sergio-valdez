const {sGet, sPost, sPut, sDelete} = require("../controllers/controllers");
const { Router } = require("express");

const router = Router();

router.get("/get", sGet);

router.get("/pots", sPost);

router.get("/put", sPut);

router.get("/delete", sDelete);

module.exports = router;