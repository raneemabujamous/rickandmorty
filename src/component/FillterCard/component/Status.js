import React from "react";

const Status = ({ setstatusValue, setPageNum }) => {
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((item, index) => (
            <div>
              <style jsx>
                {`
                  .x:checked + label {
                    background-color: #0b5ed7;
                    color: white;
                  }
                  input[type="radio"] {
                    display: none;
                  }
                `}
              </style>

              <div className="form-check">
                <input
                  className="form-check-input x"
                  type="radio"
                  name={"status"}
                  id={`${"status"}-${index}`}
                />
                <label
                  onClick={(x) => {
                    console.log(x, "setstatusValuesetstatusValue", item);
                    setstatusValue(item);
                    setPageNum(1);
                  }}
                  className="btn btn-outline-primary"
                  for={`${"status"}-${index}`}
                >
                  {item}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
