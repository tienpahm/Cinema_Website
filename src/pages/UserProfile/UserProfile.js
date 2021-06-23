import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Tabs} from "antd";
import {useFormik} from "formik";
import {getUserProfile} from "../../redux/actions/UserAction";

const {TabPane} = Tabs;

export default function UserProfile() {
  const {userProfile} = useSelector((state) => state.UserReducer);
  const [changePasswordToggle, setchangePasswordToggle] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: userProfile?.taiKhoan,
      matKhau: userProfile?.matKhau,
      email: userProfile?.email,
      soDT: userProfile?.soDT,
      maNhom: userProfile?.maNhom,
      hoTen: userProfile?.hoTen,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(userProfile);
  return (
    <div className="my-24 w-3/5 mx-auto">
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span className="text-xl">
              <i className="fa fa-user mr-2"></i>
              User Info
            </span>
          }
          key="1">
          <form onSubmit={formik.handleSubmit} className="w-3/5 mx-auto">
            <div className="text-center">
              <p className="text-2xl font-semibold mb-5">Edit Detail</p>
            </div>
            <div className="user-detail-content flex flex-wrap justify-center">
              <div
                className="w-2/5 border p-2 rounded-md mb-3 mr-3"
                style={{boxShadow: "1px 1px 4px 0px #727575"}}>
                <p className="mb-1 text-gray-400">Full Name</p>
                <input
                  className="border-none focus:outline-none w-full "
                  value={formik.values.hoTen}
                  name="hoTen"
                  onChange={formik.handleChange}></input>
              </div>
              <div
                className="w-2/5 border p-2 rounded-md mb-3 mr-3"
                style={{boxShadow: "1px 1px 4px 0px #727575"}}>
                <p className="mb-1 text-gray-400">User Name</p>
                <input
                  className="border-none focus:outline-none w-full "
                  value={formik.values.taiKhoan}
                  name="taiKhoan"
                  onChange={formik.handleChange}></input>
              </div>
              <div
                className="w-2/5 border p-2 rounded-md mb-3 mr-3"
                style={{boxShadow: "1px 1px 4px 0px #727575"}}>
                <p className="mb-1 text-gray-400">Email</p>
                <input
                  className="border-none focus:outline-none w-full "
                  value={formik.values.email}
                  name="email"
                  onChange={formik.handleChange}></input>
              </div>
              <div
                className="w-2/5 border p-2 rounded-md mb-3 mr-3"
                style={{boxShadow: "1px 1px 4px 0px #727575"}}>
                <p className="mb-1 text-gray-400">Phone Number</p>
                <input
                  className="border-none focus:outline-none w-full "
                  value={formik.values.soDT}
                  name="soDT"
                  onChange={formik.handleChange}></input>
              </div>
            </div>
            <p
              className="text-lg font-semibold mb-5 text-center cursor-pointer"
              onClick={() => {
                setchangePasswordToggle(!changePasswordToggle);
              }}>
              Change Password ?
            </p>
            {changePasswordToggle ? (
              <div className="flex flex-col justify-center">
                <div
                  className="border w-1/2 p-2 rounded-md mb-3 mr-3"
                  style={{
                    boxShadow: "1px 1px 4px 0px #727575",
                    margin: "0 auto 20px",
                  }}>
                  <p className="mb-1 text-gray-400">Password</p>
                  <input
                    className="border-none focus:outline-none w-full "
                    name="soDT"
                    onChange={formik.handleChange}></input>
                </div>
                <div
                  className="border w-1/2 p-2 rounded-md mb-3 mr-3"
                  style={{
                    boxShadow: "1px 1px 4px 0px #727575",
                    margin: "0 auto 20px",
                  }}>
                  <p className="mb-1 text-gray-400">Confirm Password</p>
                  <input
                    className="border-none focus:outline-none w-full "
                    name="soDT"
                    onChange={formik.handleChange}></input>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="text-center">
              {" "}
              <button
                type="submit"
                className=" py-2 px-4 text-center"
                style={{backgroundColor: "#E7BB38"}}>
                Update
              </button>
            </div>
          </form>
        </TabPane>
        <TabPane
          tab={
            <span className="text-xl">
              <i className="fa fa-ticket-alt mr-2"></i>
              Booking History
            </span>
          }
          key="2">
          <div>
            {userProfile?.thongTinDatVe.map((item, index) => {
              return (
                <div className="flex flex-wrap mb-5">
                  <div>
                    <img
                      style={{minWidth: "214px", height: "318px"}}
                      src={item.hinhAnh}
                      alt=""
                    />
                  </div>
                  <div className="p-5">
                    <div
                      className="p-5 border rounded-md"
                      style={{boxShadow: "rgb(114 117 117) 1px 1px 4px 0px"}}>
                      <p className="text-2xl font-semibold">{item.tenPhim}</p>
                      <div className="text-xl ">
                        {item.danhSachGhe.map((cine, index) => {
                          return (
                            <div className="mb-3">
                              <div className="font-semibold">
                                {cine.tenHeThongRap}
                              </div>
                              <div>
                                {new Date(item.ngayDat).toLocaleDateString(
                                  "en-gb",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                                -{cine.tenCumRap}-Seat {cine.tenGhe}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
