"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/svg/logo-light.svg";
import header from "../css/header.module.css";
import iconAdd from "../../public/assets/svg/icon-add-task-mobile.svg";

import styles from "./page.module.css";
import all from "../css/all.module.css";

function Header() {
	const [desplegado, setdesplegado] = useState(false);

	const triggerModal = () => {
		console.debug( "hola" );
		setdesplegado((current) => !current);
	};

	return (
		<header className={header.header}>
			<Image
				src={logo}
				alt="Kanban"
				height={24}
				priority
			/>
			{
				desplegado
					? (<p>si desplegado</p>)
					: (<p>no desplegado</p>)
			}
			<button type="button" className={header.agregar} onClick={() => triggerModal()}>
				<Image
					src={iconAdd}
					alt="Agregar Task"
				/>
			</button>
		</header>
	);
}

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
