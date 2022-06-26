import React from "react";

function ScrollBar({ data, bodyPart, setBodyPart }) {
  return (
    <section>
      {data.map((item) => (
        <p key={item.id || item} title={item.id || item}>
          {item}
        </p>
      ))}
    </section>
  );
}

export default ScrollBar;
