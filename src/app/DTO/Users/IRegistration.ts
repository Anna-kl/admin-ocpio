import {StatusRegister} from "../enums/statusRegister";

export interface IRegistration {
  id: number;
  phone: string;
  created: Date;
  status: StatusRegister;
  lastAuth: Date;
}
