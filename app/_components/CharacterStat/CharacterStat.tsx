import styles from "./CharacterStat.module.scss";
import circle from "../../../public/circle.svg";
import Image from "next/image";

export interface ICharacterStatProps {
	stat: string;
	value: string;
}

export const CharacterStat = (props: ICharacterStatProps) => {
	if (props.value === "unknown") return null;
	return (
		<div className={styles.stat_wrapper}>
			<div className={styles.circle_container}>
				<Image
					width={circle.width}
					height={circle.height}
					layout="fixed"
					className={styles.circle_image}
					src={circle.src}
					alt="circle_border"
				/>
				<p className={styles.value_text}>{props.value}</p>
			</div>
			<p className={styles.stat_name}>{props.stat}</p>
		</div>
	);
};

export default CharacterStat;
