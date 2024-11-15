import express from "express";
import { v4 as uuid } from 'uuid';

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
  res.send(users)
});

router.post('/', (req, res) => {
  users.push({ ...req.body, id: uuid() })
})



export default router;