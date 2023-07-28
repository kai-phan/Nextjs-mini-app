import React from 'react';

import CreateForm from './CreateForm';

export type Props = {
  className?: string;
};

const CodeContainer: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <div>CodeContainer CODE CODE CODE</div>
      <CreateForm />
    </React.Fragment>
  );
};

export default CodeContainer;
