const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

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
            return res.json({ msg: 'Success' });
         }
         return res.status(400).json({ password: 'Password incorrect' });
      });
   });
});

module.exports = router;
