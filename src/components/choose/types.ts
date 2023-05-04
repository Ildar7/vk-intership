import {Dispatch, SetStateAction} from "react";

export interface IProps {
  title: string;
  data: IData[];
  info: string;
  setInfo: Dispatch<SetStateAction<string>>
}

interface IData {
  id: number;
  value: string;
}