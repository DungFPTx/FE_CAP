const Review = () => {
  return (
    <>
      <div className="product-detail-tab-pane active">
        <div className="product-detail-reviews-title">
          <span className="number-review">2</span>
          review for
          <span className="name-products">
            Basic Colored Sweatpants With Elastic Hems
          </span>
        </div>
        <div className="product-detail-list-reviews">
          <div className="product-detail-reviewer-cmt">
            <img
              src="https://secure.gravatar.com/avatar/3384f98a21c5dce2051e8f5a20928b05?s=60&d=mm&r=g"
              alt="user"
            />
            <div className="detail-reviewer-cmt-content">
              <div className="detail-reviewer-cmt-rating">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <div className="detail-reviewer-cmt-name_time">
                <h5 className="name">Admin</h5> -{" "}
                <span className="time">April 23, 2022</span>
              </div>
              <p className="detail-reviewer-cmt-info">
                Sed perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
          </div>
        </div>
        <div className="product-detail-add-review">
          <p className="product-detail-add-review-name">Add a review</p>
          <p className="detail-add-review-wran">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form
            className="detail-add-review-validate"
            method="post"
            encType="multipart/form-data">
            <div className="add-review-rating">
              Your rating *
              <ul className="add-review-rating-list">
                <li className="add-review-rating-item active">
                  <i className="fa-solid fa-star" />
                </li>
                <li className="add-review-rating-item">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </li>
                <li className="add-review-rating-item">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </li>
                <li className="add-review-rating-item">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </li>
                <li className="add-review-rating-item">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </li>
              </ul>
            </div>
            <div className="add-review-content">
              <p className="name">Your review *</p>
              <textarea
                cols={100}
                rows={10}
                placeholder="review here"
                defaultValue={""}
              />
            </div>
            <div className="add-review-name">
              <p className="name">Name *</p>
              <input type="text" />
            </div>
            <div className="add-review-email">
              <p className="name">Email *</p>
              <input type="email" />
            </div>
            <div className="add-review-save-name">
              <input
                type="checkbox"
                className="add-review-remind"
                id="add-review-remind"
              />
              <label htmlFor="add-review-remind">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <button className="add-review-submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Review;
