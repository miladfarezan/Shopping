import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="footer-items">
          <div className="container-icons-footer-and-description">
            <div className="container-icons-footer">
              <a
                href="https://www.instagram.com/milad_farezan/"
                className="footer-link-icon"
              >
                <i className="fa fa-instagram footer-icon"></i>
              </a>
              <a
                href="https://github.com/miladfarezan"
                className="footer-link-icon"
              >
                <i className="fa fa-github footer-icon"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/isthemilad/"
                className="footer-link-icon"
              >
                <i className="fa fa-linkedin footer-icon"></i>
              </a>
              <a
                href="https://www.facebook.com/milad.farezan"
                className="footer-link-icon"
              >
                <i className="fa fa-facebook footer-icon"></i>
              </a>
            </div>
            <div className="container-description-footer">
              <p className="description-footer">
                کلیه حقوق این سرویس محفوظ و مطعلق به مجموعه Shopping میباشد .
              </p>
            </div>
            <div className="container-my-info-in-footer">
              <p className="my-info">
                <i className="fa fa-check"></i>
                توسط میلاد فارضیان در 12 مرداد 1402
              </p>
            </div>
          </div>
          <div className="container-image-footer">
            <img src="../../../images/frames.png" className="image-footer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
