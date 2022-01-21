import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Clock = props => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [date]);

  function getTimeWithOffset() {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + props.offset + utcOffset));
  }

  return (
    <div className="clock">
      <div className="clock__location">{props.location}</div>
      <div className="clock__time">{moment(getTimeWithOffset()).format('LTS')}</div>
    </div>
  );
};

export default Clock;
