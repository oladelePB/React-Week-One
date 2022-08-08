import React from "react";
import { Card, Icon } from "semantic-ui-react";

const BioCard = ({ friends, name, description, image }) => {
  const extra = (
    <a>
      <Icon name="user" />
      {friends}
    </a>
  );

  return (
    <Card
      header={name}
      image={image}
      description={description}
      extra={extra}
    />
  );
};

export default BioCard;
