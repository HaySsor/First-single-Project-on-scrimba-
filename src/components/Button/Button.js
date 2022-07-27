import React from "react";
import classes from "./Button.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Button({ text, isLinkedin }) {
	return (
		<button
			className={`${isLinkedin ? classes.linkedin : null} ${classes.button}`}>
			{isLinkedin ? (
				<AiFillLinkedin className={classes.icon} />
			) : (
				<AiOutlineMail className={classes.icon} />
			)}
			{text}
		</button>
	);
}

export default Button;
