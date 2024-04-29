import React from "react";
import Toggle from "../shared/Toggle";

const Search = () => {
  return (
    <div className="bg-white py-40 px-40 h-screen">
      <div className="flex gap-10 justify-between items-center">
        <div className="flex gap-5 flex-1">
          <input
            className="input-border"
            type="text"
            placeholder="Job Roles, Tags"
          />
          <input className="input-border" type="text" placeholder="Location" />
        </div>
        <Toggle/>
      </div>
    </div>
  );
};

export default Search;
