import React from "react";
function Child(data) {
return(
    <>
    <h3> Name: {data.name} </h3>
    <h3> Age:{data.age}</h3>
    </>
);
}
function parent() {
  return (
    <>
      <Child name="Vinotha" age={22} />
    </>
  );
}
export default parent;