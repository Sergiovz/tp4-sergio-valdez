const {sGet, sPost, sPut, sDelete} = require("../controllers/controllers");
const { Router } = require("express");

const router = Router();

router.get("/get", sGet);

router.post("/post", sPost);

router.put("/put", sPut);

router.delete("/delete", sDelete);

module.exports = router;