import "./PageTitle.css";
import PropTypes from "prop-types";

const PageTitle = ({ titleText, styleType }) => {
  console.log("cargue de title");
  return (
    <>
      <section className={styleType}>
        <h1 aria-label={titleText} tabIndex="0">
          {titleText}
        </h1>
      </section>
    </>
  );
};

PageTitle.propTypes = {
  titleText: PropTypes.string.isRequired,
  styleType: PropTypes.string.isRequired,
};

export default PageTitle;
