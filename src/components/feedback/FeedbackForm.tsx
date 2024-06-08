import React from "react";
import CustomInput from "../shared/CustomInput";

const FeedbackForm = ({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) => {
  return (
    <form
      className={`fixed w-[550px] h-auto p-6 rounded-2xl bg-white border ${isOpen?'right-0 opacity-100':'-right-[550px] opacity-0'} top-[50%] -translate-y-[50%] z-20 duration-500 transition-all ease-out`}
    >
      <div className="relative">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-0 cursor-pointer"
          onClick={close}
        >
          <path
            d="M15 5L5 15"
            stroke="#636363"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M5 5L15 15"
            stroke="#636363"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <h1 className=" font-normal text-2xl">Send Feedback</h1>
        <p className="mt-2 text-gray-500">
          Please take a moment to share your feedback to help us improve
          <br />
          (e.g., report a problem or suggest an improvement etc.)
        </p>
        <div className="my-4">
          <CustomInput
            type="email"
            id="email"
            placeHolder="Your Email Address"
          />
          <textarea
            className="input-border mt-4 focus:outline-none focus:shadow-outline placeholder-gray-500 text-base"
            id="description"
            name="description"
            rows={7}
            //defaultValue={props.voice?props.voice.description:''}
            placeholder="Your Feedback..."
          />
        </div>
        <div className="flex justify-end gap-2">
          <div
            className="px-8 py-2 border border-blue-950 rounded-md text-blue-950"
            onClick={close}
          >
            Cancel
          </div>
          <div className="px-8 py-2 border border-blue-950 bg-blue-950 rounded-md text-white">
            Send
          </div>
        </div>
      </div>
    </form>
  );
};

export default React.memo(FeedbackForm);
