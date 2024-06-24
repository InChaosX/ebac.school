"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { T, useTranslate } from "@tolgee/react";

function Contactt() {
  const { t } = useTranslate();

  //  email form logic validation

  const form = useRef(null);
  const sendmail = (e: any) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    // Custom validation
    const formData = new FormData(form.current!);
    const fname = formData.get("fname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    if (!fname && !email && !phone && !message) {
      // toast.error("Please fill in all fields");

      toast.error(t("toastMessage"));

      return;
    }

    if (!fname) {
      toast.error(t("fname"));
      return;
    }

    if (!email) {
      toast.error(t("email"));
      return;
    }

    if (!phone) {
      toast.error(t("phone"));
      return;
    }

    if (!message) {
      toast.error(t("message"));
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
    <section id="contact" className="relative">
      {/* Container */}
      <div className="py-16 md:py-24 lg:py-32">
        {/* Component */}
        <div className="mx-auto w-full max-w-3xl px-5 md:px-10">
          <div>
            <h3
              data-aos="fade-down"
              data-aos-duration="3000"
              className="text-6xl mb-9 text-red text-center font-bold"
            >
              {t("contact")}
            </h3>
          </div>
          {/* Heading Div */}
          <h2
            data-aos="fade-up"
            data-aos-duration="3000"
            className="text-3xl font-semibold md:text-6xl text-center items-center"
          >
            {/* <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6391714b7ac2b51acc1a2548_Rectangle%2017%20(1).svg')] bg-contain bg-center bg-no-repeat px-4 text-white">
              Let's Build
            </span>{" "} */}
            {/* start your bright */}
            {t("con_part1")}
            <span className="relative inline-block px-4 text-black">
              {/* your bright future here… */}
              <svg
                className="absolute inset-0 w-full h-full"
                width="321"
                height="79"
                viewBox="0 0 321 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <rect
                  x="0.832031"
                  y="15.8027"
                  width="316.488"
                  height="63"
                  transform="rotate(-2.78161 0.832031 15.8027)"
                  fill="#bd202e"
                />
              </svg>
              <span
                data-aos="fade-down"
                data-aos-duration="3000"
                className="relative"
              >
                {/* future  */}
                {t("con_part2")}
              </span>
              <span className="relative ml-2 ">
                {/* here...  */}

                {t("con_part3")}
              </span>
              {/* here… */}
            </span>
            {/* your bright future here… */}
          </h2>
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="mx-auto mb-8 mt-10 max-w-[528px] text-[#636262] md:mb-12 lg:mb-16"
          >
            <img src="/ncuk_556688.jpg" />
          </div>

          {/* Form */}
          <form
            data-aos="fade-left"
            data-aos-duration="3000"
            ref={form}
            onSubmit={sendmail}
            // method="get"
            className="mb-4 rounded-3xl border border-solid border-red bg-white px-4 py-10 [box-shadow:rgb(189,32,46)_9px_9px] sm:px-8 sm:py-16 md:px-20"
          >
            {/* //name */}
            <div className="relative mb-4">
              <label htmlFor="field" className="mb-1 font-medium">
                {t("Nom Complete")}
              </label>
              <input
                name="fname"
                type="text"
                className="block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
              />
            </div>
            {/* </div> */}

            {/* Email */}
            <div className="relative mb-4">
              <label htmlFor="field" className="mb-1 font-medium">
                {t("Email")}
              </label>
              <input
                type="email"
                className="block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
                name="email"
              />
            </div>

            {/* phone */}
            <div className="relative mb-4">
              <label htmlFor="field" className="mb-1 font-medium">
                {t("Numero De Telephone")}
              </label>
              <input
                type="tel"
                placeholder=""
                className="block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
                name="phone"
              />
            </div>

            {/* Message */}
            <div className="relative mb-5 md:mb-6 lg:mb-8">
              <label htmlFor="field" className="mb-1 font-medium">
                {t("when")}
              </label>
              <input
                className="min-h-[186px] w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
                name="message"
              />
            </div>
            <label className="flex pb-4 pl-5 font-medium"></label>
            <div>
              <button
                type="submit"
                className="inline-block w-full cursor-pointer rounded-xl bg-black px-8 py-4 text-center font-semibold text-white no-underline [box-shadow:rgb(189,32,46)_6px_6px]"
              >
                {t("ENVOYER VOTRE CANDIDATURE")}
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
      {/* Background Images */}
      <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639976df71dd20857114e6dd_Frame%20427322429.svg"
        alt=""
        className="absolute bottom-auto left-0 right-0 top-0 -z-10 inline-block w-full"
      />
      {/* <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639976df71dd20857114e6dd_Frame%20427322429.svg"
        alt=""
        className="absolute bottom-0 left-0 right-0 top-auto -z-30 inline-block w-full"
      /> */}

      <svg
        className="absolute bottom-0 left-0 right-0 top-auto -z-30 inline-block w-full"
        width="81"
        height="84"
        viewBox="0 0 81 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M51.0208 33.9627L54.5846 0.0300653L34.4651 27.586L0.532435 24.0221L28.0884 44.1417L24.5245 78.0744L27.9899 73.3281L27.8147 74.9964L29.201 75.142L29.6269 71.086L44.6441 50.5184L69.9712 53.1785L73.265 55.5834L74.087 54.4576L72.7322 53.4684L78.5767 54.0823L51.0208 33.9627ZM72.7322 53.4684L69.4943 51.1044L68.6723 52.2301L69.9712 53.1785L72.7322 53.4684ZM29.6269 71.086L29.7949 69.4866L28.4087 69.341L27.9899 73.3281L29.6269 71.086ZM56.6869 8.26301L56.6481 8.25894L56.433 8.55357L55.9255 8.18305L55.3006 8.11741L55.3387 7.7546L55.3072 7.73162L56.9839 5.43529L56.6869 8.26301ZM56.0929 13.9185L55.4989 19.5739L54.1127 19.4283L54.7066 13.7729L56.0929 13.9185ZM54.9049 25.2293L54.311 30.8848L52.9247 30.7392L53.5187 25.0837L54.9049 25.2293ZM53.717 36.5402L53.42 39.3679L55.7163 41.0446L54.8944 42.1703L51.9499 40.0205L52.3307 36.3946L53.717 36.5402ZM60.309 44.3978L64.9016 47.7511L64.0797 48.8769L59.487 45.5236L60.309 44.3978ZM78.6566 57.8424L78.6796 57.8109L80.9759 59.4875L78.1482 59.1905L78.1523 59.1517L77.8577 58.9366L78.2282 58.4292L78.2938 57.8043L78.6566 57.8424ZM72.4928 58.5965L66.8373 58.0026L66.9829 56.6163L72.6384 57.2103L72.4928 58.5965ZM61.1819 57.4086L55.5264 56.8146L55.672 55.4283L61.3275 56.0223L61.1819 57.4086ZM49.871 56.2206L47.0433 55.9236L45.3667 58.22L44.2409 57.398L46.3908 54.4536L50.0166 54.8344L49.871 56.2206ZM42.0134 62.8126L38.6601 67.4053L37.5344 66.5833L40.8876 61.9907L42.0134 62.8126ZM35.3069 71.9979L31.9536 76.5906L30.8279 75.7687L34.1811 71.176L35.3069 71.9979ZM28.5689 81.1603L28.6004 81.1833L26.9237 83.4796L27.2207 80.6519L27.2595 80.6559L27.4746 80.3613L27.9821 80.7318L28.607 80.7975L28.5689 81.1603ZM29.0026 63.6855L29.5966 58.0301L30.9829 58.1757L30.3889 63.8311L29.0026 63.6855ZM30.1906 52.3746L30.4876 49.5469L28.1913 47.8703L29.0132 46.7445L31.9577 48.8944L31.5769 52.5202L30.1906 52.3746ZM23.5986 44.517L19.0059 41.1638L19.8279 40.038L24.4206 43.3913L23.5986 44.517ZM14.4133 37.8105L9.82063 34.4573L10.6426 33.3315L15.2352 36.6848L14.4133 37.8105ZM5.25096 31.0725L5.22797 31.104L2.93164 29.4274L5.75936 29.7244L5.75529 29.7631L6.04992 29.9783L5.6794 30.4857L5.61377 31.1106L5.25096 31.0725ZM11.4148 30.3183L17.0702 30.9123L16.9247 32.2986L11.2692 31.7046L11.4148 30.3183ZM22.7257 31.5063L28.3811 32.1003L28.2355 33.4865L22.5801 32.8926L22.7257 31.5063ZM34.0366 32.6942L36.8643 32.9912L38.5409 30.6949L39.6667 31.5169L37.5168 34.4613L33.891 34.0805L34.0366 32.6942ZM41.8942 26.1022L45.2474 21.5096L46.3732 22.3315L43.0199 26.9242L41.8942 26.1022ZM48.6007 16.9169L51.954 12.3243L53.0797 13.1462L49.7265 17.7389L48.6007 16.9169Z"
          fill="#bd202e"
        />
      </svg>

      {/* <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639976de093252d906117e82_Ornament%2049.svg"
        alt=""
        className="absolute bottom-0 left-[5%] right-auto top-auto -z-30 hidden md:inline-block"
      /> */}
      <svg
        className="absolute bottom-0 left-[5%] right-auto top-auto -z-30 hidden md:inline-block"
        width="81"
        height="84"
        viewBox="0 0 81 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M51.0208 33.9627L54.5846 0.0300653L34.4651 27.586L0.532435 24.0221L28.0884 44.1417L24.5245 78.0744L27.9899 73.3281L27.8147 74.9964L29.201 75.142L29.6269 71.086L44.6441 50.5184L69.9712 53.1785L73.265 55.5834L74.087 54.4576L72.7322 53.4684L78.5767 54.0823L51.0208 33.9627ZM72.7322 53.4684L69.4943 51.1044L68.6723 52.2301L69.9712 53.1785L72.7322 53.4684ZM29.6269 71.086L29.7949 69.4866L28.4087 69.341L27.9899 73.3281L29.6269 71.086ZM56.6869 8.26301L56.6481 8.25894L56.433 8.55357L55.9255 8.18305L55.3006 8.11741L55.3387 7.7546L55.3072 7.73162L56.9839 5.43529L56.6869 8.26301ZM56.0929 13.9185L55.4989 19.5739L54.1127 19.4283L54.7066 13.7729L56.0929 13.9185ZM54.9049 25.2293L54.311 30.8848L52.9247 30.7392L53.5187 25.0837L54.9049 25.2293ZM53.717 36.5402L53.42 39.3679L55.7163 41.0446L54.8944 42.1703L51.9499 40.0205L52.3307 36.3946L53.717 36.5402ZM60.309 44.3978L64.9016 47.7511L64.0797 48.8769L59.487 45.5236L60.309 44.3978ZM78.6566 57.8424L78.6796 57.8109L80.9759 59.4875L78.1482 59.1905L78.1523 59.1517L77.8577 58.9366L78.2282 58.4292L78.2938 57.8043L78.6566 57.8424ZM72.4928 58.5965L66.8373 58.0026L66.9829 56.6163L72.6384 57.2103L72.4928 58.5965ZM61.1819 57.4086L55.5264 56.8146L55.672 55.4283L61.3275 56.0223L61.1819 57.4086ZM49.871 56.2206L47.0433 55.9236L45.3667 58.22L44.2409 57.398L46.3908 54.4536L50.0166 54.8344L49.871 56.2206ZM42.0134 62.8126L38.6601 67.4053L37.5344 66.5833L40.8876 61.9907L42.0134 62.8126ZM35.3069 71.9979L31.9536 76.5906L30.8279 75.7687L34.1811 71.176L35.3069 71.9979ZM28.5689 81.1603L28.6004 81.1833L26.9237 83.4796L27.2207 80.6519L27.2595 80.6559L27.4746 80.3613L27.9821 80.7318L28.607 80.7975L28.5689 81.1603ZM29.0026 63.6855L29.5966 58.0301L30.9829 58.1757L30.3889 63.8311L29.0026 63.6855ZM30.1906 52.3746L30.4876 49.5469L28.1913 47.8703L29.0132 46.7445L31.9577 48.8944L31.5769 52.5202L30.1906 52.3746ZM23.5986 44.517L19.0059 41.1638L19.8279 40.038L24.4206 43.3913L23.5986 44.517ZM14.4133 37.8105L9.82063 34.4573L10.6426 33.3315L15.2352 36.6848L14.4133 37.8105ZM5.25096 31.0725L5.22797 31.104L2.93164 29.4274L5.75936 29.7244L5.75529 29.7631L6.04992 29.9783L5.6794 30.4857L5.61377 31.1106L5.25096 31.0725ZM11.4148 30.3183L17.0702 30.9123L16.9247 32.2986L11.2692 31.7046L11.4148 30.3183ZM22.7257 31.5063L28.3811 32.1003L28.2355 33.4865L22.5801 32.8926L22.7257 31.5063ZM34.0366 32.6942L36.8643 32.9912L38.5409 30.6949L39.6667 31.5169L37.5168 34.4613L33.891 34.0805L34.0366 32.6942ZM41.8942 26.1022L45.2474 21.5096L46.3732 22.3315L43.0199 26.9242L41.8942 26.1022ZM48.6007 16.9169L51.954 12.3243L53.0797 13.1462L49.7265 17.7389L48.6007 16.9169Z"
          fill="#bd202e"
        />
      </svg>
      {/* <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639976de093252d906117e82_Ornament%2049.svg"
        alt=""
        className="absolute bottom-auto left-auto right-[5%] top-0 -z-30 hidden md:inline-block"
      /> */}
      <svg
        width="81"
        height="84"
        viewBox="0 0 81 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M51.0208 33.9627L54.5846 0.0300653L34.4651 27.586L0.532435 24.0221L28.0884 44.1417L24.5245 78.0744L27.9899 73.3281L27.8147 74.9964L29.201 75.142L29.6269 71.086L44.6441 50.5184L69.9712 53.1785L73.265 55.5834L74.087 54.4576L72.7322 53.4684L78.5767 54.0823L51.0208 33.9627ZM72.7322 53.4684L69.4943 51.1044L68.6723 52.2301L69.9712 53.1785L72.7322 53.4684ZM29.6269 71.086L29.7949 69.4866L28.4087 69.341L27.9899 73.3281L29.6269 71.086ZM56.6869 8.26301L56.6481 8.25894L56.433 8.55357L55.9255 8.18305L55.3006 8.11741L55.3387 7.7546L55.3072 7.73162L56.9839 5.43529L56.6869 8.26301ZM56.0929 13.9185L55.4989 19.5739L54.1127 19.4283L54.7066 13.7729L56.0929 13.9185ZM54.9049 25.2293L54.311 30.8848L52.9247 30.7392L53.5187 25.0837L54.9049 25.2293ZM53.717 36.5402L53.42 39.3679L55.7163 41.0446L54.8944 42.1703L51.9499 40.0205L52.3307 36.3946L53.717 36.5402ZM60.309 44.3978L64.9016 47.7511L64.0797 48.8769L59.487 45.5236L60.309 44.3978ZM78.6566 57.8424L78.6796 57.8109L80.9759 59.4875L78.1482 59.1905L78.1523 59.1517L77.8577 58.9366L78.2282 58.4292L78.2938 57.8043L78.6566 57.8424ZM72.4928 58.5965L66.8373 58.0026L66.9829 56.6163L72.6384 57.2103L72.4928 58.5965ZM61.1819 57.4086L55.5264 56.8146L55.672 55.4283L61.3275 56.0223L61.1819 57.4086ZM49.871 56.2206L47.0433 55.9236L45.3667 58.22L44.2409 57.398L46.3908 54.4536L50.0166 54.8344L49.871 56.2206ZM42.0134 62.8126L38.6601 67.4053L37.5344 66.5833L40.8876 61.9907L42.0134 62.8126ZM35.3069 71.9979L31.9536 76.5906L30.8279 75.7687L34.1811 71.176L35.3069 71.9979ZM28.5689 81.1603L28.6004 81.1833L26.9237 83.4796L27.2207 80.6519L27.2595 80.6559L27.4746 80.3613L27.9821 80.7318L28.607 80.7975L28.5689 81.1603ZM29.0026 63.6855L29.5966 58.0301L30.9829 58.1757L30.3889 63.8311L29.0026 63.6855ZM30.1906 52.3746L30.4876 49.5469L28.1913 47.8703L29.0132 46.7445L31.9577 48.8944L31.5769 52.5202L30.1906 52.3746ZM23.5986 44.517L19.0059 41.1638L19.8279 40.038L24.4206 43.3913L23.5986 44.517ZM14.4133 37.8105L9.82063 34.4573L10.6426 33.3315L15.2352 36.6848L14.4133 37.8105ZM5.25096 31.0725L5.22797 31.104L2.93164 29.4274L5.75936 29.7244L5.75529 29.7631L6.04992 29.9783L5.6794 30.4857L5.61377 31.1106L5.25096 31.0725ZM11.4148 30.3183L17.0702 30.9123L16.9247 32.2986L11.2692 31.7046L11.4148 30.3183ZM22.7257 31.5063L28.3811 32.1003L28.2355 33.4865L22.5801 32.8926L22.7257 31.5063ZM34.0366 32.6942L36.8643 32.9912L38.5409 30.6949L39.6667 31.5169L37.5168 34.4613L33.891 34.0805L34.0366 32.6942ZM41.8942 26.1022L45.2474 21.5096L46.3732 22.3315L43.0199 26.9242L41.8942 26.1022ZM48.6007 16.9169L51.954 12.3243L53.0797 13.1462L49.7265 17.7389L48.6007 16.9169Z"
          fill="#bd202e"
        />
      </svg>
    </section>
  );
}

export default Contactt;
