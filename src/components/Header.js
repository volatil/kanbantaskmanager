import Image from "next/image";
import logo from "../../public/assets/svg/logo-light.svg";
import header from "../css/header.module.css";
import iconAdd from "../../public/assets/svg/icon-add-task-mobile.svg";

function Header() {
	return (
		<header className={header.header}>
			<Image
				src={logo}
				alt="Kanban"
				height={24}
				priority
			/>
			<div className={header.agregar}>
				<Image
					src={iconAdd}
					alt="Agregar Task"
				/>
			</div>
		</header>
	);
}
export default Header;
