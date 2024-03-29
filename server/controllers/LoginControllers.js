import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
const PrivateKey = "wexvlj@!@#$!__++=";
import { Users } from "../models/LoginModel.js";

// ----------------------REGISTER-----------------------------
export async function Register(req, res) {
  try {
    const findedUser = await Users.findOne({ username: req.body.username });
    if (findedUser) {
      res.send("Username already exist!! Try other Username");
      return;
    } else {
      const { username, email } = req.body;
      const hashedPassword = await hash(req.body.password, 10);
      const user = new Users({
        username,
        password: hashedPassword,
        role: "user",
        email,
      });
      await user.save();
      const token = jwt.sign(
        {
          _id: user._id,
          username: user.username,
          role: user.role,
          email: user.email,
          movieType: user.movieType
        },
        PrivateKey
      );
      res.status(200).send(token);
    }
  } catch (error) {
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
}

// --------------------------LOGIN--------------------------------------------

export async function Login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await Users.findOne({ username: username });
    const passwordMatch = await compare(password, user.password);
    if (!user) {
      res.status(404).send("Yanlış kullanici");
      return;
    } else if (!passwordMatch) {
      res.status(404).send("Yanlış Parola");
      return;
    }
    const token = jwt.sign(
      { _id: user._id, username: user.username, role: user.role , movieType: user.movieType },
      PrivateKey // Burada PrivateKey yerine gerçek özel anahtarınızı kullanmalısınız
    );
    res.status(200).send(token);
  } catch (error) {
    res.status(500).send("İç Sunucu Hatası");
  }
}
// --------------------------DELETE--------------------------------------------

export async function DeleteUser(req, res) {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, PrivateKey);
    if (decoded) {
      if (decoded.role === "admin") {
        const { id } = req.params;
        const user = await Users.findByIdAndDelete(id);
        if (user) {
          res.status(200).send("User Deleted");
        } else {
          res.status(404).send("User Not Found");
        }
      } else {
        res.status(403).send("You have not acces to delete user");
      }
    } else {
      res.status(403).send("You have not acces to delete user");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

// --------------------------UPDATE USER--------------------------------------------

export async function UpdateUser(req, res) {
  try {
    const { id } = req.params;
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, PrivateKey);
    const user = await Users.findOne({ _id: id });
    if (decoded.role === "admin" || decoded._id === id) {
      const hashedPassword = await hash(req.body.password, 10);
      await Users.findByIdAndUpdate(id, {
        username: req.body.username,
        role: user.role,
        password: hashedPassword,
      });
      res.status(200).send("user updated");
    } else {
      res.status(404).send("You have not access to update");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// --------------------------GET ALL USERS--------------------------------------------

export async function GetAllUsers(req, res) {
  try {
    const users = await Users.find({}).populate("wishlist.product");
    res.send(users);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

// --------------------------GET  USER ById--------------------------------------------

export async function GetUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await Users.findById(id);
    res.send(user);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

export async function UpdateReview(req, res) {
  try {
    const { id } = req.params;
    const { NewReview , ProductName } = req.body;

    const FindUser = await Users.findById(id);
 
    const FindProduct=await MovieCart.findOne({name:ProductName})

    const UpdatedUser = await Users.findByIdAndUpdate(id, {
      review: [...FindUser.review, {
        product:FindProduct,
        rating:NewReview
      }],
    });
 
    res.status(200).send("Review Updated");
  } catch (error) {
    res.status(404).send(error);
  }
}



export async function PostStripe(req, res) {
  try {
    const { id } = req.params;
    const {movieType}=req.body
   await Users.findByIdAndUpdate(id, {
      stripe:movieType,
    });

    res.status(200).send("Add");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}