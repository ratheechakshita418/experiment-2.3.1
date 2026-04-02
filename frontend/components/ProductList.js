import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4 className="text-danger">{error}</h4>;

  return (
    <div className="row">
      {products.map(p => (
        <div className="col-md-4" key={p._id}>
          <div className="card mb-3">
            <img src={p.image} className="card-img-top" alt={p.name} />
            <div className="card-body">
              <h5>{p.name}</h5>
              <p>₹{p.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
