import { useState, useEffect } from "react";
import {
  format,
  subMonths,
  addMonths,
  subYears,
  addYears,
  isEqual,
  getDaysInMonth,
  getDay
} from "date-fns";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export default function CalendarInput() {
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [dayCount, setDayCount] = useState([]);
  const [blankDays, setBlankDays] = useState([]);
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [datepickerHeaderDate, setDatepickerHeaderDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [type, setType] = useState("date");

  const decrement = () => {
    if (type === "date") {
      setDatepickerHeaderDate(prev => subMonths(prev, 1));
    } else if (type === "month") {
      setDatepickerHeaderDate(prev => subYears(prev, 1));
    } else if (type === "year") {
      setDatepickerHeaderDate(prev => subYears(prev, 10));
    }
  };

  const increment = () => {
    if (type === "date") {
      setDatepickerHeaderDate(prev => addMonths(prev, 1));
    } else if (type === "month") {
      setDatepickerHeaderDate(prev => addYears(prev, 1));
    } else if (type === "year") {
      setDatepickerHeaderDate(prev => addYears(prev, 10));
    }
  };

  const isToday = (date) => {
    return isEqual(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date), new Date());
  };

  const setDateValue = (date) => {
    setSelectedDate(new Date(datepickerHeaderDate.getFullYear(), datepickerHeaderDate.getMonth(), date));
    setShowDatepicker(false);
  };

  useEffect(() => {
    const daysInMonth = getDaysInMonth(datepickerHeaderDate);
    const dayOfWeek = getDay(new Date(datepickerHeaderDate.getFullYear(), datepickerHeaderDate.getMonth(), 1));
    const blankdaysArray = Array(dayOfWeek).fill(null);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    setBlankDays(blankdaysArray);
    setDayCount(daysArray);
  }, [datepickerHeaderDate, type]);

  return (
    <div className="flex items-center justify-center">
      <div className="antialiased sans-serif">
        <div className="container mx-auto">
          <div className="mb-5">
            <div className="relative w-full">
              <input type="hidden" name="date" />
              <input
                type="text"
                readOnly
                className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Select date"
                value={format(selectedDate, "MM/dd/yyyy")}
                onClick={() => setShowDatepicker(!showDatepicker)}
              />
              <div className="absolute top-0 right-0 px-3 py-2">
                <CalendarTodayOutlinedIcon />
              </div>

              {showDatepicker && (
                <div className="bg-white mt-12 rounded-lg shadow p-2 absolute top-0 left-0 z-10 ">
                  <div className="flex justify-between items-center mb-2">
                    <button type="button" onClick={decrement}>
                      {"<"}
                    </button>
                    <div>
                      <span>{format(datepickerHeaderDate, "MMMM yyyy")}</span>
                    </div>
                    <button type="button" onClick={increment}>
                      {">"}
                    </button>
                  </div>
                  <div className="flex flex-wrap  mb-3">
                    {DAYS.map(day => (
                      <div key={day} className="text-center p-1">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap ">
                    {blankDays.map((_, i) => (
                      <div key={i} ></div>
                    ))}
                    {dayCount.map((day, index) => (
                      <div key={index} className="text-center">
                        <div
                          onClick={() => setDateValue(day)}
                          className={`cursor-pointer p-1 ${isToday(day) ? "text-blue-600" : "text-gray-700"}`}>
                          {day}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
