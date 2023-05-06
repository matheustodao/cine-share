import { IChildren } from 'domain/core/core';
import { Provider } from '../provider';

export function MainLayout({ children }: IChildren) {
  return (
    <Provider>
      <div className="circle" />
      <div className="circle" />

      <div>
        <div className="nav" />

        <div className="content">
          {children}
        </div>
      </div>
    </Provider>
  );
}
