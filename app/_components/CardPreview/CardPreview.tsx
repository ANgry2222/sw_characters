import CharacterAgeTag from "../CharacterAgeTag/CharacterAgeTag";
import CharacterGenderTag from "../CharacterGenderTag/CharacterGenderTag";
import CharacterStat, {
	ICharacterStatProps,
} from "../CharacterStat/CharacterStat";
import styles from "./CardPreview.module.scss";
import { useAppDispatch } from "../../_hooks/Redux";
import { openModal } from "@/app/_store/slices/modalSlice";
import { setCharacterShortInfo } from "@/app/_store/slices/modalSlice";

export interface ICardPreviewProps {
	name: string;
	gender: string;
	age: string;
	stats: ICharacterStatProps[];
}

export const CardPreview = (props: ICardPreviewProps) => {
	const dispatch = useAppDispatch();

	const handleCardClick = () => {
		dispatch(setCharacterShortInfo(props));
		dispatch(openModal());
	};

	return (
		<div onClick={handleCardClick} className={styles.card_container}>
			<div
				data-testid={"name-block"}
				className={styles.card_preview__name}
			>
				<p>{props.name}</p>
			</div>
			<div
				data-testid={"stats-block"}
				className={styles.card_preview__stats_section}
			>
				{props.stats.map((item: ICharacterStatProps, index) => (
					<CharacterStat key={index} {...item} />
				))}
			</div>
			<div
				data-testid={"tags-block"}
				className={styles.card_preview__tags_section}
			>
				<CharacterAgeTag age={props.age} />
				<CharacterGenderTag text={props.gender} />
			</div>
		</div>
	);
};

export default CardPreview;
