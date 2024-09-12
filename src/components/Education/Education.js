import React from 'react'

const Education = ({education, handleEducation, index}) => {
  return (
    <div className="flex flex-col gap-3 items-center">
        <div>
          <label htmlFor="degree">Degree</label>
          <br />
          <input
            type="text"
            id="degree"
            name='degree'
            value={education.degree}
            onChange={(e) => handleEducation(e, index)}
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
        <div>
          <label htmlFor="special">Specialization</label>
          <br />
          <input
            type="text"
            id="special"
            name='special'
            value={education.special}
            onChange={(e) => handleEducation(e, index)}
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
        <div>
          <label htmlFor="university">University</label>
          <br />
          <input
            type="text"
            id="university"
            name='university'
            value={education.university}
            onChange={(e) => handleEducation(e, index)}
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
        <div>
          <label htmlFor="grade">Grade</label>
          <br />
          <input
            type="number"
            id="grade"
            name='grade'
            value={education.grade}
            onChange={(e) => handleEducation(e, index)}
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
        <div>
          <label htmlFor="start">Start</label>
          <br />
          <input
            type="date"
            id="start"
            name='eduStart'
            value={education.eduStart}
            onChange={(e) => handleEducation(e, index)}
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
        <div>
          <label htmlFor="end">End</label>
          <br />
          <input
            type="date"
            id="end"
            name='eduEnd'
            value={education.eduEnd}
            onChange={(e) => handleEducation(e, index)}
            className="w-64 rounded p-1 border border-black my-2"
          />
        </div>
    </div>
  )
}

export default Education