import {I18n as i18n} from "i18n-js"
import * as RNLocalize from "react-native-localize"
import en from "./translations/en"
import es from "./translations/es"

const locales = RNLocalize.getLocales()

translations = {en, es}
var I18n = new i18n(translations)

I18n.locale = locales[0].languageCode

I18n.fallbacks = true
export default I18n