import React from "react";
import Icon from "../Icon.jsx";
import Lotus from "../Lotus.jsx";

export default function BenefitsBar() {
  return (
    <section className="benefits" aria-label="Våra värden">
      <div><Lotus /><span>Unika indiska produkter</span></div>
      <div><Icon name="heart" /><span>Dofta, prova, känna</span></div>
      <div><Icon name="sun" /><span>Personlig service</span></div>
      <div><Icon name="leaf" /><span>Hållbara och genuina varor</span></div>
    </section>
  );
}
