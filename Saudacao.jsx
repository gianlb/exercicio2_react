import React from 'react';

function Saudacao({ hora }) {
  return (
    <h1>{hora ? "Bom dia" : "Boa noite"}</h1>
  );
}

export default Saudacao;
