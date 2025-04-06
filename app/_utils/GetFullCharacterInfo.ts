import IApiCharacter from "../_interfaces/IApiCharacter";

function GetFullCharacterInfo(characterName: string) {
	const data = sessionStorage.getItem("data");
	if (data) {
		const characterFullInfo: Array<IApiCharacter> = JSON.parse(data);
		const itemIndex = characterFullInfo.findIndex(
			(item) => item.name === characterName
		);
		const rawData = characterFullInfo[itemIndex];
		let result: string = "";
		result += `eye color: ${rawData.eye_color}\n`;
		result += `hair color: ${rawData.hair_color}\n`;
		result += `skin color: ${rawData.skin_color}\n`;
		return result;
	}

	return "";
}

export default GetFullCharacterInfo;
