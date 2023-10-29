"use client";
import React, { useState } from "react";
import css from "./App.css";
import teamMembers from "app/management.js";
import TeamCard from "./TeamCard.tsx";
export default function App() {
  const [currentMember, setcurrentMember] = useState("Finance Team Member");
  function setDisplay(current) {
    setcurrentMember(current.target.name);
    // console.log(currentMember);
  }
  function NavItem(props) {
    var teamName;
    if (props.name.includes("Member")) {
      teamName = props.name.replace("Member", "");
    } else teamName = props.name;
    function setDisplay() {
      setcurrentMember(props.name);
      console.log(props.name);
    }
    return (
      <>
        <div className="side-nav-item" onClick={setDisplay}>
          <p>{teamName}</p>
          <hr />
        </div>
      </>
    );
  }
  function teamName(current) {
    var teamName;
    if (current.includes("Member")) {
      teamName = current.replace("Member", "");
    } else teamName = current;
    return teamName;
  }
  return (
    <div className="main-container">
    <div className="side-nav">
        {Object.entries(teamMembers).map(([key, value]) => (
          <NavItem
            key={key}
            name={key}
          />
        ))}
      </div>
      <div className="details">
        <h1 className="text-3xl mb-1">{teamName(currentMember)}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum
          saepe animi explicabo tempora minima modi tempore eligendi voluptas
          provident at rerum ducimus eaque, dolorem velit quo vitae quam magni.
        </p>
        <h2 className="text-2xl font-semibold mt-1 mb-1">Members</h2>
        <div className="member-cards">
          {console.log(currentMember)}
          {teamMembers[currentMember].map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
