

const Product = () => {
  return (
    <>
      <section className='product'>
        <div className='product-image'>
          <figure>
            <img src="" alt="" />
          </figure>
        </div>
        <div className='product-info'>
          <h2>Nombre Producto</h2>
          <h3>$$$ Precio</h3>
          <p>Descripción</p>
          <p>Características</p>
          <small>Tags</small>
        </div>
        <div className='product-button'>
          <button>Pedir</button>
        </div>
      </section>
    </>
  )
};

export default Product;