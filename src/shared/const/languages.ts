export interface Lang {
	name: string;
	value: string;
	currencyRate: number;
}

export const languages: Lang[] = [
	{
		name: "Рус",
		value: "ru",
		currencyRate: 90,
	},
	{
		name: "Eng",
		value: "en",
		currencyRate: 1,
	},
];