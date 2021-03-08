import React from 'react';
import { Item } from '../../common/interfaces';
export declare enum ItemPopoverType {
  Node = 'node',
  Edge = 'edge',
}
declare const _default: React.ForwardRefExoticComponent<{
  type?: ItemPopoverType;
  renderContent: (
    item: Item,
    position: {
      minX: number;
      minY: number;
      maxX: number;
      maxY: number;
      centerX: number;
      centerY: number;
    },
  ) => React.ReactNode;
  children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
