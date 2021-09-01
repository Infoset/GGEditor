import React from 'react';
import { EditorContextProps } from '../EditorContext';
import Item from './Item';
interface ItemPanelProps extends EditorContextProps {
  style?: React.CSSProperties;
  className?: string;
}
export { Item };
declare const _default: React.ForwardRefExoticComponent<Omit<
  React.PropsWithChildren<ItemPanelProps>,
  keyof EditorContextProps
> &
  React.RefAttributes<unknown>>;
export default _default;
