import React from 'react';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';

function Opcoes() {
  const navigate = useNavigate();

  return (
    <div className='row justify-content-center'>
      <div className='col-sm-6 mb-3 mb-sm-0 pe-0'>
        <div className="container text-center pe-0 p-3" style={{ padding: '5px' }}>
          <h1
            className="custom-title mt-5 mb-2"
            style={{ color: '#7E5A9B', fontSize: '50px', fontFamily: 'Roboto', textAlign: 'center' }}
          >
            CADASTROS
          </h1>
          <div className="card-group d-flex text-center" style={{ gap: '20px' }}>

            <div
              className="card align-middle p-3"
              style={{
                backgroundColor: '#7E5A9B',
                borderRadius: '10px',
                cursor: 'pointer'
              }}
              onClick={() => navigate('/clientes')}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '170px'
                }}
              >
                <Image
                  src="/cliente.png"
                  alt="Imagem 1"
                  style={{
                    width: '85%',
                    height: 'auto',
                    maxWidth: '150px'
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: 'center', color:'#F79824', fontSize:'30px' }}>CLIENTES</h5>
              </div>
            </div>

            <div
              className="card align-middle p-3"
              style={{
                backgroundColor: '#7E5A9B',
                borderRadius: '10px',
                cursor: 'pointer'
              }}
              onClick={() => navigate('/servico')}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '170px'
                }}
              >
                <Image
                  src="/servico.png"
                  alt="Imagem 2"
                  style={{
                    width: '85%',
                    height: 'auto',
                    maxWidth: '160px'
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: 'center', color:'#F79824', fontSize:'30px'}}>SERVIÇOS</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opcoes;
