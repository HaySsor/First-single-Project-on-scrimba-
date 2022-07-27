import React from "react";
import photo from "../assets/woman-1353825_1280.png";
import classes from "./Card.module.css";
import Button from "./Button/Button";



function Card() {
	return (
		<div className={classes.card}>
			<img src={photo} />
			<h1>Laura Smith</h1>
			<p className={classes.work}>Frontend Developer</p>
			<p className={classes.website}>laurasmith.website</p>
			<div className={classes.btnBox}>
				<Button text="Email" />
				<Button text="Linkedin" isLinkedin={true} />
			</div>
		</div>
	);
}

export default Card;
