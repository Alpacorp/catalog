import PropTypes from 'prop-types';
import './Categories.css';

const Categories = ({ categories }) => {
  return (
    <>
      <section className='categories'>
        <ul>
          {
            categories.data.map(({ id, category }) =>
              <li key={id + category}>{category}</li>
            )
          }
        </ul>
      </section>
    </>
  );
}

Categories.propTypes = {
  categories: PropTypes.object.isRequired
};

export default Categories;