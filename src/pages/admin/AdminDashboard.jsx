import React, { useState } from "react";

const AdminDashboard = () => {
  // States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

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
    // console.log(firstName, lastName);
    var isValid = validate();
    if (!isValid) {
      return;
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
                    <br />
                    {descriptionError && (
                      <small className="text text-danger">
                        {descriptionError}
                      </small>
                    )}
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
            <tr>
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
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
