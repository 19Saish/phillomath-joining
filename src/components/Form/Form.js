import React, { useState } from "react";
import Work from "../Work/Work";
import Education from "../Education/Education";
import BasicInfo from "../BasicInfo/BasicInfo";
import { convertToCSV, downloadCSV, isValidPan } from "../../commonFunctions";
import PersonalInfo from "../PersonalInfo/PersonalInfo";

const Form = () => {
  const [work, setWork] = useState([
    { job: "", company: "", loc: "", workStart: "", workEnd: "" },
  ]);

  const [data, setData] = useState([
    {
      firstName: "",
      middleName: "",
      lastName: "",
      birthDate: "",
      email: "",
      mobile: "",
      aadhar: "",
      pan: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "",
      gender: "",
      martial: "",
    },
  ]);

  const [education, setEducation] = useState([
    {
      degree: "",
      special: "",
      university: "",
      grade: "",
      eduStart: "",
      eduEnd: "",
    },
  ]);

  const [isValidPanNo, setIsValidPanNo] = useState(false);

  const handleData = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleWork = (e, index) => {
    const { name, value } = e.target;
    setWork((prevWork) =>
      prevWork.map((entry, i) =>
        i === index ? { ...entry, [name]: value } : entry
      )
    );
  };

  const handleEducation = (e, index) => {
    const { name, value } = e.target;
    setEducation((prevWork) =>
      prevWork.map((entry, i) =>
        i === index ? { ...entry, [name]: value } : entry
      )
    );
  };

  const addWork = () => {
    setWork((prevWork) => [
      ...prevWork,
      { job: "", company: "", loc: "", workStart: "", workEnd: "" },
    ]);
  };

  const removeWork = (index) => {
    setWork((prevWork) => prevWork.filter((_, i) => i !== index));
  };

  const addEdu = () => {
    setEducation((prevWork) => [
      ...prevWork,
      { degree: "", special: "", university: "", eduStart: "", eduEnd: "" },
    ]);
  };

  const removeEdu = (index) => {
    setEducation((prevWork) => prevWork.filter((_, i) => i !== index));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isValidPan(data.pan) && data !== null && education !== null) {
      const csvData = convertToCSV(data, work, education);
      // downloadCSV(csvData, data);

      console.log(data, education);
      setIsValidPanNo(true);
    } else {
      console.log("Form is Invalid !!!");
    }
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-4 items-center"
      >
        <p className="text-2xl my-8 text-white">Basic Information</p>
        <div className="p-14 border border-black rounded bg-lightblue drop-shadow-md">
          <BasicInfo data={data} handleData={handleData} isValidPanNo={isValidPanNo}></BasicInfo>
        </div>
        <p className="text-2xl my-8 text-white">Personal Information</p>
        <div className="p-14 border border-black rounded drop-shadow-md bg-lightblue">
          <PersonalInfo data={data} handleData={handleData}></PersonalInfo>
        </div>
        <p className="text-2xl my-8 text-white">Education Details</p>
        <div className="w-64 flex flex-col items-center">
          {education.map((e, index) => (
            <div
              key={index}
              className={`flex flex-col items-end p-14 bg-lightblue border border-black rounded drop-shadow-md ${
                index !== 0 ? "mt-8" : ""
              }`}
            >
              <Education
                education={e}
                handleEducation={(e) => handleEducation(e, index)}
                index={index}
              />
              {education.length > 1 && (
                <button
                  type="button"
                  className="mt-4 w-24 border border-black rounded p-1"
                  onClick={() => removeEdu(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addEdu}
            className="bg-gold hover:bg-opacity-50 w-24 mt-10 p-2 font-semibold rounded"
          >
            Add
          </button>
        </div>

        <p className="text-2xl my-8 text-white">Work Experience</p>
        <div className="w-64 flex flex-col items-center">
          {work.map((w, index) => (
            <div
              key={index}
              className={`flex flex-col items-end p-14 bg-lightblue border border-black rounded drop-shadow-md ${
                index !== 0 ? "mt-8" : ""
              }`}
            >
              <Work
                work={w}
                handleChange={(e) => handleWork(e, index)}
                index={index}
              />
              {work.length > 1 && (
                <button
                  type="button"
                  className="mt-4 w-24 border border-black rounded p-1"
                  onClick={() => removeWork(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addWork}
            className="bg-gold hover:bg-opacity-50 w-24 mt-10 p-2 font-semibold rounded"
          >
            Add
          </button>
        </div>
        <div>
          <button className="bg-lightgold font-semibold hover:bg-opacity-50 w-64 my-8 p-2 rounded drop-shadow-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
