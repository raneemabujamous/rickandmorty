import React, { useEffect, useState } from "react";

import styles from "./Card.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { addToFavourites, removeFromFav } from "../../src/store/action";
import "../App.css";
import { HeartSwitch } from "@anatoliygatt/heart-switch";

export default function FavouriteChar({ data, page }) {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();
  const favaourite = useSelector((state) => state.favourites);
  console.log(favaourite, "favaouritefavaourite");

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              {favaourite ? (
                favaourite.map((x) => {
                  let { id, image, name, status, location, species } = x;

                  return (
                    <div
                      style={{ textDecoration: "none" }}
                      //   to={`${page}${id}`}
                      key={id}
                      className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
                    >
                      <div
                        className={`${styles.card} d-flex flex-column justify-content-center`}
                      >
                        <img
                          className={`${styles.img} img-fluid`}
                          src={image}
                          alt=""
                        />
                        <div className={`${styles.content}`}>
                          <div className="fs-5 fw-bold mb-4">{name}</div>
                          <div className="">
                            <div className="fs-6 fw-normal">Last Location</div>
                            <div className="fs-5">{location.name}</div>
                          </div>

                          <HeartSwitch
                            checked={!checked}
                            onChange={(event) => {
                              dispatch(removeFromFav(x));
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
                <>'No Favourite Characters Found'</>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
