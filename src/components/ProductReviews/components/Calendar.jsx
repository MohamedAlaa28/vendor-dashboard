import React, { useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

export default function Calendar() {
  const [selectedDay, setSelectedDay] = useState();

  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  return (
    <DayPicker
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
    />
  );
}