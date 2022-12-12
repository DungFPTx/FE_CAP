const UserInfo = () => {
  return (
    <>
      <div className="info-content-item active">
        <form
          method="post"
          encType="multipart/form-data"
          className="checkout-form-validate">
          <h2 className="form-validate-title">User Info</h2>
          <div className="row ">
            <div className="col p-12 m-12">
              <label className="form-validate-name">Username</label>
              <input type="text" className="form-validate-input" />
            </div>
            <div className="col p-6 m-12">
              <label className="form-validate-name">Gender</label>
              <input type="email" className="form-validate-input" />
            </div>
            <div className="col p-6 m-12">
              <label className="form-validate-name">Phone number</label>
              <input type="email" className="form-validate-input" />
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">Email Address</label>
              <input type="email" className="form-validate-input" />
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">Company name</label>
              <input type="email" className="form-validate-input" />
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">Address</label>
              <input type="email" className="form-validate-input" />
            </div>
          </div>
          <button type="submit" className="form-validate-submit-btn">
            Update Info
          </button>
        </form>
      </div>
    </>
  );
};

export default UserInfo;
