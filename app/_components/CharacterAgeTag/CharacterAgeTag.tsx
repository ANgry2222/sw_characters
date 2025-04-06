import styles from "./CharacterAgeTag.module.scss";

export interface IAgeTagProps {
	age: string;
}

export const CharacterAgeTag = (props: IAgeTagProps) => {
	if (props.age === "unknown" || props.age.length === 0) return null;
	return <div className={styles.age_tag__div}>{props.age}</div>;
};

export default CharacterAgeTag;
