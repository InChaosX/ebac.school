// export default Header;
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { T, useTranslate } from "@tolgee/react";

import { LangSelector } from "../LangSelector";
// import { Link } from "react-scroll";
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Datepicker from "react-tailwindcss-datepicker"; 
// import Datepicker from "react-tailwindcss-datepicker";
// import Flatpickr from 'flatpickr';
// import 'flatpickr/dist/themes/material_green.css';


// import { useTranslate } from "@tolgee/react";

// import { T, useTranslate } from "@tolgee/react";

// function Header() {
 function Header() {
    const { t } = useTranslate();
    // nnnnn

    // radio
    const [selectedOption, setSelectedOption] = useState("");
    const [currentSchool, setCurrentSchool] = useState("");

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    // radio

    // const { t } = useTranslate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [selectedColor, setSelectedColor] = useState("");

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
      if (!isModalOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    const [selectedCountry, setSelectedCountry] = useState("");
    const [cityOptions, setCityOptions] = useState([]);

    const handleCountryChange = (e) => {
      const selectedCountry = e.target.value;
      setSelectedCountry(selectedCountry);
      setCityOptions(countryCities[selectedCountry] || []);
    };

    const countryCities = {
      Argentina: [
        "Buenos Aires",
        "Córdoba",
        "Rosario",
        "Mendoza",
        "La Plata",
        "San Miguel de Tucumán",
        "Mar del Plata",
        "Salta",
      ],
      Australia: [
        "Sydney",
        "Melbourne",
        "Brisbane",
        "Perth",
        "Adelaide",
        "Gold Coast",
        "Canberra",
        "Hobart",
      ],
      Brazil: [
        "São Paulo",
        "Rio de Janeiro",
        "Brasília",
        "Salvador",
        "Fortaleza",
        "Belo Horizonte",
        "Manaus",
        "Curitiba",
      ],
      Canada: [
        "Toronto",
        "Vancouver",
        "Montreal",
        "Calgary",
        "Edmonton",
        "Ottawa",
        "Winnipeg",
        "Quebec City",
      ],
      China: [
        "Beijing",
        "Shanghai",
        "Guangzhou",
        "Shenzhen",
        "Chengdu",
        "Chongqing",
        "Tianjin",
        "Wuhan",
      ],
      Egypt: [
        "Cairo",
        "Alexandria",
        "Giza",
        "Shubra El Kheima",
        "Port Said",
        "Suez",
        "Luxor",
        "Aswan",
      ],
      Finland: [
        "Helsinki",
        "Espoo",
        "Tampere",
        "Vantaa",
        "Oulu",
        "Turku",
        "Jyväskylä",
        "Lahti",
      ],
      France: [
        "Paris",
        "Marseille",
        "Lyon",
        "Toulouse",
        "Nice",
        "Nantes",
        "Strasbourg",
        "Montpellier",
      ],
      Germany: [
        "Berlin",
        "Munich",
        "Frankfurt",
        "Hamburg",
        "Cologne",
        "Stuttgart",
        "Düsseldorf",
        "Dresden",
      ],
      India: [
        "Mumbai",
        "Delhi",
        "Bangalore",
        "Chennai",
        "Kolkata",
        "Hyderabad",
        "Pune",
        "Ahmedabad",
      ],
      Italy: [
        "Rome",
        "Milan",
        "Naples",
        "Turin",
        "Palermo",
        "Genoa",
        "Bologna",
        "Florence",
      ],
      Japan: [
        "Tokyo",
        "Osaka",
        "Nagoya",
        "Yokohama",
        "Kyoto",
        "Fukuoka",
        "Sapporo",
        "Kobe",
      ],
      Mexico: [
        "Mexico City",
        "Guadalajara",
        "Monterrey",
        "Puebla",
        "Tijuana",
        "León",
        "Ciudad Juárez",
        "Cancún",
      ],
      Morocco: [
        "Casablanca",
        "Rabat",
        "Marrakech",
        "Fes",
        "Tangier",
        "Agadir",
        "Meknes",
        "Oujda",
      ],
      Netherlands: [
        "Amsterdam",
        "Rotterdam",
        "The Hague",
        "Utrecht",
        "Eindhoven",
        "Tilburg",
        "Groningen",
        "Almere",
      ],
      "New Zealand": [
        "Auckland",
        "Wellington",
        "Christchurch",
        "Hamilton",
        "Tauranga",
        "Dunedin",
        "Palmerston North",
        "Napier",
      ],
      Russia: [
        "Moscow",
        "Saint Petersburg",
        "Novosibirsk",
        "Yekaterinburg",
        "Nizhny Novgorod",
        "Kazan",
        "Chelyabinsk",
        "Samara",
      ],
      "South Africa": [
        "Johannesburg",
        "Cape Town",
        "Durban",
        "Pretoria",
        "Port Elizabeth",
        "Bloemfontein",
        "East London",
        "Polokwane",
      ],
      "South Korea": [
        "Seoul",
        "Busan",
        "Incheon",
        "Daegu",
        "Daejeon",
        "Gwangju",
        "Suwon",
        "Ulsan",
      ],
      Spain: [
        "Madrid",
        "Barcelona",
        "Valencia",
        "Seville",
        "Zaragoza",
        "Málaga",
        "Murcia",
        "Palma",
      ],
      Singapore: ["Singapore"],
      Sweden: [
        "Stockholm",
        "Gothenburg",
        "Malmö",
        "Uppsala",
        "Västerås",
        "Örebro",
        "Linköping",
        "Helsingborg",
      ],
      Turkey: [
        "Istanbul",
        "Ankara",
        "Izmir",
        "Bursa",
        "Adana",
        "Gaziantep",
        "Konya",
        "Antalya",
      ],
      "United Kingdom": [
        "London",
        "Manchester",
        "Birmingham",
        "Glasgow",
        "Liverpool",
        "Edinburgh",
        "Leeds",
        "Bristol",
      ],
      "United States": [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "Philadelphia",
        "San Antonio",
        "San Diego",
      ],
    };

    const handleFocus = (e) => {
      e.target.setAttribute("placeholder", ""); // Clear placeholder text on focus
    };

    const handleBlur = (e) => {
      e.target.setAttribute("placeholder", t("date_placeholder")); // Restore placeholder text on blur
    };

    const form = useRef(null);
    const sendmail = (e) => {
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

      if (
        !fn ||
        !ln ||
        !dof ||
        !cn ||
        !ct ||
        !em ||
        !eb ||
        (!cs && selectedOption === "Enrolled in a physical school") ||
        !yg
      ) {
        toast.error("Please fill in all required fields");
        return;
      }

      if (!fn) {
        toast.error("First name is required");
        return;
      }

      if (!ln) {
        toast.error("Last name is required");
        return;
      }

      if (!dof) {
        toast.error("Date of birth is required");
        return;
      }

      if (!cn) {
        toast.error("Country is required");
        return;
      }

      if (!ct) {
        toast.error("City is required");
        return;
      }

      if (!em) {
        toast.error("Email is required");
        return;
      }

      if (!eb) {
        toast.error("Enrollment status is required");
        return;
      }

      if (selectedOption === "Enrolled in a physical school" && !cs) {
        toast.error("Current school is required");
        return;
      }

      if (!yg) {
        toast.error("Year group is required");
        return;
      }

      emailjs
        .sendForm(serviceId, templateId, form.current ?? "", publicKey)
        .then(
          () => {
            toast.success("Form submitted successfully");
          },
          () => {
            toast.error("Form submission failed");
          }
        );
      e.target.reset();
    };

    // const [selectedDate, setSelectedDate] = useState(null);
    // nnnnn
    // const [value, setValue] = useState({
    //   startDate: null,
    //   endDate: null,
    // });

    // const handleValueChange = (newValue) => {
    //   console.log("newValue:", newValue);
    //   setValue(newValue);
    // };



    const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (dates) => {
    setSelectedDate(dates[0] || null);
  };

    return (
      <section
        className="bg-[#061770]  top-0 left-0 right-0 z-50 h-[100px] fixed  "
        id="navbar"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-4 lg:px-8 ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex md:text-center text-left">
              <Image
                src="/Logpo-Ebacc.png"
                alt="huddersfield"
                width={200}
                height={200}
              ></Image>
              {/* <Hud />*/}
              <button
                className="sm:hidden inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition hover:text-gray-700 focus:outline-none focus:ring ml-auto"
                type="button"
              >
                <LangSelector />
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <div data-aos="fade-down" data-aos-duration="3000">
                <button
                  className="block  font-bold rounded-3xl text-white  border-4 border-white bg-[#29328f] hover:text-[#29328f]  ease-in-out  w-full px-5 py-3 text-sm  transition hover:bg-gray-300 focus:ring btn relative"
                  id="scroll-button"
                  type="button"
                  data-aos="fade-down"
                  data-aos-duration="3000"
                  onClick={toggleModal}
                >
                  {t("Inscrivez-vous maintenant")}
                </button>

                {isModalOpen && (
                  <div
                    id="authentication-modal"
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto  top-30"
                  >
                    <div className="relative w-full max-w-[650px] h-[30rem] px-10  py-32 md:h-[30rem]  -mt-36   top-30">
                      <div className="bg-blue-600 rounded-3xl shadow relative ">
                        <div className="flex justify-end p-2">
                          <button
                            type="button"
                            className="text-white bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:text-white"
                            onClick={toggleModal}
                          >
                            <svg
                              className="w-6 h-6  rounded-full text-white "
                              fill="FFFFFF"
                              viewBox="0 0 20 20"
                              // xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="text-white"
                                // fillRule="FFFFF"
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
                          <h3 className=" flex justify-center items-center mb-10 font-bold bg-[#061770] py-4 rounded-2xl cursor-pointer hover:text-[#061770] hover:bg-slate-200 text-xl  text-white">
                            {t("form")}
                          </h3>

                          <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                                {t("form1")}
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
                                {t("form2")}
                              </label>
                              <input
                                className="font-semibold  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[257px] p-2.5 mr-9 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black "
                                id="grid-last-name"
                                type="text"
                                style={{ textTransform: "uppercase" }}
                                placeholder="Doe"
                                name="ln"
                                required
                              />
                            </div>
                          </div>
                          {/* end fn ln */}

                      
                          <div>
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                              {t("form3")}
                            </label>
                            <input
                              type="date"
                              name="dof"
                              className=" font-semibold  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                              style={{ textTransform: "uppercase" }} // Ensures input content is uppercase
                              // placeholder="MM/DD/YY" // Placeholder text in uppercase
                              required
                            />
                          </div>

                          {/* </div> */}

                          <div>
                            <div>
                              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                                {t("form4")}
                              </label>
                              <select
                                name="cn"
                                id="countryCities"
                                className="font-semibold sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                required
                              >
                                <option value="" disabled>
                                  {t("Sélectionnez un pays")}
                                </option>
                                {Object.keys(countryCities).map((country) => (
                                  <option key={country} value={country}>
                                    {t(`countries.${country}`)}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                                {t("form5")}
                              </label>
                              <select
                                name="ct"
                                id="city"
                                className="font-semibold sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                                required
                              >
                                <option value="" className="text-gray-500">
                                  {t("Sélectionnez une ville")}
                                </option>
                                {cityOptions.map((city) => (
                                  <option key={city} value={city}>
                                    {city}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                              {t("form6")}
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
                            <div>
                              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                                {t("form7")}
                              </label>
                              <div className="space-y-4">
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="eb"
                                    value="Being homeschooled"
                                    checked={
                                      selectedOption === "Being homeschooled"
                                    }
                                    onChange={handleOptionChange}
                                    className="form-radio text-black-600"
                                  />
                                  <span className="ml-2 font-semibold text-white">
                                    {t("form8")}
                                  </span>
                                </label>
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="eb"
                                    value="Enrolled in a physical school"
                                    checked={
                                      selectedOption ===
                                      "Enrolled in a physical school"
                                    }
                                    onChange={handleOptionChange}
                                    className="form-radio text-3xl text-red-600"
                                  />
                                  <span className="ml-2 font-semibold text-white">
                                    {t("form9")}
                                  </span>
                                </label>
                              </div>
                            </div>

                            {/* Current School Input */}
                            <div>
                              <label className="block uppercase tracking-wide text-white text-xs font-bold mt-5 pb-2 ">
                                {t("form10")}
                              </label>
                              <input
                                type="text"
                                name="cs"
                                id="text"
                                className={`font-semibold sm:text-sm rounded-lg  block w-full p-2.5 text-black  ${
                                  selectedOption === "Being homeschooled"
                                    ? "bg-gray-500"
                                    : "bg-white"
                                }`}
                                // className="font-semibold sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                                placeholder={t("form10")}
                                required={
                                  selectedOption ===
                                  "Enrolled in a physical school"
                                }
                                disabled={
                                  selectedOption === "Being homeschooled"
                                }
                                value={currentSchool}
                                onChange={(e) =>
                                  setCurrentSchool(e.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div>
                            <label className="text-sm font-medium text-white block mb-2 ">
                              {t("form22")}
                            </label>

                            <select
                              name="yg"
                              // id="country"
                              className="font-semibold  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                              required
                            >
                              <option value="">
                                {/* Select a year */}
                                {t("Sélectionnez un niveau scolaire")}
                              </option>
                              <option value={t("form11")}>
                                {" "}
                                {t("form11")}
                              </option>
                              <option value={t("form12")}>
                                {" "}
                                {t("form12")}
                              </option>
                              <option value={t("form13")}>{t("form13")}</option>
                              <option value={t("form14")}>
                                {" "}
                                {t("form14")}
                              </option>
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
                                  {t("form15")}
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
                                  {t("form16")}
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
                              {t("Envoyer")}
                            </button>

                            <button
                              className="shadow bg-blue-800 hover:bg-indigo-700 text-white font-bold py-2 p-10 px-4 rounded focus:outline-none focus:shadow-outline"
                              type="reset"
                            >
                              {t("Réinitialiser")}
                            </button>
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

              <button
                className=" hidden md:inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition  hover:text-gray-700 outline-none  "
                type="button"
              >
                <LangSelector />
              </button>
            </div>
          </div>
        </div>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>
      </section>
    );
  };

export default Header;




 {
   /* <div className="flex">
                            <DatePicker
                              selected={selectedDate}
                              onChange={(date) => setSelectedDate(date)}
                              className="font-semibold  sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[32rem] p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 text-black"
                              placeholderText={t("date_placeholder")}
                              dateFormat="MM/dd/yyyy"
                              required
                              name="dof"
                            />
                            <div>
                              <svg
                                fill="#000000"
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="m22 2.25h-3.25v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-4.5v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-4.5v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-3.25c-1.104 0-2 .895-2 1.999v17.75c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2v-17.75c0-1.104-.896-1.999-2-1.999zm.5 19.75c0 .276-.224.499-.499.5h-20.001c-.276 0-.5-.224-.5-.5v-17.75c.001-.276.224-.499.5-.499h3.25v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h4.5v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h4.5v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h3.25c.276 0 .499.224.499.499z" />
                                <path d="m5.25 9h3v2.25h-3z" />
                                <path d="m5.25 12.75h3v2.25h-3z" />
                                <path d="m5.25 16.5h3v2.25h-3z" />
                                <path d="m10.5 16.5h3v2.25h-3z" />
                                <path d="m10.5 12.75h3v2.25h-3z" />
                                <path d="m10.5 9h3v2.25h-3z" />
                                <path d="m15.75 16.5h3v2.25h-3z" />
                                <path d="m15.75 12.75h3v2.25h-3z" />
                                <path d="m15.75 9h3v2.25h-3z" />
                              </svg>
                            </div>
                          </div> */
 }
 {
   /* <div className="relative max-w-sm">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                              <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                              </svg>
                            </div>
                            <input
                              datepicker
                              id="default-datepicker"
                              type="text"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Select date"
                            />
                          </div> */
 }
