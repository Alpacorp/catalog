import PropTypes from "prop-types";
// import "./Tags.css";

const Tags = ({ tags, id }) => {
  return (
    <div data-testid="test-div-tags" className="tags" tabIndex="0">
      {tags?.map((tag) => (
        <small
          data-testid="test-small-tag"
          aria-label={tag}
          className="tag"
          key={id + tag}
        >
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
