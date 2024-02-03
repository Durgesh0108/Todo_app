import React from "react";

export const Login = () => {
	return (
		<div className="bg-[#444444] p-4 ">
			<form
				className="flex flex-col gap-4 items-center"
				action="http://127.0.0.1:3001/login"
				method="POST"
			>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<label htmlFor="username" className="text-white">
							Username
						</label>
						<input
							type="text"
							name="username"
							id="username"
							className="border-[#ff9900] border-2 rounded-lg px-2 py-1"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="password" className="text-white">
							Password
						</label>
						<input
							type="text"
							name="password"
							id="password"
							className="border-[#ff9900] border-2 rounded-lg px-2 py-1"
						/>
					</div>
				</div>
				<button
					type="submit"
					className="bg-[#ff9900] text-white rounded-full py-2 px-4"
				>
					Login
				</button>
			</form>
		</div>
	);
};
