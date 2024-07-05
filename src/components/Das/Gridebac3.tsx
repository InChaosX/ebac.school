import React from "react";

function Grid3debac3() {
  return (
    <section className="bg-white md:px-20 px-8">
      <div className="flex justify-center items-center md:text-3xl text-1xl text-center font-bold text-white">
        <h1 className="bg-[#77B5FE] p-3 rounded-full">
          PrepEngage with our interactive live sessions - Learn together,
          succeed together.
        </h1>
      </div>
      <div className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 py-36 md:-mt-20 -mt-32">
        <img
          alt=""
          src="/meet.jpg"
          className="h-56 w-full object-cover sm:h-full block sm:hidden"
        />
        <div className="p-1 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <div className="space-y-4">
              <details
                className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                  <h2 className="font-bold text-2xl">
                    Structured Live Sessions
                  </h2>
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
                  Students participate in weekly live sessions of 2 hours per
                  subject, conducted by our dedicated educational team. These
                  sessions provide a unique opportunity to deepen understanding
                  of concepts and ask questions in real time.
                </p>
              </details>
              <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                  <h2 className="font-bold text-2xl">Pedagogical Support</h2>
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
                  eBacc is committed to providing comprehensive pedagogical
                  support throughout the learning journey. Our instructors are
                  available to help students overcome academic challenges and
                  progress with confidence.
                </p>
              </details>
              <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                  <h2 className="font-bold text-2xl">
                    Interaction with Instructors
                  </h2>
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
                  Students benefit from direct interaction with qualified
                  instructors who are passionate about teaching and dedicated to
                  their academic success. This personal connection enhances
                  student engagement and promotes effective learning.
                </p>
              </details>
            </div>
          </div>
        </div>
        <img
          alt=""
          src="/meet.jpg"
          className="h-56 w-full object-cover sm:h-full hidden sm:block"
        />
      </div>
    </section>
  );
}

export default Grid3debac3;
