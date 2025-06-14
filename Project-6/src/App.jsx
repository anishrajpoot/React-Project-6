import React from "react";
import Carousel from "./components/carousel";

export default function App() {
  return (
    <div>
      <header>
        <nav>
          <a href="#">Home</a>
          <a href="#">Contacts</a>
          <a href="#">Info</a>
        </nav>
      </header>
      <Carousel />
    </div>
  );
}
