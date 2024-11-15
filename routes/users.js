import express from "express";
import { v4 as uuid } from 'uuid';

const router = express.Router();

let users = [];

//get all users
router.get('/', (req, res) => {
  res.send(users)
});

// add user
router.post('/', (req, res) => {
  users.push({ ...req.body, id: uuid() });
  res.send(users);
})

// get one user
router.get('/:id', (req, res) => {
  res.send(users.find(user => user.id === req.params.id));
})

//delete user

router.delete('/:id', (req, res) => {
  users = users.filter(user => user.id !== req.params.id);

  res.send(users);
})


//update user
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === req.params.id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(user);

})


export default router;