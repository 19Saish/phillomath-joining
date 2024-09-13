import React from 'react'

const BasicInfo = ({data, handleData}) => {
  return (
    <div className='flex flex-col gap-4'>
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
    </div>
  )
}

export default BasicInfo