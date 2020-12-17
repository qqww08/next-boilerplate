const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  defaultLanguage: "ko",
  otherLanguages: ["zh"],
  localePath: "public/locales",
  localeSubpaths: {
    zh: "zh",
    ko: "ko",
  },
});
