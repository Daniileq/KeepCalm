import React from 'react';

function ErrorPage() {
  return (
    <div className="error_container">
      <div className="error_number"><h1>404</h1></div>
      <div className="error_info font_subheading">К сожалению такой страницы не существует😬</div>
    </div>
  );
}

export default ErrorPage;
