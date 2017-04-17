import React, { Component } from 'react';
import { connect } from 'react-redux';
import dataRef from '../storeIndex.js';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateBD: {},
      init: 0,
      clocktimer: {}
    }

    this.findTIME = this.findTIME.bind(this);
    this.startTIME = this.startTIME.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.removeData = this.removeData.bind(this);
  }

  startTIME() {
    let t = new Date().getTime() - this.state.dateBD.startDate;
    t = Math.floor (t/1000);
    let s = t%60; 
    t -= s;
    t = Math.floor (t/60);
    let m = t%60;
    t-=m;
    t = Math.floor (t/60);
    let h = t%60;
    if (h<10) h='0'+h;
    if (m<10) m='0'+m;
    if (s<10) s='0'+s;
    if (this.state.init === 1) {
      this.setState({ dateBD: { ...this.state.dateBD, time: `${h}:${m}:${s}` }});
      this.location();
    }
    this.setState({ clocktimer: setTimeout(this.startTIME, 1000) });
  }

  clearFields() {
    this.setState({ init: 0 });
    clearTimeout(this.state.clocktimer);
  }

  findTIME() {
    if (this.state.init === 0) {
      this.setState({ dateBD: { ...this.state.dateBD, startDate: new Date().getTime() }});
      this.startTIME();
      this.setState({ init: 1 });
    }
    else {
      console.log(this.props.store.data.length)
      /**/
      this.setData();
      this.clearFields();
    }
  }

  location() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        // Текущие координаты.
        this.setState({ dateBD: { ...this.state.dateBD, lat: position.coords.latitude }});
        this.setState({ dateBD: { ...this.state.dateBD, log: position.coords.longitude }});
      });
      this.props.increment(this.state.dateBD.time);
      this.props.incrementData(this.state.dateBD);
    }
  }

  setData() {
    dataRef.then(result => {
      result.set(this.props.store.data);
    });
  }

  removeData() {
    dataRef.then(result => {
      result.remove();
    });
  }

  render() {
    return (
      <div>
        <button className='btn-counter' onClick={this.findTIME}>Start / Stop</button>
        <button className='btn-counter' onClick={this.removeData}>Remove Data</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    store: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      increment: (data) => {
        dispatch({
          type: 'AddCounter',
          amount: data
        });
      },

      incrementData: (data) => {
        dispatch({
          type: 'AddData',
          amount: data
        });
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);
