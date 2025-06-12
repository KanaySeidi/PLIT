import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../assets/icon/footerLogo.svg";
import useAdminStore from "../../stores/useAdminStore";
import { useNavigate } from "react-router-dom";

function AdminPanel() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const { signIn } = useAdminStore();

  useEffect(() => {
    const access_token = localStorage.getItem("token");
    if (access_token) {
      setToken(access_token);
      navigate("/admin/tours/kyrgyzstan");
    }
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await signIn(data);
      if (response) {
        navigate("/admin/tours/kyrgyzstan");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-fistash">
        <div className="px-24 flex justify-center h-full items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full flex justify-center items-center"
          >
            <div className="w-1/2 h-3/4 bg-fistash shadow-2xl flex flex-col items-center rounded-md justify-center">
              <img src={logo} alt="" className="w-32 mt-4" />
              <div className="flex flex-col mt-4 h-40 w-full justify-center items-center ">
                <input
                  type="email"
                  className={`h-10 rounded-md focus:outline-none pl-1 ${
                    errors.email ? "border-red-500" : ""
                  } w-1/2 mb-3`}
                  placeholder="mail"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
                <input
                  type="password"
                  className={`h-10 rounded-md focus:outline-none pl-1 ${
                    errors.password ? "border-red-500" : ""
                  } w-1/2`}
                  placeholder="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
                <button
                  type="submit"
                  className="h-10 mb-2 bg-emerald-700 rounded-md mt-2 text-white hover:bg-emerald-500 w-1/3"
                >
                  Apply
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
