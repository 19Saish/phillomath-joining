import React from "react";

const BasicInfo = ({ data, handleData, isValidPanNo }) => {

  const currDate = new Date().toISOString().slice(0,10)

  
  
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="first" className="text-white">First Name</label>
        <br />
        <input
          type="text"
          id="first"
          value={data.firstName}
          name="firstName"
          onChange={handleData}
          className="w-72 rounded p-1 border border-black my-2"
          // required
        />
      </div>
      <div>
        <label htmlFor="middle" className="text-white">Middle Name</label>
        <br />
        <input
          type="text"
          id="middle"
          value={data.middleName}
          name="middleName"
          onChange={handleData}
          className="w-72 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="last" className="text-white">Last Name</label>
        <br />
        <input
          type="text"
          id="last"
          value={data.lastName}
          name="lastName"
          onChange={handleData}
          className="w-72 rounded p-1 border border-black my-2"
          // required
        />
      </div>
      <div>
        <label htmlFor="birth" className="text-white">Birth Date</label>
        <br />
        <input
          type="date"
          id="birth"
          value={data.birthDate}
          name="birthDate"
          max={currDate}
          onChange={handleData}
          className="w-72 rounded p-1 border border-black my-2"
          // required
        />
      </div>
      <div>
        <label htmlFor="email" className="text-white">Email</label>
        <br />
        <input
          type="email"
          id="email"
          value={data.email}
          name="email"
          onChange={handleData}
          className="w-72 rounded p-1 border border-black my-2"
          // required
        />
      </div>
      <div>
        <label htmlFor="mobile" className="text-white">Mobile No</label>
        <br />
        <input
          type="number"
          id="mobile"
          value={data.mobile}
          name="mobile"
          onChange={handleData}
          minLength="10"
          className="w-72 rounded p-1 border border-black my-2"
          // required
        />
      </div>
      <div>
        <label htmlFor="aadhar" className="text-white">Aadhar No</label>
        <br />
        <input
          type="number"
          id="aadhar"
          value={data.aadhar}
          name="aadhar"
          onChange={handleData}
          maxLength={12}
          className="w-72 rounded p-1 border border-black my-2"
          // required
        />
      </div>
      <div>
        <label htmlFor="pan" className="text-white">PAN Card No</label>
        <br />
        <input
          type="text"
          id="pan"
          value={data.pan}
          name="pan"
          onChange={handleData}
          maxLength='10'
          className={`w-72 rounded p-1 border border-black my-2 ${!isValidPanNo ? "border border-red-700 bg-red-300" : ""}`}
          // required
        />
      </div>
    </div>
  );
};

export default BasicInfo;
