import React from "react";

const Work = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="job">Job Title</label>
        <br />
        <input
          type="text"
          id="job"
          className="w-64 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="company">Company</label>
        <br />
        <input
          type="text"
          id="company"
          className="w-64 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="loc">Location</label>
        <br />
        <input
          type="text"
          id="loc"
          className="w-64 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="start">Start</label>
        <br />
        <input
          type="date"
          id="start"
          className="w-64 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="end">End</label>
        <br />
        <input
          type="date"
          id="end"
          className="w-64 rounded p-1 border border-black my-2"
        />
      </div>
    </div>
  );
};

export default Work;
