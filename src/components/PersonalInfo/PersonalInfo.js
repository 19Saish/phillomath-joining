import React from 'react'

const PersonalInfo = ({data, handleData}) => {
  return (
    <div className='flex flex-col gap-4'>
        <div>
          <label htmlFor="address1" className="text-white">Address Line 1</label>
          <br />
          <input
            type="text"
            id="address1"
            value={data.address1}
            name="address1"
            onChange={handleData}
            className="w-72 rounded p-1 border border-black my-2"
            required
          />
        </div>
        <div>
          <label htmlFor="address2" className="text-white">Address Line 2</label>
          <br />
          <input
            type="text"
            id="address2"
            value={data.address2}
            name="address2"
            onChange={handleData}
            className="w-72 rounded p-1 border border-black my-2"
            required
          />
        </div>
        <div>
          <label htmlFor="city" className="text-white">City</label>
          <br />
          <input
            type="text"
            id="city"
            value={data.city}
            name="city"
            onChange={handleData}
            className="w-72 rounded p-1 border border-black my-2"
            required
          />
        </div>
        <div>
          <label htmlFor="state" className="text-white">State</label>
          <br />
          <select
            name="state"
            id="state"
            value={data.state}
            onChange={handleData}
            className="w-72 rounded p-1 border border-black my-2"
            required
          >
            <option value="">Select your State</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>
        </div>
        <div>
          <label htmlFor="country" className="text-white">Country</label>
          <br />
          <select
            name="country"
            id="country"
            value={data.country}
            onChange={handleData}
            className="w-72 rounded p-1 border border-black my-2"
            required
          >
            <option value="">Select your Country</option>
            <option value="India">India</option>
          </select>
        </div>
        <div>
          <label htmlFor="gender" className="text-white">Gender</label>
          <br />
          <div className="w-72 flex gap-10 mt-4 mb-2">
            <div className="flex justify-center">
              <label htmlFor="male" className="text-white">Male</label>
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
              <label htmlFor="female" className="text-white">Female</label>
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
          <label htmlFor="marital" className="text-white">Marital Status</label>
          <br />
          <select
            name="martial"
            id="marital"
            value={data.martial}
            onChange={handleData}
            className="w-72 rounded p-1 border border-black my-2"
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

export default PersonalInfo