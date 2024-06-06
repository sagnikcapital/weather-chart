import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUIComponent = () => {
  return (
    <div>
      <SwaggerUI url="/server/contact-us-api.json" />
    </div>
  );
};

export default SwaggerUIComponent;