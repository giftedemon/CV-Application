import DeleteForm from "./DeleteForm";

function JobForm({ value, handleChange, deleteJobSection, id }) {
    return (
        <form action="#" method="post" className="education-form">
            <p>
                <label htmlFor="companyName">Company Name:</label>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    onChange={(e) => handleChange(e, id)}
                    value={value.companyName ? value.companyName : ""}
                />
            </p>

            <p>
                <label htmlFor="positionTitle">Position Title:</label>
                <input
                    type="text"
                    id="positionTitle"
                    name="positionTitle"
                    onChange={(e) => handleChange(e, id)}
                    value={value.positionTitle ? value.positionTitle : ""}
                />
            </p>

            <p>
                <label htmlFor="responsibilities">Responsibilities:</label>
                <input
                    type="text"
                    id="responsibilities"
                    name="responsibilities"
                    onChange={(e) => handleChange(e, id)}
                    value={value.responsibilities ? value.responsibilities : ""}
                />
            </p>

            <p>
                <label htmlFor="jobStartDate">Start Date:</label>
                <input
                    type="date"
                    id="jobStartDate"
                    name="jobStartDate"
                    onChange={(e) => handleChange(e, id)}
                    value={value.jobStartDate ? value.jobStartDate : ""}
                />
            </p>

            <p>
                <label htmlFor="jobEndDate">End Date:</label>
                <input
                    type="date"
                    id="jobEndDate"
                    name="jobEndDate"
                    onChange={(e) => handleChange(e, id)}
                    value={value.jobEndDate ? value.jobEndDate : ""}
                />
            </p>

            <DeleteForm handleClick={deleteJobSection} id={id}></DeleteForm>
        </form>
    );
}

export default JobForm;
