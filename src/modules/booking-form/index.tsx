import React, {useState} from "react";
import ChooseTime from "../../components/choose-time";
import AddComment from "../../components/add-comment";
import Choose from "../../components/choose";

import {towers} from "../../components/choose/towers";
import {floors} from "../../components/choose/floors";
import {rooms} from "../../components/choose/rooms";
import { getHours, getTime, setHours, setMinutes} from "date-fns";
import toast from "react-hot-toast";

const BookingForm = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endingTime, setEndingTime] = useState<Date>(setHours(setMinutes(new Date(), 0), (getHours(startDate) + 1)));

  const [tower, setTower] = useState<string>("");
  const [floor, setFloor] = useState<string>("");
  const [room, setRoom] = useState<string>("");

  const [message, setMessage] = useState<string>("");

  const handleClearForm = (e: React.FormEvent) => {
    e.preventDefault();

    setTower("");
    setFloor("");
    setRoom("");
    setStartDate(new Date());
    setEndingTime(new Date());
    setMessage("");

    toast.success("Форма успешно очищена!")
  }

  const handleSendForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (getTime(startDate) === getTime(endingTime)) {
      toast.error("Время начала брони и время окончания не должны совпадать, пожалуйста выберите правильный интервал времени");
      return;
    }

    if (+getTime(startDate) > +getTime(endingTime)) {
      toast.error("Время окончания брони не может быть раньше времени начала брони, выберите правильный интервал");
      return;
    }

    const dataToShow = {
      tower: tower,
      floor: floor,
      room: room,
      startBooking: new Date(getTime(startDate)),
      endBooking: new Date(getTime(endingTime)),
      message: message
    }

    toast.success("Успешно! Откройте консоль разработчика :)")
    console.log(JSON.stringify(dataToShow));
  }

  return (
    <div className="container">
      <h1 className="title">Форма бронирования переговорной</h1>
      <form className="form">
        <Choose
          title={"Выберите башню:"}
          data={towers}
          info={tower}
          setInfo={setTower}
        />
        {
          tower && (<Choose
            title={"Выберите этаж:"}
            data={floors}
            info={floor}
            setInfo={setFloor}
          />)
        }
        {
          tower && floor && (<Choose
            title={"Выберите номер комнаты переговорной:"}
            data={rooms}
            info={room}
            setInfo={setRoom}
          />)
        }
        {
          tower && floor && room && (
            <>
              <ChooseTime
                startDate={startDate}
                setStartDate={setStartDate}
                endingTime={endingTime}
                setEndingTime={setEndingTime}
              />
              <AddComment
                message={message}
                setMessage={setMessage}
              />
              <div className="form__buttons">
                <button className="form__button form__button-send" onClick={handleSendForm}>
                  Отправить
                </button>
                <button className="form__button form__button-clear" onClick={handleClearForm}>
                  Очистить
                </button>
              </div>
            </>
          )
        }
      </form>
    </div>
  );
}

export default BookingForm;