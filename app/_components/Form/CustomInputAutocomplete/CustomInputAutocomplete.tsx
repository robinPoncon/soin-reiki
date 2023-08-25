import React, { ChangeEvent, FocusEvent, useEffect, useRef, useState } from "react";
import "./CustomInputAutocomplete.scss";
import { formatters, validatorFunction, validators } from "../../../_utils/form";
import Image from "next/image";
import useOutsideClick from "../../../_utils/hideComponentClickOutside";

type ObjectCustom = {
	[key: string]: any;
};

type CustomInputAutocompleteProps = {
	label: string;
	name: string;
	defaultValue: string;
	returnedValue: (name: string, value: string, isValidated: boolean) => void;
	returnedAutocompleteDatas: (object: ObjectCustom) => void;
	arrayDatas: ObjectCustom[];
	filterKeys: string[];
	keyToShow: string;
	placeholder?: string;
	type?: string;
	maxLength?: number;
	required?: boolean;
	formatter?: "number" | "date" | "cardDate" | "price";
	validator?:
		| "authentication"
		| "notEmpty"
		| "email"
		| "date"
		| "cardNumber"
		| "cardDate"
		| "cardSecurityCode"
		| "password"
		| "iban"
		| "phoneNumber";
	icon?: string;
	displayDatasOnFocusWithEmptyInputValue?: boolean;
};

const CustomInputAutocomplete = ({
	label,
	name,
	defaultValue,
	returnedValue,
	returnedAutocompleteDatas,
	arrayDatas,
	filterKeys,
	keyToShow,
	placeholder,
	type = "text",
	maxLength,
	required,
	formatter,
	validator,
	icon,
	displayDatasOnFocusWithEmptyInputValue = false
}: CustomInputAutocompleteProps): JSX.Element => {
	const [valueInput, setValueInput] = useState<string>(defaultValue || "");
	const [errors, setErrors] = useState<string[] | null>(null);
	const [isValidatedInput, setIsValidatedInput] = useState<boolean>(required ? false : true);
	const [filteredDatas, setFilteredDatas] = useState<{}[]>(
		displayDatasOnFocusWithEmptyInputValue ? arrayDatas : []
	);
	const [isFilteredDatasDisplayed, setIsFilteredDatasDisplayed] = useState<boolean>(false);
	const closeAutocomplete = () => {
		setIsFilteredDatasDisplayed(false);
	};
	const refAutocomplete = useRef<HTMLDivElement>(null);
	useOutsideClick(refAutocomplete, closeAutocomplete);

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

	const onFocus = () => {
		if (displayDatasOnFocusWithEmptyInputValue || valueInput) {
			setIsFilteredDatasDisplayed(true);
		}
	};

	const checkValue = (object: ObjectCustom, key: string, value: string) => {
		if (object) {
			if (
				key in object &&
				object[key].toString().toLowerCase().includes(value.toLowerCase())
			) {
				return true;
			} else {
				for (const k in object) {
					if (typeof object[k] === "object") {
						if (checkValue(object[k], key, value)) {
							return true;
						}
					}
				}
				return false;
			}
		}
		return false;
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		let value = event?.currentTarget?.value;

		if (formatter && formatters.hasOwnProperty(formatter)) {
			value = formatters[formatter](value);
		}

		const newFilteredDatas = arrayDatas.filter((data) =>
			filterKeys.some((key) => checkValue(data, key, value))
		);

		setFilteredDatas(newFilteredDatas);
		setIsFilteredDatasDisplayed(true);
		setValueInput(value);
	};

	const onBlur = (event: FocusEvent<HTMLInputElement>) => {
		if (required && !event?.currentTarget?.value) {
			setErrors(["Ce champs est obligatoire."]);
		} else if (validator && validators[validator](event.currentTarget.value)) {
			setErrors(validators[validator](event.currentTarget.value));
		}
		returnedValue(name, event.currentTarget.value, isValidatedInput);
	};

	const selectDataInAutocomplete = (object: ObjectCustom) => {
		returnedAutocompleteDatas(object);
		closeAutocomplete();
		setValueInput(object[keyToShow]);
		setFilteredDatas([object]);
		returnedValue(name, object[keyToShow], isValidatedInput);
	};

	return (
		<div
			ref={refAutocomplete}
			className="componentCustomInputAutocomplete"
		>
			<label
				className={required ? "required" : ""}
				htmlFor={name}
			>
				{label}
			</label>
			<div className={`blocInput${icon === "bank" ? " iconsBankInput" : ""}`}>
				<input
					className={errors ? "error" : isValidatedInput && valueInput ? "validated" : ""}
					id={name}
					name={name}
					placeholder={placeholder}
					type={type}
					maxLength={maxLength}
					value={valueInput}
					onChange={onChange}
					onBlur={onBlur}
					onFocus={onFocus}
				/>
				{icon === "bank" && (
					<div className="iconsBank">
						<Image
							alt="logo de la banque credit agricole"
							src="logo_CA.svg"
							width={36}
							height={24}
						></Image>
						<Image
							alt="logo de la banque postale"
							src="logo_banque_postale.svg"
							width={35}
							height={24}
						></Image>
						<Image
							alt="logo de la banque populaire"
							src="logo_banque_populaire.svg"
							width={24}
							height={24}
						></Image>
					</div>
				)}
				{isFilteredDatasDisplayed && filteredDatas.length > 0 && (
					<div className="filteredDatas">
						{filteredDatas.map((value: ObjectCustom, index) => (
							<button
								onClick={() => selectDataInAutocomplete(value)}
								type="button"
								key={value.id || index}
							>
								{value[keyToShow]}
							</button>
						))}
					</div>
				)}
			</div>
			{errors && errors.map((errorMsg, index) => <p key={index}>{errorMsg}</p>)}
		</div>
	);
};

export default CustomInputAutocomplete;
