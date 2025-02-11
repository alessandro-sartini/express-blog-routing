const express = require("express");
const router = express.Router();

const postsBool = require("../postsBool.js");


// index
router.get("/", (req, res) => {
  res.json(postsBool)
  // res.send("Lista di tutti i post!");
});

// show
router.get("/:id", (req, res) => {
    // res.json(postsBool)

  res.send(`post selezionato n: ${req.params.id}`);
});

// store
router.post("/", (req, res) => {
  res.send(`Creazione nuovo post`);
});

// update

router.put("/:id", (req, res) => {
  res.send("Modifica integrale del post " + req.params.id);
});

// modify

router.patch("/:id", (req, res) => {
  res.send("modifica parziale del post " + req.params.id);
});

// destroy

router.delete("/:id", (req, res) => {
  res.send(`Eliminazione del post in questione n: ${req.params.id}`);

});

module.exports = router;
