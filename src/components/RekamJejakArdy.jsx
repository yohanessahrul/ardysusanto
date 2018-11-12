import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Steps, { Step } from 'rc-steps';

class RekamJejakArdy extends Component {
  constructor (props) {
    super (props)
    this.haha = this.haha.bind(this);
  }
  haha (str) {
    console.log('HAHAHAHA KENA DAH', str)
  }
  render() {
    return (
      <div style={{ width: '100%', background: '#d9ffea' }} className="paddingSection">
        <Container>
          <h2 style={{ textAlign: 'center' }}>Rekam Jejak</h2>
          <br/>
          <Row>
            <Col md="2">
            </Col>
            <Col md="8">
              <Steps direction="vertical">
                <Step
                  title="Alumni S1 FH Universitas Tarumanegara (UNTAR)" onClick={() => this.haha(1)}
                  // description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt excepturi quidem vitae eos, hic minima odit rerum dolor quibusdam est..'} 
                />
                <Step
                  title="Advokat" onClick={() => this.haha(2)}
                  // description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi labore facere iure fuga similique, error quia suscipit recusandae'} 
                />
                <Step
                  title="Ketua DPP PKB Bidang Hukum dan Perundangan" onClick={() => this.haha(3)}
                  // description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita at sapiente quod nostrum voluptas iusto exercitationem est odio reiciendis maiores.'} 
                />
                <Step
                  title="PLT Ketua Pemuda Katolik Banten" onClick={() => this.haha(7)}
                  // description={'Periode : -'}
                />
                <Step
                  title="Ketua Pemuda Marga Huang" onClick={() => this.haha(8)}
                  // description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt excepturi quidem vitae eos, hic minima odit rerum dolor quibusdam est."
                />
                <Step
                  title="Bendahara Umum PP Pemuda Katolik" onClick={() => this.haha(6)}
                  description={'Periode : 2012 - Sekarang.'}
                />
                <Step
                  title="Sekjen Perhimpunan Perusahaan Penjualan Langsung Indonesia (P3LI)" onClick={() => this.haha(7)}
                  description={'Periode : 2013 - Sekarang'}
                />
                <Step
                  title="Wakil Sekretaris Umum PSMTI Pusat (Paguyuban Sosial Marga Tionghoa Indonesia)" onClick={() => this.haha(5)}
                  description={'Periode : 2013 - Sekarang.'} 
                />
                <Step
                  title="Ketua Umum DPP IPTI (Ikatan Pemuda Tionghoa Indonesia)" onClick={() => this.haha(4)}
                  description={'Periode : 2014 - Sekarang.'}
                />
                <Step
                  title="Kepala Bidang Hukum dan Penegakkan Peraturana Perundang-undangan Indonesia Bioler Turbine Association (IBTA)" onClick={() => this.haha(7)}
                  description={'Periode : 2016 - Sekarang'}
                />
              </Steps>
            </Col>
            <Col md="2"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RekamJejakArdy;