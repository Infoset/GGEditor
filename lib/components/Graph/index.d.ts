import { FlowData, Graph, GraphReactEventProps, MindData } from '../../common/interfaces';
import { EditorPrivateContextProps } from '../EditorContext';
import React from 'react';
import './behavior';
interface GraphProps extends Partial<GraphReactEventProps>, EditorPrivateContextProps {
  style?: React.CSSProperties;
  className?: string;
  containerId: string;
  data: FlowData | MindData;
  parseData(data: object): void;
  initGraph(width: number, height: number): Graph;
}
declare const _default: React.ForwardRefExoticComponent<Omit<
  React.PropsWithChildren<GraphProps>,
  keyof EditorPrivateContextProps
> &
  React.RefAttributes<unknown>>;
export default _default;
