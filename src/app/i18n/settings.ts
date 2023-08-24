export const fallbackLng = 'pt-BR';
export const locales = [fallbackLng, 'en-US', 'ru-RU', 'ja-JP'];
export const defaultNS = 'common';

export function getOptions(lng: any = fallbackLng, ns: any = defaultNS) {
  return {
    // debug: true,
    supportedLngs: locales,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
