import {
    defaultState
} from './defaultState';
import {
    connectDB
} from './connect-db';

async function initializeDB() {
    let db = await connectDB();
    let user = await db.collection(`users`).findOne({
        id: "U1"
    });
    if (!user) {
        for (let i in defaultState) {
            let collection = db.collection(i);
            await collection.insertMany(defaultState[i]);
        }
    }
}

initializeDB();