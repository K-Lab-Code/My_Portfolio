import {useEffect} from 'react'

export default function ContactPage() {
    useEffect(()=>{
        document.getElementById('name').value = localStorage.getItem('name');
        document.getElementById('email').value = localStorage.getItem('email');
        document.getElementById('message').value = localStorage.getItem('message');
    });
    function save(){
        localStorage.setItem('name', document.getElementById('name').value || '');
        localStorage.setItem('email', document.getElementById('email').value || '');
        localStorage.setItem('message', document.getElementById('message').value || '');
    }
    function validateField(event) {
        if (!event.target.value.trim()) {
            event.target.setCustomValidity('Please fill out this field');
        } else {
            event.target.setCustomValidity('');
        }
        event.target.reportValidity();
    }
    function handleSubmit(event) { 
        //event.preventDefault(); 
        console.log("submit"); 
    }

    return (
        <section className="page-section" id="contactMe">
            <h2>Contact Me</h2>
            <div className="contact-address">
                <form onSubmit={handleSubmit} method="post">
                    <label for="name">Name:</label>
                    <br />
                    <input type="text" id="name" name="name" required onChange={save} onMouseOut={validateField}/>
                    <br />
                    <br />
                    <label for="email">Email:</label>
                    <br />
                    <input type="email" id="email" name="email" required onChange={save} onMouseOut={validateField}/>
                    <br />
                    <br />
                    <label for="message">Message:</label>
                    <br />
                    <textarea id="message" name="message" required onChange={save} onMouseOut={validateField}></textarea>
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Currently this project does not have the kind of server to support this form actually working here is my email in the mean time: <a href="mailto:kalabsb@me.com">Kalabsb@me.com</a></p>

            </div>
        </section>);
}
