import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummy_products =[
  {
    id:'p1',
    title:'Product1',
    description:'This is the Product 1',
    price:152.23
  },
  {
    id:'p2',
    title:'Product2',
    description:'This is the Product 2',
    price:100.23
  },
  {
    id:'p3',
    title:'Product3',
    description:'This is the Product 3',
    price:122.45
  }
]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          dummy_products.map((product) =>(

          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
          ))
        }
      </ul>
    </section>
  );
};

export default Products;
