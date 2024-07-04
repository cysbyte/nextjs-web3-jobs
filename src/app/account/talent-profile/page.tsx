import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <article>
      <div className="text-lg">
        Create a <strong>Talent Profile</strong> to let employees find you.
      </div>
      <div className="my-10">
        <Link
          href="/account/talent-profile/create"
          className="py-3 px-10 text-start bg-deep-blue text-white rounded-md text-lg"
        >
          Create Proflie
        </Link>
      </div>

      <div className="text-lg">
        You can set your profile as <strong>public</strong> or{" "}
        <strong>private</strong>.
      </div>
    </article>
  );
};

export default React.memo(page);
