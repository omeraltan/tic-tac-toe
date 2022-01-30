import React from 'react';
import ReactDOM from 'react-dom';

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

  function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Hoşgeldiniz
        </h1>
        <p className="Dialog-message">
          Uzay aracımızı ziyaret ettiğiniz için teşekkür ederiz!
        </p>
      </FancyBorder>
    );
  }

  export default WelcomeDialog();

  ReactDOM.render(<WelcomeDialog/>, document.getElementById('root'));