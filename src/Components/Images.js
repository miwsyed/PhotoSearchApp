import React from "react";
import { Card, CardImg } from "reactstrap";

const Images = (props) => {
  const srcc = props.src;
  const altt = props.alt;

  return (
    <div>
      <Card
        style={{
          float: "left",
          width: "30%",
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <CardImg
          style={{ height: "60vh", width: "100%" }}
          src={srcc}
          alt={altt}
        />
      </Card>
    </div>
  );
};

export default Images;
