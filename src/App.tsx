import React from 'react';

type PressedKey = {
  title: string;
};

export class App extends React.Component<{}, PressedKey> {
  state = {
    title: 'Nothing was pressed yet',
  };

  handleKeyPressed = (event: KeyboardEvent) => {
    this.setState({ title: `The last pressed key is [${event.key}]` });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPressed);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPressed);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">{this.state.title}</p>
      </div>
    );
  }
}
