import React from 'react';

function DivEstilizada() {
  const estiloDiv = {
    backgroundColor: '#4CAF50',
    color: 'white', 
    padding: '20px', 
    margin: '10px', 
    borderRadius: '5px', 
    textAlign: 'center' 
  };

  return (
    <div style={estiloDiv}>
      Este é um exemplo de uma div com estilo inline.
    </div>
  );
}

export default DivEstilizada;
