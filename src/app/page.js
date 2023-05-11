import Image from "next/image";
import styles from "./page.module.css";

import logo from "../../public/assets/svg/logo-light.svg";

export default function Home() {
	return (
		<main className={styles.main}>
			<Image
				src={logo}
				alt="Kanban"
				// className={styles.vercelLogo}
				height={24}
				priority
			/>
			<h1>Kanban Task Manager</h1>
		</main>
	);
}
