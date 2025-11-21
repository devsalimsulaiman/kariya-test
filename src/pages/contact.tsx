
import "../styles/contact.css";

export default function Contact() {
  return (
    <div>
      <div className="body">
        <div className="left-section">
          <div className="arrow">
            <i className="fa-solid fa-angle-left"></i>
          </div>
        </div>
        <div className="right-section">
          <div className="inner-left">
            <p>Get Started</p>
            <div className="wrapper">
              <p>Get in touch with us.</p>
              <p>
                We're here to <span>assist you.</span>
              </p>
            </div>
          </div>
          <div className="inner-right">
            <div className="socials">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="socials">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="socials">
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
      <form action="">
        <div className="form-1">
          <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="name">Email Address</label>
            <input type="text" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone Number (optional)</label>
            <input type="text" id="phone" name="phone" />
          </div>
        </div>
        <div className="form-2">
          <label htmlFor="msg">Message</label>
          <input type="text" id="msg" name="msg" />
        </div>
        <input type="submit" value="Leave a message →" />
      </form>
      <div className="body2">
        <div>
          <div className="left2">
            <p>Contact Info</p>
            <p>We are always</p>
            <p>happy to assist you</p>
          </div>
          <div className="right2">
            <div className="right2a">
              <p>Email Address</p>
              <p>---</p>
              <p>help@info.com</p>
              <p>Assistance hours: Monday - Friday 6 am to 8 pm GST</p>
            </div>
            <div className="right2b">
              <p>Number</p>
              <p>---</p>
              <p>(808) 998-34256</p>
              <p>Assistance hours: Monday - Friday 6 am to 8 pm GST</p>
            </div>
          </div>
        </div>
      </div>
      <div className="body3">
        <div>
          <div className="body3a">
            <p>Subscribe to our Newsletter</p>
            <p>
              Subscribe for Updates: Stay informed about the latest investor
              updates, financial results, and announcements by subscribing to
              our newsletter.
            </p>
          </div>
          <div>
            <div className="body3b">
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
