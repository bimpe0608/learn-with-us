import classes from "./PageMainContainer.module.css";
import AvailableCourses from "../../Components/AvailableCourses/AvailableCourses";
import Button from "../../Components/Buttons/Buttons";

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
            <div className={classes.frontendImage}>
              <img src="https://res.cloudinary.com/drybwe5na/image/upload/v1690556097/Assets/WhatsApp_Image_2023-06-16_at_11.57_1_nsjrfk.svg" />
            </div>
            <div className={classes.frontendText}>
              <h3>Learn Front End development</h3>
              <p>
                Our carefully curated curriculum covers everything from HTML,
                CSS, and JavaScript fundamentals to advanced frameworks and
                tools. Gain hands-on experience and develop a robust foundation
                that will set you apart in the competitive market.
              </p>
              <div>
                <Button />
              </div>
            </div>
          </div>
        </AvailableCourses>

        <AvailableCourses>
          <div className={classes.productDesignSection}>
            <div className={classes.productDesignText}>
              <h3>Learn Product Design</h3>
              <p>
                With our expert-led courses, you'll gain invaluable insights
                into the fundamentals of design thinking, user-centric
                approaches, and the latest industry trends. Through hands-on
                projects and real-world simulations, you'll develop the skills
                to ideate, prototype, and bring your ideas to life.
              </p>
              <div>
                <Button />
              </div>
            </div>
            <div className={classes.productDesignImage}>
              <img src="https://res.cloudinary.com/drybwe5na/image/upload/v1690556105/Assets/WhatsApp_Image_2023-06-16_at_11.57_5_rkzvfp.svg" />
            </div>
          </div>
        </AvailableCourses>
        <AvailableCourses>
          <div className={classes.dataAnalysisSection}>
            <div className={classes.dataAnalysisImage}>
              <img src="https://res.cloudinary.com/drybwe5na/image/upload/v1690556102/Assets/WhatsApp_Image_2023-06-16_at_11.57_4_zsgece.svg" />
            </div>
            <div className={classes.dataAnalysisText}>
              <h3>Learn Intermediate Level Data Analysis with Python</h3>
              <p>
                Dive into real-world data sets and learn how to apply Python
                libraries such as Pandas, NumPy, and Matplotlib to analyze and
                interpret data effectively. Gain practical experience through
                interactive exercises and projects.
              </p>
              <div>
                <Button />
              </div>
            </div>
          </div>
        </AvailableCourses>
      </div>
    </div>
  );
};

export default PageMainContainer;
