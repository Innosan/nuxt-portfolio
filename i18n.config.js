import en from "./locales/en.json";
import kr from "./locales/kr.json";
import ru from "./locales/ru.json";

export default defineI18nConfig(() => ({
	legacy: false,
	fallbackLocale: "en",
	messages: {
		en,
		kr,
		ru,
	},
}));
