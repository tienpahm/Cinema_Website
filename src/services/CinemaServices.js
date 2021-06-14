import {GROUP} from "../util/settings/config";
import {baseService} from "./BaseService";

export class CinemaServices extends baseService {
  constructor() {
    super();
  }
  getCinemaInfo = () => {
    return this.get(`api/QuanLyRap/LayThongTinHeThongRap`);
  };
  getCinemaShowTime = () => {
    return this.get(
      `api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP}`
    );
  };
}

export const cinemaServices = new CinemaServices();
