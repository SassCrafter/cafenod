import React from "react";
import classes from "./Address.module.scss";

function Address() {
  return (
    <ul className={classes.List}>
      <li className={classes.Item}>
        <strong>Address: </strong> 8638 Amarica Stranfod Mailbon Star
      </li>
      <li className={classes.Item}>
        <strong>Mail: </strong> Israfilsupol836@gmail.com
      </li>
      <li className={classes.Item}>
        <strong>PHONE: </strong> +7464 0187 3535 645
      </li>
      <li className={classes.Item}>
        <strong>FAX ID: </strong> +9 659459 49594
      </li>
    </ul>
  );
}

export default Address;
