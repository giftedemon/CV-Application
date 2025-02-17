import "../styles/addform.css";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

function AddForm({ text, clickHandle }) {
    return (
        <button type="button" onClick={clickHandle} className="addButton">
            <Icon path={mdiPlus} size={1.25} /> <span>{text}</span>
        </button>
    );
}

export default AddForm;
