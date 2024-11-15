import express from "express";

import { getAllUsers, addUser, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

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