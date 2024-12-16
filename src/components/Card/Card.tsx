import { Fragment } from "react/jsx-runtime";

  function Card() {

    
    const cardStyle: React.CSSProperties = {
        backgroundColor: "#fff",
        padding: "1.5rem",
        borderRadius: "0.5rem",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
    };

    const cardTitleStyle: React.CSSProperties = {
        fontSize: "1.2rem",
        fontWeight: "600",
        marginBottom: "0.5rem",
    };

    const cardValueStyle: React.CSSProperties = {
        fontSize: "2rem",
        fontWeight: "700",
        color: "#3b82f6",
    };


return (
    <Fragment >
           <div style={{   display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",}}>
                <div style={cardStyle}>
                    <div style={cardTitleStyle}>Patients</div>
                    <div style={cardValueStyle}>120</div>
                </div>
                <div style={cardStyle}>
                    <div style={cardTitleStyle}>Volunteers</div>
                    <div style={cardValueStyle}>50</div>
                </div>
                <div style={cardStyle}>
                    <div style={cardTitleStyle}>Donations</div>
                    <div style={cardValueStyle}>₹1,50,000</div>
                </div>
                <div style={cardStyle}>
                    <div style={cardTitleStyle}>Events</div>
                    <div style={cardValueStyle}>5</div>
                </div>
            </div>
            
    </Fragment>
);
}
export default Card;