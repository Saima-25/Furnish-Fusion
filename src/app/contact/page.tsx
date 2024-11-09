import '../components/contact.css'
export default function Contact(){
    return(
        <div className="contact-container">
      <h1>Contact Us</h1>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="your@email.com" />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea placeholder="Your Message" />
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
    )
}