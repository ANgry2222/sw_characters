import CardPreview, { ICardPreviewProps } from "../CardPreview/CardPreview";
import styles from "./CardsTable.module.scss";

interface ICardsTableProps {
	cardsData: ICardPreviewProps[];
}

export const CardsTable = (props: ICardsTableProps) => {
	return (
		<div className={styles.table_container}>
			{props.cardsData.map((item: ICardPreviewProps, index) => (
				<CardPreview key={index} {...item} />
			))}
		</div>
	);
};

export default CardsTable;
