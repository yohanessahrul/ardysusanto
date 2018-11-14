import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class ProfilArdy extends Component {
  render() {
    return (
      <div style={{ width: '100%', background: 'white' }} className="paddingSection">
        <Container>
          <Row>
            <Col md="12">
              <div style={{ width: '300px', height: '300px', background: 'yellow', margin: '25px auto 0 auto', borderRadius: '250px', overflow: 'hidden' }}>
                <img style={{ width: '100%' }} src={'./images/ardy-bulet.png'} alt="ardy-susanto"/>
              </div>
              <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
                Ardy Susanto
              </h2>
              <p style={{ textAlign: 'center', lineHeight: '1em' }}>
                CALON DPR RI DAPIL BANTEN 3
              </p>
              <p style={{ textAlign: 'center', marginTop: '40px', fontSize: '18px' }}>
                Ardy Susanto lahir di Ujung Pandang (sekarang Kota Makassar), Sulawesi Selatan pada 30 Oktober 1984, Ardy menyelesaikan pendidikan ilmu Hukum di Universitas Tarumanegara pada 2007. Pada tahun 2009-2014, Ardy dipercaya menjadi Tenaga Ahli Anggota DPR RI.
                <br/>
                "Saya masuk politik karena mau bantu orang dan itu lebih mudah melalui jalur politik." tutur Ketua Umum DPP Ikatan Pemuda Tionghoa Indonesia, Ardy Susanto.
              </p>
            </Col>
          </Row>
          <Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProfilArdy;