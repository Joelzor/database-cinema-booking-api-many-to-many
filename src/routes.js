const express = require("express");
const { route } = require("./server");
const { getSeatsByScreenId } = require("./controllers");
const router = express.Router();

router.route("/seats/:id").get(getSeatsByScreenId);

module.exports = router;
