import React, {FC} from "react";
import {IProps} from "./type";

const AddComment: FC<IProps> = (props) => {
  const {message, setMessage} = props;
  return (
    <div className="form__item add-comment">
      <label className="form__item-label add-comment__label" htmlFor="comment">Введите ваш коментарий (необязательно):</label>
      <textarea className="add-comment__textarea" id="comment" value={message} onChange={(e) => {setMessage(e.target.value)}}></textarea>
    </div>
  );
}

export default AddComment;