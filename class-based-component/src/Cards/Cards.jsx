import { Component } from "react";
import Card from "./Card";
import { faker } from '@faker-js/faker';

export default class Cards extends Component {
  render() {
    const currentState = 'test';
    return (
      <div className="ui cards cards-flex">
        <Card
          image={faker.image.avatar()}
          name={faker.name.firstName()}
          meta={faker.lorem.words(10)}
          description={faker.lorem.sentence(5)}
        />
         <Card
          image={faker.image.avatar()}
          name={faker.name.firstName()}
          meta={faker.lorem.words(10)}
          description={faker.lorem.sentence(5)}
        />
      </div>
    );
  }
}
