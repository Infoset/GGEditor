import { Card, Form, Input } from 'antd';
import { DetailPanel } from 'gg-editor';
import { DetailPanelComponentProps } from 'gg-editor/lib/components/DetailPanel';
import { EditorContextProps } from 'gg-editor/lib/components/EditorContext';
import upperFirst from 'lodash/upperFirst';
import React from 'react';

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};

interface PanelProps extends EditorContextProps, DetailPanelComponentProps {}

const Panel: React.FC<PanelProps> = props => {
  const [form] = Form.useForm();

  const onValuesChange = (values: any) => {
    const { type, nodes, edges, executeCommand } = props;

    const item = type === 'node' ? nodes[0] : edges[0];

    if (!item) {
      return;
    }

    executeCommand('update', {
      id: item.get('id'),
      updateModel: {
        ...values,
      },
    });
  };

  const getInitialLabelValue = () => {
    const { type, nodes, edges } = props;

    if (type === 'node') {
      return nodes[0].getModel().label;
    }

    if (type === 'edge') {
      return edges[0].getModel().label;
    }

    return '';
  };

  const renderNodeDetail = () => {
    return (
      <Form form={form} initialValues={{ label: getInitialLabelValue() }} onValuesChange={onValuesChange}>
        <Form.Item name="label" label="Label">
          <Input />
        </Form.Item>
      </Form>
    );
  };

  const renderEdgeDetail = () => {
    return (
      <Form form={form} initialValues={{ label: getInitialLabelValue() }} onValuesChange={onValuesChange}>
        <Form.Item name="label" label="Label">
          <Input />
        </Form.Item>
      </Form>
    );
  };

  const renderMultiDetail = () => {
    return null;
  };

  const renderCanvasDetail = () => {
    return <p>Select a node or edge :)</p>;
  };

  const { type } = props;

  return (
    <Card title={upperFirst(type)} bordered={false}>
      {type === 'node' && renderNodeDetail()}
      {type === 'edge' && renderEdgeDetail()}
      {type === 'multi' && renderMultiDetail()}
      {type === 'canvas' && renderCanvasDetail()}
    </Card>
  );
};

export const NodePanel = DetailPanel.create<PanelProps>('node')(Panel);
export const EdgePanel = DetailPanel.create<PanelProps>('edge')(Panel);
export const MultiPanel = DetailPanel.create<PanelProps>('multi')(Panel);
export const CanvasPanel = DetailPanel.create<PanelProps>('canvas')(Panel);
