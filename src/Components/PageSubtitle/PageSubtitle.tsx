import "./PageSubtitle.css";
import PropTypes from "prop-types";

interface PageSubtitleProps {
  titleText: string;
  styleType: string;
}

const PageSubtitle: React.FC<PageSubtitleProps> = ({
  titleText,
  styleType,
}) => {
  return (
    <>
      <section className={styleType}>
        <h2 aria-label={titleText} tabIndex={0}>
          {titleText}
        </h2>
      </section>
    </>
  );
};

PageSubtitle.propTypes = {
  titleText: PropTypes.string.isRequired,
  styleType: PropTypes.string.isRequired,
};

export default PageSubtitle;
