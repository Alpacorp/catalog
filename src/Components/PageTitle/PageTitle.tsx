import "./PageTitle.css";

interface PageTitleProps {
  titleText: string;
  styleType: string;
}

const PageTitle = ({ titleText, styleType }: PageTitleProps) => {
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

export default PageTitle;
