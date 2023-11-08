import React from 'react';
import axios from 'axios';

import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  Month,
} from '@syncfusion/ej2-react-schedule';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1JpRGJGfV5yd0VEalxXTnVfUj0eQnxTdEZiWH9acXBVQGNcVU1+Vw==');

class Scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localData: {
        dataSource: [
          {
            Id: 1,
            EndTime: new Date(2023, 0, 11, 6, 30),
            StartTime: new Date(2023, 0, 11, 4, 0),
            Subject: 'Testing',
          },
        ],
      },
    };
  }

  handleDataBinding = (args) => {
    // This event is triggered before data is bound to the Scheduler.
    // You can access and manipulate the data here.
    console.log('Data Binding Event:', args);
  };

  handleDataBound = (args) => {
    // This event is triggered after data is bound to the Scheduler.
    // You can access the bound data here.
    console.log('Data Bound Event:', args);
  };

  render() {
    return (
      <div>
        <ScheduleComponent
          currentView='Week'
          eventSettings={this.state.localData}
          dataBinding={this.handleDataBinding}
          dataBound={this.handleDataBound}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    );
  }
}





// Function to send data to the server when an appointment is created

export default Scheduler;