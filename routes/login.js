const { Router } = require("express");
const {postRegisterUser, postLoginUser} = require('../controllers/auth')
const router = Router();



const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.json([]);
  }
};

router.post("/login", postLoginUser);

router.get("/fail", (req, res) => res.json([]));
router.get("/func", (req, res) => res.json(succesLoginUrl));
router.get("/loguser", isLoggedIn, (req, res) => res.json(req.user));

router.post("/register", postRegisterUser);

  module.exports = router;