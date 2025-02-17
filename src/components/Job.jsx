import JobForm from "./JobForm";
import AddForm from "./AddForm";

function Job({ value, handleChange, deleteJobSection, addJobSection }) {
    const headers = Object.keys(value);
    return (
        <div className="education-section">
            <h2>Job experience</h2>
            {headers.map((el) => {
                return (
                    <JobForm
                        key={value[el].id}
                        id={value[el].id}
                        handleChange={handleChange}
                        deleteJobSection={deleteJobSection}
                        value={value[el]}
                    ></JobForm>
                );
            })}
            <AddForm clickHandle={addJobSection} text={"Add job"}></AddForm>
        </div>
    );
}

export default Job;
