import React from "react";
import { State, Country} from "country-state-city";
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Details de livraison</h1>
        <form>
          <div>
            <label>Adresse</label>
            <input type="text" placeholder="Introduisez votre adresse" />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Introduisez votre ville" />
          </div>
          <div>
            <label>Country</label>
            <select>
              <option value="">Inde</option>
              {Country.getAllCountries().map((country) => (
                <option value={country.isoCode} key={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Etat/Region</label>
            <select>
              <option value="">Etat/Region</option>
              {State.getStatesOfCountry("IN").map((state) => (
                <option value={state.isoCode} key={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Code postal</label>
            <input type="number" placeholder="Introduisez votre code postal" />
          </div>
          <div>
            <label>N° de téléphone</label>
            <input type="number" placeholder="Introduisez votre n° de téléphone" />
          </div>
          <Popup
            trigger={
              <Link className="link" to="/myorders">
                Confirmer la commande
              </Link>
            }
          >
            <div
              style={{
                color: "red",
                transform: "translate(0%, -500%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Votre commande est en cours de traitement !
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
