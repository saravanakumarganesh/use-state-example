import React, { useState } from 'react';
import Card from '../card/card.component';

const UseStateExample = () => {
  const [name, setName] = useState('Saravana');
  const [address, setAddress] = useState('Canada');
  return (
    <Card>
      <h1>{name}</h1>
      <h1>{address}</h1>
      <button onClick={() => setName('Karuna')}>Set Name to Karna</button>
      <button onClick={() => setAddress('United States')}>Set Address</button>
    </Card>
  );
};

class StateClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Saravana',
      address: 'Canada',
    };
  }

  render() {
    return (
      <Card>
        <h1>{this.state.name}</h1>
        <h1>{this.state.address}</h1>
        <button onClick={() => this.setState({ name: 'Karuna' })}>
          Set Name to Karuna
        </button>
        <button onClick={() => this.setState({ address: 'United States' })}>
          Set Address
        </button>
      </Card>
    );
  }
}

export default UseStateExample;
