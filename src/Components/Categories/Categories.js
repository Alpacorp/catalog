import PropTypes from 'prop-types';
import './Categories.css';

const Categories = ({ categories }) => {
  console.log("categories", categories, typeof categories);
  return (
    <>
      <section className='categories'>
        <ul>
          {
            categories.data.map(({ id, category }) => {
              return (
                <>
                  <li key={id}>{category}</li>
                </>
              )
            })
          }
        </ul>
      </section>
    </>
  );
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired
};

export default Categories;