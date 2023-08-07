import React from "react";

const DeleteIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={20}
      height={20}
      style={{ color: "red" }}
    >
      <path
        fill="var(--ci-primary-color, currentColor)"
        d="M96 472a23.82 23.82 0 0023.579 24h272.842A23.82 23.82 0 00416 472V152H96zm32-288h256v280H128z"
        className="ci-primary"
      ></path>
      <path
        fill="var(--ci-primary-color, currentColor)"
        d="M168 216H200V416H168z"
        className="ci-primary"
      ></path>
      <path
        fill="var(--ci-primary-color, currentColor)"
        d="M240 216H272V416H240z"
        className="ci-primary"
      ></path>
      <path
        fill="var(--ci-primary-color, currentColor)"
        d="M312 216H344V416H312z"
        className="ci-primary"
      ></path>
      <path
        fill="var(--ci-primary-color, currentColor)"
        d="M328 88V40c0-13.458-9.488-24-21.6-24H205.6C193.488 16 184 26.542 184 40v48H64v32h384V88zM216 48h80v40h-80z"
        className="ci-primary"
      ></path>
    </svg>
  );
};

export default DeleteIcon;
