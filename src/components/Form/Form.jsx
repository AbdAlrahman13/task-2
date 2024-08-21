import "./Form.css"

function Message() {
  return (
    <div className="form">
        <form action="">
            <label htmlFor="name">Full Name</label>
            <input type="text" placeholder="Your Name..." id="name" />
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="Your E-mail..." id="email" />
            <label htmlFor="subject">Subject</label>
            <input type="email" placeholder="Subject..." id="subject"/>
            <label htmlFor="text">Message</label>
            <textarea id="text" placeholder="Your Message"></textarea>
            <button>Send Message</button>
        </form>

    </div>
  )
}

export default Message