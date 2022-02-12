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
  description: PropTypes.string.isRequired,
  styleDesc: PropTypes.string.isRequired,
};

export default Description;
