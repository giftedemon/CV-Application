function CVSection({ name, title, startDate, endDate, desc }) {
    function convertDate(d) {
        const date = new Date(d);
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedDate = date.toLocaleDateString("en-US", options);
        return formattedDate;
    }

    return (
        <div className="section__list-item">
            <div className="left">
                <div className="name">{name ? name : "[Name]"}</div>
                <div className="duration">
                    {startDate || endDate ? `${convertDate(startDate)} —` : "[Date]"}{" "}
                    {endDate ? convertDate(endDate) : ""}
                </div>
            </div>
            <div className="right">
                <div className="name">{title ? title : "[Title]"}</div>
                {desc ? <div className="desc">{desc}</div> : ""}
            </div>
        </div>
    );
}

export default CVSection;
