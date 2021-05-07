import React, { useState } from "react";

export const Home = () => {
	const [todoList, setTodoList] = useState([
		{ label: "Do my English homework", done: false },
		{ label: "Call Pariente", done: false },
		{ label: "Pick up the car", done: false }
	]);

	const handleKeyPress = e => {
		
		if (e.chardCode===13) {console.log(e.target.value);
			/*let newTodo = { label: event.target.value, done: false };
			let newTodoList = [...todoList, newTodo];
			setTodoList(newTodoList);
		}*/
	};
	return (
		<div className="conteiner-fluid">
			<div className="row d-flex justify-content-center">
				<div className="col-12 col-md-6 col-xl-4">
					<div className="card mt-5" style={{ width: "100%" }}>
						<input
							onKeyPress={handleKeyPress}
							placeholder="add todo"
						/>
						<ul className="list-group list-group-flush">
							{todoList.map((todo, index) =>
								<li key={index} className="list-group-item">
									{todo.label}
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
