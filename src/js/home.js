import React, { useState } from "react";

//include images into your bundle

//create your first component
export function Home() {
	const [tasksArray, setTaskArray] = useState([]);
	const [newTask, setNewTask] = useState([""]);
	const saveTask = e => {
		if (e.keyCode == 13) {
			let newToDo = {
				label: newTask,
				done: false,
				id: tasksArray.length
			};
			setTaskArray([...tasksArray, newToDo]);
			setNewTask("");
		}
	};

	const deleteTask = id => {
		const result = tasksArray.filter(task => task.id != id);
		setTaskArray(result);
	};
	return (
		<div className="text-center mt-5">
			<input
				type="text"
				value={newTask}
				onChange={e => setNewTask(e.target.value)}
				onKeyUp={saveTask}
			/>
			<ul>
				{tasksArray.length > 0 ? (
					tasksArray.map((task, i) => {
						return (
							<li key={i}>
								{task.label}{" "}
								<span
									type="button"
									onClick={() => deleteTask(task.id)}>
									{" "}
									<img src="https://images.pexels.com/photos/5661239/pexels-photo-5661239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />{" "}
								</span>
							</li>
						);
					})
				) : (
					<li>no tasks, add a task</li>
				)}
			</ul>

			<p>{tasksArray.length} items left</p>
		</div>
	);
}
