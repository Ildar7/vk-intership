import React, {FC} from "react";
import {IProps} from "./types";
const Choose: FC<IProps> = (props) => {
  const {title, data, info, setInfo} = props;
  return (
    <div className="form__item choose">
      <label className="form__item-label choose__label">{title}</label>
      <select className="form__item-select choose__select" name="choose" value={info} onChange={(event) => setInfo(event.target.value)}>
        <option value="">Ваш выбор</option>
        {
          data.map(item => (
            <option key={item.id} value={item.value}>{item.value}</option>
          ))
        }
      </select>
    </div>
  );
}

export default Choose;