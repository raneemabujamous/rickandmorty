import React from "react";
const Gender = ({ setPageNum, setGender }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((items, index) => {
            return (
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
                      setGender(items);
                      setPageNum(1);
                    }}
                    className="btn btn-outline-primary"
                    for={`${"status"}-${index}`}
                  >
                    {items}
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gender;
