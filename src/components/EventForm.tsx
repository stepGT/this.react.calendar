import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { FC } from 'react';
import { rules } from '../utils/rules';
const { Option } = Select;

const EventForm: FC = () => {
  return (
    <Form>
      <Form.Item
        label="Description event"
        name="description"
        rules={[rules.required('Enter description!')]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date event"
        name="date"
        rules={[rules.required('Enter date!')]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item>
        <Select>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Form.Item>

      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Enter
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
