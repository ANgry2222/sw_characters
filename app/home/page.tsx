"use client";

import { useRouter } from "next/navigation";
import { ColoredButton } from "../_components/ColoredButton/ColoredButton";
import Navbar from "../_components/Navbar/Navbar";
import styles from "./styles.module.scss";
import yoda from "../../public/yoda.png";
import cloud from "../../public/cloud.png";
import Image from "next/image";

export default function HomePage() {
	const router = useRouter();

	return (
		<div className={styles.page_container}>
			<Navbar isHomePage={true} />
			<section className={styles.home_page__content}>
				<div className={styles.content__site_description}>
					<p className={styles.description_header}>
						<strong>Find</strong> all your favorite{" "}
						<strong>characters</strong>
					</p>
					<p className={styles.description_body}>
						You can find out all the information about your favorite
						characters
					</p>
					<ColoredButton
						bg_color="#FFC107"
						text="See more..."
						onClick={() => {
							router.push("/cards");
						}}
					/>
				</div>
				<div className={styles.image_wrapper}>
					<Image
						width={400}
						height={200}
						layout="fixed"
						className={styles.cloud_image__upper_cloud}
						src={cloud.src}
						alt="cloud image"
					/>
					<Image
						width={300}
						height={150}
						layout="fixed"
						className={styles.cloud_image__lower_cloud}
						src={cloud.src}
						alt="cloud image"
					/>
					<Image
						width={800}
						height={800}
						layout="fixed"
						className={styles.yoda_image}
						src={yoda.src}
						alt="yoda image"
					/>
				</div>
			</section>
		</div>
	);
}
