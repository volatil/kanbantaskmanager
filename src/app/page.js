import Image from "next/image";
import Header from "../components/Header";

import styles from "./page.module.css";
import all from "../css/all.module.css";

import responsive from "../design/uzyruyovh7rvfter09tp.jpg";

export default function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<div className={all.cantidad}>
				<span className={all.cyan} />
				<p>TODO (4)</p>
			</div>
			<p>Kanban Task Manager</p>
			{/* <Image src={responsive} alt="Template" /> */}
		</main>
	);
}
