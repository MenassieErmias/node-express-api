export const getAllUsers = (req, res) => {
  res.send(users)
}

export const getUser = (req, res) => {
  res.send(users.find(user => user.id === req.params.id));
}

export const addUser = (req, res) => {
  users.push({ ...req.body, id: uuid() });
  res.send(users);
}

export const deleteUser = (req, res) => {
  users = users.filter(user => user.id !== req.params.id);

  res.send(users);
}

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === req.params.id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(user);

}