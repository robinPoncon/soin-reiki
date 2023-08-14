import { Dispatch, SetStateAction } from "react";
import "./CustomInputCheckbox.scss";

type CustomInputCheckboxProps = {
	name: string;
	label: string;
	isChecked: boolean;
	setIsChecked: Dispatch<SetStateAction<boolean>>;
	returnedValue: (name: string, value: string, isValidated: boolean) => void;
	alwaysValidated?: boolean;
};

const CustomInputCheckbox = ({ name, label, isChecked, setIsChecked, returnedValue, alwaysValidated }: CustomInputCheckboxProps): JSX.Element => {
	const handleChange = () => {
		setIsChecked(!isChecked);
		returnedValue(name, (!isChecked).toString(), alwaysValidated || !isChecked);
	};

	return (
		<div className="customInputCheckbox">
			<input
				checked={isChecked}
				type="checkbox"
				id={name}
				onChange={handleChange}
			/>
			<label htmlFor={name}>{label}</label>
		</div>
	);
};

export default CustomInputCheckbox;
