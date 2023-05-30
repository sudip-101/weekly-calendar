import * as React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  EventSettingsModel,
} from "@syncfusion/ej2-react-schedule";

const Calendar: React.FC = () => {
  const data: object[] = [
    {
      Id: 1,
      Subject: "Paris",
      StartTime: new Date(2023, 1, 15, 10, 0),
      EndTime: new Date(2023, 1, 15, 12, 30),
    },
  ];
  const eventSettings: EventSettingsModel = { dataSource: data };

  return (
    <ScheduleComponent
      width="100%"
      height="550px"
      selectedDate={new Date()}
      eventSettings={eventSettings}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};

export default Calendar;
