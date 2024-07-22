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

import "react-datepicker/dist/react-datepicker.css";

// function Header() {
function Contactvax() {
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

    emailjs.sendForm(serviceId, templateId, form.current ?? "", publicKey).then(
      () => {
        toast.success("Form submitted successfully");
      },
      () => {
        toast.error("Form submission failed");
      }
    );
    e.target.reset();
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (dates) => {
    setSelectedDate(dates[0] || null);
  };

  return (
    <div>
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
                  checked={selectedOption === "Being homeschooled"}
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
                  checked={selectedOption === "Enrolled in a physical school"}
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
              required={selectedOption === "Enrolled in a physical school"}
              disabled={selectedOption === "Being homeschooled"}
              value={currentSchool}
              onChange={(e) => setCurrentSchool(e.target.value)}
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
            <option value={t("form11")}> {t("form11")}</option>
            <option value={t("form12")}> {t("form12")}</option>
            <option value={t("form13")}>{t("form13")}</option>
            <option value={t("form14")}> {t("form14")}</option>
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
              <label className="font-medium text-white">{t("form15")}</label>
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
              <label className="font-medium text-white">{t("form16")}</label>
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
  );
}

export default Contactvax;
