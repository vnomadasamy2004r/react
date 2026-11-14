
import React from "react";

function Card(info) {
  return (
    <div style={{
      border: "2px solid black",
      padding: "20px",
      margin: "10px"
    }}>
      {info.children}
    </div>
  );
}

function Children() {
  return (
    <>
      <Card>
        <h3>Student Card</h3>
        <p>Name: Arun</p>
      </Card>

      <Card>
        <h3>Course Card</h3>
        <p>Course: React</p>
      </Card>
    </>
  );
}

export default Children;
