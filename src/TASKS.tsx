import React from 'react';
type PropsTypeTask = {
    datas: DataType
}
type DataType = {
    title: string
    tasks: Array<TaskType>
    students: Array<string>
}
type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}

export const TASKS = (props: PropsTypeTask) => {
    // debugger;
    return (
        <div>
            <div>
                <h3>{props.datas.title}</h3>
                <input type="button" value="text inside" />
                <ul>
                    {props.datas.tasks.map(el => {
                        return (
                            <li><input type="checkbox" checked={el.isDone} />
                                <span>{el.taskId}</span>
                                <span>{el.title}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <h3>{props.datas.students[1]}</h3>
            </div>
            <select>
                {props.datas.students.map(el => {
                    return (
                        <option>{el}</option>
                    )
                })}
            </select>
        </div>

    );
};
