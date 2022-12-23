import React, { useState } from "react";
import styles from "./Card.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { HeartSwitch } from "@anatoliygatt/heart-switch";
import { addToFavourites, removeFromFav } from "../../store/action";

export default function Card({ data, page }) {
  const [checked, setChecked] = useState({ checked: false, favaourite: [] });
  var favaourite = useSelector((state) => state.favourites);
  console.log(favaourite, "favaouritefavaourite");

  const dispatch = useDispatch();

  return (
    <>
      {data ? (
        data.map((x) => {
          let { id, image, name, status, location } = x;

          return (
            <div
              style={{ textDecoration: "none" }}
              to={`${page}${id}`}
              key={id}
              className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
            >
              <div
                className={`${styles.card} d-flex flex-column justify-content-center ${checked}`}
              >
                <img className={`${styles.img} img-fluid`} src={image} alt="" />
                <div className={`${styles.content}`}>
                  <div className="fs-5 fw-bold mb-4">{name}</div>
                  <div className="">
                    <div className="fs-6 fw-normal">Last Location</div>
                    <div className="fs-5">{location.name}</div>
                  </div>
                  <HeartSwitch
                    checked={
                      (checked.checked && id === checked.id) ||
                      checked.favaourite?.find((a) => a.id === id)
                    }
                    onChange={(event) => {
                      if (favaourite?.find((a) => a.id === id)) {
                        console.log("find IN fav");
                        favaourite = favaourite.filter((a) => a.id !== id);
                        dispatch(removeFromFav(x));

                        setChecked({ checked: false, favaourite: favaourite });
                      } else {
                        dispatch(addToFavourites(x));
                        setChecked({
                          checked: event.target.checked,
                          favaourite: favaourite,
                        });
                      }
                    }}
                  />
                </div>
              </div>

              {(() => {
                if (status === "Dead") {
                  return (
                    <div
                      className={`${styles.badge} position-absolute badge bg-danger`}
                    >
                      {status}
                    </div>
                  );
                } else if (status === "Alive") {
                  return (
                    <div
                      className={`${styles.badge} position-absolute badge bg-success`}
                    >
                      {status}
                    </div>
                  );
                } else {
                  return (
                    <div
                      className={`${styles.badge} position-absolute badge bg-secondary`}
                    >
                      {status}
                    </div>
                  );
                }
              })()}
            </div>
          );
        })
      ) : (
        <>'No Characters Found'</>
      )}
    </>
  );
}
