import React, { Component } from 'react';
import { Container,
  Row, Col, Button
} from 'reactstrap';

class SekilasProfile extends Component {
  render() {
    return (
      <div className="bgSekilasArdy paddingSection" style={{ position: 'relative' }}>
        <Container>
          <Row style={{ position: 'relative' }}>
            <Col md="4" style={{ width: '100%', position: 'relative', bottom: 0 }}>
              <img className="fotoDesktopSekilasArdy" style={{ position: 'absolute', width: '400px', bottom: '-100px', right: '20px' }} src={'./images/ardy1.png'} alt="ardypng"/>
              <div className="fotoMobileSekilasArdy">
                <img className="imgFotoMobileSekilasArdy" src={'./images/ardy-bulet.png'} alt="img-ardy-mobile"/>
              </div>
            </Col>
            <Col md="8">
              <br/>
              <h3 className="h3ArdySekilas">Tentang Ardy Susanto</h3>
              <p className="pArdy">Ardy Susanto lahir di Ujung Pandang (sekarang Kota Makassar), Sulawesi Selatan pada 30 Oktober 1984, Ardy menyelesaikan pendidikan ilmu Hukum di Universitas Tarumanegara pada 2007. Pada tahun 2009-2014, Ardy dipercaya menjadi Tenaga Ahli Anggota DPR RI.</p>
              <p className="pArdy">"Saya masuk politik karena mau bantu orang dan itu lebih murah dan lebih mudah melalui jalur politik." tutur Ketua Umum DPP Ikatan Pemuda Tionghoa Indonesia, Ardy Susanto.</p>
              <Button className="btnSekilas" color="warning" size="lg">Lebih Lanjut Tentang Ardy</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SekilasProfile;