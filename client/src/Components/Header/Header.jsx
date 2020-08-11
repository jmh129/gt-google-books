import React from 'react';

import { Jumbotron } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Search For a Book!</h1>
      </Jumbotron>
    </div>
  );
};

export default Header;