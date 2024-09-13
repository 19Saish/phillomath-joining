import React, { useState } from "react";
import Work from "../Work/Work";
import Education from "../Education/Education";

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

  const convertToCSV = (data, work, education) => {
    const csvRows = [];

    csvRows.push(
      "FirstName, MiddleName, LastName, birthDate, Email, Mobile, Aadhar, PAN, Address, City, State, Country, Gender, Marital, Job, Company, Location, WorkStart, WorkEnd, Degree, Specialization, University, Grade, EducationStart, EducationEnd"
    );

    const maxRows = Math.max(work.length, education.length);

    for (let i = 0; i < maxRows; i++) {
      const workeach = work[i] || {
        job: "",
        company: "",
        loc: "",
        workStart: "",
        workEnd: "",
      };
      const educationeach = education[i] || {
        degree: "",
        special: "",
        university: "",
        grade: "",
        eduStart: "",
        eduEnd: "",
      };

      csvRows.push(
        `${data.firstName}, ${data.middleName}, ${data.lastName}, ${data.birthDate}, ${data.email}, ${data.mobile}, ${data.aadhar}, ${data.pan}, ${data.address}, ${data.city}, ${data.state}, ${data.country}, ${data.gender}, ${data.martial}, ${workeach.job}, ${workeach.company}, ${workeach.loc}, ${workeach.workStart}, ${workeach.workEnd}, ${educationeach.degree}, ${educationeach.special}, ${educationeach.university}, ${educationeach.grade}, ${educationeach.eduStart}, ${educationeach.eduEnd}`
      );
    }

    return csvRows.join("\n");
  };

  const downloadCSV = (csvData) => {
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", `${data.firstName} ${data.lastName}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const csvData = convertToCSV(data, work, education);
    // downloadCSV(csvData);

    // console.log(work[0].job);
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-3 items-center"
      >
        <p className="text-2xl">Basic Information</p>
        <div>
          <label htmlFor="first">First Name</label>
          <br />
          <input
            type="text"
            id="first"
            value={data.firstName}
            name="firstName"
            onChange={handleData}
            className="w-64 rounded p-1 border border-black my-2"
            required
          />
        </div>
        <div>
          <label htmlFor="middle">Middle Name</label>
          <br />
          <input
            type="text"
            id="middle"
            value={data.middleName}
            name="middleName"
            onChange={handleData}
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
        <div>
          <label htmlFor="last">Last Name</label>
          <br />
          <input
            type="text"
            id="last"
            value={data.lastName}
            name="lastName"
            onChange={handleData}
            className="w-64 rounded p-1 border border-black my-2"
            required
          />
        </div>
        <div>
          <label htmlFor="birth">Birth Date</label>
          <br />
          <input
            type="date"
            id="birth"
            value={data.birthDate}
            name="birthDate"
            onChange={handleData}
            className="w-64 rounded p-1 border border-black my-2"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            value={data.email}
            name="email"
            onChange={handleData}
            className="w-64 rounded p-1 border border-black my-2"
            required
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile No</label>
          <br />
          <input
            type="number"
            id="mobile"
            value={data.mobile}
            name="mobile"
            onChange={handleData}
            maxLength={10}
            className="w-64 rounded p-1 border border-black my-2"
            required
          />
        </div>
        <div>
          <label htmlFor="aadhar">Aadhar No</label>
          <br />
          <input
            type="number"
            id="aadhar"
            value={data.aadhar}
            name="aadhar"
            onChange={handleData}
            maxLength={12}
            className="w-64 rounded p-1 border border-black my-2"
            required
          />
        </div>
        <div>
          <label htmlFor="pan">PAN Card No</label>
          <br />
          <input
            type="text"
            id="pan"
            value={data.pan}
            name="pan"
            onChange={handleData}
            className="w-64 rounded p-1 border border-black my-2"
            required
          />
        </div>
        <p className="text-2xl">Personal Information</p>
        <div>
          <label htmlFor="address">Address</label>
          <br />
          <input
            type="text"
            id="address"
            value={data.address}
            name="address"
            onChange={handleData}
            className="w-64 rounded p-1 border border-black my-2"
            required
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <br />
          <input
            type="text"
            id="city"
            value={data.city}
            name="city"
            onChange={handleData}
            className="w-64 rounded p-1 border border-black my-2"
            required
          />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <br />
          <select
            name="state"
            id="state"
            value={data.state}
            onChange={handleData}
            className="w-64 rounded p-1 border border-black my-2"
            required
          >
            <option value="">Select your State</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <br />
          <select
            name="country"
            id="country"
            value={data.country}
            onChange={handleData}
            className="w-64 rounded p-1 border border-black my-2"
            required
          >
            <option value="">Select your Country</option>
            <option value="India">India</option>
          </select>
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <br />
          <div className="w-64 flex gap-10 mt-2">
            <div className="flex justify-center">
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                onChange={handleData}
                checked={data.gender === "male"}
                value="male"
                name="gender"
                id="male"
                className="mx-2"
                required
              />
            </div>
            <div className="flex justify-center">
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                onChange={handleData}
                checked={data.gender === "female"}
                value="female"
                name="gender"
                id="female"
                className="mx-2"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="marital">Marital Status</label>
          <br />
          <select
            name="martial"
            id="marital"
            value={data.martial}
            onChange={handleData}
            className="w-64 rounded p-1 border border-black my-2"
          >
            <option value="">Select your Marital Status</option>
            <option value="married">Married</option>
            <option value="unmarried">Unmarried</option>
            <option value="single">Single</option>
          </select>
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
