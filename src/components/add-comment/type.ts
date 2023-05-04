import {Dispatch, SetStateAction} from "react";

export interface IProps {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}