import {
    addNewTask,
    updateTask
} from './server';

(async function myFunc() {
    await addNewTask({
        name: "My Task XYZ",
        id: "123456"
    });

    await updateTask({
        id: "123456",
        name: "Updated Task!"
    })
})();