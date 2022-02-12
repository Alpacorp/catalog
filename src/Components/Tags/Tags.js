import PropTypes from "prop-types";
import "./Tags.css";

const Tags = ({ tags, id }) => {
  return (
    <div className="tags" tabIndex="0">
      {tags?.map((tag) => (
        <small aria-label={tag} className="tag" key={id + tag}>
          <strong>{tag}</strong>
        </small>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};

export default Tags;
