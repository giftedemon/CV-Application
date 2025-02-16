import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";

function DeleteForm({ handleClick, id }) {
    return (
        <button type="button" className="delete" onClick={() => handleClick(id)}>
            <Icon path={mdiTrashCanOutline} size={1.2} />
        </button>
    );
}

export default DeleteForm;
