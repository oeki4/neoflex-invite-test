import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import RU from "@/lang/ru.json";

i18n.use(initReactI18next).init({
	resources: {
		ru: {
			translation: RU,
		},
	},
	lng: "ru",
	fallbackLng: "en",

	interpolation: {
		escapeValue: false,
	},
});