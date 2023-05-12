import Header from "../components/Header";

import styles from "./page.module.css";
import all from "../css/all.module.css";

function Task({ task }) {
	return (
		<section className={all.task}>
			<p>{task}</p>
			<span>0 of 1 substasks</span>
		</section>
	);
}

export default function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<div className={all.cantidad}>
				<span className={all.cyan} />
				<p>TODO <span>(4)</span></p>
			</div>
			<Task task="build ui for search page" />
			<Task task="design settings and search pages" />
			<Task task="add search points" />
			<Task task="qa and test all new users" />
			<Task task="add authentication endpoints" />
			<Task task="build ui for product page" />
			<Task task="research pricing points of various competitors" />
			<Task task="trial different business models" />
			{/* <Image src={responsive} alt="Template" /> */}
		</main>
	);
}
