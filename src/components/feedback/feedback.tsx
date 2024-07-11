'use client';

import React, { useState } from "react";
import Portal from "../layout/portal";
import FeedbackForm from "./feedback-form";

const Feedback = () => {

  const [isOpen, setIsOpen] = useState(false)

  const close = () => {
    setIsOpen(false)
    console.log('close')
  }
  
  return (
    <section>
      <Portal elementId="#feedbackPortal">
        <div className="hidden md:block fixed top-[50%] -translate-y-[50%] -right-10 hover:-right-9 transition-all z-10 hover:scale-[1.02]">
          <button className="bg-blue-800 hover:bg-blue-700 text-white font-normal py-2 px-5 rounded-b rotate-90 transition-all"
          onClick={()=>setIsOpen(true)}
          >
            Feedback
          </button>
        </div>
        <FeedbackForm isOpen={isOpen} close={close} />
      </Portal>
    </section>
  );
};

export default React.memo(Feedback);
