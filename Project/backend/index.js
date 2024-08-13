const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const adminLoggedIn = await prisma.admin.findUnique({
    where: {
      email: email,
      passsword: password,
    },
  });

  if (adminLoggedIn) {
    return res.json({
      msg: "You have been logged in successfully",
    });
  } else {
    return res.status(401).json({ msg: "Invalid Credentials" });
  }
});

app.post("/register", async (req, res) => {
  const { name, department, Hobbies, adress, genders, dateOfJoining } =
    req.body;
  const userRegistered = await prisma.user.create({
    data: {
      name: name, // This should be a string value
      department: department,
      dateOfJoining: new Date(dateOfJoining), // Ensure this is a valid date
      Hobbies: Hobbies,
      adress: adress,
      genders: genders,
    },
  });
  if (userRegistered) {
    return res.json({ msg: "User registered successfully" });
  } else {
    return res.status(400).json({ msg: "Failed to register user" });
  }
});

app.put("/userInfo/user/:id", async (req, res) => {
  const { id } = req.params;
  const { name, department, Hobbies, adress, genders, dateOfJoining } =
    req.body;
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      name: name,
      department: department,
      dateOfJoining: new Date(dateOfJoining),
      Hobbies: Hobbies,
      adress: adress,
      genders: genders,
    },
  });
  if (updatedUser) {
    return res.json({ msg: "User updated successfully" });
  } else {
    return res.status(400).json({ msg: "Failed to update user" });
  }
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      department: true,
      dateOfJoining: true,
      Hobbies: true,
      adress: true,
      genders: true,
    },
  });
  res.json(users);
});

app.delete("/deleteUser/user/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await prisma.user.delete({
    where: { id: parseInt(id) },
  });
  if (deletedUser) {
    return res.json({ msg: "User deleted successfully" });
  } else {
    return res.status(400).json({ msg: "Failed to delete user" });
  }
});
app.listen(port, () => {
  console.log("Port is Listen on ", port);
});
