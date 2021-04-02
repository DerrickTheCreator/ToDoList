import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
    const [tasksArray, setTaskArry] = useState([]);
    const [newTask, setNewTask] = useState([""]);
    const saveTask = e =>{

        if (e.keyCode == 13)
            let newTask = {
                label:newTask,
                done: false,
                id: tasksArray.length
            };
            setTaskArray([...tasksArray, newToDo]);
           setNewTask("");
        }
    };

const deleteTask = id => {
    const result = tasksArray.filter(task => task.id !=id);
    setTasksArray(result);


}; 
    return (
		<div className="text-center mt-5">
            <input
            type="text"
            value={newTask}
            onchange={e => setNewTask(e.target.value)}
            onKeyUp={saveTask}
            />
            <ul>
                {tasksArray.map((task, i) => {
                return (
                    <li key= {i}>
                        {task.label}{" "}
                        <span
                            type="button"
                            onClick={ () => deleteTask(task.id)}>
                                {" "}
                                x{" "}
                            </span>
                </li>
                );
               
                })     
                }: <li>no tasks, add a task</li>
             </ul>
            <p>{TasksArray.length} items left</p>
        </div>
    );
}
