import React, { useState } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import { useRegister } from '../../hooks';


const RegisterForm = () => {
  const [connection, registerAPI] = useRegister();
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sharing, setSharing] = useState("");
  const [sector, setSector] = useState("");

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        registerAPI(name, email, password, group, sharing, sector);
      }}
    >
      <Form.Field>
        <Form.Input icon='user' iconPosition='left' placeholder="Name" type="text" required={true} id="userName" onChange={e => { setName(e.target.value); }} />
      </Form.Field>
      <Form.Field>
        <Form.Input icon='group' iconPosition='left' placeholder="Group (user/root/company/foodStaff/seminarStaff/poster/cashier)" type="text" required={true} id="userGroup" onChange={e => { setGroup(e.target.value); }} />
      </Form.Field>
      <Form.Field>
        <Form.Input icon='mail' iconPosition='left' placeholder="Email" type="email" required={true} id="userEmail" onChange={e => { setEmail(e.target.value); }} />
      </Form.Field>
      <Form.Field>
        <Form.Input icon='lock' iconPosition='left' placeholder="Password" type="password" required={true} id="userPassword" onChange={e => { setPassword(e.target.value); }} />
      </Form.Field>
      <Form.Field>
        <Form.Input icon='share alternate' iconPosition='left' placeholder="Share data and connect with companies (yes/no)" type="text" required={true} id="userSharing" onChange={e => { setSharing(e.target.value); }} />
      </Form.Field>
      <Form.Field>
        <Form.Input icon='share alternate' iconPosition='left' placeholder="所屬單位(若無則空白)" type="text" required={false} id="userSector" onChange={e => { setSector(e.target.value); }} />
      </Form.Field>
      <Button color="green" type="submit">
        Register
      </Button>
      {connection.error
        ?
        <Message negative>{connection.errMsg}</Message>
        :
        null
      }
      {connection.success
        ?
        <Message positive>Register Success!</Message>
        :
        null
      }
    </Form>
  );
}

export default RegisterForm;