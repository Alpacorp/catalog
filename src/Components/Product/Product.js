import './Product.css';
import { formatPrice } from '../../utils/formatPrice.';

const Product = ({ products }) => {
  return (
    <>
      {
        products.data.map(({ id, name, price, description, features, tags, image }) =>
          <section className='product' key={id + 'product'}>
            <div className='product-image' key={id + 'image'}>
              <figure>
                <img src={image} alt={name} />
              </figure>
            </div>
            <div className='product-info' key={id + 'info'}>
              <h2>{name}</h2>
              <h3>{formatPrice.format(price)}</h3>
              <p className='description'> {description}</p>
              <div className='features'>
                {
                  features.map((feature) =>
                    <p className='feature' key={id + feature}>{feature}</p>
                  )
                }
              </div>
              <div className='tags'>
                {
                  tags.map((tag) =>
                    <small className='tag' key={id + tag}><strong>{tag}</strong></small>
                  )
                }
              </div>
              <div className='product-button'>
                <button>Pedir</button>
              </div>
            </div>
          </section>
        )
      }
    </>
  )
};

export default Product;