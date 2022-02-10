import "./Features.css";

const Features = ({ features, id }) => {
  return (
    <div className="features" tabIndex="0">
      {features?.map((feature) => (
        <p aria-label={feature} className="feature" key={id + feature}>
          {feature}
        </p>
      ))}
    </div>
  );
};

export default Features;
