import React from "react";

const Work = ({work, handleChange, index}) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="job">Job Title</label>
        <br />
        <input
          type="text"
          id="job"
          name="job"
          value={work.job}
          onChange={(e) => handleChange(e, index)}
          className="w-64 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="company">Company</label>
        <br />
        <input
          type="text"
          id="company"
          name="company"
          value={work.company}
          onChange={(e) => handleChange(e, index)}
          className="w-64 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="loc">Location</label>
        <br />
        <input
          type="text"
          id="loc"
          name="loc"
          value={work.loc}
          onChange={(e) => handleChange(e, index)}
          className="w-64 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="start">Start</label>
        <br />
        <input
          type="date"
          id="start"
          name="workStart"
          value={work.workStart}
          onChange={(e) => handleChange(e, index)}
          className="w-64 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="end">End</label>
        <br />
        <input
          type="date"
          id="end"
          name="workEnd"
          value={work.workEnd}
          onChange={(e) => handleChange(e, index)}
          className="w-64 rounded p-1 border border-black my-2"
        />
      </div>
    </div>
  );
};

export default Work;
