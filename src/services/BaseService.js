import Axios from "axios";
import {DOMAIN, TOKEN} from "../util/settings/config";

export class baseService {
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      headers: {Authorization: "Bearer " + localStorage.getItem(TOKEN)},
      data: model,
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      headers: {Authorization: "Bearer " + localStorage.getItem(TOKEN)},
      data: model,
    });
  };

  get = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: {Authorization: "Bearer " + localStorage.getItem(TOKEN)},
    });
  };
  delete = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: {Authorization: "Bearer " + localStorage.getItem(TOKEN)},
    });
  };
}
