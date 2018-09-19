const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../../config/keys');

const router = express.Router();

const User = require('../../models/User');

router.get('/test', (req, res) => res.json({ msg: 'Userss Works' }));

router.post('/register', (req, res) => {
   User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
         return res.status(400).json({ email: 'Email already exist' });
      }
      const avatar = gravatar.url(req.body.email, {
         s: '200',
         r: 'pg',
         d: 'mm',
      });

      const newUser = new User({
         name: req.body.name,
         email: req.body.email,
         avatar,
         password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
         bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
               .save()
               .then(user => res.json(user))
               .catch(err => console.log(err));
         });
      });
   });
});

// @route GET api/users/login
// @desc Login User / Returning JWT Token
// @access Public
router.post('/login', (req, res) => {
   const { email, password } = req.body;

   User.findOne({ email }).then((user) => {
      if (!user) {
         return res.status(404).json({ email: 'User not found' });
      }

      bcrypt.compare(password, user.password).then((isMatch) => {
         if (isMatch) {
            const payload = { id: user.id, name: user.name, avatar: user.avatar };

            return jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) =>
               res.json({
                  success: true,
                  token: `Bearer ${token}`,
               }));
         }

         return res.status(400).json({ password: 'Password incorrect' });
      });
   });
});

// @route GET api/users/current
// @desc Return current user
// @access Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
   res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
   });
});

module.exports = router;
