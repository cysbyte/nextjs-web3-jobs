import React from "react";
import Toggle from "../shared/Toggle";

const skills = [
  "All Jobs",
  "React Native",
  "Flutter",
  "Android",
  "Java",
  "Kotlin",
  "Gradle",
  "iOS",
  "Swift",
  "Objective-C",
  "Swift UI",
  "Cocoa Touch",
  "Xamarin",
  "Ionic",
  "Unity",
  "Unreal",
  "Cocos2d-x",
  "Godot",
  "GameMaker",
  "Non-Tech",
  "Design",
  "Marketing",
  "Customer Support",
  "Product",
  "Sales",
];

const Search = () => {
  return (
    <div className="bg-white pt-32 px-40 h-auto">
      <div className="flex gap-10 justify-between items-center">
        <div className="flex gap-5 flex-1">
          <div className="w-full h-auto flex items-center border rounded-md focus-within:border-purple-500 focus-within:shadow-lg overflow-hidden">
            <svg
              className="mx-3 opacity-50"
              width="17"
              height="17"
              viewBox="0 0 40 40"
            >
              {" "}
              <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>{" "}
            </svg>
            <input
              className="appearance-none focus:outline-none w-full py-4 text-[gray-700] leading-tight placeholder-gray-500 placeholder:text-lg placeholder:pl-0 px-0 shadow-slate-900"
              type="text"
              placeholder="Job Roles, Tags"
            />
          </div>

          <div className="w-full h-auto flex items-center border rounded-md focus-within:border-purple-500 focus-within:shadow-lg overflow-hidden">
            <svg
              className="mx-3 opacity-50"
              width="17"
              height="17"
              viewBox="0 0 14 20"
            >
              <path d="M7 0C3.13.0.0 3.13.0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5C5.62 9.5 4.5 8.38 4.5 7S5.62 4.5 7 4.5 9.5 5.62 9.5 7 8.38 9.5 7 9.5z"></path>
            </svg>
            <input
              className="appearance-none focus:outline-none w-full py-4 text-gray-700 leading-tight placeholder-gray-500 placeholder:text-lg placeholder:pl-0 px-0"
              type="text"
              placeholder="Location"
            />
          </div>
        </div>
        <Toggle />
      </div>
      <div className="border rounded-md bg-slate-50/80 mt-10 h-auto flex flex-wrap items-center justify-center gap-3 px-5 py-10">
        {skills.map((skill) => (
          <button
            className="border px-4 py-2 rounded-md border-gray-500 text-gray-700 bg-white hover:bg-purple-500 hover:text-white hover:border-purple-50 transition-all"
            key={skill}
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Search;
