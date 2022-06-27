import React from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

function ScrollBar({ data, bodyPart, setBodyPart }) {
  return (
    <ScrollMenu>
      {data.map((item) => (
        <div
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          style={{ margin: "0 40px" }}
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </div>
      ))}
    </ScrollMenu>
  );
}

export default ScrollBar;
