/* eslint-disable max-len */
import 'i18next';
import 'react-i18next';

import Common from 'app/i18n/locales/pt-BR/common.json';

interface IResources {
  common: typeof Common
}

type ILocaleResourcesType<ResourceType extends keyof IResources | undefined = undefined> = ResourceType extends keyof IResources
  ? TPaths<IResources[ResourceType]>
  : IResources extends undefined ? TPaths<IResources> : TPaths<IResources>;

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: IResources;
  }

  export type ILocaleResources<T extends keyof IResource | undefined = undefined> = ILocaleResourcesType<T>;
}
