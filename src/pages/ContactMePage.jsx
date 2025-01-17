// This is a static page mocking an "About Us" section for our fake user data
export default function ContactPage() {
    return (
        <section class="page-section" id="contactMe">
            <h2>Contact Me</h2>
            <div class="contact-address">
                <h2>Contact Us</h2>
                <form action="/submit_form" method="post">
                    <label for="name">Name:</label>
                    <br />
                    <input type="text" id="name" name="name" required />
                    <br />
                    <br />
                    <label for="email">Email:</label>
                    <br />
                    <input type="email" id="email" name="email" required />
                    <br />
                    <br />
                    <label for="message">Message:</label>
                    <br />
                    <textarea id="message" name="message" required></textarea>
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
        </section>);
}
