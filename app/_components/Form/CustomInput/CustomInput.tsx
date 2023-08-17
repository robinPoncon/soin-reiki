import React, { ChangeEvent, FocusEvent, HTMLInputTypeAttribute, useEffect, useState } from "react";
import "./CustomInput.scss";
import { formatters, validatorFunction, validators } from "../../../_utils/form";
import Image from "next/image";

type CustomInputProps = {
	label: string;
	name: string;
	defaultValue: string;
	returnedValue: (name: string, value: string, isValidated: boolean) => void;
	placeholder?: string;
	type?: string;
	maxLength?: number;
	required?: boolean;
	formatter?: "number" | "date" | "cardDate" | "price";
	validator?: "authentication" | "notEmpty" | "email" | "date" | "cardNumber" | "cardDate" | "cardSecurityCode" | "password" | "iban" | "phoneNumber";
	icon?: string;
};

const CustomInput = ({ label, name, defaultValue, returnedValue, placeholder, type = "text", maxLength, required, formatter, validator, icon }: CustomInputProps): JSX.Element => {
	const [valueInput, setValueInput] = useState<string>(defaultValue || "");
	const [typeInput, setTypeInput] = useState<HTMLInputTypeAttribute>(type);
	const [errors, setErrors] = useState<string[] | null>(null);
	const [isValidatedInput, setIsValidatedInput] = useState<boolean>(required ? false : true);

	useEffect(() => {
		const validatorResult = validatorFunction(valueInput, errors, validator);
		setErrors(validatorResult.errors);
		setIsValidatedInput(validatorResult.isValidated);
		returnedValue(name, valueInput, validatorResult.isValidated);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [valueInput]);

	useEffect(() => {
		setValueInput(defaultValue);
	}, [defaultValue]);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value = e?.currentTarget?.value;

		if (formatter && formatters.hasOwnProperty(formatter)) {
			value = formatters[formatter](value);
		}

		setValueInput(value);
	};

	const onBlur = (e: FocusEvent<HTMLInputElement>) => {
		if (required && !e?.currentTarget?.value) {
			setErrors(["Ce champs est obligatoire."]);
		} else if (validator && validators[validator](e.currentTarget.value)) {
			setErrors(validators[validator](e.currentTarget.value));
		}
		returnedValue(name, e.currentTarget.value, isValidatedInput);
	};

	return (
		<div className="componentCustomInput">
			<label
				className={required ? "required" : ""}
				htmlFor={name}
			>
				{label}
			</label>
			<div className={`blocInput ${icon === "bankCard" ? "iconsCardInput" : ""}`}>
				<input
					className={errors ? "error" : isValidatedInput && valueInput ? "validated" : ""}
					id={name}
					name={name}
					placeholder={placeholder}
					type={typeInput}
					maxLength={maxLength}
					value={valueInput}
					onChange={onChange}
					onBlur={onBlur}
				/>
				{icon === "password" && typeInput === "password" && (
					<button
						className="iconPassword"
						onClick={() => setTypeInput("text")}
					>
						<Image
							alt="icon eye show password"
							src="icon_eye.svg"
							width={24}
							height={24}
						></Image>
					</button>
				)}
				{icon === "password" && typeInput === "text" && (
					<button
						className="iconPassword"
						onClick={() => setTypeInput("password")}
					>
						<Image
							alt="icon eye hide password"
							src="icon_eye_closed.svg"
							width={24}
							height={24}
						></Image>
					</button>
				)}
				{icon === "bankCard" && (
					<div className="blocCardLogos">
						<Image
							alt="logo mastercard"
							src="logo_mastercard.svg"
							width={24}
							height={24}
						></Image>
						<Image
							alt="logo visa"
							src="logo_visa.svg"
							width={24}
							height={24}
						></Image>
						<Image
							alt="logo american express"
							src="logo_american_express.svg"
							width={24}
							height={24}
						></Image>
					</div>
				)}
			</div>
			{errors && errors.map((errorMsg, index) => <p key={index}>{errorMsg}</p>)}
		</div>
	);
};

export default CustomInput;
