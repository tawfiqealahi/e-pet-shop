import React from 'react';

const Product = (props) => {
    const{name, img, category, price,shipping,seller, stock}=props.product || {}
    // console.log(props.product)
    return (
       <div className="col-md-4 ">

<div className="card mb-3" style={{"maxWidth": "18rem",}}>
  <img className="" style={{"height": "130px", "width": "120px", "margin": "auto", "margin-top":"3px"  }} src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
        <h5 className="card-title"><small>Breed: {name}</small></h5>
        <p>Category: {category}</p>
        <p>Seller: {seller}</p>
        <p className="card-text"> Price: <small>${price}</small> </p>
        <p>Shipping-cost:{shipping}</p>
        <p className="card-text"><small className="text-muted">In stock:  {stock}</small></p>
        <button  onClick={()=>props.handleAddProduct(props.product)} className="btn btn-warning " ><i className="me-2  fas fa-shopping-cart"></i>Add Product</button>
      </div>
</div>

       </div>
    );
};

export default Product;