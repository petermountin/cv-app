import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [generalInfoData, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [educationData, setEducationData] = useState([
    {
      school: "",
      degree: "",
      schoolAddress: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [experienceData, setExperienceData] = useState([
    {
      company: "",
      position: "",
      companyAddress: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleGeneralInfoSubmit = (data) => {
    console.log("submitted data in app", data);
    setGeneralInfo(data);
  };

  const handleEducationChange = (data) => {
    setEducationData(data);
  };

  const handleExperienceData = (data) => {
    setExperienceData(data);
  };

  return (
    <div id="mainContainer">
      <div id="left-side-container">
        <GeneralInfo
          data={generalInfoData}
          onSubmit={handleGeneralInfoSubmit}
        />
        <Education
          educationData={educationData}
          onEducationChange={handleEducationChange}
        />
        <Experience
          experienceData={experienceData}
          onHandleExperienceData={handleExperienceData}
        />
      </div>

      <Display data={generalInfoData} />
    </div>
  );
}

export default App;
