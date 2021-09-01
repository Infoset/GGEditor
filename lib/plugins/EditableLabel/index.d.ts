import React from 'react';
import { EditorContextProps } from '../../components/EditorContext';
interface EditableLabelProps extends EditorContextProps {
  /** 标签图形类名 */
  labelClassName?: string;
  /** 标签最大宽度 */
  labelMaxWidth?: number;
}
declare const _default: React.ForwardRefExoticComponent<Omit<
  React.PropsWithChildren<EditableLabelProps>,
  keyof EditorContextProps
> &
  React.RefAttributes<unknown>>;
export default _default;
