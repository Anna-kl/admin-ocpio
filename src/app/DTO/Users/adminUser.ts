import {StatusAdminUser} from "../enums/statusAdminUser";

export interface AdminUser {
  id: number;
  name: string;
  password: string;
  status: StatusAdminUser
}
