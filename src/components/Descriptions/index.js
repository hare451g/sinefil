import React from 'react';

import { Container, Heading, Contents } from './styled';

function Descriptions({ heading = '', contents = '' }) {
  return (
    <Container>
      <Heading data-testid="description-heading">{heading}</Heading>
      <Contents data-testid={`description-content`} key={`description-content`}>
        {contents}
      </Contents>
    </Container>
  );
}

export default Descriptions;
