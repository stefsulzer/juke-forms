import React, { Component } from 'react';

import Artists from './Artists';
import FilterInput from './FilterInput';


export default class extends Component {




  render() {
   return (
          <div>
            <FilterInput />
            <Artists />
          </div>
          )
  }

}
