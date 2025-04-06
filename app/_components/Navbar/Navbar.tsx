import Link from "next/link";
import image from "../../../public/logo.png";
import styles from "./Navbar.module.scss";
import Image from "next/image";

export interface INavbarProps {
	isHomePage: boolean;
}

export const Navbar = (props: INavbarProps) => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__logo_wrapper}>
				<Image
					width={image.width}
					height={image.height}
					layout="fixed"
					alt="logo"
					src={image.src}
				/>
			</div>
			<span
				className={`${styles.navbar__home_button} ${
					props.isHomePage ? styles.active_page : ""
				}`}
			>
				<Link href="/home">Home</Link>
			</span>
			<span
				className={`${styles.navbar__characters_button} ${
					props.isHomePage ? "" : styles.active_page
				}`}
			>
				<Link href="/cards">Characters</Link>
			</span>
		</nav>
	);
};

export default Navbar;
