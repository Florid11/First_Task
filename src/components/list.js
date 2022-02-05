import React from "react";
import classes from "./list.module.css";

const List = (props) => {
  return(
      <div className={classes.layout}>
          <div>
              <h3 className={classes.header}>{props.date}</h3>
              <div>
                  <p className={classes.btn}>{props.job}</p>
                  <p className={classes.img}>{props.image}</p>
                  <h3 className={classes.header}>{props.name}</h3>
              </div>
                <div>
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