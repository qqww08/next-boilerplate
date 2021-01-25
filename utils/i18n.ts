import ICU, { IcuInstance } from "i18next-icu";
import zh from "i18next-icu/locale-data/zh";
import ko from "i18next-icu/locale-data/ko";
import NextI18Next from "next-i18next";
import { useTranslation as originalUseTranslation } from "react-i18next";
import { NextComponentType, NextPageContext } from "next";
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require("path");
const use: IcuInstance[] = [];
const icu = new ICU({});
icu.addLocaleData(ko);
icu.addLocaleData(zh);
use.push(icu);

const NextI18NextInstance = new NextI18Next({
  browserLanguageDetection: false,
  defaultLanguage: "ko",
  defaultNS: "common",
  keySeparator: "###",
  localePath: path.resolve("./public/locales"),
  otherLanguages: ["zh"],
  use,
});

export const { appWithTranslation, withTranslation } = NextI18NextInstance;

export default NextI18NextInstance;

export const { Trans } = NextI18NextInstance;
export const useTranslation = originalUseTranslation;
export type I18nPage<P = {}> = NextComponentType<
  NextPageContext,
  { namespacesRequired: string[] },
  P & { namespacesRequired: string[] }
>;
