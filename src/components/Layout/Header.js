import { Fragment } from "react";
import mealImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}> <h1>Order Meals</h1> 
      <button>cart</button>
      </header>
      <div className={classes['main-image']}>
          <img src={mealImage} alt="delicious food ...!!!"/>
      </div>
    </Fragment>
  );
};
export default Header;
