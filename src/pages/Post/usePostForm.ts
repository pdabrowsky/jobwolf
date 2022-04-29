import React, { useState, useMemo, SyntheticEvent, useContext } from "react";
import { Options } from "react-select";
import { ConfigOption, ConfigContext } from "./../../components/ConfigContext";
import { FormData } from "./types";
import { useValidate } from "./useValidate";
import { usePostRequest } from "./usePostRequest";
import { toBase64 } from "./utils";

// renderHook w @testing-library/react-hooks

const usePostForm = () => {
	const { contractTypes, ...config } = useContext(ConfigContext);
	const { errors, validate } = useValidate();

	const [formData, setFormData] = useState<FormData>({
		title: "",
		benefits: [],
		categories: [],
		companyCity: "",
		companyName: "",
		salaryFrom: 0,
		salaryTo: 0,
		contractTypeId: null,
		contractTypes: [],
		duration: new Date(),
		thumb: "",
		seniority: "",
		description: "",
	});
	const { requestPost } = usePostRequest(formData);

	const mappedFormData = useMemo(
		() => ({
			...formData,
			contractTypeId: formData.contractTypeId ?? contractTypes?.[0]?.id,
		}),
		[formData, contractTypes]
	);

	const handleChange = (key: keyof FormData) => {
		return (
			event: React.ChangeEvent<
				HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
			>
		) => {
			setFormData((state) => ({
				...state,
				[key]: event.target.value,
			}));
		};
	};
	const handleValidate = (key: keyof FormData) => {
		return (
			event: React.ChangeEvent<
				HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
			>
		) => {
			validate(key, event.target.value);
		};
	};

	const handleExtraChange = (
		key: keyof Pick<FormData, "benefits" | "categories" | "contractTypes">
	) => {
		return (newValue: Options<{ label: string; value: number }>) => {
			setFormData((state) => {
				const values = newValue.map((val) => val.value);

				return { ...state, [key]: values };
			});
		};
	};

	const handleFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.target.files?.[0];

		if (file) {
			try {
				const result = await toBase64(file);
				setFormData((state) => ({
					...state,
					thumb: result,
				}));
			} catch (error) {
				console.error(error);
				return;
			}
		}
	};

	const handleSalaryChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		key: keyof Pick<FormData, "salaryFrom" | "salaryTo">
	) => {
		setFormData((state) => ({
			...state,
			[key]: e.target.value,
		}));
	};

	const handleSalaryAdd = () => {
		console.log(
			mappedFormData.salaryFrom,
			mappedFormData.salaryTo,
			mappedFormData.contractTypeId
		);
	};

	const selectOptions = (element: ConfigOption[]) => {
		return element.map((el) => ({
			value: el.id,
			label: el.name,
		}));
	};

	const handleDurationChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setFormData((state) => ({
			...state,
			duration: new Date(event.target.value) ?? new Date(),
		}));
	};
	const handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
		event.preventDefault();
		requestPost();
	};

	return {
		formData: mappedFormData,
		errors,
		handleValidate,
		handleChange,
		handleFileChange,
		handleExtraChange,
		handleDurationChange,
		handleSubmit,
		selectOptions,
		handleSalaryChange,
		handleSalaryAdd,
		contractTypes,
		...config,
	};
};

export { usePostForm };
