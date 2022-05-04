type Offer = {
	id: number;
	companyName: string;
	categories: { name: string; id: number }[];
	salary: { name: string; salaryFrom: number; salaryTo: number }[];
	title: string;
	companyCity: string;
};
export type { Offer };
