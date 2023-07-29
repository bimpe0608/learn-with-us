import classes from "./PageMainContainer.module.css";

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
    </div>
  );
};

export default PageMainContainer;
