const express = require("express");
const userRouter = express.Router();
const { User, Account } = require("../db/db");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const middleware = require("../middleware/middleware");
app = express();

require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;

const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstname: zod.string(),
  lastname: zod.string(),
});

const signinSchema = zod.object({
  useranme: zod.string().email(),
  password: zod.string(),
});

const putSchema = zod.object({
  firstname: zod.string().optional(),
  lastname: zod.string().optional(),
  password: zod.string().optional(),
});

userRouter.post("/signup", async (req, res) => {
  const sucess = signupSchema.safeParse(req.body);
  if (!sucess) {
    return res.json({
      mgs: "Invalid Input",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(404).json({
      msg: "User already exists",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });

  // const userId = user._id;
  // const account = await Account.create({
  //   userId: userId,
  //   balance: Math.floor(Math.random * 10000) + 1,
  // });

  const userId = user._id;

  await Account.create({
    userId: userId,

    balance: Math.floor(Math.random() * 100000) + 1,
  });
  res.status(201).json({
    msg: "User Addede successfully",
    user,
  });
});

userRouter.post("/signin", async (req, res) => {
  const sucess = signinSchema.safeParse(req.body);

  if (!sucess) {
    return res.json({
      msg: "Invalid input",
    });
  }

  const user = await User.findOne({
    useranme: req.body.useranme,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      jwtSecret
    );
    res.json({
      msg: "Signin successfully",
      token,
    });
    return;
  }
  res.status(404).json({
    msg: "Sign in failed",
  });
});

//get all users

//get all users
userRouter.get("/all_users", middleware, async (req, res) => {
  const loggedInUser = await User.findById(req.userId);
  const { balance } = await Account.findOne({
    userId: req.userId,
  });
  // const balance = accountOfLoggedinUser.balance

  const allUsers = await User.find();

  const allOtherUsers = allUsers.filter(
    (user) => user._id.toString() !== loggedInUser._id.toString()
  );

  res.json({
    user: loggedInUser,
    balance,
    users: allOtherUsers,
  });
});

// userRouter.get("/all_users", middleware, async (req, res) => {
//   const loggedInUser = await User.findOne(req.userId);
//   const balance = await Account.findOne({
//     userId: req.userId,
//   });
//   const allUsers = await User.find();

//   const allOtherUsers = allUsers.filter(
//     (user) => user._id.toString() !== loggedInUser._id.toString()
//   );

//   res.json({
//     user: loggedInUser,
//     balance: balance,
//     users: allOtherUsers,
//   });
// });

userRouter.put("/", middleware, async (req, res) => {
  const sucess = putSchema.safeParse(req.body);

  if (!sucess) {
    return res.json({
      msg: "Invalid input",
    });
  }

  // const userId =
  const user = await User.updateOne(
    {
      _id: req.userId,
    },
    {
      $set: req.body,
    }
  );
  res.status(200).json({
    msg: "Updated Successfuly",
  });
});

userRouter.get("/bulk", async (req, res) => {
  try {
    const filter = req.query.filter || "";
    const users = await User.find({
      $or: [
        { firstname: { $regex: new RegExp(filter, "i") } },
        { lastname: { $regex: new RegExp(filter, "i") } },
      ],
    });
    res.json({
      user: users.map((user) => ({
        username: user.useranme,
        firstname: user.firstname,
        lastname: user.lastname,
        id: user._id,
      })),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      meg: "Internal Error",
    });
  }
});

module.exports = {
  userRouter,
};
