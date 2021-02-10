import React from 'react';

const LoginPage = ({isLoggedIn, onLogin}) => {

  if (isLoggedIn) {
    return <p> Logged</p>
  }

  return (
    <div className="jumbotron">
      <p>Login to see secret page!</p>
      <button
        className="btn btn-primary"
        onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
