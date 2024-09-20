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

 const address = data?.address1?.replace(/,/g, '') + " " + data?.address2?.replace(/,/g, '')
  console.log(address);
  

  csvRows.push(
    "FirstName, MiddleName, LastName, birthDate, Email, Mobile, Aadhar, PAN, Address, City, State, Country, Gender, Marital, Degree, Specialization, University, Grade, EducationStart, EducationEnd, Job, Company, Location, WorkStart, WorkEnd"
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
      `${data.firstName}, ${data.middleName}, ${data.lastName}, ${data.birthDate}, ${data.email}, ${data.mobile}, ${data.aadhar}, ${data.pan}, ${address}, ${data.city}, ${data.state}, ${data.country}, ${data.gender}, ${data.martial}, ${educationeach.degree}, ${educationeach.special}, ${educationeach.university}, ${educationeach.grade}, ${educationeach.eduStart}, ${educationeach.eduEnd}, ${workeach.job}, ${workeach.company}, ${workeach.loc}, ${workeach.workStart}, ${workeach.workEnd} `
    );
  }

  return csvRows.join("\n");
};


export const isValidPan = (panNo) => {
  const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

  if(panPattern.test(panNo)){
    return true;
  }else{
    return false;
  }

}