import React from "react";

export function Home() {
	return (
		<div className="text-center">
			<h1>TODO LIST</h1>
			<form>
				<div className="form-row aling-items-center">
					<div className="col-auto">
						<label className="sr-only" htmlFor="inlineFormInput">
							Name
						</label>
						<input
							type="text"
							className="form-control mb-2"
							id="inlineFormInput"
							placeholder="Agregue una tarea"
						/>
					</div>
					<div className="col-auto">
						<button type="submit" className="btn btn-primary mb-2">
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
