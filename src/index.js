import {BILLION, HUNDRED, MILLION, TEN, THOUSAND, TRILLION, TWENTY} from "./constants";
import nb from "./i18n/nb"

export const tallord = (number, locale, current = "", shouldUseEtt = false) => {
  const numberValue = parseInt(number, 10);

  if(numberValue >= TRILLION) {
    throw new Error("Does not support values over 999 milliarder atm")
  }

  if(!locale) {
    locale = nb
  }

  if (number === 0) {
    return current.length === 0 ? locale.under20[0] : current;
  }

  let word = undefined;
  let remainder = 0;
  if (numberValue < TWENTY) {
    remainder = 0;
    if (numberValue === 1 && shouldUseEtt) {
      word = locale.under20[numberValue][1];
    } else {
      const w = locale.under20[numberValue]
      if(Array.isArray(w)) {
        word = w[shouldUseEtt ? 1 : 0]
      } else {
        word = w
      }
    }
  } else if (numberValue < HUNDRED) {
    remainder = numberValue % TEN;
    word = locale.tens[Math.floor(numberValue / TEN)];
  } else if (numberValue < THOUSAND) {
    remainder = numberValue % HUNDRED;
    word = [
      tallord(Math.floor(numberValue / HUNDRED), locale, [], true),
      locale.baseSeparator,
      locale.hundred,
      locale.tenSeparator(remainder)
    ].join("")
  } else if (numberValue < MILLION) {
    remainder = numberValue % THOUSAND;
    word = [
      tallord(Math.floor(numberValue / THOUSAND),locale, [], true),
      locale.baseSeparator,
      locale.thousand,
      locale.endSeparator(remainder)
    ].join("")
  } else if(numberValue < BILLION) {
    remainder = numberValue % MILLION
    const millions = Math.floor(numberValue / MILLION)
    word = [
      tallord(millions, locale),
      locale.baseSeparator,
      millions > 1 && locale.million_plural ? locale.million_plural : locale.million,
      locale.endSeparator(remainder)
    ].join("")
  } else if(numberValue < TRILLION) {
    remainder = numberValue % BILLION
    const billions = Math.floor(numberValue / BILLION)
    word = [
      tallord(billions, locale),
      locale.baseSeparator,
      billions > 1 && locale.billion_plural ? locale.billion_plural : locale.billion,
      locale.endSeparator(remainder)
    ].join("")
  }

  return tallord(remainder, locale,  current + word);

};
