import React from "react";
import data from "../../degrees";

const Education = ({ education, handleEducation, index }) => {

  return (
    <div className="flex flex-col gap-3 items-center">
      <div>
        <label htmlFor="degree" className="text-white">
          Degree
        </label>
        <br />
        {/* <input
            type="text"
            id="degree"
            name='degree'
            value={education.degree}
            onChange={(e) => handleEducation(e, index)}
            className="w-72 rounded p-1 border border-black my-2"
          /> */}
        <select
          name="degree"
          id="degree"
          value={education.degree}
          onChange={(e) => handleEducation(e, index)}
          className="w-72 rounded p-1 border border-black my-2"
          required
        >
          <option value="">Select Degree</option>
          {
            data.map((degree, i) => (
              <option value={degree.degree}>{degree.degree}</option>
            ))
          }
        </select>
      </div>
      <div>
        <label htmlFor="special" className="text-white">
          Specialization
        </label>
        <br />
        <input
          type="text"
          id="special"
          name="special"
          value={education.special}
          onChange={(e) => handleEducation(e, index)}
          className="w-72 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="university" className="text-white">
          University
        </label>
        <br />
        <input
          type="text"
          id="university"
          name="university"
          value={education.university}
          onChange={(e) => handleEducation(e, index)}
          className="w-72 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="grade" className="text-white">
          Grade
        </label>
        <br />
        <input
          type="number"
          id="grade"
          name="grade"
          value={education.grade}
          onChange={(e) => handleEducation(e, index)}
          className="w-72 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="start" className="text-white">
          Start
        </label>
        <br />
        <input
          type="date"
          id="start"
          name="eduStart"
          min="1990-01-01"
          max="2024-12-31"
          value={education.eduStart}
          onChange={(e) => handleEducation(e, index)}
          className="w-72 rounded p-1 border border-black my-2"
        />
      </div>
      <div>
        <label htmlFor="end" className="text-white">
          End
        </label>
        <br />
        <input
          type="date"
          id="end"
          name="eduEnd"
          min="1991-01-01"
          max="2024-12-31"
          value={education.eduEnd}
          onChange={(e) => handleEducation(e, index)}
          className="w-72 rounded p-1 border border-black my-2"
        />
      </div>
    </div>
  );
};

export default Education;
