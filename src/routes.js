const express = require("express");
const { route } = require("./server");
const { getSeatsByScreenId, createTicket } = require("./controllers");
const router = express.Router();

router.route("/seats/:id").get(getSeatsByScreenId);
router.route("/tickets").post(createTicket);

module.exports = router;
