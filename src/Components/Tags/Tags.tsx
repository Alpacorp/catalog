import "./Tags.css";

interface TagsProps {
  tags: string[];
  id: number;
}

const Tags = ({ tags, id }: TagsProps) => {
  return (
    <div data-testid="test-div-tags" className="tags" tabIndex={0}>
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

export default Tags;
