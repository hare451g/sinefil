import React from 'react';

import { Container, Heading, Contents } from './styled';

function Descriptions({ heading = '', contents = [] }) {
  return (
    <Container>
      <Heading data-testid="description-heading">{heading}</Heading>
      {contents.map((content, index) => (
        <Contents
          data-testid={`description-content-${index}`}
          key={`description-content-${index}`}
        >
          {content}
        </Contents>
      ))}
    </Container>
  );
}

export default Descriptions;
