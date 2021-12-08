import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { FC, useState } from 'react';
import { IEvent } from '../models/IEvent';
import { IUser } from '../models/IUser';
import { rules } from '../utils/rules';
const { Option } = Select;

interface EventFormProps {
  guests: IUser[];
}

const EventForm: FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: ''
  } as IEvent);
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

      <Form.Item
        label="Choose guest"
        name="guest"
        rules={[rules.required('Enter guest!')]}
      >
        <Select onChange={(guest:string) => setEvent({...event, guest})}>
          {props.guests.map((guests) => (
            <Option key={guests.uname} value={guests.uname}>
              {guests.uname}
            </Option>
          ))}
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
