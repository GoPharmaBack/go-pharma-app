import React, { Component } from "react";

import axios from "axios";
import Astronauta from "../img/ee.png";
import 'aos/dist/aos.css';

class ContactForm extends Component {

  constructor() {

    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      status: "Enviar",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: "Enviando..." });

    axios({
      method: "POST",
      url: "https://13.58.216.185:5000/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        window.location.href = "/success";
        console.log("Mensaje enviado");

        this.setState({ name: "", email: "", message: "", status: "Enviado" });
      } else if (response.data.status === "failed") {
        window.location.href = "/error";
        console.log("Error en el mensaje, porfavor intenta de nuevo");
      }
    });
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "phone") {
      this.setState({ phone: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }

  render() {
    let buttonText = this.state.status;

    return (
      <section className="section contacto-section" data-aos="fade-in">
        <h1>Contacto</h1>
        <div className="contenedor contact_form">
          <img
            className="astronauta"
            src={Astronauta}
            alt="Go-pharma, MKT MEDIA especializada en el mercado PHARMA y el sector SALUD."
          />
          <form

            className="formulario"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST">

            <div className="labelArea">

              <input
                placeholder="Nombre completo**"
                type="text"
                id="name"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
                required
              />
            </div>

            <div className="labelArea">
              <input
                placeholder="Correo electrónico**"
                type="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                required
              />
            </div>

            <div className="labelArea">
              <input
                placeholder="Teléfono"
                type="phone"
                id="phone"
                value={this.state.phone}
                onChange={this.handleChange.bind(this)}
              />
            </div>

            <div className="labelArea">
              <textarea
                placeholder="¿Cómo podemos ayudarte?**"
                id="message"
                value={this.state.message}
                onChange={this.handleChange.bind(this)}
                required
              />
            </div>

            <small >
              ** información requerida
              <br />
              Al enviar este formulario, se le agregará a nuestra lista de correo.
            </small>

            <br />

            <button className="btn-primario" type="submit">
              {buttonText}
            </button>

            <br />

          </form>
        </div>
      </section>
    );
  }
}

export default (ContactForm);