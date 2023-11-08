import React, { Component } from 'react';
import { Inject, ScheduleComponent, Day, Week, Month,ViewsDirective,ViewDirective} from '@syncfusion/ej2-react-schedule';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1JpRGJGfV5yd0VEalxXTnVfUj0eQnxTdEZiWH9acXBVQGNcVU1+Vw==');

class Scheduler extends Component {
  constructor(props) {
    super(props);
    this.onPopupOpen = this.onPopupOpen.bind(this);
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

  convertToVisit(args) {
    // Get the data from the event editor
    const eventData = args.element.querySelector('.e-schedule-form').ej2_instances[0].RecurrenceRule();

    // Display the data in the console in JSON format
    console.log(JSON.stringify(eventData, null, 2));
  }

  render() {
    return (
      <div>
        <ScheduleComponent popupOpen={this.onPopupOpen}>

        <ViewsDirective>
              <ViewDirective option="Day" />
              <ViewDirective option="Week" />
             
              <ViewDirective option="Month" />
            </ViewsDirective>
          
          <Inject services={[Day, Week, Month ]} />

        </ScheduleComponent>
      </div>
    );
  }
}

export default Scheduler;