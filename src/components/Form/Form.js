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

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedWork = [...work];
    updatedWork[index][name] = value;
    setWork(updatedWork);
  };

  const handleEducation = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    setEducation(updatedEducation);
  };

  const addWork = () => {
    setWork([
      ...work,
      { job: "", company: "", loc: "", workStart: "", workEnd: "" },
    ]);
  };

  const removeWork = (index) => {
    const updatedWork = work.filter((_, i) => i !== index);
    setWork(updatedWork);
  };

  const addEdu = () => {
    setEducation([
      ...education,
      { degree: "", special: "", university: "", eduStart: "", eduEnd: "" },
    ]);
  };

  const removeEdu = (index) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(work);
    console.log(education);
  };

  const convertToCSV = (data) => {
    const csvRows = [];
    
    // Headers (keys)
    const headers = Object.keys(data);
    csvRows.push(headers.join(","));

    // Values (data)
    const values = Object.values(data);
    csvRows.push(values.join(",")); 

    return csvRows.join("\n");
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
              <Work work={w} handleChange={handleChange} index={index} />
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
                handleEducation={handleEducation}
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
