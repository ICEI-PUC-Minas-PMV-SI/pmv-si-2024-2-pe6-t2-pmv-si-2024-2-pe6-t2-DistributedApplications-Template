import React from 'react';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';

function Opcoes() {
  const navigate = useNavigate();

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-sm-6 col-12 d-flex justify-content-center mb-3 pe-0 mt-5 mb-5">
        <div className="container text-center">
          <h1
            className="custom-title mb-2"
            style={{ color: '#7E5A9B', fontSize: '50px', fontFamily: 'Roboto', textAlign: 'center' }}
          >
            CADASTROS
          </h1>
          <div className="card-group d-flex justify-content-center text-center mt-5 flex-wrap" style={{ gap: '40px' }}>
            <div
              className="card align-middle p-3"
              style={{
                backgroundColor: '#7E5A9B',
                borderRadius: '10px',
                cursor: 'pointer',
                height: '175px',
                maxWidth: '175px'
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
                    maxWidth: '90px'
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: 'center', color: '#F79824', fontSize: '20px' }}>CLIENTES</h5>
              </div>
            </div>

            <div
              className="card align-middle p-3"
              style={{
                backgroundColor: '#7E5A9B',
                borderRadius: '10px',
                cursor: 'pointer',
                height: '175px',
                maxWidth: '180px'
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
                    maxWidth: '90px'
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: 'center', color: '#F79824', fontSize: '20px' }}>SERVIÇOS</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opcoes;
