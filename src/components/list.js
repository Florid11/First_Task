import React from "react";
import classes from "./list.module.css";

const List = (props) => {
  return(
      <div className={classes.layout}>
          <div>
              <h4 >{props.date}</h4>
              <div className={classes.heading}>
                  <p className={classes.btn}>{props.job}</p>
                  <p className={classes.img}>{props.image}</p>
                  <h4 >{props.name}</h4>
              </div>
                <div className={classes.description}>
                    {props.decription}
                </div>
              <div>
                  <button className={classes.btn_down} onClick='/'> Download</button>
              </div>
          </div>
      </div>
  );
}

export default List;