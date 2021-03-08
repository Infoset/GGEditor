import React from 'react';
import { Graph } from '../../common/interfaces';
import CommandManager from '../../common/CommandManager';
export interface EditorContextProps {
  graph: Graph | null;
  executeCommand: (name: string, params?: object) => void;
  commandManager: CommandManager;
}
export interface EditorPrivateContextProps {
  setGraph: (graph: Graph) => void;
  commandManager: CommandManager;
}
export declare const EditorContext: React.Context<EditorContextProps>;
export declare const EditorPrivateContext: React.Context<EditorPrivateContextProps>;
export declare const withEditorContext: <P extends EditorContextProps, T = unknown>(
  WrappedComponent: React.ComponentType<P>,
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<
    { [P_1 in 'children' | Exclude<keyof P, keyof EditorContextProps>]: React.PropsWithChildren<P>[P_1] }
  > &
    React.RefAttributes<T>
>;
export declare const withEditorPrivateContext: <P extends EditorPrivateContextProps, T = unknown>(
  WrappedComponent: React.ComponentType<P>,
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<
    { [P_1 in 'children' | Exclude<keyof P, keyof EditorPrivateContextProps>]: React.PropsWithChildren<P>[P_1] }
  > &
    React.RefAttributes<T>
>;
