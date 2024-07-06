"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { T, useTranslate } from "@tolgee/react";

import { LangSelector } from "../LangSelector";
import { Link } from "react-scroll";

function Heroe() {
  const { t } = useTranslate();
  // nnnnn

  // const { t } = useTranslate();
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

  const handleCountryChange = (e) => {
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

  return (
    <div className="bg-[#f5f6fa] mt-24">
      <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
        {/* <!--Left Col--> */}
        <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            className="my-4 md:text-5xl text-3xl md:mt-1 mt-20 font-bold leading-tight text-darken"
          >
            {/* Studying Online with eBacc - Your Path to English Baccalaureate
            Success */}
            <span className="text-[#cc2132]">Studying Online with eBacc</span>{" "}
            <span className="text-[#061770]">
              - Your Path to English Baccalaureate
            </span>
          </h1>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="leading-normal text-2xl mb-8 font-thin"
          >
            Join eBacc today and unlock your full academic potential with expert
            guidance and personalized learning. As a dedicated English
            Baccalaureate platform, we prepare you for IGCSE success.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5 cursor-pointer"
          >
            {/* lg:mx-0 bg-yellow-500 text-white text-xl font-bold rounded-full py-4
            px-9 btn-zoom */}
            <button
              onClick={toggleModal}
              className="lg:mx-0 bg-[#c71e2f] text-white text-xl font-bold rounded-full py-4  cursor-pointer px-20 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
            >
              Join now !
            </button>
            {isModalOpen && (
              <div
                id="authentication-modal"
                className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto top-30 "
              >
                <div className="relative w-full max-w-[650px] h-[30rem] px-10  py-32 md:h-[30rem] -mt-36   top-30">
                  <div className="bg-blue-600 rounded-3xl shadow relative ">
                    <div className="flex justify-end p-2">
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center bg-red-600 dark:hover:text-white"
                        onClick={toggleModal}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="FFFFFF"
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
                      className="space-y-3 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8 bg-blue-600 md:h-[55rem] h-[65rem] rounded-3xl "
                      ref={form}
                      onSubmit={sendmail}
                    >
                      <h3 className=" flex justify-center items-center mb-10 font-bold bg-[#cc2132] py-4 rounded-2xl cursor-pointer hover:text-[#061770] hover:bg-slate-200 text-xl  text-white">
                        Pre-registration Form
                      </h3>

                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                            Student's First Name
                          </label>
                          <input
                            className="font-semibold  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[257px] p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                            id="grid-first-name"
                            type="text"
                            placeholder="Jane"
                            name="fn"
                            required
                          />
                          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                            Student's Last Name
                          </label>
                          <input
                            className="font-semibold  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[257px] p-2.5 mr-9 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black "
                            id="grid-last-name"
                            type="text"
                            placeholder="Doe"
                            name="ln"
                            required
                          />
                        </div>
                      </div>
                      {/* end fn ln */}

                      <div>
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
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
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
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
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                          City
                        </label>
                        <select
                          name="ct"
                          id="city"
                          className="font-semibold  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                          required
                        >
                          <option
                            className="placeholder:text-gray-500"
                            value=""
                            disabled
                          >
                            Select a city
                          </option>
                          {cityOptions.map((city) => (
                            <option
                              className="placeholder:text-gray-500"
                              key={city}
                              value={city}
                            >
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="em"
                          id="text"
                          className="font-semibold  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                          placeholder="Email"
                          required
                        />
                      </div>

                      <div>
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                          Are You Currently
                        </label>
                        <div className=" space-y-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="eb"
                              value="Being homeschooled"
                              checked={selectedColor === "Being homeschooled"}
                              onChange={handleColorChange}
                              className="form-radio text-black-600"
                            />
                            <span className="ml-2 font-semibold text-white">
                              Being homeschooled
                            </span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="eb"
                              value="Enrolled in a physical school"
                              checked={
                                selectedColor ===
                                "Enrolled in a physical school"
                              }
                              onChange={handleColorChange}
                              className="form-radio text-3xl  text-red-600"
                            />
                            <span className="ml-2 font-semibold text-white">
                              Enrolled in a physical school
                            </span>
                          </label>
                        </div>
                      </div>

                      {/* hhhhendchekbox */}

                      <div>
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                          Current School
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
                          Year Group / Grade
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
                          <option value="Year 7">Year 7</option>
                          <option value="Year 8">Year 8</option>
                          <option value="Year 9">Year 9</option>
                          <option value="Year 10">Year 10</option>
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
                              I agree to the terms and conditions of EBacc.
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
                              I agree to the privacy policy and understand how
                              my data will be used.
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
                          className="w-full  text-white bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          submit
                        </button> */}
                      <div className="flex justify-between">
                        <button
                          className="shadow bg-blue-800 hover:bg-indigo-700 text-white font-bold py-2 p-9 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                          value="Send ➤"
                        >
                          Submit
                        </button>

                        <input
                          className="shadow bg-blue-800 hover:bg-indigo-700 text-white font-bold py-2 p-10 px-4 rounded focus:outline-none focus:shadow-outline"
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
          </div>
        </div>
        {/* <!--Right Col--> */}
        <div className="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
          <img
            data-aos="fade-up"
            data-aos-once="true"
            className="w-10/12 mx-auto 2xl:-mb-20"
            src="/ilyana.png"
          />
          {/* <!-- calendar --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            className="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4"
          >
            <img
              className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-20"
              src="/live3d.jpg"
            />
          </div>
          {/* <!-- red --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
            className="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32   lg:-right-7 floating"
          >
            <img
              className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-20"
              src="/clock3d.jpg"
            />
            {/* <svg
              className="h-16 sm:h-24"
              viewBox="0 0 149 149"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <rect
                  x="40"
                  y="32"
                  width="69"
                  height="69"
                  rx="14"
                  fill="#F3627C"
                />
              </g>
              <rect
                x="51.35"
                y="44.075"
                width="47.3"
                height="44.85"
                rx="8"
                fill="white"
              />
              <path
                d="M74.5 54.425V78.575"
                stroke="#F25471"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M65.875 58.7375L65.875 78.575"
                stroke="#F25471"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M83.125 63.9125V78.575"
                stroke="#F25471"
                stroke-width="4"
                stroke-linecap="round"
              />
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="149"
                  height="149"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="8" />
                  <feGaussianBlur stdDeviation="20" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg> */}
          </div>
          {/* <!-- ux className --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating"
          >
            <img
              className="bg-white bg-opacity-80 rounded-lg h-20 sm:h-20"
              src="/teacher3d.jpg"
              alt=""
            />
          </div>
          {/* <!-- congrats --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-once="true"
            className="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-4 floating-4"
          >
            <img
              className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-20"
              src="/lamps3d.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
        <svg
          className="xl:h-40 xl:w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="bg-white w-full h-20 -mt-px"></div>
      </div>
    </div>
  );
}

export default Heroe;
