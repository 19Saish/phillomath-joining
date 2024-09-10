import React from "react";
import Work from "../Work/Work";

const Form = () => {
  return (
    <div>
      <form action="" className="flex flex-col gap-3 items-center">
        <p className="text-2xl">Basic Information</p>
        <div>
          <label htmlFor="first">First Name</label>
          <br />
          <input
            type="text"
            id="first"
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
        <div>
          <label htmlFor="middle">Middle Name</label>
          <br />
          <input
            type="text"
            id="middle"
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
        <div>
          <label htmlFor="last">Last Name</label>
          <br />
          <input
            type="text"
            id="last"
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
        <div>
          <label htmlFor="birth">Birth Date</label>
          <br />
          <input
            type="date"
            id="birth"
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile No</label>
          <br />
          <input
            type="number"
            id="mobile"
            maxLength={10}
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
        <div>
          <label htmlFor="aadhar">Aadhar No</label>
          <br />
          <input
            type="number"
            id="aadhar"
            maxLength={12}
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
        <div>
          <label htmlFor="pan">PAN Card No</label>
          <br />
          <input
            type="text"
            id="pan"
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
        <p className="text-2xl">Personal Information</p>
        <div>
          <label htmlFor="address">Address</label>
          <br />
          <input
            type="text"
            id="address"
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <br />
          <input
            type="text"
            id="city"
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <br />
          <select
            name="state"
            id="state"
            className="w-64 rounded p-1 border border-black my-2"
          >
            <option value="Maharashtra">Maharashtra</option>
          </select>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <br />
          <select
            name="country"
            id="country"
            className="w-64 rounded p-1 border border-black my-2"
          >
            <option value="India">India</option>
          </select>
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <br />
          <div className="w-64 flex gap-10 mt-2">
            <div className="flex justify-center">
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="male" className="mx-2" />
            </div>
            <div className="flex justify-center">
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="female" className="mx-2" />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="marital">Marital Status</label>
          <br />
          <select
            name="martial"
            id="marital"
            className="w-64 rounded p-1 border border-black my-2"
          >
            <option value="married">Married</option>
            <option value="unmarried">Unmarried</option>
            <option value="single">Single</option>
          </select>
        </div>
        <p className="text-2xl">Work Experience</p>
        <div>
          <Work></Work>
        </div>
        <div className="flex justify-between my-4 w-64">
          <button className="bg-gray-500 hover:bg-opacity-50 w-24 p-2 rounded">
            Add
          </button>
          <button className="border border-gray-500 p-2 w-24 rounded">
            Delete
          </button>
        </div>
        <p className="text-2xl">Education Details</p>
        <div></div>
      </form>
    </div>
  );
};

export default Form;
