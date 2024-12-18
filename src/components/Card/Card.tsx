import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const cardData = [
    { title: "Inventory", value: "5", route: "/inventory" },

  { title: "Patients", value: "120", route: "/patients" },
  { title: "Volunteers", value: "50", route: "/volunteers" },
  { title: "Donations", value: "₹1,50,000", route: "/donations" },
];

function Card() {
  const navigate = useNavigate();

  const cardContainerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    cursor: "pointer",
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

 

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  const handleRippleEffect = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const ripple = document.createElement("span");
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = "ripple";

    target.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <Fragment>
      <div style={cardContainerStyle}>
        {cardData.map((card, index) => (
          <div
            key={index}
            style={cardStyle}
            onClick={(e) => {
              handleRippleEffect(e);
              handleCardClick(card.route);
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#f3f4f6")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#fff")
            }
          >
            <div style={cardTitleStyle}>{card.title}</div>
            <div style={cardValueStyle}>{card.value}</div>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
          .ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            background-color: rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </Fragment>
  );
}

export default Card;
