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
  getCinemaDetail = (id) => {
    return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
  };
  getShowtimeByCine = (cineId) => {
    return this.get(
      `api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${cineId}&maNhom=${GROUP}`
    );
  };
  bookingTicket = (ticket) => {
    return this.post(`api/QuanLyDatVe/DatVe`, ticket);
  };
}

export const cinemaServices = new CinemaServices();
