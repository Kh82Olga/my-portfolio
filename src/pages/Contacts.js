import React from 'react'

const Contacts = () => {
  return (
    <div className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Brussels, Belgium</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Tel. / WhatsApp</h2>
                        <p><a href="tel:+32468455392">+32 468 45 53 92</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:kh82olga@protonmail.com">kh82olga@protonmail.com</a></p>
                    </li>
                </ul>

        </div>
    </div>
  )
}

export default Contacts