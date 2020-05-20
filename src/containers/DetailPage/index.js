import React from 'react';
import Descriptions from '../../components/Descriptions';
import mockDetails from '../../__mock__/details';

function DetailPage() {
  return (
    <div>
      <Descriptions heading="Synopsis" contents={[mockDetails.plot]} />,
    </div>
  );
}

export default DetailPage;
