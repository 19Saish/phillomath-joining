import React from "react";

const Work = ({work, handleChange, index}) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="job" className="text-white">Job Title</label>
        <br />
        <input
          type="text"
          id="job"
          name="job"
          value={work?.job || ""}
          onChange={(event) => handleChange(event, index)}
          className="w-72 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="company" className="text-white">Company</label>
        <br />
        <input
          type="text"
          id="company"
          name="company"
          value={work?.company || ""}
          onChange={(e) => handleChange(e, index)}
          className="w-72 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="loc" className="text-white">Location</label>
        <br />
        <input
          type="text"
          id="loc"
          name="loc"
          value={work?.loc || ""}
          onChange={(e) => handleChange(e, index)}
          className="w-72 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="start" className="text-white">Start</label>
        <br />
        <input
          type="date"
          id="start"
          name="workStart"
          value={work?.workStart || ""}
          onChange={(e) => handleChange(e, index)}
          className="w-72 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="end" className="text-white">End</label>
        <br />
        <input
          type="date"
          id="end"
          name="workEnd"
          value={work?.workEnd || ""}
          onChange={(e) => handleChange(e, index)}
          className="w-72 rounded p-1 border border-black my-2"
        />
      </div>
    </div>
  );
};

export default Work;
