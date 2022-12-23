import React from "react";

export default function Pagenation({ next, previous }) {
  console.log(next, previous);
  return (
    <div className=" row ad-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <button onClick={previous} className=" col-2" tabindex="-1">
        Previous
      </button>

      <button onClick={next} className=" col-2">
        Next
      </button>
    </div>
  );
}
