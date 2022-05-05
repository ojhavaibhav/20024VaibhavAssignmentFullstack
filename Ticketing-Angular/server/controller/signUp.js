import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/user.js';
import 'dotenv/config'

const secret = process.env.SECRET;

export const signUp = async (req, res) => {
    const user = req.body;
    const { fullname, username, password } = user;


    try {
        const olduser = await User.findOne({ username });

        if (olduser) {
            return res.status(404).json({ message: "user already exit!" })
        }

        const encryptPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ fullname, username, password: encryptPassword })

        res.status(201).json({ result, message: "user created!" });

    }
    catch (err) {
      
        res.status(500).json({ message: "something went wrong!!" })
    }
}



export const signIn = async (req, res) => {
    try {
        const user = req.body;
        const { username, password } = user;

        const olduser = await User.findOne({ username });

        if (!olduser) {
            return res.status(404).json({ message: "User does not exist" })
        }

        const isPasswordCorrect = await bcrypt.compare(password, olduser.password)

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid password" })
        }

        const token = jwt.sign(
            { email: olduser.username, id: olduser._id }, secret, { expiresIn: "5h" }
        );

        res.status(200).json({ accessToken: olduser, token })
    }
    catch (err) {
        res.status(500).json({ message: "something went worng!!" })
    }
}

