import styles from "./ColoredButton.module.scss";

export interface IColoredButtonProps {
	bg_color: string;
	text: string;
	onClick: () => void;
}

export const ColoredButton = (props: IColoredButtonProps) => {
	return (
		<button
			onClick={() => {
				props.onClick();
			}}
			className={styles.colored_button}
			style={{ background: `${props.bg_color}` }}
		>
			{props.text}
		</button>
	);
};
