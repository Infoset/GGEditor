import React from 'react';
export default function<CP>(
  Context: React.Context<CP>,
  shouldRender?: (context: CP) => boolean,
): <P extends CP, T = unknown>(
  WrappedComponent: React.ComponentType<P>,
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Omit<React.PropsWithChildren<P>, keyof CP>> & React.RefAttributes<T>
>;
