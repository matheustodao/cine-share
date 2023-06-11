/* eslint-disable max-len */
import 'i18next';
import 'react-i18next';

import Common from 'app/i18n/locales/pt-BR/common.json';
import { Paths } from 'types';

interface IResources {
  common: typeof Common
}

type IResourcesKeys = keyof IResources;

export type ILocaleResourcesType<ResourceType extends IResourcesKeys | undefined = undefined> = ResourceType extends IResourcesKeys
  ? Paths<IResources[ResourceType]>
  : IResources extends undefined ? Paths<IResources> : Paths<IResources>;

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: IResources;
  }

  export type ILocaleResources<T extends IResourcesKeys | undefined = undefined> = ILocaleResourcesType<T>;
}
