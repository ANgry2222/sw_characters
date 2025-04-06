import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICardPreviewProps } from "@/app/_components/CardPreview/CardPreview";

export interface IModalSlice {
	isOpen: boolean;
	currentName: string;
	characterShortInfo: ICardPreviewProps | null;
}

export const portfolioInitialState: IModalSlice = {
	isOpen: false,
	currentName: "",
	characterShortInfo: null,
};

export const ModalSlice = createSlice({
	name: "modal",
	initialState: portfolioInitialState,
	reducers: {
		openModal: (state) => {
			state.isOpen = true;
		},
		closeModal: (state) => {
			state.isOpen = false;
		},
		setCharacterShortInfo: (
			state,
			action: PayloadAction<ICardPreviewProps>
		) => {
			state.characterShortInfo = action.payload;
		},
	},
});

export const { openModal, closeModal, setCharacterShortInfo } =
	ModalSlice.actions;
export const selectModalStatus = (state: RootState) => state.modal.isOpen;
export default ModalSlice.reducer;
