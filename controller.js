import express from "express";
import bodyParser from "body-parser";
import { db, auth } from "./config.js";

const router = express.Router();
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/users", (req, res) => {
  try {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        let users = [];
        let id;
        querySnapshot.forEach((doc) => {
          id = doc.id;
          users.push({ id, ...doc.data() });
        });
        res.send(users);
      });
  } catch (error) {
    res.send(error);
  }
});

router.post("/users", (req, res) => {
  try {
    var nama = req.body.nama;
    var email = req.body.email;
    var password = req.body.password;

    db.collection("users").add({
      nama: req.body.nama,
      email: email,
      password: password,
    });

    res.send({
      status: true,
      message: "Data berhasil disimpan",
    });
  } catch (error) {
    res.send({
      status: false,
      message: "Data gagal disimpan",
    });
  }
});

router.patch("/users/:id", (req, res) => {
  try {
    db.collection("users")
      .doc(req.params.id)
      .update({
        nama: req.body.nama,
        email: req.body.email,
        password: req.body.password, 
      })
      .then(() => {
        res.send({
          status: true,
          message: "Data berhasil diubah",
        });
      });
  } catch (error) {
    res.send({
      status: false,
      message: "Data gagal diubah",
    });
  }
});

export default router;