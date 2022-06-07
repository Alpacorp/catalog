import PropTypes from "prop-types";
import "./Description.css";

const Description = ({ description, styleDesc }) => {
  return (
    <>
      <p className={styleDesc} aria-label={description} tabIndex="0">
        {" "}
        {description}
      </p>
    </>
  );
};

Description.propTypes = {
  description: PropTypes.string,
  styleDesc: PropTypes.string,
};

export default Description;
