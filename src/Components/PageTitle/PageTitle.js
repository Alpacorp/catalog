import './PageTitle.css';
import PropTypes from 'prop-types';

const PageTitle = ({ titleText, styleType }) => {
  return (
    <>
      <section className={styleType}>
        <h1>{titleText}</h1>
      </section>
    </>
  )
}

PageTitle.propTypes = {
  titleText: PropTypes.string.isRequired,
  styleType: PropTypes.string.isRequired,
};

export default PageTitle;