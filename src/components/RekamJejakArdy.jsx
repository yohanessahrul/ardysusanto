import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Steps, { Step } from 'rc-steps';

class RekamJejakArdy extends Component {
  render() {
    const description = '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊';
    return (
      <div style={{ width: '100%', background: '#d9ffea' }} className="paddingSection">
        <Container>
          <h2 style={{ textAlign: 'center' }}>Rekam Jejak</h2>
          <br/>
          <Row>
            <Col md="2">
            </Col>
            <Col md="8">
              <Steps direction="vertical" current={9}>
                <Step icon={2010} title="Kepala Sekolah" description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt excepturi quidem vitae eos, hic minima odit rerum dolor quibusdam est, sit magnam perspiciatis totam sequi ducimus corrupti doloribus ea cum.'} />
                <Step icon={2013} title="Direktur Utama" description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi labore facere iure fuga similique, error quia suscipit recusandae. Quae laborum porro accusantium dolor! Perspiciatis, eveniet? Repellat tempore maiores architecto possimus.'} />
                <Step icon={2016} title="Kepala Suku" description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita at sapiente quod nostrum voluptas iusto exercitationem est odio reiciendis maiores voluptate consequatur excepturi, tenetur voluptatibus illo inventore laudantium quis earum.'} />
                <Step icon={2017} title="Kepala OJK" description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ut voluptate, deserunt reiciendis provident tenetur? Nesciunt quam, asperiores architecto veniam aliquam velit ducimus dolores ex tempora laboriosam possimus officia magnam!'} />
                <Step icon={2018} title="Presiden RI 2018" description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quis dolores adipisci, exercitationem provident dolor eaque ad placeat! Aut, dolore molestiae tempore delectus odio sint iste sit asperiores consectetur iure?'} />
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