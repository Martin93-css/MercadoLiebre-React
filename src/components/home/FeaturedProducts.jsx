import React, { Component } from "react";

export default class FeaturedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  getAllProducts() {
    fetch("http://localhost:3008/api/productos")
      .then((response) => response.json())
      .then((data) => {
        const productsWithDiscount = data.data.map((product) => {
          const discountedPrice = product.price - (product.price * product.discount) / 100;
          console.log(discountedPrice)
          return {
            ...product,
            discountedPrice,
          };
        });

        this.setState({
          products: productsWithDiscount,
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.getAllProducts();
  }

  render() {
    const { products } = this.state;

    return (
      <React.Fragment>
        {products.map((product, index) => (
          <article className="producto" key={index}>
            <img src={product.imageURL} alt={product.name} />
            <div className="descripcion">
              <div className="camion">
                <i className="fas fa-truck truck"></i>
              </div>
              <div className="precio-descuento">
                <p className="precio">
                  {product.discount > 0 ? <del>{product.price}</del> : '' }
                </p>
                <p className="descuento">{product.discount}% off</p>
              </div>
              <h3 className="nombre-producto">{product.name}</h3>
              <p className="precio-descuento">${product.discountedPrice}</p>
            </div>
          </article>
        ))}
      </React.Fragment>
    );
  }
}
