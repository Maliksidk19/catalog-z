import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="px-5 bg-light py-5 mt-5">
        <div className="container">
          <div className="row g-4 text-start">
            <div className="col-12 col-lg-4">
              <h3 className="fw-bold text-info">Catalog-Z</h3>
              <p className="my-3">
                Catalog-Z is a photo Website where you can downlaod royality
                images for free and without any type of hidden charges
              </p>
            </div>
            <div className="col-12 col-lg-4 mx-0 mx-md-5">
              <h4 className="text-info">Our Links</h4>
              <li className="nav-link text-dark p-0">Advertise</li>
              <li className="nav-link text-dark p-0">Support</li>
              <li className="nav-link text-dark p-0">Our Company</li>
              <li className="nav-link text-dark p-0">Contact</li>
            </div>
            <div className="col mx-0 mx-md-5">
              <h4 className="text-info">Follow Us</h4>
              <span>
                <i className="bx bxl-twitter mx-2 bx-sm text-secondary"></i>
                <i className="bx bxl-facebook mx-2 bx-sm text-secondary"></i>
                <i className="bx bxl-linkedin mx-2 bx-sm text-secondary"></i>
                <i className="bx bxl-instagram mx-2 bx-sm text-secondary"></i>
              </span>
            </div>
          </div>
          <hr />
          <div className="row justify-content-center mt-2">
            All rights reserved by @SaadMalik
          </div>
        </div>
      </footer>
    </>
  );
}
