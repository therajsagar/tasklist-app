import {
    defaultState
} from './defaultState';
import {
    connectDB
} from './connect-db';

async function initializeDB() {
    let db = await connectDB();
    for (let i in defaultState) {
        let collection = db.collection(i);
        await collection.insertMany(defaultState[i]);
    }
}

initializeDB();