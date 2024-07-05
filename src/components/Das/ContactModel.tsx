"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { T, useTranslate } from "@tolgee/react";

function ContactModel() {
  const { t } = useTranslate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const [country, setCountry] = useState("");
  const [cityOptions, setCityOptions] = useState([]);

  const countries = {
    Italy: ["Rome", "Milan", "Naples", "Turin"],
    USA: ["New York", "Los Angeles", "Chicago", "Houston"],
  };

  const handleCountryChange = (e: { target: { value: any } }) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    setCityOptions(countries[selectedCountry] || []);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  //   ddddddddd

  const form = useRef(null);
  const sendmail = (e: any) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    // Custom validation
    const formData = new FormData(form.current!);
    const fn = formData.get("fn");
    const ln = formData.get("ln");
    const dof = formData.get("dof");
    const cn = formData.get("cn");
    const ct = formData.get("ct");
    const em = formData.get("em");
    const eb = formData.get("eb");
    const cs = formData.get("cs");
    const yg = formData.get("yg");

    if (!fn && !ln && !dof && !cn && !dof && !ct && !em && !eb && !cs && !yg) {
      // toast.error("Please fill in all fields");

      toast.error("please fill all this form");

      return;
    }

    if (!fn) {
      toast.error(t("fn"));
      return;
    }

    if (!ln) {
      toast.error(t("ln"));
      return;
    }

    if (!dof) {
      toast.error(t("dof"));
      return;
    }

    if (!cn) {
      toast.error(t("cn"));
      return;
    }
    if (!ct) {
      toast.error(t("ct"));
      return;
    }
    if (!em) {
      toast.error("emm");
      return;
    }
    if (!eb) {
      toast.error(t("eb"));
      return;
    }
    if (!cs) {
      toast.error(t("cs"));
      return;
    }
    if (!yg) {
      toast.error(t("yg"));
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current ?? "", publicKey).then(
      () => {
        toast.success(t("succes"));
      },
      () => {
        toast.error(t("error"));
      }
    );
    e.target.reset();
  };

  // /   ddddddddd

  return (
    <>
      <div className="max-w-2xl mx-auto mt-10">
        <button
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={toggleModal}
        >
          Toggle login modal
        </button>

        {isModalOpen && (
          <div
            id="authentication-modal"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto mt-14"
          >
            <div className="relative w-full max-w-[650px] px-4 md:h-auto mt-80 mb-8">
              <div className="bg-blue-600 rounded-3xl shadow relative ">
                <div className="flex justify-end p-2">
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={toggleModal}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>

                <form
                  className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8 bg-blue-600 h-[55rem]  rounded-3xl "
                  ref={form}
                  onSubmit={sendmail}
                >
                  <h3 className="text-xl font-medium text-white">
                    Pre-registration Form
                  </h3>

                  <div className="flex gap-6">
                    <div>
                      <label className="text-sm font-medium block mb-2 text-white">
                        first Name
                      </label>
                      <input
                        type="text"
                        name="fn"
                        id="text"
                        className=" font-semibold  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[257px] p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                        placeholder="fristname "
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-white block mb-2 ">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="ln"
                        id="text"
                        className=" font-semibold  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[257px] p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                        placeholder="lastname"
                        required
                      />
                    </div>
                  </div>
                  {/* end fn ln */}

                  <div>
                    <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dof"
                      //   id="dob"
                      className=" font-semibold  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                      required
                    />
                  </div>

                  {/* end date of birth */}

                  <div>
                    <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                      Country
                    </label>
                    <select
                      name="cn"
                      id="country"
                      className="font-semibold  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                      value={country}
                      onChange={handleCountryChange}
                      required
                    >
                      <option value="" disabled>
                        Select a country
                      </option>
                      <option value="Italy">Italy</option>
                      <option value="USA">USA</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                      City
                    </label>
                    <select
                      name="ct"
                      id="city"
                      className="font-semibold  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                      required
                    >
                      <option value="" disabled>
                        Select a city
                      </option>
                      {cityOptions.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="em"
                      id="text"
                      className="font-semibold  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                      placeholder="lastname"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                      Are You Curently
                    </label>
                    <div className=" space-y-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="eb"
                          value="red"
                          checked={selectedColor === "red"}
                          onChange={handleColorChange}
                          className="form-radio text-3xl  text-red-600"
                        />
                        <span className="ml-2 font-semibold text-white">
                          Enrolled in a physical school
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="eb"
                          value="black"
                          checked={selectedColor === "black"}
                          onChange={handleColorChange}
                          className="form-radio text-black-600"
                        />
                        <span className="ml-2 font-semibold text-white">
                          Being homeschooled
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* hhhhendchekbox */}

                  <div>
                    <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                      current school
                    </label>
                    <input
                      type="text"
                      name="cs"
                      id="text"
                      className="font-semibold  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                      placeholder="current school"
                      required
                    />
                  </div>

                  {/* end of current schol */}

                  <div>
                    <label className="text-sm font-medium text-white block mb-2 ">
                      year
                    </label>
                    <select
                      name="yg"
                      id="country"
                      className="font-semibold  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                      // value={country}
                      // onChange={handleCountryChange}
                      required
                    >
                      <option value="" disabled>
                        Select a year
                      </option>
                      <option value="Italy">y7</option>
                      <option value="USA">y8 </option>
                      <option value="USA">y9 </option>
                      <option value="USA">y10</option>
                    </select>
                  </div>
                  {/* endof y g */}

                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <div className="text-sm ml-3">
                        <label className="font-medium text-gray-900 dark:text-gray-300">
                          Remember me
                        </label>
                      </div>
                    </div>
                    {/* <a
                      href="#"
                      className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Lost Password?
                    </a> */}
                  </div>
                  {/* <button
                    type="submit"
                    className="w-full text-white bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    submit
                  </button> */}
                  <div className="flex justify-between">
                    <input
                      className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                      value="Send ➤"
                    />
                    <input
                      className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="reset"
                    />
                  </div>
                  
                </form>
                <ToastContainer
                  position="bottom-right"
                  hideProgressBar={true}
                  theme="light"
                  autoClose={2000}
                />
              </div>
            </div>
          </div>
        )}

        <p className="mt-5">
          This modal element is part of a larger, open-source library of
          Tailwind CSS components. Learn more by going to the official{" "}
          <a className="text-blue-600 hover:underline" href="#" target="_blank">
            Flowbite Documentation
          </a>
          .
        </p>
      </div>

      <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>
    </>
  );
}

export default ContactModel;
