import styles from "./CharacterGenderTag.module.scss";

export enum CharacterGenderColors {
	Male = "#73D677",
	Female = "#C956FF",
	Hermaphrodite = "#F5DB13",
	Unknown = "",
}

export interface IGenderTagProps {
	text: string;
}

export const CharacterGenderTag = (props: IGenderTagProps) => {
	let gender = null;
	switch (props.text.toLowerCase()) {
		case "female":
			gender = CharacterGenderColors.Female;
			break;
		case "male":
			gender = CharacterGenderColors.Male;
			break;
		case "hermaphrodite":
			gender = CharacterGenderColors.Hermaphrodite;
			break;
		default:
			return null;
	}

	return (
		<div
			className={styles.gender_tag__div}
			style={{ backgroundColor: gender }}
		>
			{props.text}
		</div>
	);
};

export default CharacterGenderTag;
