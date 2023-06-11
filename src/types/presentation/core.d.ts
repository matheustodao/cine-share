interface IChildren {
  children: ReactNode | ReactElement<any, string | JSXElementConstructor<any>>
}

export interface IProviderProps extends IChildren {
  session: SessionProviderProps['session']
}
