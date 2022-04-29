type FormData = {
	title: string;
	benefits: string[];
	categories: string[];
	companyCity: string;
	companyName: string;
	salaryFrom: number;
	salaryTo: number;
	contractTypeId: number | null;
	contractTypes: {
		salaryFrom: number;
		salaryTo: number;
		contractName: string;
		contractTypeId: number;
	}[];
	thumb: string;
	duration: Date;
	description: string;
	seniority: string;
};

type OfferRequest = {
	title: string;
	benefit_ids: string[];
	category_ids: string[];
	company_city: string;
	company_name: string;
	contracts: {
		salary_from: number;
		salary_to: number;
		contract_type_id: number;
	}[];
	duration: number;
	thumb: string;
	description: string;
	seniority_id: string;
};

type Select = {
	id: number;
	name: string;
};

//Validate types

type FormDataErrors = Partial<Record<keyof FormData, string[]>>;

export enum Validation {
	NO_EMPTY,
	NOT_LONGER_THAN,
	NOT_SHORTER_THAN,
	NOT_PAST_DATE,
}

type Validations = Record<
	Validation,
	{
		message: string;
		//todo  | Date
		fn: (value: string | Date, arg?: number) => boolean;
	}
>;

type Validators = Partial<
	Record<keyof FormData, (keyof Validations | [keyof Validations, number])[]>
>;

export type {
	FormData,
	OfferRequest,
	Select,
	FormDataErrors,
	Validations,
	Validators,
};
