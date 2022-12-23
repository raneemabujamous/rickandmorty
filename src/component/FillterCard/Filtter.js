import React from "react";
import Gender from "./component/Gender";
import Status from "./component/Status";

const Filters = ({ setstatusValue, setPageNum, setGender }) => {
  let clear = () => {
    setstatusValue("");
    setGender("");
    setPageNum(1);
    window.location.reload(false);
  };
  return (
    <div className=" d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <div className="row">
          <div className="col-6">
            <Status setstatusValue={setstatusValue} setPageNum={setPageNum} />
          </div>
          <div className="col-6">
            <Gender setPageNum={setPageNum} setGender={setGender} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
