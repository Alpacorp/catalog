import "./Description.css";

const Description = ({ description }) => {
  return (
    <>
      <p className="description" aria-label={description} tabIndex="0">
        {" "}
        {description}
      </p>
    </>
  );
};

export default Description;
