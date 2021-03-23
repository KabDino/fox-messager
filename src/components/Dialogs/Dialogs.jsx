import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <Field
          component={Textarea}
          name="newMessageBody"
          placeholder="Enter your message"
          validate={[required, maxLength10]}
        />
        <button>Send message</button>
      </form>
    );
  };

  const AddReduxMessageForm = reduxForm({ form: 'AddMessageForm' })(
    AddMessageForm
  );

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogsElements}</div>
      <AddReduxMessageForm onSubmit={addNewMessage} />
      <div className={c.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
