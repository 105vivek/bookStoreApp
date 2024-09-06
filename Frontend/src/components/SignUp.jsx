import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function SignUp() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex items-center justify-center ">
        <div
          id="my_modal_2"
          className="border-[2px] shadow-md mt-20 p-5 rounded-md"
        >
          <div>
            <form
              method="dialog"
              // onSubmit={handleSubmit(onSubmit)}
            >
              {/* if there is a button in form, it will close the modal */}
              <Link
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                to={"/"}
                onClick={() => document.getElementById("my_modal_2").closest()}
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Login</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your FullName"
                  className="w-80 px-3 border rounded:md outline-none mt-2 mb-2"
                  // {...register("email", { required: true })}
                />
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="w-80 px-3 border rounded:md outline-none mt-2 mb-2"
                  // {...register("email", { required: true })}
                />
              </div>
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded:md outline-none mt-4"
                  // {...register("email", { required: true })}
                />
              </div>
              {/* button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded:md px-3 py-1 cursor-pointer hover:bg-pink-700">
                  SignUp
                </button>
                <p>
                  Have account ?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    LogIn
                  </button>{" "}
                  <Login />
                </p>
                {/* <Link/> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
