import React from "react";

function ContactGrid() {
  return (
    <section className="bg-white md:px-20 px-8">
      <div className=" flex justify-center items-center md:text-3xl text-1xl text-center font-bold text-white  ">
        <h1 className="bg-[#f5cd2c] p-3 md:px-[350px] px-[50px] rounded-full ">
          {/* Meet the team behind EBacc - Dedicated to your academic success */}
          Get in Touch with Us - Join EBacc Today
        </h1>
      </div>
      <div className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2  py-36  md:-mt-20 -mt-32">
        {/* <img
          alt=""
          src="/table.jpg"
          className="h-56 w-full object-cover sm:h-full hidden md:block"
        /> */}
        <div className="p-1 md:p-12 lg:px-16 lg:py-24">
          {/* <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"> */}
          {/* start */}
          {/* <div className="space-y-4">
              <details
                className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                  <h2 className="font-bold text-2xl">Our Story</h2>

                  <span className="relative size-5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700 text-left font-medium">
                  EBacc was founded by a group of education professionals
                  passionate about teaching and determined to offer innovative
                  learning solutions. Since our inception, we have helped many
                  students achieve their academic goals.
                </p>
              </details>

              <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                  <h2 className="font-bold text-2xl">Our Team</h2>

                  <span className="relative size-5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700 text-left font-medium">
                  The EBacc team consists of qualified and experienced
                  instructors, each specialized in their respective fields. We
                  work together to provide superior quality education and
                  constant pedagogical support.
                </p>
              </details>

              <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                  <h2 className="font-bold text-2xl">Our Values</h2>

                  <span className="relative size-5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700 text-left font-medium">
                  At EBacc, we value academic excellence, integrity, and
                  commitment to our students. We believe in the importance of an
                  inclusive and supportive learning environment where every
                  student can thrive and succeed.
                </p>
              </details>
            </div> */}

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

        {/* jjjjjjjjjjj */}

        {/* <img
          alt=""
          src="/table.jpg"
          className="h-56 w-full object-cover sm:h-full "
        /> */}
      </div>
    </section>
  );
}

export default ContactGrid;
