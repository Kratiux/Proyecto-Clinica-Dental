import React, { Component } from 'react';
import { Inject, ScheduleComponent, Day, Week, Month, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { registerLicense } from '@syncfusion/ej2-base';
import axios from 'axios';


registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF1cWWhIfEx0THxbf1xzZF1MZFlbRXJPMyBoS35RdURiW3ZeeHBQRGBdUUZx');


class Scheduler extends Component {
  constructor(props) {
    super(props);
    this.onPopupOpen = this.onPopupOpen.bind(this);
    this.onEventAdded = this.onEventAdded.bind(this);
  }

  onPopupOpen(args) {
    if (args.type === 'Editor' && !args.element.querySelector('.e-custom-btn')) {
      const dialogObj = args.element['ej2_instances'][0];
      let buttons = dialogObj.buttons;
      buttons.unshift({
        buttonModel: {
          content: 'Convert',
          isPrimary: false,
          cssClass: 'e-custom-btn',
        },
        click: this.convertToVisit.bind(this, args),
      });
      dialogObj.setProperties({ buttons: buttons });
    }
  }

  onEventAdded(args) {
    // Send the new appointment data to the server
    axios.post('https://api.clinicadentalsofiacastro.com/api/appointments', args.data)
      .then(response => {
        console.log('Appointment saved successfully:', response.data);
      })
      .catch(error => {
        console.error('Error saving appointment:', error);
      });
  }

  convertToVisit(args) {
    // Get the data from the event editor
    const eventData = args.element.querySelector('.e-schedule-form').ej2_instances[0].RecurrenceRule();

    // Display the data in the console in JSON format
    console.log(JSON.stringify(eventData, null, 2));
  }

  render() {
    return (
      <div>
        <ScheduleComponent popupOpen={this.onPopupOpen} eventSettings={{ dataSource: [] }} eventAdded={this.onEventAdded}>

          <ViewsDirective>
            <ViewDirective option="Day" />
            <ViewDirective option="Week" />
            <ViewDirective option="Month" />
          </ViewsDirective>

          <Inject services={[Day, Week, Month]} />

        </ScheduleComponent>
      </div>
    );
  }
}

export default Scheduler;
