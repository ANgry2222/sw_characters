import { KeyboardEvent, MouseEvent, useEffect, useRef } from "react";
import styles from "./Modal.module.scss";
import { useAppDispatch, useAppSelector } from "../../_hooks/Redux";
import { closeModal } from "@/app/_store/slices/modalSlice";
import { createPortal } from "react-dom";
import ModalCard from "../ModalCard/ModalCard";

export const Modal = () => {
	const modalState = useAppSelector((state) => state.modal.isOpen);
	const dispatch = useAppDispatch();
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	useEffect(() => {
		if (modalState) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [modalState]);

	const closeModalByKeyPress = (event: KeyboardEvent) => {
		if (event.key === "Escape") {
			dispatch(closeModal());
		}
	};

	const closeModalByClick = () => {
		dispatch(closeModal());
	};

	const modalClickEvent = (event: MouseEvent) => {
		if (event.target as HTMLDivElement) {
			event.stopPropagation();
		}
	};

	if (!modalState) return null;

	return createPortal(
		<dialog
			ref={dialogRef}
			onKeyDown={(event: KeyboardEvent) => closeModalByKeyPress(event)}
			onClick={closeModalByClick}
			className={styles.open_dialog}
		>
			<div
				onClick={(event) => modalClickEvent(event)}
				className={styles.modal_wrapper}
			>
				<ModalCard />
			</div>
		</dialog>,
		document.body
	);
};

export default Modal;
