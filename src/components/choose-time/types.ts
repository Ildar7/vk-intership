import {Dispatch, SetStateAction} from "react";

export interface IProps {
  startDate: Date;
  setStartDate: Dispatch<SetStateAction<Date>>;
  endingTime: Date;
  setEndingTime: Dispatch<SetStateAction<Date>>;
}