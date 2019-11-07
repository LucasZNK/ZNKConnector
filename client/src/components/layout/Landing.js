import React from 'react'

const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                <h1 className="x-large">Hola Giovanna</h1>
                <p className="lead">
                    Tu novio esta programando una red social y queria decirte que te ama con todo su corazon 
                </p>
                <div className="buttons">
                    <a href="register.html" className="btn btn-primary">Sign Up</a>
                    <a href="login.html" className="btn btn-light">Login</a>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Landing
