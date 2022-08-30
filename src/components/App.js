import React, { useState } from "react";
import "./../styles/App.css";

function App() 
{
	
	const [tempTask, setTempTask] = useState("");
	const [tasks, setTasks] = useState([]);
	const [isEditClicked, setIsEditClicked] = useState(false)
	const [editedTask, setEditedTask] = useState("");
	const hide = {
		display: "none"
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setTasks(previousValue => [...previousValue, tempTask])
	};

	const handEditButton = () => {
		setIsEditClicked(!isEditClicked)
	}

	const hanldeEditTask = (index) => {
		if(editedTask === "") {
			alert("Please Edit Task");
		} else {
			for(let i = 0; i < tasks.length; i++) {
				if(index === i) {
					tasks[i] = editedTask
				}
			}
		}
		setIsEditClicked(!isEditClicked)
	}

	console.log(tempTask)

	console.log(tasks)

	console.log(isEditClicked)
	return (
	<div id="main">
	//Do not alter main div
	//Please do not alter the functional component as tests depend on the type of component.
	<h1>To Do List</h1>
	
		<input type='text' id='task' name='task' className="list" 
			onChange={(e) => {setTempTask(e.target.value)}}/>
		<button type="submit" onClick={(e) => handleSubmit(e)} id="btn">Add Task</button>

		{tasks.map((item, index) => {
			return <><p><span className="list" key={index} style={isEditClicked ? {display:"none"} : 
				{display:"inline"}}>{index + 1}. {item}</span> {isEditClicked ? 
				<><input type='text' className="editTask" 
				onChange={(e) => setEditedTask(e.target.value)} />
				{editedTask === "" ? <button className="saveTask">Save Task</button> : 
				<button className="saveTask" onClick={() => hanldeEditTask(index)}>Save Task</button>}
				<button>Delete Task</button></> : <><button className="edit" 
				onClick={handEditButton}>Edit</button><button 
				className="delete">Delete</button></>}</p></>
		})}

	</div>
	);
}


export default App;
