"use client";
import React, { useRef } from "react";
import { T, useTranslate } from "@tolgee/react";

import emailjs from "@emailjs/browser";
// import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ContactGrid() {

   const form = useRef(null);
   const sendmail = (e: any) => {
     e.preventDefault();

     const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID1!;
     const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID1!;
     const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY1!;

     // Custom validation
     const formData = new FormData(form.current!);
     const pfl = formData.get("pfl");
     const pemail = formData.get("pemail");
     const ptel = formData.get("ptel");
     const psb = formData.get("psb");
     const pms = formData.get("pms");

     if (!pfl && !pemail && !ptel && !psb && !pms) {
       // toast.error("Please fill in all fields");

       toast.error(t("toastMessage"));

       return;
     }

     if (!pfl) {
       toast.error(t("fnbbame"));
       return;
     }

     if (!pemail) {
       toast.error(t("embbail"));
       return;
     }

     if (!ptel) {
       toast.error(t("phobbne"));
       return;
     }

     if (!psb) {
       toast.error(t("subject"));
       return;
     }
      if (!pms) {
        toast.error(t("message"));
        return;
      }


     emailjs
       .sendForm(serviceId, templateId, form.current ?? "", publicKey)
       .then(
         () => {
           toast.success(t("succes"));
         },
         () => {
           toast.error(t("error"));
         }
       );
     e.target.reset();
   };



  const { t } = useTranslate();
  return (
    <section className="bg-white md:px-20 px-8">
      <div className=" flex justify-center items-center md:text-3xl text-1xl text-center font-bold text-white  ">
        <h1 className="bg-[#77B5FE] p-3 w-full rounded-full ">
          {/* Meet the team behind EBacc - Dedicated to your academic success */}
          {/* Get in Touch with Us - Join eBacc Today */}

          {t("contact")}
        </h1>
      </div>
      <div className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2  py-36  md:-mt-20 -mt-32">
        {/* <img
          alt=""
          src="/table.jpg"
          className="h-56 w-full object-cover sm:h-full hidden md:block"
        /> */}
        <div className="p-1 md:p-12 lg:px-16 lg:py-24">
          <img
            alt=""
            src="/contac.jpg"
            className="h-56 w-full object-cover sm:h-full "
          />

          {/* end */}
          {/* </div> */}
        </div>

        {/* jjjjjjjjjjj */}
        <div className="min-h-screen bg-[#f7f9fa] py-6 flex flex-col justify-center sm:py-12 bg-grey">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#061770]  to-white shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="text-white relative px-4 py-10 bg-[#29328f]   shadow-lg sm:rounded-3xl sm:p-20 bg-blue">
              <div className="text-center pb-6">
                <h1 className="text-3xl">{t("Contactez-nous !")}</h1>

                <p className="text-gray-300">
                  {/* Fill up the form below to send us a message. */}
                  {t("fill")}
                </p>
              </div>

              <form ref={form} onSubmit={sendmail}>
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder={t("pn")}
                  name="pfl"
                  required
                />

                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder={t("ad")}
                  name="pemail"
                  required
                />
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="tel"
                  placeholder={t("nt")}
                  name="ptel"
                  required
                />

                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder={t("sb")}
                  name="psb"
                  
                />

                <textarea
                  className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // type="text"
                  placeholder={t("ms")}
                  name="pms"
                ></textarea>

                <div className="flex justify-between">
                  <button
                    className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    value="Send ➤"
                  >
                    {t("Envoyer")}
                  </button>
                  {/* className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    value="Send ➤"
                  /> */}
                  <button
                    className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
      </div>
    </section>
  );
}

export default ContactGrid;
