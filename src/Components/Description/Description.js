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

export default Description;
