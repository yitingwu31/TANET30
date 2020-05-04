import React from 'react';
import { Header, Icon, Divider, Grid } from 'semantic-ui-react';
import {
  RegisterForm,
  FileUpload,
  CreateEventForm,
  CreateTicketForm,
  NewUserHandler,
  ExportUserHandler,
  NewEventHandler,
  NewTicketHandler
} from '../components';

const Admin = () => {
  console.log("[*] Viewing Admin Page");

  return (
    <div style={{ marginTop: "2em", width: "80%" }}>
      <Header as='h2' icon textAlign='center'>
        <Icon name='user' circular />
        <Header.Content>Admin Page</Header.Content>
      </Header>
      <Divider horizontal>
        <Header as='h4'>
          <Icon name='user plus' />
          Add User
        </Header>
      </Divider>
      <Grid textAlign="center" verticalAlign='middle' style={{ width: "100%", marginTop: "2vh" }}>
        <Grid.Row columns={2}>
          <Grid.Column style={{ width: "80%", maxWidth: "30em" }}>
            <RegisterForm />
          </Grid.Column>
          <Grid.Column>
            <FileUpload
              name="Import Users from File"
              header="Upload a .csv file"
              help="A CSV File with four columns: Name, Group, Email, Password"
              Handler={NewUserHandler}
              icon="download"
              style={{ margin: "1vh 0" }}
            />
            <br />
            <FileUpload
              name="Export User QR-Code"
              header="Upload a .csv file"
              help="A CSV File with four columns: Name, Group, Email, Password"
              Handler={ExportUserHandler}
              icon="upload"
              style={{ margin: "1vh 0" }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider horizontal>
        <Header as='h4'>
          <Icon name='calendar' />
          Create Event
        </Header>
      </Divider>
      <Grid textAlign="center" verticalAlign="middle" style={{ width: "100%", marginTop: "2vh" }}>
        <Grid.Row columns={2}>
          <Grid.Column style={{ width: "80%", maxWidth: "30em" }}>
            <CreateEventForm />
          </Grid.Column>
          <Grid.Column>
            <FileUpload
              name="Import Events from File"
              header="Upload a .csv file"
              help={
                <React.Fragment>
                  A CSV File with four columns: Name, Admin Email, Time Begin, Time End<br/>
                  e.g. <i>My First Event,foo@test.com,2020-04-01T12:00:00,2020-04-02T12:00:00</i><br />
                  Note that the time string should be ISO 8601 formated.
                </React.Fragment>
              }
              Handler={NewEventHandler}
              icon="download"
              style={{ margin: "1vh 0" }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider horizontal>
        <Header as='h4'>
          <Icon name='food' />
          Give Food Ticket
        </Header>
      </Divider>
      <Grid textAlign="center" verticalAlign="middle" style={{ width: "100%", marginTop: "2vh" }}>
        <Grid.Row columns={2}>
          <Grid.Column style={{ width: "80%", maxWidth: "30em" }}>
            <CreateTicketForm />
          </Grid.Column>
          <Grid.Column>
            <FileUpload
              name="Import Tickets from File"
              header="Upload a .csv file"
              help={
                <React.Fragment>
                  A CSV File with three columns: Owner Email, Ticket Type, Date<br />
                  e.g. <i>foo@test.com,launch,2020-04-20</i><br />
                  Ticket Type can be launch or dinner<br />
                  Note that the time string should be ISO 8601 formated.
                </React.Fragment>
              }
              Handler={NewTicketHandler}
              icon="download"
              style={{ margin: "1vh 0" }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider horizontal>
        <Header as='h4'>
          <Icon name='gift' />
          Lottery
        </Header>
      </Divider>
    </div>
  )
}

export default Admin;