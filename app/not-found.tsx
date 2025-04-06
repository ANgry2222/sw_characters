"use client";

import { ColoredButton } from "./_components/ColoredButton/ColoredButton";
import styles from "./not-found.module.scss";
import image from "../public/teamRocket.png";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Custom404() {
	const router = useRouter();

	return (
		<div className={styles.container}>
			<div className={styles.container__error_div}>
				<span className={styles.error_text}>4</span>
				<div className={styles.image_wrapper}>
					<span className={`${styles.error_text} ${styles.test}`}>
						0
					</span>
					<Image
						alt="Death Star Image"
						className={styles.image}
						src={image.src}
						width={image.width}
						height={image.height}
						layout="fixed"
					/>
				</div>

				<span className={styles.error_text}>4</span>
			</div>
			<div className={styles.container__button_div}>
				<div className={styles.container__button_wrapper}>
					<ColoredButton
						bg_color="#73D677"
						text="Return home"
						onClick={() => {
							router.push("/home");
						}}
					/>
				</div>
			</div>
		</div>
	);
}
