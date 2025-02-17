import DeleteForm from "./DeleteForm";

function EducationForm({ handleChange, value, id, deleteEducationSection }) {
    return (
        <form action="#" method="post" className="added-form">
            <p>
                <label htmlFor="schoolName">School Name:</label>
                <input
                    type="text"
                    id="schoolName"
                    name="schoolName"
                    onChange={(e) => handleChange(e, id)}
                    value={value.schoolName ? value.schoolName : ""}
                />
            </p>

            <p>
                <label htmlFor="studyTitle">Title of study:</label>
                <input
                    type="text"
                    id="studyTitle"
                    name="studyTitle"
                    onChange={(e) => handleChange(e, id)}
                    value={value.studyTitle ? value.studyTitle : ""}
                />
            </p>

            <p>
                <label htmlFor="educationStartDate">Start Date:</label>
                <input
                    type="date"
                    id="educationStartDate"
                    name="educationStartDate"
                    onChange={(e) => handleChange(e, id)}
                    value={value.educationStartDate ? value.educationStartDate : ""}
                />
            </p>

            <p>
                <label htmlFor="educationEndDate">End Date:</label>
                <input
                    type="date"
                    id="educationEndDate"
                    name="educationEndDate"
                    onChange={(e) => handleChange(e, id)}
                    value={value.educationEndDate ? value.educationEndDate : ""}
                />
            </p>
            <DeleteForm handleClick={deleteEducationSection} id={id}></DeleteForm>
        </form>
    );
}

export default EducationForm;
