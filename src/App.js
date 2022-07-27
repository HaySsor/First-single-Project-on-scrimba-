import Card from "./components/Card";
import classes from "./App.module.css";
import Footer from "./components/Footer";
import Info from "./components/Info";

function App() {
	return (
		<div className={classes.container}>
			<Card />
			<Info
				title="About"
				text=" I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
			/>
			<Info
				title="Interests"
				text="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
				Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
			/>
			<Footer />
		</div>
	);
}

export default App;
