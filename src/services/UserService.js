import {baseService} from "./BaseService";

export class UserService extends baseService {
  constructor() {
    super();
  }
  loginUser = (user) => {
    return this.post(`api/QuanLyNguoiDung/DangNhap`, user);
  };
}

export const userService = new UserService();
