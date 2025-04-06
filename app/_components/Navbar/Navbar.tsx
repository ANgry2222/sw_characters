import Link from "next/link";
import image from "../../../public/logo.png";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface INavbarProps {
	isHomePage: boolean;
}

export const Navbar = (props: INavbarProps) => {
	const router = useRouter();
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
				onClick={() => {
					router.push("/home");
				}}
				className={`${styles.navbar__home_button} ${
					props.isHomePage ? styles.active_page : ""
				}`}
			>
				Home
			</span>
			<span
				onClick={() => {
					router.push("/cards");
				}}
				className={`${styles.navbar__characters_button} ${
					props.isHomePage ? "" : styles.active_page
				}`}
			>
				Characters
			</span>
		</nav>
	);
};

export default Navbar;
