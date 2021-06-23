import React from "react";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {loginUser} from "../../redux/actions/UserAction";
import {TOGGLE_HEADER} from "../../redux/types/ToggleTypes";

export default function FormLogin() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "string",
      matKhau: "string",
    },
    onSubmit: (values) => {
      dispatch(loginUser(values));
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    },
  });
  return (
    <div>
      <div>
        <div className="w-full max-w-md py-8 px-3 space-y-3 rounded-xl bg-coolGray-50 text-coolGray-800">
          <form
            onSubmit={formik.handleSubmit}
            noValidate
            action
            className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-1 text-sm">
              {/* <label htmlFor="username" className="block text-coolGray-600">
                Username
              </label> */}
              <input
                type="text"
                name="taiKhoan"
                id="username"
                // value="strings"
                onChange={formik.handleChange}
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
              />
            </div>
            <div className="space-y-1 text-sm">
              <input
                // value="string"
                type="password"
                name="matKhau"
                id="password"
                onChange={formik.handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
              />
            </div>
            <button
              type="submit"
              className="block w-full px-3 py-2 text-center rounded-sm text-white text-lg bg-blue-600">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
