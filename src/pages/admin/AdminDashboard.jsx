import React, { useEffect, useState } from "react";
import {
  createProductApi,
  deleteProductApi,
  getProductsApi,
} from "../../apis/Api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  // States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsApi()
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        toast.error("Server Error");
      });
  }, []);

  // Error States
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [imageError, setImageError] = useState("");

  // Handle Error States
  var validate = () => {
    var isValid = true;
    if (title.trim() === "") {
      setTitleError("Please enter title.");
      isValid = false;
    }
    if (description.trim() === "") {
      setDescriptionError("Please enter description.");
      isValid = false;
    }
    if (price.trim() === "") {
      setPriceError("Please enter price.");
      isValid = false;
    }
    if (category.trim() === "") {
      setCategoryError("Please select category.");
      isValid = false;
    }
    if (!image) {
      setImageError("Please select image.");
      isValid = false;
    }
    return isValid;
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, description, price, category, image);
    var isValid = validate();
    if (!isValid) {
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    // Making
    const data = {
      title: title,
      description: description,
      price: price,
      category: category,
    };
    Object.entries(data).map(([key, value]) => {
      formData.append(`${key}`, value);
    });
    createProductApi(formData)
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

  const handleDelete = (id) => {
    const confirmDialog = window.confirm("Do you want to delete?");
    if (confirmDialog) {
      deleteProductApi(id)
        .then((res) => {
          if (res.data?.success === false) {
            toast.error(res.data?.message);
          } else {
            toast.success(res.data?.message);
          }
          window.location.reload();
        })
        .catch((err) => {
          if (err.response.status === 500) {
            toast.error(err.response.data.message);
          }
          toast.error("Server not responding.");
        });
    }
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between mt-2">
          <h1>Admin Dashboard</h1>

          <button
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Product
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Add Product
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form action="">
                    <label htmlFor="" className="mt-2">
                      Title
                    </label>
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Enter product title"
                      name=""
                      id=""
                    />
                    {titleError && (
                      <small className="text text-danger">{titleError}</small>
                    )}
                    <br />
                    <label htmlFor="" className="mt-2">
                      Description
                    </label>
                    <textarea
                      onChange={(e) => setDescription(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Enter product description"
                      name=""
                      id=""
                    />
                    {descriptionError && (
                      <small className="text text-danger">
                        {descriptionError}
                      </small>
                    )}
                    <br />
                    <label htmlFor="" className="mt-2">
                      Price
                    </label>
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      type="number"
                      className="form-control"
                      placeholder="Enter product price"
                      name=""
                      id=""
                    />
                    {priceError && (
                      <small className="text text-danger">{priceError}</small>
                    )}
                    <br />
                    <label htmlFor="" className="mt-2">
                      Category
                    </label>
                    <select
                      onChange={(e) => setCategory(e.target.value)}
                      className="form-control"
                      name=""
                      id=""
                    >
                      <option value="">Select Category</option>
                      <option value="poisonous">Poisonous</option>
                      <option value="edible">Edible</option>
                    </select>
                    {categoryError && (
                      <small className="text text-danger">
                        {categoryError}
                      </small>
                    )}
                    <br />
                    <label htmlFor="" className="mt-2">
                      Image
                    </label>
                    <input
                      onChange={handleImage}
                      type="file"
                      className="form-control"
                      name=""
                      id=""
                    />
                    {imageError && (
                      <small className="text text-danger">{imageError}</small>
                    )}
                    {/** Preview Image */}
                    {previewImage && (
                      <img
                        height={"200px"}
                        width={"400px"}
                        src={previewImage}
                        alt="preview-image"
                        srcset=""
                        className="img-fluid rounded object-fit-cover mt-3"
                      />
                    )}
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table class="table mt-3">
          <thead>
            <tr className="table-dark">
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((singleProduct) => (
              <tr>
                <td>
                  <img
                    height={"40px"}
                    width={"40px"}
                    src={`http://localhost:3001/${singleProduct.image}`}
                    alt=""
                  />
                </td>
                <td>{singleProduct.title}</td>
                <td>NPR {singleProduct.price}</td>
                <td>{singleProduct.category}</td>
                <td>{singleProduct.description}</td>
                <td>
                  <div className="btn-group" role="group">
                    <Link
                      to={`/admin/product/${singleProduct._id}`}
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(singleProduct._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {/* <tr>
              <td>
                <img
                  height={"40px"}
                  width={"40px"}
                  src="https://th.bing.com/th/id/R.b16638e30110829994f90f11f3bcbe2d?rik=esurmGY%2b%2b2frrQ&riu=http%3a%2f%2fweneedfun.com%2fwp-content%2fuploads%2f2016%2f01%2fFlower-Pictures-112.jpg&ehk=CZgUEWCwYR64gOxpwuuPpP3x3euj7Cj2jDks%2foHVkLQ%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                  srcset=""
                />
              </td>
              <td>Flower</td>
              <td>Beautiful yellow flower</td>
              <td>NPR 500</td>
              <td>Plant</td>
              <td>
                <div className="btn-group" role="group">
                  <button className="btn btn-primary" type="submit">
                    Edit
                  </button>
                  <button className="btn btn-danger" type="submit">
                    Delete
                  </button>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
