import "./PageTitle.css";
import PropTypes from "prop-types";

interface PageTitleProps {
  titleText: string;
  styleType: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  titleText,
  styleType,
}: PageTitleProps) => {
  return (
    <>
      <section className={styleType}>
        <h1 aria-label={titleText} tabIndex={0}>
          {titleText}
        </h1>
      </section>
    </>
  );
};

PageTitle.propTypes = {
  titleText: PropTypes.string.isRequired,
  styleType: PropTypes.string.isRequired,
};

export default PageTitle;
