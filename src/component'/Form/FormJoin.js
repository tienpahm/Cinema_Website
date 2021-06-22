import React from "react";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";

export default function FormJoin() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "string",
      matKhau: "string",
      email: "string",
      soDt: "string",
      maNhom: "string",
      hoTen: "string",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
            className="space-y-3 ng-untouched ng-pristine ng-valid">
            <div className="text-sm">
              <label for="password" class="block text-coolGray-600">
                Full Name
              </label>
              <input
                type="text"
                name="hoTen"
                id="hoTen"
                onChange={formik.handleChange}
                className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
              />
            </div>
            <div className="text-sm">
              <label for="password" class="block text-coolGray-600">
                Username
              </label>
              <input
                type="text"
                name="taiKhoan"
                id="taiKhoan"
                onChange={formik.handleChange}
                className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
              />
            </div>
            <div className="text-sm">
              <label for="password" class="block text-coolGray-600">
                Password
              </label>
              <input
                type="password"
                name="matKhau"
                id="matKhau"
                onChange={formik.handleChange}
                className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
              />
            </div>
            <div className="text-sm">
              <label for="password" class="block text-coolGray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
              />
            </div>

            <button className="block w-full px-3 py-2 text-center rounded-sm text-white text-lg bg-red-400">
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
