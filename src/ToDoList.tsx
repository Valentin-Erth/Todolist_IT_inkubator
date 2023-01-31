import React from "react"
type PropsType = {
    shapka?: string
    newShapka?: string
    tasks: Array<TaskType>
}
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const ToDoList = (props: PropsType) => {
    // debugger
    console.log("rendering ToDOList")
    return (
        <div>
            <input type="button" value="text inside" />
            <h3>{props.shapka}</h3>

            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el: TaskType) => {
                    return (
                        <li key={el.id}><input type="checkbox" checked={el.isDone} /> <span>{el.title}</span></li>
                    )
                })
                }

            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}