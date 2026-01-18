const Message = ({ text, sender }) => {
  return (
    <div
      style={{
        textAlign: sender === "user" ? "right" : "left",
        margin: "8px 0",
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "8px 12px",
          borderRadius: "8px",
          backgroundColor: sender === "user" ? "#2563eb" : "#e5e7eb",
          color: sender === "user" ? "white" : "black",
          maxWidth: "70%",
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default Message;
