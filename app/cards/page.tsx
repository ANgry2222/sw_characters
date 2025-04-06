"use client";

import { useEffect, useState } from "react";
import Navbar from "../_components/Navbar/Navbar";
import styles from "./styles.module.scss";
import CardsTable from "../_components/CardsTable/CardsTable";
import { ICardPreviewProps } from "../_components/CardPreview/CardPreview";
import { Provider } from "react-redux";
import store from "../_store/store";
import Modal from "../_components/Modal/Modal";
import IApiCharacter from "../_interfaces/IApiCharacter";

export default function CardsPage() {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [data, setData] = useState<Array<IApiCharacter>>([]);
	const [options, setOptions] = useState<Array<string>>([]);
	const [filteredData, setFilteredData] = useState<Array<ICardPreviewProps>>(
		[]
	);

	useEffect(() => {
		async function fetchAllData(url: string) {
			let result: Array<IApiCharacter> = [];
			while (url) {
				const response = await fetch(url);
				const data = await response.json();
				result = result.concat(data.results as Array<IApiCharacter>);
				url = data.next;
			}
			return result;
		}

		fetchAllData("https://swapi.dev/api/people/")
			.then((data: Array<IApiCharacter>) => {
				setOptions(getUniqueOptions(data));
				setFilteredData(getFilteredData("all", data));
				setData(data);
			})
			.then(() => {
				setIsLoading(false);
			})
			.catch((error) => console.error("Ошибка:", error));
	}, []);

	const getUniqueOptions = (data: Array<IApiCharacter>) => {
		const options_arr: Array<string> = [];
		data.forEach((item: IApiCharacter) => {
			if (!options_arr.includes(item.eye_color)) {
				options_arr.push(item.eye_color);
			}
		});
		return options_arr.sort();
	};

	const getFilteredData = (
		filterString: string,
		data: Array<IApiCharacter>
	) => {
		const filteredCharacters: Array<ICardPreviewProps> = [];
		if (filterString === "all") {
			data.forEach((item: IApiCharacter) => {
				filteredCharacters.push({
					name: item.name,
					gender: item.gender,
					age: item.birth_year,
					stats: [
						{ stat: "height", value: item.height },
						{ stat: "mass", value: item.mass },
					],
				});
			});
		} else {
			data.forEach((item: IApiCharacter) => {
				if (filterString === item.eye_color) {
					filteredCharacters.push({
						name: item.name,
						gender: item.gender,
						age: item.birth_year,
						stats: [
							{ stat: "height", value: item.height },
							{ stat: "mass", value: item.mass },
						],
					});
				}
			});
		}
		return filteredCharacters;
	};

	const handleSelectChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setIsLoading(true);
		setFilteredData(getFilteredData(event.currentTarget.value, data));
		setIsLoading(false);
	};

	if (isLoading) {
		return (
			<div className={styles.cards_page__container}>
				<Navbar isHomePage={false} />
				<div className={styles.cards_page__loading_screen}>
					<div className={styles.loading_message__wrapper}>
						<p className={styles.loading_message__text}>
							Loading...
						</p>
						<div className={styles.spinner}></div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<Provider store={store}>
			<Modal />
			<div>
				<Navbar isHomePage={false} />
				<div className={styles.characters_found__wrapper}>
					<p className={styles.characters_found__text}>
						{filteredData?.length} <strong>People</strong> for you
						to choose your favorite
					</p>
				</div>
				<div className={styles.table_wrapper}>
					<div className={styles.filter_section}>
						<label
							className={styles.filter_label}
							htmlFor="eye_color"
						>
							eye color
						</label>
						<select
							onChange={(event) => handleSelectChange(event)}
							defaultValue="all"
							className={styles.filter_select}
							id="eye_color"
						>
							<option
								key={0}
								className={styles.filter_select__option}
							>
								all
							</option>
							{options.map((option, index) => (
								<option
									className={styles.filter_select__option}
									key={index + 1}
									value={option}
								>
									{option}
								</option>
							))}
						</select>
					</div>
					<CardsTable cardsData={filteredData} />
				</div>
			</div>
		</Provider>
	);
}
