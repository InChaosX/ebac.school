import React from "react";

function ContactGrid() {
  return (
    <section className="bg-white md:px-20 px-8">
      <div className=" flex justify-center items-center md:text-3xl text-1xl text-center font-bold text-white  ">
        <h1 className="bg-[#f5cd2c] p-3 md:px-[350px] px-[50px] rounded-full ">
          {/* Meet the team behind EBacc - Dedicated to your academic success */}
          Get in Touch with Us - Join eBacc Today
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
                <h1 className="text-3xl">Contact Us!</h1>

                <p className="text-gray-300">
                  Fill up the form below to send us a message.
                </p>
              </div>

              <form>
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                  name="name"
                />

                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                  name="email"
                />

                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Subject"
                  name="_subject"
                />

                <textarea
                  className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // type="text"
                  placeholder="Type your message here..."
                  name="message"
                ></textarea>

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
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}

export default ContactGrid;
