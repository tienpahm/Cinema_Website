import {baseService} from "./BaseService";

export class UserService extends baseService {
  constructor() {
    super();
  }
  loginUser = (user) => {
    return this.post(`api/QuanLyNguoiDung/DangNhap`, user);
  };
  getUserProfile = () => {
    return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };
  editUserDetail = (userInfo) => {
    return this.put(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, userInfo);
  };
}

export const userService = new UserService();
