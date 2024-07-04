import CustomInput from "@/components/shared/custom-input";
import React from "react";
import ProfileDetailInput from "./profile-detail-input";
import { countriesAndRegions } from "@/utils/country-data";
import { BioEditor } from "./bio-editor";
import ImageUploadInput from "@/components/shared/image-upload-input";

const page = () => {
  return (
    <form className="">
      <h1 className="text-xl font-[600]">Base Information:</h1>
      <div className="mt-4">
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
      <div className="mt-4">
        <ProfileDetailInput
          required={true}
          hasDropdown={false}
          placeholder="e.g. Android, Kotlin, NDK"
          name="fullname"
          type="string"
          labelText="Skills"
        />
        <p className="mt-1 text-sm text-gray-700">
          Input minimum 3 skills relevent to your experiece.
        </p>
      </div>
      <div className="mt-8">
        <ImageUploadInput title="Avatar" />
      </div>
      <h1 className="mt-8 text-xl font-[600]">Contact Information:</h1>
      <hr className="my-4"/>
      <div className="grid grid-cols-2 gap-4">
      <div className='mt-4'>
        <ProfileDetailInput
          required={false}
          hasDropdown={false}
          placeholder="https://"
          name="website"
          type="string"
          labelText="Website"
        />
      </div>
      <div className='mt-4'>
        <ProfileDetailInput
          required={false}
          hasDropdown={false}
          placeholder="https://"
          name="portfolio"
          type="string"
          labelText="Portfolio"
        />
      </div>
      <div className='mt-4'>
        <ProfileDetailInput
          required={false}
          hasDropdown={false}
          placeholder="https://"
          name="github"
          type="string"
          labelText="Github"
        />
      </div>
      <div className='mt-4'>
        <ProfileDetailInput
          required={false}
          hasDropdown={false}
          placeholder="https://"
          name="stackoverflow"
          type="string"
          labelText="Stackoverflow"
        />
      </div>
      <div className='mt-4'>
        <ProfileDetailInput
          required={false}
          hasDropdown={false}
          placeholder="https://"
          name="linkedin"
          type="string"
          labelText="LinkedIn"
        />
      </div>
      <div className='mt-4'>
        <ProfileDetailInput
          required={false}
          hasDropdown={false}
          placeholder="https://"
          name="twitter"
          type="string"
          labelText="Twitter"
        />
        </div>
        </div>
    </form>
  );
};

export default React.memo(page);
