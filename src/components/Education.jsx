import EducationForm from "./EducationForm";
import AddForm from "./AddForm";

function Education({ handleChange, addEducationSection, value, deleteEducationSection }) {
    const headers = Object.keys(value);
    return (
        <div className="education-section">
            <h2>Educational experience</h2>
            {headers.map((el) => {
                return (
                    <EducationForm
                        key={value[el].id}
                        id={value[el].id}
                        handleChange={handleChange}
                        deleteEducationSection={deleteEducationSection}
                        value={value[el]}
                    ></EducationForm>
                );
            })}
            <AddForm clickHandle={addEducationSection} text={"Add education"}></AddForm>
        </div>
    );
}

export default Education;
