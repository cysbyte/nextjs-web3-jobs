"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { FormContext } from "./FormContext";

const countriesAndRegions = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (formerly Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const continents = [
  'WorldWide',
  'Africa',
  'Arab',
  'Asia',
  'Australia',
  'EMEA',
  'Europe',
  'North America',
  'South America',
]

interface IProps {
  id: string;
}

const PreferredLocationsDropdown = (props: IProps) => {
  const { state } = useContext(FormContext)
   
  const [options, setOptions] = useState(countriesAndRegions);
  const [isOptionsShowing, setIsOptionsShowing] = useState(false);
  const [isCancelShowing, setIsCancelShowing] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);


  const inputRef = useRef<HTMLInputElement>(null!);

  const handleCancelClick = () => {
    setIsCancelShowing(false);
    setSelectedLocations([]);
  };

  useEffect(() => {
    setOptions(state.locationType === 'Remote' ?
      [...continents, ...countriesAndRegions] : countriesAndRegions)
  }, [state.locationType]);

  return (
    <div className="relative group w-auto h-auto">
      <div className="group w-full h-auto flex items-center border rounded-md px-2 mt-2 focus-within:border-purple-500 focus-within:shadow-lg hover:border-purple-500 hover:shadow-lg overflow-hidden">
        <div className="flex gap-2 mr-2">
          {selectedLocations.map((item, index) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2 px-2 py-1 bg-gray-200 rounded-md"
            >
              <p className="text-center ml-1">{item}</p>
              <svg
                height="20"
                width="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="fill-gray-800 cursor-pointer"
                onClick={() => {
                  const newSelectedLocations = selectedLocations.filter(
                    (location) => location !== item
                  );
                  setSelectedLocations(newSelectedLocations);
                  if (newSelectedLocations.length === 0) {
                    setIsCancelShowing(false);
                  }
                }}
              >
                <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
              </svg>
            </div>
          ))}
        </div>
        <input
          ref={inputRef}
          className="appearance-none focus:outline-none w-full py-4 text-[gray-700] leading-tight placeholder-gray-400 placeholder:text-base placeholder:pl-0 px-0 shadow-slate-900"
          type="text"
          id={props.id}
          placeholder="select multiple locations"
          onClick={() => setIsOptionsShowing(!isOptionsShowing)}
          onBlur={() => setIsOptionsShowing(false)}
        />
        {isCancelShowing && (
          <div className="w-auto h-auto" onClick={handleCancelClick}>
            <svg
              height="20"
              width="20"
              viewBox="0 0 20 20"
              aria-hidden="true"
              focusable="false"
              className="fill-gray-400 hover:fill-gray-800 mr-4 transition-all"
            >
              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
            </svg>
          </div>
        )}

        <div
          className="w-auto h-auto"
          onClick={() => setIsOptionsShowing(!isOptionsShowing)}
        >
          <svg
            height="20"
            width="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            className="fill-gray-400 hover:fill-gray-800 transition-all"
          >
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
          </svg>
        </div>
      </div>
      {isOptionsShowing && (
        <div className="absolute max-h-96 overflow-auto z-50 mt-1 pt-0 flex w-[100%] flex-col bg-white py-1 px-4 rounded-md text-gray-800 shadow-xl">
          {options.map((item, index) => (
            <p
              key={item}
              className="my-1 block border-b border-gray-100 py-2 font-normal text-slate-700 hover:text-purple-500 hover:rounded-md md:mx-2 cursor-pointer transition-all"
              onMouseDown={(e: React.MouseEvent) => {
                e.preventDefault();
                setIsOptionsShowing(false);
                setIsCancelShowing(true);
                setSelectedLocations([...selectedLocations, item]);
                inputRef.current.placeholder = "";
                setOptions(options.filter((option) => option !== item));
              }}
            >
              {item}
            </p>
          ))}
        </div>
          )}    
      </div>
  );
};

export default PreferredLocationsDropdown;
