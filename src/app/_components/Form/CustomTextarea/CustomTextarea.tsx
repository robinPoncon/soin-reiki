import { validatorFunction, validators } from "@/app/_utils/form";
import { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import "./CustomTextarea.scss";

type CustomInputProps = {
	label: string;
	name: string;
	returnedValue: (name: string, value: string, isValidated: boolean) => void;
	placeholder?: string;
	maxLength?: number;
	defaultValue: string;
	required?: boolean;
	validator?: "authentication" | "notEmpty" | "email" | "date" | "cardNumber" | "cardDate" | "cardSecurityCode" | "password" | "iban" | "phoneNumber";
};

const CustomTextarea = ({ label, name, returnedValue, placeholder, maxLength, defaultValue, required, validator }: CustomInputProps): JSX.Element => {
	const [valueInput, setValueInput] = useState<string>(defaultValue || "");
	const [errors, setErrors] = useState<string[] | null>(null);
	const [isValidatedInput, setIsValidatedInput] = useState<boolean>(required ? false : true);

	useEffect(() => {
		const validatorResult = validatorFunction(valueInput, errors, validator);
		setErrors(validatorResult.errors);
		setIsValidatedInput(validatorResult.isValidated);
		returnedValue(name, valueInput, validatorResult.isValidated);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [valueInput]);

	const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let value = e?.currentTarget?.value;
		setValueInput(value);
	};

	const onBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
		if (required && !e?.currentTarget?.value) {
			setErrors(["Ce champs est obligatoire."]);
		} else if (validator && validators[validator](e.currentTarget.value)) {
			setErrors(validators[validator](e.currentTarget.value));
		}
		returnedValue(name, e.currentTarget.value, isValidatedInput);
	};

	return (
		<div className="componentCustomTextarea">
			<label
				className={required ? "required" : ""}
				htmlFor={name}
			>
				{label}
			</label>
			<textarea
				className={errors ? "error" : isValidatedInput && valueInput ? "validated" : ""}
				id={name}
				name={name}
				placeholder={placeholder}
				maxLength={maxLength}
				value={valueInput}
				onChange={onChange}
				onBlur={onBlur}
			/>
		</div>
	);
};

export default CustomTextarea;
