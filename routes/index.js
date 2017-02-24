import {Router} from 'express';

let router = Router();

import User from '../models/user';

//index Router
router.get('/', (req, res,next) => {
  let languages = [
    { name : 'Nodejs' },
    { name: 'Javascript' },
    { name: 'PHP' },
    { name: 'Reactjs' }
  ];
  res.json(languages);
});

router.get('/users', (req,res) => {
  let users = [
    new User('Peter','peter@peter.com'),
    new User('Trevie', 'trevie@trevie.com'),
    new User('Suzie', 'suzie@zie.com')
  ];
  res.json(users);
});

router.post('/user/create', (req, res) => {
  let user = new User(
    req.body.name,
    req.body.email
  );
  res.json(user);
});

export default router;
