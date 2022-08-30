import "./PageSubtitle.css";

interface PageSubtitleProps {
  titleText: string;
  styleType: string;
}

const PageSubtitle = ({ titleText, styleType }: PageSubtitleProps) => {
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

export default PageSubtitle;
