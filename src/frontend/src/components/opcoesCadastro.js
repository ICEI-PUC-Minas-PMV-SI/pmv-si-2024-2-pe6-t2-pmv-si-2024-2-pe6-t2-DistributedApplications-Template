import React from 'react';
import Image from 'react-bootstrap/Image';

function BoasVindas() {
  return (
    <div className='row justify-content-center'>
      <div className='col-sm-6 mb-3 mb-sm-0'>
        <div className="container text-center" style={{ padding: '5px' }}>
          <h1
            className="custom-title mt-5"
            style={{ color: '#7E5A9B', fontSize: '36px', fontFamily: 'Roboto', textAlign: 'center' }}
          >
            CADASTROS
          </h1>
          <div className="card-group d-flex text-center" style={{ gap: '20px' }}>

            <div className="card align-middle p-3" style={{ backgroundColor: '#7E5A9B' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '170px' }}>
                <Image src="/cliente.png" alt="Imagem 1" style={{ width: '85%', height: 'auto', maxWidth: '200px' }} />
              </div>
              <div className="card-body">
                <h5 className="card-title" >CLIENTES</h5>
              </div>
            </div>
            <div className="card d-flex" style={{ backgroundColor: '#7E5A9B' }}>
              <div style={{ height: '170px' }}>
                <Image src="/servico.png" alt="Imagem 2" style={{ width: '85%', height: 'auto', maxWidth: '200px' }} />
              </div>
              <div className="card-body">
                <h5 className="card-title" >SERVIÇOS</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default BoasVindas;
