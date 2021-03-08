import React from 'react';
import { EditorContextProps } from '../EditorContext';
import { Node, Edge } from '../../common/interfaces';
declare type DetailPanelType = 'node' | 'edge' | 'multi' | 'canvas';
export interface DetailPanelComponentProps {
  type: DetailPanelType;
  nodes: Node[];
  edges: Edge[];
}
declare class DetailPanel {
  static create: <P extends DetailPanelComponentProps>(
    type: DetailPanelType,
  ) => (
    WrappedComponent: React.ComponentType<P>,
  ) => React.ForwardRefExoticComponent<
    React.PropsWithoutRef<
      {
        [P_1 in
          | 'children'
          | Exclude<
              Exclude<keyof P, keyof DetailPanelComponentProps>,
              keyof EditorContextProps
            >]: React.PropsWithChildren<EditorContextProps & Omit<P, keyof DetailPanelComponentProps>>[P_1];
      }
    > &
      React.RefAttributes<unknown>
  >;
}
export default DetailPanel;
