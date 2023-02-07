import React from "react"
import { FilerType } from "./App"
type ToDoListType = {
    shapka?: string
    newShapka?: string
    tasks: Array<TaskType>
    removeTask: (id: number, myTitile: string) => void
    changeFiler: (value: FilerType) => void
}
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const ToDoList = (props: ToDoListType) => {
    console.log("rendering ToDOList")
    return (
        <div>
            {/* <input type="button" value="text inside" /> */}
            <h3>{props.shapka}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el) => {
                    // debugger
                    return (
                        <li key={el.id}>
                            <button onClick={() => { props.removeTask(el.id, "Hello") }}>✖️</button>
                            <input type="checkbox" checked={el.isDone} />
                            <span>{el.title}</span>
                        </li>
                    )
                })
                }

            </ul>
            <div>
                <button onClick={() => {
                    props.changeFiler("all")
                }}>
                    All
                </button>
                <button onClick={() => {
                    props.changeFiler("active")
                }}>
                    Active
                </button>
                <button onClick={() => {
                    props.changeFiler("comlited")
                }}>
                    Completed
                </button>
            </div>
        </div>
    )
}