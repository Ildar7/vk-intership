import React, {FC} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css//
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {getHours, setHours, setMinutes} from "date-fns";
import {IProps} from "./types";

const ChooseTime: FC<IProps> = (props) => {
  const {
    startDate,
    setStartDate,
    endingTime,
    setEndingTime
  } = props;
  return (
    <div className="form__item choose-time">
      <label className="form__item-label choose-time__label" htmlFor="chooseTime">Выберите дату и время:</label>
      <div className="choose-time__items">
        <div className="choose-time__item">
          <div className="choose-time__title">
            Выберите дату
          </div>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              /* @ts-ignore */
              setStartDate(date)
              /* @ts-ignore */
              setEndingTime(setHours(setMinutes(date, 0), (getHours(date) + 1)))
            }}
            minDate={new Date()}
            dateFormat="MMMM d, yyyy"/>
        </div>
        <div className="choose-time__item">
          <div className="choose-time__title">
            Время начала
          </div>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              // @ts-ignore
              setStartDate(date)
              // @ts-ignore
              setEndingTime(setHours(setMinutes(date, 0), (getHours(date) + 1)))
            }}
            showTimeSelect
            showTimeSelectOnly
            minTime={setHours(setMinutes(new Date(), 0), 9)}
            maxTime={setHours(setMinutes(new Date(), 0), 21)}
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>
        <div className="choose-time__item">
          <div className="choose-time__title">
            Время окончания
          </div>
          <DatePicker
            selected={endingTime}
            onChange={(date) => {
              // @ts-ignore
              setEndingTime(date)
            }}
            showTimeSelect
            showTimeSelectOnly
            minTime={setHours(setMinutes(new Date(), 0), (getHours(startDate) + 1))}
            maxTime={setHours(setMinutes(new Date(), 0), 21)}
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>
      </div>
    </div>
  );
}

export default ChooseTime;