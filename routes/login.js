const { Router } = require("express");
const { User } = require("../utils/database");
const router = Router();
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken")
const config = require("../utils/auth.config")
const cookieSession = require("cookie-session");



const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.json([]);
  }
};

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          isAdmin: user.isAdmin,
          accessToken: token
        });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
});

router.get("/fail", (req, res) => res.json([]));
router.get("/func", (req, res) => res.json(succesLoginUrl));
router.get("/loguser", isLoggedIn, (req, res) => res.json(req.user));

router.post("/register", async function (req, res) {
    const id = uuidv4();
  
    let data = { ...req.body, id };
    let errors = [];
    console.log(req)
    const passHash = await bcrypt.hash(data.password, 10);
    if (!data.username || !data.email || !data.password) {
      errors.push({ message: "Please fill all of the fields" });
    }
    try {
      const userDb = await User.findOne({ where: { email: data.email } });
      if (userDb) {
        res.json([]);
      } else {
        if (data.email === "david@somemail.com" || data.email === "elena@mail.com") {
          const createdUser = await User.create({
            username: data.username,
            email: data.email,
            password: passHash,
            isAdmin: true,
          });
        } else {
          const createdUser = await User.create({
            username: data.username,
            email: data.email,
            password: passHash,
            isAdmin: data.isAdmin,
          });
        }
       res.redirect("/login");
      }     
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  });

  module.exports = router;