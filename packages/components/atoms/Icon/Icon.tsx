import React, { FC } from "react";
import { VisuallyHidden } from "../VisuallyHidden";

type Props = {
  type: string;
  children?: React.ReactNode;
};
const Icon: FC<Props> = ({ type, children }) => {
  console.log(type);
  return (
    <>
      {/* select svg using type prop from obj */}
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        ></path>
      </svg>
      {children ? <VisuallyHidden>{children}</VisuallyHidden> : null}
    </>
  );
};

export default Icon;
