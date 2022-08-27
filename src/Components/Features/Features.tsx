import PropTypes from "prop-types";
import "./Features.css";

interface FeaturesProps {
  features: string[];
  id: number;
}

const Features: React.FC<FeaturesProps> = ({ features, id }) => {
  return (
    <div className="features" tabIndex={0}>
      {features?.map((feature) => (
        <p aria-label={feature} className="feature" key={id + feature}>
          {feature}
        </p>
      ))}
    </div>
  );
};

Features.propTypes = {
  features: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};

export default Features;
