import {GROUP} from "../util/settings/config";
import {baseService} from "./BaseService";

export class QuanLyPhimService extends baseService {
  constructor() {
    super();
  }
  getMovieBanner = () => {
    return this.get(`api/QuanLyPhim/LayDanhSachBanner`);
  };
  getMovieList = () => {
    return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP}`);
  };
}

export const quanLyPhimService = new QuanLyPhimService();
