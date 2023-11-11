import React from "react";
export default function NavItem(props) {
  var teamName;
  if (props.name.includes("Member")) {
    teamName = props.name.replace("Member", "");
  }
  else
  teamName = props.name;
  function setDisplay(current) {
    setcurrentMember(current.target.name);
    console.log(currentMember);
  }
  return (
    <>
      <div className="side-nav-item" onClick={setDisplay}>
        <p>{teamName}
          </p>
        <hr />
      </div>
    </>
  );
}
