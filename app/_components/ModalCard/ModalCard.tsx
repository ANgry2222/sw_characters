import { useAppSelector } from "../../_hooks/Redux";
import CharacterStat from "../CharacterStat/CharacterStat";
import styles from "./ModalCard.module.scss";
import icon_male from "../../../public/icon_male.png";
import icon_female from "../../../public/icon_female.png";
import icon_other from "../../../public/icon_other.png";
import CharacterAgeTag from "../CharacterAgeTag/CharacterAgeTag";
import CharacterGenderTag from "../CharacterGenderTag/CharacterGenderTag";
import GetFullCharacterInfo from "@/app/_utils/GetFullCharacterInfo";
import Image from "next/image";

export const ModalCard = () => {
	const characterShortInfo = useAppSelector(
		(state) => state.modal.characterShortInfo
	);

	const characterFullInfo = GetFullCharacterInfo(
		characterShortInfo?.name || "error"
	);

	return (
		<div className={styles.card_container}>
			<div className={styles.avatar_section}>
				<Image
					className={styles.avatar_section__avatar_image}
					alt="character_avatar"
					layout="fixed"
					width={320}
					height={300}
					src={
						characterShortInfo?.gender === "female"
							? icon_female.src
							: characterShortInfo?.gender === "male"
							? icon_male.src
							: icon_other.src
					}
				/>

				<div className={styles.avatar_section__tags_wrapper}>
					<CharacterAgeTag age={characterShortInfo?.age || ""} />
					<CharacterGenderTag
						text={characterShortInfo?.gender || ""}
					/>
				</div>
			</div>

			<div className={styles.info_section}>
				<p className={styles.info_section__character_name}>
					{characterShortInfo?.name}
				</p>
				<textarea
					readOnly
					value={characterFullInfo}
					className={styles.info_section__text_area}
				></textarea>
				<div className={styles.info_section__character_stats}>
					{characterShortInfo?.stats.map((item, index) => (
						<CharacterStat key={index} {...item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ModalCard;
