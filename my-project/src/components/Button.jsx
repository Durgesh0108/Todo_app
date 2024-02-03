import React from "react";

export const Button = (props) => {
	return (
		<button className={`rounded-full py-2 px-4 ${props.className}`} {...props} >{props.children}</button>
	);
};
