import md5 from 'md5';
import uuid from 'uuid';
import {
    connectDB
} from './connect-db';

const authenticationTokens = [];

async function assembleUserState(user) {
    let db = await connectDB();
    let tasks = await db.collection(`tasks`).find({
        owner: user.id
    }).toArray();
    let groups = await db.collection(`groups`).find({
        owner: user.id
    }).toArray();
    return {
        tasks,
        groups,
        session: {
            authenticated: "AUTHENTICATED",
            id: user.id
        }
    }
}

export const authenticationRoute = app => {
    app.post('/authenticate', async (req, res) => {
        let {
            username,
            password
        } = req.body;
        let db = await connectDB();
        let collection = await db.collection(`users`);
        let user = await collection.findOne({
            name: username
        });
        if (!user) {
            return res.status(500).send("User Not Found");
        }
        let hash = md5(password);
        let passwordCorrect = (hash === user.passwordHash);
        if (!passwordCorrect) {
            return res.status(500).send("Password Incorrect")
        }
        let token = uuid();
        authenticationTokens.push({
            token,
            userID: user.id
        });
        let state = await assembleUserState(user);
        res.status(200).send({
            token,
            state
        });
    })
}