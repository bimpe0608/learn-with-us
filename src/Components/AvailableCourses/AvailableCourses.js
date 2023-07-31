import classes from "./AvailableCourses.module.css";

const AvailableCourses = (props) => {
  return (
    <div className={classes.availableCourseContainer}>{props.children}</div>
  );
};

export default AvailableCourses;
