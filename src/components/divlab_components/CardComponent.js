import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const CardComponent = props => {
  const { name, description, footer, caption, imageUrl } = props.info;

  return name.length ||
    description.length ||
    footer.length ||
    caption.length ||
    imageUrl.length ? (
    <Card>
      <Image src={imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{caption}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>{footer}</Card.Content>
    </Card>
  ) : (
    <div>
      <Image alt="" src="images/CardExample.png" />
    </div>
  );
};

export default CardComponent;
