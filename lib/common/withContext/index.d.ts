import React from 'react';
export default function<CP>(
  Context: React.Context<CP>,
  shouldRender?: (context: CP) => boolean,
): <P extends CP, T = unknown>(
  WrappedComponent: React.ComponentType<P>,
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<
    { [P_1 in Exclude<keyof P, keyof CP> | Exclude<'children', keyof CP>]: React.PropsWithChildren<P>[P_1] }
  > &
    React.RefAttributes<T>
>;
