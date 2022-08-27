import PropTypes from "prop-types";
import "./Description.css";

interface DescriptionProps {
  description?: string;
  styleDesc?: string;
}

const Description: React.FC<DescriptionProps> = ({
  description,
  styleDesc,
}) => {
  return (
    <>
      <p className={styleDesc} aria-label={description} tabIndex={0}>
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
