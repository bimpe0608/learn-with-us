import classes from "./PageMainContainer.module.css";
import AvailableCourses from "../../Components/AvailableCourses/AvailableCourses";

const PageMainContainer = () => {
  return (
    <div className={classes.PageMainContainer}>
      <div className={classes.upperSection}>
        <div className={classes.textContent}>
          <div>
            <h3>Learn With Us</h3>
            <p>
              Unlock the doors to endless possibilities and embark on an
              extraordinary journey of knowledge and personal growth.
            </p>
          </div>
        </div>
      </div>

      <div className={classes.courseContainer}>
        <AvailableCourses>
          <div className={classes.frontendSection}>
            <div>
              <img src="https://res.cloudinary.com/drybwe5na/image/upload/v1690556097/Assets/WhatsApp_Image_2023-06-16_at_11.57_1_nsjrfk.svg" />
            </div>
            <div>
              <h3>Learn Front End development</h3>
              <p>
                Our carefully curated curriculum covers everything from HTML,
                CSS, and JavaScript fundamentals to advanced frameworks and
                tools. Gain hands-on experience and develop a robust foundation
                that will set you apart in the competitive market.
              </p>
              <button>Register Now</button>
            </div>
          </div>
        </AvailableCourses>

        <AvailableCourses></AvailableCourses>
        <AvailableCourses></AvailableCourses>
      </div>
    </div>
  );
};

export default PageMainContainer;
