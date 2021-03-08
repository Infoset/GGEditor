import React from 'react';
import { Item } from '../../common/interfaces';
export declare enum ContextMenuType {
  Canvas = 'canvas',
  Node = 'node',
  Edge = 'edge',
}
declare const _default: React.ForwardRefExoticComponent<{
  type?: ContextMenuType;
  renderContent: (
    item: Item,
    position: {
      x: number;
      y: number;
    },
    hide: () => void,
  ) => React.ReactNode;
  children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
