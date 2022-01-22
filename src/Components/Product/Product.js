import './Product.css';

const Product = ({ products }) => {
  // console.log(products);
  return (
    <>
      {
        products.data.map(({ id, name, price, description, features, tags, image }) => {
          return (
            <>
              <section className='product'>
                <div className='product-image'>
                  <figure>
                    <img src={image} alt={name} key={id} />
                  </figure>
                </div>
                <div className='product-info'>
                  <h2>{name}</h2>
                  <h3>{price}</h3>
                  <p className='description'>{description}</p>
                  <div className='features'>
                    {
                      features.map((feature) => {
                        return (
                          <p className='feature'>{feature}</p>
                        )
                      })
                    }
                  </div>
                  <div className='tags'>
                    {
                      tags.map((tag) => {
                        return (
                          <small className='tag'><strong>{tag}</strong></small>
                        )
                      })
                    }
                  </div>
                  <div className='product-button'>
                    <button>Pedir</button>
                  </div>
                </div>
              </section>
            </>
          )
        })
      }
    </>
  )
};

export default Product;