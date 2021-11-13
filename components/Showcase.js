import React from "react";

function Showcase() {
  return (
    <section className="h-screen">
      {/* Showcase Description */}
      <div className="text-4xl font-bold text-white mt-40">
        <p>Tworzymy strony internetowe.</p>
        <p>Kochamy to.</p>
      </div>
      <div className="text-sm font-normal mt-8 text-white mb-12">
        <p>Zbuduj z nami swoją następną stronę, </p>
        <p>portfolio lub sklep internetowy</p>
      </div>
      {/* Button */}
      <div>
        <a href="#" className="bg-white py-3 px-7 rounded-3xl font-bold">
          Nawiąż współpracę
        </a>
      </div>

    </section>
  );
}

export default Showcase;