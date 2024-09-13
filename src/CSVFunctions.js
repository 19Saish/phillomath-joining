export const downloadCSV = (csvData, data) => {
  const blob = new Blob([csvData], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("hidden", "");
  a.setAttribute("href", url);
  a.setAttribute("download", `${data.firstName} ${data.lastName}.csv`);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};


export const convertToCSV = (data, work, education) => {
    const csvRows = [];

    csvRows.push(
      "FirstName, MiddleName, LastName, birthDate, Email, Mobile, Aadhar, PAN, Address, City, State, Country, Gender, Marital, Job, Company, Location, WorkStart, WorkEnd, Degree, Specialization, University, Grade, EducationStart, EducationEnd"
    );

    const maxRows = Math.max(work.length, education.length);

    for (let i = 0; i < maxRows; i++) {
      const workeach = work[i] || {
        job: "",
        company: "",
        loc: "",
        workStart: "",
        workEnd: "",
      };
      const educationeach = education[i] || {
        degree: "",
        special: "",
        university: "",
        grade: "",
        eduStart: "",
        eduEnd: "",
      };

      csvRows.push(
        `${data.firstName}, ${data.middleName}, ${data.lastName}, ${data.birthDate}, ${data.email}, ${data.mobile}, ${data.aadhar}, ${data.pan}, ${data.address}, ${data.city}, ${data.state}, ${data.country}, ${data.gender}, ${data.martial}, ${workeach.job}, ${workeach.company}, ${workeach.loc}, ${workeach.workStart}, ${workeach.workEnd}, ${educationeach.degree}, ${educationeach.special}, ${educationeach.university}, ${educationeach.grade}, ${educationeach.eduStart}, ${educationeach.eduEnd}`
      );
    }

    return csvRows.join("\n");
  };