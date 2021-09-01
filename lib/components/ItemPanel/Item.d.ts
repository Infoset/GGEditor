import React from 'react';
import { ItemType } from '../../common/constants';
import { NodeModel } from '../../common/interfaces';
import { EditorContextProps } from '../EditorContext';
export interface ItemProps extends EditorContextProps {
  style?: React.CSSProperties;
  className?: string;
  type?: ItemType;
  model: Partial<NodeModel>;
}
export interface ItemState {}
declare const _default: React.ForwardRefExoticComponent<Omit<
  React.PropsWithChildren<ItemProps>,
  keyof EditorContextProps
> &
  React.RefAttributes<unknown>>;
export default _default;
