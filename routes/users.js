import express from "express";

const router = express.Router();

const users = [
  {
    "firstName": "John",
    "lastName": "Doe",
    "age": 21
  }
];

router.get('/', (req, res) => {
  res.send('hello')
})

export default router;