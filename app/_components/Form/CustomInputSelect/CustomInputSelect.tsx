import useOutsideClick from "../../../_utils/hideComponentClickOutside";
import Image from "next/image";
import { useRef, useState } from "react";
import "./CustomInputSelect.scss";

type countryDatas = {
	id: number;
	name: string;
	alpha2: string;
	alpha3: string;
};

type CustomInputSelectProps = {
	label: string;
	name: string;
	required?: boolean;
	defaultValue: string;
	arrayDatas: countryDatas[];
	returnedValue: (name: string, value: string, isValidated: boolean) => void;
	returnedValueDataSelected?: (object: countryDatas) => void;
};

const CustomInputSelect = ({ label, name, required, defaultValue, arrayDatas, returnedValue, returnedValueDataSelected }: CustomInputSelectProps): JSX.Element => {
	const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
	const [isSelectDisplayed, setIsSelectDisplayed] = useState(false);

	const closeSelect = () => {
		setIsSelectDisplayed(false);
	};
	const refSelect = useRef<HTMLDivElement>(null);
	useOutsideClick(refSelect, closeSelect);

	const getDataSelected = (data: countryDatas) => {
		setSelectedValue(data.name);
		setIsSelectDisplayed(false);
		returnedValue(name, data.name, true);
		if (returnedValueDataSelected) {
			returnedValueDataSelected(data);
		}
	};

	return (
		<div className="componentCustomInputSelect">
			<div className="blocInput">
				<label className={required ? "required" : ""}>{label}</label>
				<button onClick={() => setIsSelectDisplayed(!isSelectDisplayed)}>
					<p>{selectedValue}</p>
					<Image
						alt={isSelectDisplayed ? "icône pour afficher le contenu du select" : "icône pour masquer le contenu du select"}
						src={isSelectDisplayed ? "icon_arrow_drop_up_black.svg" : "icon_arrow_drop_down_black.svg"}
						height={24}
						width={24}
					/>
				</button>
			</div>
			{isSelectDisplayed && arrayDatas?.length > 0 && (
				<div
					ref={refSelect}
					className="arrayDatasToSelect"
				>
					{arrayDatas.map((data, key) => (
						<button
							key={`index${data.id}-${key}`}
							className={data.name === selectedValue ? "isSelected" : ""}
							onClick={() => getDataSelected(data)}
						>
							<p>{data.name}</p>
							{data.name === selectedValue && (
								<Image
									alt="icône de check pour savoir quel élément est déjà sélectionné"
									src="icon_check_black.svg"
									height={20}
									width={20}
								/>
							)}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default CustomInputSelect;
