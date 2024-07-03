import CustomInput from "@/components/shared/custom-input";
import React from "react";
import ProfileDetailInput from "./profile-detail-input";
import { countriesAndRegions } from "@/utils/country-data";
import { BioEditor } from "./bio-editor";

const page = () => {
  return (
    <form>
      <div>
        <ProfileDetailInput
          required={true}
          hasDropdown={false}
          placeholder="Full Name"
          name="fullname"
          type="string"
          labelText="Full name"
        />
      </div>
      <div className="mt-4">
        <ProfileDetailInput
          required={true}
          hasDropdown={true}
          placeholder="select an option"
          name="country"
          type="string"
          options={countriesAndRegions}
          labelText="Country"
        />
      </div>
      <div className="mt-4">
        <ProfileDetailInput
          required={true}
          hasDropdown={false}
          placeholder="e.g. Senior React Native Developer"
          name="fullname"
          type="string"
          labelText="Professional title"
        />
      </div>
      <div className="mt-4">
        <label
          className="block text-black text-lg font-[500]"
          htmlFor="description"
        >
          Bio <span className="text-red-alert">*</span>
        </label>
        <BioEditor name="bio" labelText="Bio" />
      </div>
    </form>
  );
};

export default page;
