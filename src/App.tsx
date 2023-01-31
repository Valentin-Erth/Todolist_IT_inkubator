import React from 'react';
import './App.css';
import { TaskType, ToDoList } from './ToDoList';

const App = () => {
    const shapka1 = "What to learn-1"
    const shapka11 = "What to learn-2"
    const shapka2 = "What to learn-222222"
    const shapka3 = "What to learn-23333333333"

    const tasks1: Array<TaskType> = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]


    const tasks2: Array<TaskType> = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]
    return (
        <div className="App">
            <ToDoList shapka={shapka1} tasks={tasks1} />
            <ToDoList shapka={shapka11} tasks={tasks2} />

        </div>
    );
}
export default App;
