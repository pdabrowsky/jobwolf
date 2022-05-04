import { useState } from "react";
import {
	FormDataErrors,
	Validation,
	Validations,
	Validators,
	ValidationFn,
} from "./types";

const noEmpty = (value: string) => {
	return value.trim() !== "";
};

const notLongerThan = (value: string, max: number = 0) => {
	return value.trim().length < max;
};

const notShorterThan = (value: string, min: number = 0) => {
	return value.trim().length > min;
};

const notPastDate = (value: Date) => {
	return value > new Date();
};

const validations: Validations = {
	[Validation.NO_EMPTY]: {
		message: "To pole jest wymagane",
		fn: noEmpty as ValidationFn,
	},
	[Validation.NOT_LONGER_THAN]: {
		message: "Pole nie może być dłuższe niż 20",
		fn: notLongerThan as ValidationFn,
	},
	[Validation.NOT_SHORTER_THAN]: {
		message: "Pole nie może być krótsze niż 5",
		fn: notShorterThan as ValidationFn,
	},
	[Validation.NOT_PAST_DATE]: {
		message: "Data nie może być z przeszłości",
		fn: notPastDate as ValidationFn,
	},
};

const validators: Validators = {
	title: [
		Validation.NO_EMPTY,
		[Validation.NOT_LONGER_THAN, 20],
		[Validation.NOT_SHORTER_THAN, 20],
	],
	companyCity: [Validation.NO_EMPTY, [Validation.NOT_LONGER_THAN, 20]],
	duration: [Validation.NOT_PAST_DATE],
};

// useValidations // renderHook

const useValidate = () => {
	const [errors, setErrors] = useState<FormDataErrors>({});

	const validate = (key: keyof Validators, value: string) => {
		const foundErrors: string[] = [];

		(validators[key] ?? []).forEach((element) => {
			if (Array.isArray(element)) {
				const [validationPropertyName, ...args] = element;
				const validationProperty = validations[validationPropertyName];
				if (!validationProperty.fn(value, ...args)) {
					foundErrors.push(validationProperty.message);
				}
			} else {
				const validationProperty = validations[element];
				if (!validationProperty.fn(value)) {
					foundErrors.push(validationProperty.message);
				}
			}
		});

		setErrors((state) => ({
			...state,
			[key]: foundErrors,
		}));
	};

	return { errors, validate };
};
export { useValidate };
