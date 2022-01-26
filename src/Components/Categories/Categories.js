import PropTypes from 'prop-types';
import './Categories.css';

const Categories = ({ categories }) => {
  return (
    <>
      <section className='categories'>
        <nav>
          <ul tabIndex='0'>
            {
              categories.data.map(({ id, category }) =>
                <li aria-label={category} key={id + category}><a href='/'>{category}</a></li>
              )
            }
          </ul>
        </nav>
      </section>
    </>
  );
}

Categories.propTypes = {
  categories: PropTypes.object.isRequired
};

export default Categories;