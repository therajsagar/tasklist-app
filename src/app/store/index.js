import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import {
    defaultState
} from '../../server/defaultState';
import {
    createLogger
} from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import * as sagas from './sagas';
import * as mutations from './mutation';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({
        session(userSession = defaultState.session || {}, action) {
            let {
                type,
                authenticated,
                session
            } = action;
            switch (type) {
                case mutations.SET_STATE:
                    return {
                        ...userSession,
                        id: action.state.session.id
                    }
                case mutations.REQUEST_AUTHENTICATE_USER:
                    return {
                        ...userSession,
                        authenticated: mutations.AUTHENTICATING
                    }
                case mutations.PROCESSING_AUTHENTICATE_USER:
                    return {
                        ...userSession,
                        authenticated
                    }
                default:
                    return userSession;
            }
        },
        tasks(tasks = [], action) {
            switch (action.type) {
                case mutations.SET_STATE:
                    return action.state.tasks;
                case mutations.CREATE_TASK:
                    return [...tasks, {
                        id: action.taskID,
                        name: "New Task",
                        group: action.groupID,
                        owner: action.ownerID,
                        isComplete: false
                    }];
                case mutations.SET_TASK_COMPLETE:
                    return tasks.map(i => {
                        return (i.id === action.taskID ? ({
                            ...i,
                            isComplete: action.isComplete
                        }) : i)
                    });
                case mutations.SET_TASK_NAME:
                    return tasks.map(i => {
                        return (i.id === action.taskID ? ({
                            ...i,
                            name: action.name
                        }) : i)
                    });
                case mutations.SET_TASK_GROUP:
                    return tasks.map(i => {
                        return (i.id === action.taskID ? ({
                            ...i,
                            group: action.groupID
                        }) : i)
                    });
            }
            return tasks;
        },
        comments(comments = []) {
            return comments;
        },
        groups(groups = [], action) {
            switch (action.type) {
                case mutations.SET_STATE:
                    return action.state.groups
            }
            return groups;
        },
        users(users = []) {
            return users;
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for (let i in sagas) {
    sagaMiddleware.run(sagas[i]);
}