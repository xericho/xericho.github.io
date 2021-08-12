  import React, { useState } from 'react'
  import Recaptcha from 'react-google-recaptcha'
  import { navigate } from 'gatsby'

  const RECAPTCHA_KEY = '6LecAfYbAAAAAKpTuVMSWMgn_Mp-IK4zfTabmGdu'

  export default function ContactForm() {

    const [state, setState] = useState({})

    // The button is disabled by default, but on Recaptcha change, the form can be submitted
    const [buttonDisabled, setButtonDisabled] = React.useState(true)

    const recaptchaRef = React.createRef() // new Ref for reCaptcha

    const encode = data => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    // Save state of each input on change
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const recaptchaValue = recaptchaRef.current.getValue()

        // Validate inputs
        if (form.checkValidity() === false) {
            form.classList.add('was-validated')
            return
        }

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                'g-recaptcha-response': recaptchaValue,
                ...state,
            }),
        })
        .then(() => navigate(form.getAttribute('action')))
        .catch(error => alert(error))
    }

    return (
      <form name="contactForm"
        onSubmit={handleSubmit}
        data-netlify="true"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        method="POST"
        id="contactForm"
        action="/"
      >
        <input type="hidden" name="form-name" value="contactForm" />
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input onChange={handleChange} type="text" name="name" id="name" required/>
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} type="text" name="email" id="email" required/>
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea onChange={handleChange} name="message" id="message" rows="4" required></textarea>
        </div>
        <input type="hidden" className="form-control" placeholder="Favorite food" name="bot-field" />
        <Recaptcha
            ref={recaptchaRef}
            sitekey={RECAPTCHA_KEY}
            size="normal"
            id="recaptcha-google"
            onChange={() => setButtonDisabled(false)}
        />
        <ul className="actions">
          <li>
            <input disabled={buttonDisabled} type="submit" value="Send Message" className="special" />
          </li>
          <li>
            <input type="reset" value="Reset" />
          </li>
        </ul>
      </form>
    )

  }

