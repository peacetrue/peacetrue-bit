import React, { ReactNode } from 'react';

export type ReactAppProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function ReactApp({ children }: ReactAppProps) {
  return (
    <div>
      {children}
    </div>
  );
}
