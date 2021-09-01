import React from 'react';
import { EditorPrivateContextProps } from '../EditorContext';
interface RegisterProps extends EditorPrivateContextProps {
  name: string;
  config: object;
  extend?: string;
}
export declare const RegisterNode: React.ForwardRefExoticComponent<Omit<
  React.PropsWithChildren<RegisterProps>,
  keyof EditorPrivateContextProps
> &
  React.RefAttributes<unknown>>;
export declare const RegisterEdge: React.ForwardRefExoticComponent<Omit<
  React.PropsWithChildren<RegisterProps>,
  keyof EditorPrivateContextProps
> &
  React.RefAttributes<unknown>>;
export declare const RegisterCommand: React.ForwardRefExoticComponent<Omit<
  React.PropsWithChildren<RegisterProps>,
  keyof EditorPrivateContextProps
> &
  React.RefAttributes<unknown>>;
export declare const RegisterBehavior: React.ForwardRefExoticComponent<Omit<
  React.PropsWithChildren<RegisterProps>,
  keyof EditorPrivateContextProps
> &
  React.RefAttributes<unknown>>;
export {};
