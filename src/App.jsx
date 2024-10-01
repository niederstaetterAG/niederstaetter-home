import { useState } from "react";
import "./index.css";
import Card from "./components/Card";
import clientIcon from "./assets/create-group-icon.png";
import craneIcon from "./assets/crane-icon.png";
import rentIcon from "./assets/for-rent-sign-board-icon.png";
import categoryIcon from "./assets/taxonomy-icon.png";

function App() {
  const sites = [
    {
      id: "1",
      name: "Nuovo Cliente",
      href: "https://clienti.niederstaetter.io",
      imageAlt: "Nuovo Cliente",
      imageSrc: clientIcon,
    },
    {
      id: "2",
      name: "Modulo permute",
      href: "https://forms.office.com/Pages/ResponsePage.aspx?id=eUewWliprEG_MgEwZjoj6WwRTTCaG5NFsTolwBpU82JUQlZMVldRRElJMjgxSVNGUFJDWFhIS0tPRS4u",
      imageAlt: "Modulo Permute",
      imageSrc: craneIcon,
    },
    {
      id: "3",
      name: "Richiesta Tipo Oggetto",
      href: "https://forms.office.com/Pages/ResponsePage.aspx?id=eUewWliprEG_MgEwZjoj6WwRTTCaG5NFsTolwBpU82JUMkQ3TDNBMUhFSVBUQjRaVVY2QVhKTTYxVS4u",
      imageAlt: "Richiesta Tipo Ogetto",
      imageSrc: rentIcon,
    },
    {
      id: "4",
      name: "Richiesta Oggetto",
      href: "https://forms.office.com/Pages/ResponsePage.aspx?id=eUewWliprEG_MgEwZjoj6WwRTTCaG5NFsTolwBpU82JUOEtJRVkxVlZQQzVKTllESzdSM1IwRDAxSi4u",
      imageAlt: "Richiesta Oggetto",
      imageSrc: categoryIcon,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-slate-300 via-slate-400 to-gray-400 min-h-screen">
      <div>
        <h1 className="flex justify-center items-center pt-10 text-3xl lg:text-5xl font-semibold text-gray-800 font-sans">
          Niederstätter Home
        </h1>
        <Card sites={sites} />
      </div>
    </div>
  );
}

export default App;
