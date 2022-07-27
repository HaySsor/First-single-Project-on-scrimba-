import React from "react";
import classes from './Info.module.css'

function Info({ title, text }) {
	return (
		<div className={classes.info}>
			<h2>{title}</h2>
			<p className={classes.infoText}>{text}</p>
		</div>
	);
}

export default Info;
