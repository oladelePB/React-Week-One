import React from "react";
import { faker } from "@faker-js/faker";
import BioCard from "./BioCard";

const BioCards = () => {
  return (
    <div className="App">
      <BioCard
        image={faker.image.avatar()}
        description={faker.lorem.lines(3)}
        name={faker.name.findName()}
        friends={`${Math.floor(Math.random() * 10)} friends`}
      />
    </div>
  );
};

export default BioCards;
