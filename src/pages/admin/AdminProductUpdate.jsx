import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductApi, updateProductApi } from "../../apis/Api";
import { toast } from "react-toastify";

const AdminUpdate = () => {
  // get id from url
  // get product information (Backend)
  // fill all the info in each fields
  const { id } = useParams();

  // make a use state
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");

  // state for image
  const [productNewImage, setProductNewImage] = useState(null);
  const [previewNewImage, setPreviewNewImage] = useState(null);
  const [oldImage, setOldImage] = useState("");

  // image upload handler
  const handleImage = (event) => {
    const file = event.target.files[0];
    setProductNewImage(file); // for backend
    setPreviewNewImage(URL.createObjectURL(file));
  };

  useEffect(() => {
    getProductApi(id)
      .then((res) => {
        setProductName(res.data.data.title);
        setProductPrice(res.data.data.price);
        setProductCategory(res.data.data.category);
        setProductDescription(res.data.data.description);
        setOldImage(res.data.data.image);
      })
      .catch((err) => {
        toast.error(err.response.message);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", productNewImage);
    // Making
    const data = {
      title: productName,
      description: productDescription,
      price: productPrice,
      category: productCategory,
    };
    Object.entries(data).map(([key, value]) => {
      formData.append(`${key}`, value);
    });
    updateProductApi(id, formData)
      .then((res) => {
        console.log(res.data);
        if (res.data?.success === false) {
          toast.error(res.data?.message);
        } else {
          toast.success(res.data?.message);
          // setTimeout(() => window.location.reload(), 1000);
          // Page Reload
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <h2>
          Update product for <span className="text-danger">'Flower'</span>
        </h2>

        <div className="d-flex gap-3">
          <form action="">
            <label htmlFor="">Product Name</label>
            <input
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              className="form-control"
              type="text"
              placeholder="Enter your product name"
            />

            <label className="mt-2" htmlFor="">
              Product Price
            </label>
            <input
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
              className="form-control"
              type="number"
              placeholder="Enter your product name"
            />

            <label className="mt-2">Choose category</label>
            <select
              onChange={(e) => setProductCategory(e.target.value)}
              value={productCategory}
              className="form-control"
            >
              <option value="plants">Plants</option>
              <option value="electronics">Electronics</option>
              <option value="gadgets">Gadgets</option>
              <option value="furniture">Furniture</option>
            </select>

            <label className="mt-2">Enter description</label>
            <textarea
              onChange={(e) => setProductDescription(e.target.value)}
              className="form-control"
              value={productDescription}
            ></textarea>

            <label className="mt-2">Choose product Image</label>
            <input
              onChange={handleImage}
              type="file"
              className="form-control"
            />

            <button
              className="btn btn-danger w-100 mt-2"
              onClick={handleSubmit}
            >
              Update Product
            </button>
          </form>
          <div className="image section">
            <h6>Old Image</h6>
            <img
              height={300}
              width={300}
              className="img-fluid object-fix-cover rounded-4"
              src={`http://localhost:3001/${oldImage}`}
              alt=""
              srcset=""
            />
            {previewNewImage && (
              <div>
                <h5>New Image</h5>
                <img
                  height={300}
                  width={300}
                  className="img-fluid object-fix-cover rounded-4"
                  src={previewNewImage}
                  alt=""
                  srcset=""
                />
              </div>
            )}
            {/* <h1>Image</h1> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUpdate;
