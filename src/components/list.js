import React from "react";
import classes from "./list.module.css";

const List = (props) => {
        let style;
      if (props.job === 'Fix'){
        style = classes.btn
      }
      else if(props.job === 'New'){
          style = classes.btn_g
      }
      else{
          style=  classes.btn_p
      }
  return(
      <div className={classes.layout}>
          <div>
              <h4 >{props.date}</h4>
              <div className={classes.heading}>
                  <p className={style}>{props.job}</p>
                  <p className={classes.img}>{props.profilePicture}</p>
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