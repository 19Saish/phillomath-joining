import React, { useState } from "react";
import Work from "../Work/Work";
import Education from "../Education/Education";
import BasicInfo from "../BasicInfo/BasicInfo";
import { convertToCSV, downloadCSV } from "../../CSVFunctions";

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
      address: "",
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

  const handleData = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleWork = (e, index) => {
    const { name, value } = e.target;
    // const updatedWork = [...work];
    // const updatedWork = work.map((entry, i) =>
    //   i === index ? { ...entry, [name]: value } : entry
    // );
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
    // const updatedWork = work.filter((_, i) => i !== index);
    // setWork(updatedWork);
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
    const csvData = convertToCSV(data, work, education);
    downloadCSV(csvData, data);

    // console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-4 items-center"
      >
        <p className="text-2xl">Basic Information</p>
        <div>
          <BasicInfo data={data} handleData={handleData}></BasicInfo>
        </div>
        <p className="text-2xl">Work Experience</p>
        <div className="w-64 flex flex-col items-end">
          {work.map((w, index) => (
            <div key={index} className="flex flex-col items-end">
              <Work
                work={w}
                handleChange={(e) => handleWork(e, index)}
                index={index}
              />
              {work.length > 1 && (
                <button
                  type="button"
                  className="my-2 w-24 border border-black rounded p-1"
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
            className="bg-gray-500 hover:bg-opacity-50 w-24 my-3 p-1 rounded"
          >
            Add
          </button>
        </div>
        <p className="text-2xl">Education Details</p>
        <div className="w-64 flex flex-col items-end">
          {education.map((e, index) => (
            <div key={index} className="flex flex-col items-end">
              <Education
                education={e}
                handleEducation={(e) => handleEducation(e, index)}
                index={index}
              />
              {education.length > 1 && (
                <button
                  type="button"
                  className="my-2 w-24 border border-black rounded p-1"
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
            className="bg-gray-500 hover:bg-opacity-50 w-24 my-3 p-1 rounded"
          >
            Add
          </button>
        </div>
        <div>
          <button className="bg-gray-700 hover:bg-opacity-50 w-28 my-3 p-2 rounded text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
