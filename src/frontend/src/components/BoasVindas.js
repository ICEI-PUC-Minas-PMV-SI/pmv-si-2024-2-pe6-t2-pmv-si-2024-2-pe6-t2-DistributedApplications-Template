import React from 'react';
import { Form } from 'react-bootstrap';

function BoasVindas() {
  return (
    <div className="boas-vindas-container" style={{ padding: '5px' }}> 
      <h1 style={{ marginBottom: '0px', marginLeft: '10%', textAlign: 'left'}}> Bem-vindo(a), Aline!</h1>

      <Form
        className="p-3"
        style={{
          background: '#9A879D66',
          borderRadius: '8px',
          color: '#7E5A9B',
          maxWidth: '671px',
          marginLeft:'10%'
         
        }}
      >
        <span
          style={{
            color:'#000000',
            fontFamily: 'Roboto',
            marginTop: '10px',
            display: 'block', 
            textAlign: 'center', 
          }}
        >
          Sua agenda organizada, seus clientes satisfeitos. </span>
      </Form>
    </div>
  );
}

export default BoasVindas;
