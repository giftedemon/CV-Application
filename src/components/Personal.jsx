import "../styles/personal.css";

function Personal({ handleChange, value }) {
    return (
        <div className="general-section">
            <h2>General Information</h2>
            <form method="post" action="#">
                <p>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={handleChange}
                        value={value.firstName}
                    />
                </p>
                <p>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        onChange={handleChange}
                        value={value.lastName}
                    />
                </p>
                <p>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={value.email}
                    />
                </p>
                <p>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        onChange={handleChange}
                        value={value.phone}
                    />
                </p>
            </form>
        </div>
    );
}

export default Personal;
