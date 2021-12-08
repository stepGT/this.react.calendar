import { Button, Layout, Modal, Row } from 'antd';
import { FC, useState, useEffect } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests } = useTypedSelector(state => state.event);
  const { user } = useTypedSelector(state => state.auth);
  useEffect(() => {
    fetchGuests();
    fetchEvents(user.uname);
  }, []);
  const addNewEvent = (event: IEvent) => {
    setModalVisible(false);
    createEvent(event);
  }

  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Add event</Button>
      </Row>
      <Modal
        title="Add event"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm submit={addNewEvent} guests={guests} />
      </Modal>
    </Layout>
  );
};

export default Event;
