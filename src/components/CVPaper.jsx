import "../styles/cvpaper.css";
import CVSection from "./CVSection";

function CVPaper({ educationsInfo, jobsInfo, personalInfo }) {
    const headersEducations = Object.keys(educationsInfo);
    const headersJobs = Object.keys(jobsInfo);

    return (
        <div className="container">
            <div className="header">
                <div className="full-name">
                    <span className="first-name">
                        {personalInfo.firstName || personalInfo.lastName
                            ? personalInfo.firstName
                            : "[Name]"}
                    </span>
                    <span> </span>
                    <span className="last-name">{personalInfo.lastName}</span>
                </div>
                <div className="contact-info">
                    <span className="email">Email: </span>
                    <span className="email-val">{personalInfo.email}</span>
                    <span className="separator"></span>
                    <span className="phone">Phone: </span>
                    <span className="phone-val">{personalInfo.phone}</span>
                </div>
            </div>
            <div className="details">
                <div className="section">
                    <div className="section__title">Education</div>
                    <div className="section__list">
                        {headersEducations.map((el) => {
                            return (
                                <CVSection
                                    key={educationsInfo[el].id}
                                    name={educationsInfo[el].schoolName}
                                    title={educationsInfo[el].studyTitle}
                                    startDate={educationsInfo[el].educationStartDate}
                                    endDate={educationsInfo[el].educationEndDate}
                                ></CVSection>
                            );
                        })}
                    </div>
                </div>
                <div className="section">
                    <div className="section__title">Experience</div>
                    <div className="section__list">
                        {headersJobs.map((el) => {
                            return (
                                <CVSection
                                    key={jobsInfo[el].id}
                                    name={jobsInfo[el].companyName}
                                    title={jobsInfo[el].positionTitle}
                                    startDate={jobsInfo[el].jobStartDate}
                                    endDate={jobsInfo[el].jobEndDate}
                                    desc={jobsInfo[el].responsibilities}
                                ></CVSection>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CVPaper;
