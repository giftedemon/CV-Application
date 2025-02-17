import { useState } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Job from "./components/Job";
import CVPaper from "./components/CVPaper";

function App() {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const [educationsInfo, setEducationsInfo] = useState({});

    const [jobsInfo, setJobsInfo] = useState({});

    function handlePersonalInfo(e) {
        setPersonalInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleEducationInfo(e, id) {
        setEducationsInfo((prev) => {
            const newObj = { ...prev[id], [e.target.name]: e.target.value };
            return { ...prev, [id]: newObj };
        });
    }

    function addEducationSection() {
        const newId = crypto.randomUUID();
        setEducationsInfo((prev) => ({ ...prev, [newId]: { id: newId } }));
    }

    function deleteEducationSection(id) {
        setEducationsInfo((prev) => {
            delete prev[id];
            return { ...prev };
        });
    }

    function handleJobInfo(e, id) {
        setJobsInfo((prev) => {
            const newObj = { ...prev[id], [e.target.name]: e.target.value };
            return { ...prev, [id]: newObj };
        });
    }

    function addJobSection() {
        const newId = crypto.randomUUID();
        setJobsInfo((prev) => ({ ...prev, [newId]: { id: newId } }));
    }

    function deleteJobSection(id) {
        setJobsInfo((prev) => {
            delete prev[id];
            return { ...prev };
        });
    }

    return (
        <main>
            <h1>CV Application</h1>
            <div className="cv">
                <div className="cv-maker">
                    <Personal handleChange={handlePersonalInfo} value={personalInfo}></Personal>
                    <Education
                        handleChange={handleEducationInfo}
                        value={educationsInfo}
                        addEducationSection={addEducationSection}
                        deleteEducationSection={deleteEducationSection}
                    ></Education>
                    <Job
                        handleChange={handleJobInfo}
                        value={jobsInfo}
                        addJobSection={addJobSection}
                        deleteJobSection={deleteJobSection}
                    ></Job>
                </div>
                <div className="cv-paper">
                    <CVPaper
                        educationsInfo={educationsInfo}
                        jobsInfo={jobsInfo}
                        personalInfo={personalInfo}
                    ></CVPaper>
                </div>
            </div>
        </main>
    );
}

export default App;
