import express from "express";
import { v4 as uuid } from 'uuid';

import { getAllUsers, addUser, getUser, deleteUser, updateUser } from "../controllers/users";

const router = express.Router();

let users = [];


//get all users
router.get('/', getAllUsers);

// add user
router.post('/', addUser)

// get one user
router.get('/:id', getUser)

//delete user
router.delete('/:id', deleteUser)

//update user
router.patch('/:id', updateUser)

export default router;