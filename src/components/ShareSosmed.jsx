import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {facebook,twitter,whatsapp} from 'react-icons-kit/fa';

class ShareSosmed extends Component {
  render() {
    return (
      <div>
        <div style={{ width: '100%', background: 'red' }}>
          <ul className="sosialShareButton">
            <li>
              <Icon style={{ display: 'table', margin: '0 auto' }} icon={facebook}></Icon>
              <p>Share : </p>
            </li>
            <li>
              <Icon style={{ display: 'table', margin: '0 auto' }} icon={facebook} size={20}/>
              <p>Share Facebook</p>
            </li>
            <li>
              <Icon style={{ display: 'table', margin: '0 auto' }} icon={twitter} size={20}/>
              <p>Share Twitter</p>
            </li>
            <li>
              <Icon style={{ display: 'table', margin: '0 auto' }} icon={whatsapp} size={20}/>
              <p>Share Whatsapp</p>
            </li>
            <div className="clear"></div>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShareSosmed;