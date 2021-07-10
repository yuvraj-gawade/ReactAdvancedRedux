import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [{
  id: 'p1',
  price: 6,
  title: 'Book1',
  description: 'This is a first product - amazing!'
}, {
  id: 'p2',
  price: 5,
  title: 'Book2',
  description: 'This is a first product - amazing!'
}];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          products.map(prduct => <ProductItem key={prduct.id}
            id={prduct.id}
            title={prduct.title}
            price={prduct.price}
            description={prduct.description}
          />)
        }
      </ul>
    </section>
  );
};

export default Products;
