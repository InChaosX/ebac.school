
"use client";
import { useState } from "react";
import { T, useTranslate } from "@tolgee/react";

export default function Survey() {
  const { t } = useTranslate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({ q1: "", q2: "", q3: "", q4: "" });

  const nextQuestion = (questionNumber, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [`q${questionNumber}`]: answer,
    }));
    if (questionNumber < 4) {
      setCurrentQuestion(questionNumber + 1);
    } else {
      setCurrentQuestion(5); // Move to result page
    }
  };

  const resetSurvey = () => {
    setCurrentQuestion(1);
    setAnswers({ q1: "", q2: "", q3: "", q4: "" });
  };

  const getResult = () => {
    const { q1, q2, q3, q4 } = answers;
    const combination = `${q1}${q2}${q3}${q4}`;
    switch (combination) {
      case "0000":
        return t("r1");
      case "0001":
        return t("r2");

      case "0010":
        return t("r3");

      case "0011":
        return t("r4");

      case "0100":
        return t("r5");

      case "0101":
        return t("r6");

      case "0110":
        return t("r7");

      case "0111":
        return t("r8");

      case "1000":
        return t("r9");

      case "1001":
        return t("r10");

      case "1010":
        return t("r11");

      case "1011":
        return t("r12");
        
      case "1100":
        return t("r13");
      case "1101":
        return t("r14");
      case "1110":
        return t("r15");
      case "1111":
        return t("r16");
      default:
        return t("default_result");
    }
  };

  return (
    <section
      className="   py-20  "
      style={{
        backgroundImage: 'url("/3.png")',
        backgroundSize: "cover", // Adjust to fit the container
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // Prevent repeating if the image is smaller
      }}
    >
      <div className=" absolute m-auto md:ml-60 ml-0 -mt-12 font-bold py-3 text-white bg-cyan-500 rounded-3xl w-[30rem] hidden sm:block z-30 ">
        <div className="  flex items-center justify-center text-1xl">
          <h1>
            <span>
               {t("t1")}
            </span>
              <br />
            <span>
           {t("t2")}
            </span>
           

           
           
          </h1>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-11 font-bold py-3 text-white bg-cyan-500 rounded-3xl md:w-[25rem] w-[20rem] block sm:hidden z-30">
          <div className="flex items-center justify-center md:text-2xl text-sm">
            <h1>
              take a short quiz to find out if <br /> online schooling is right
              for you
            </h1>
          </div>
        </div>
      </div>

      <div className="flex item center justify-center">
        <div className=" flex items-center justify-center md:w-[50rem] w-[30rem] h-[25rem]  px-16 md:px-1 ">
          <div className=" text-black rounded-3xl md:w-[50rem] w-[20rem] h-[25rem] bg-white ">
            {currentQuestion === 1 && (
              <div className="question-container mb-4 flex flex-col justify-between h-full">
                <div className="bg-[#061770] h-[25rem] md:w-[50rem] w-[20rem] rounded-3xl flex items-center justify-center">
                  <h5 className="flex justify-center text-center md:text-2xl text-sm px-10 font-bold text-white  ">
                    {t("one")}
                  </h5>
                </div>
                <div className="flex justify-center bg-white h-[15rem] rounded-b-3xl">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <button
                      onClick={() => nextQuestion(1, "1")}
                      className="bg-green-500 text-black px-9 py-2 rounded-full mx-2 focus:outline-none font-bold border-4 border-[#061770] "
                    >
                      Yes
                    </button>
                  </div>
                  <div className="flex items-center ml-4">
                    <button
                      onClick={() => nextQuestion(1, "0")}
                      className="bg-red-500 text-black px-9 py-2 rounded-full mx-2 focus:outline-none font-bold border-4 border-[#061770]"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}

            {currentQuestion === 2 && (
              <div className="question-container mb-4 flex flex-col justify-between h-full">
                <div className="bg-[#061770] h-[25rem] md:w-[50rem] w-[20rem] rounded-3xl flex items-center justify-center">
                  <h5 className="flex justify-center text-center md:text-2xl text-sm px-10 font-bold text-white  ">
                    {t("two")}
                  </h5>
                </div>
                <div className="flex justify-center bg-white h-[15rem] rounded-b-3xl">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <button
                      onClick={() => nextQuestion(2, "1")}
                      className="bg-green-500 text-black px-9 py-2 rounded-full mx-2 focus:outline-none font-bold border-4 border-[#061770] "
                    >
                      Yes
                    </button>
                  </div>
                  <div className="flex items-center ml-4">
                    <button
                      onClick={() => nextQuestion(2, "0")}
                      className="bg-red-500 text-black px-9 py-2 rounded-full mx-2 focus:outline-none font-bold border-4 border-[#061770]"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}

            {currentQuestion === 3 && (
              <div className="question-container mb-4 flex flex-col justify-between h-full">
                <div className="bg-[#061770] h-[25rem] md:w-[50rem] w-[20rem] rounded-3xl flex items-center justify-center">
                  <h5 className="flex justify-center text-center md:text-2xl text-sm px-10 font-bold text-white  ">
                    {t("tree")}
                  </h5>
                </div>
                <div className="flex justify-center bg-white h-[15rem] rounded-b-3xl">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <button
                      onClick={() => nextQuestion(3, "1")}
                      className="bg-green-500 text-black px-9 py-2 rounded-full mx-2 focus:outline-none font-bold border-4 border-[#061770] "
                    >
                      Yes
                    </button>
                  </div>
                  <div className="flex items-center ml-4">
                    <button
                      onClick={() => nextQuestion(3, "0")}
                      className="bg-red-500 text-black px-9 py-2 rounded-full mx-2 focus:outline-none font-bold border-4 border-[#061770]"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}

            {currentQuestion === 4 && (
              <div className="question-container mb-4 flex flex-col justify-between h-full">
                <div className="bg-[#061770] h-[25rem] md:w-[50rem] w-[20rem] rounded-3xl flex items-center justify-center">
                  <h5 className="flex justify-center text-center md:text-2xl text-sm px-10 font-bold text-white  ">
                    {t("four")}
                  </h5>
                </div>
                <div className="flex justify-center bg-white h-[15rem] rounded-b-3xl">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <button
                      onClick={() => nextQuestion(4, "1")}
                      className="bg-green-500 text-black px-9 py-2 rounded-full mx-2 focus:outline-none font-bold border-4 border-[#061770] "
                    >
                      Yes
                    </button>
                  </div>
                  <div className="flex items-center ml-4">
                    <button
                      onClick={() => nextQuestion(4, "0")}
                      className="bg-red-500 text-black px-9 py-2 rounded-full mx-2 focus:outline-none font-bold border-4 border-[#061770]"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}
            {currentQuestion === 5 && (
              // <div className="question-container bg-[#061770] h-[25rem] md:w-[20rem] w-[30rem] rounded-3xl">
              // <div className="bg-[#061770] h-[25rem] md:w-[50rem] w-[20rem] rounded-3xl flex items-center justify-center">
              //   <div className=" items-center justify-center m-auto">
              //     <div className="m-auto">
              //       <h5 className="text-lg font-semibold mb-2 flex items-center justify-center text-white pt-16">

              //         {t("Your_Results")}

              //       </h5>
              //     </div>

              //     <div className="">
              //       <p className="text-white font-bold mb-4 p-10 ">
              //         {getResult()}
              //       </p>
              //       <p className="bg-cyan-500 p-5 w-40 m-auto underline flex items-center justify-center cursor-pointer ">
              //         Talk with Us
              //       </p>
              //     </div>

              //     <div className="flex items-center justify-center">
              //       <button
              //         type="button"
              //         onClick={resetSurvey}
              //         className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded  transition  p-3"
              //       >
              //         {t("reset_survey")}
              //       </button>
              //     </div>
              //   </div>
              // </div>
              <div className="bg-[#061770] h-[25rem] md:w-[50rem] w-[20rem] rounded-3xl relative flex items-center justify-center z-10">
                <button
                  type="button"
                  onClick={resetSurvey}
                  className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded transition p-3 mt-4"
                >
                  {t("resetsurvey")}
                </button>

                <div className="items-center justify-center m-auto">
                  <div className="m-auto">
                    <h5 className="text-lg md:text-sm font-semibold mb-2 flex items-center justify-center text-white md:pt-16 pt-4">
                      {t("YourResults")}
                    </h5>
                  </div>

                  <div className="">
                    <p className="flex items-center justify-center text-white font-bold mb-4 md:p-10 p-2">
                      {getResult()}
                    </p>
                    <p className="bg-cyan-500 p-5 w-40 m-auto underline flex items-center justify-center cursor-pointer">
                      Talk with Us
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    {/* <!-- The reset button has been moved to the top right --> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}



 //  "t1":"Répondez à un petit quiz pour savoirsi",
  //   "t2":"lenseignement en ligne vous convient"

  // "t1":"take a short quize to find out if",
  // "t2":"online schooling is rightor you"