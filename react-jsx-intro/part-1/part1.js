// FirstComponent
const FirstComponent = () => {
    return <h1>My very first component</h1>;
  };
  
  // NamedComponent
  const NamedComponent = (props) => {
    return <p>My name is {props.name}</p>;
  };
  
  // App
  const App = () => {
    return (
      <div>
        <FirstComponent />
        <NamedComponent name="Mary" />
      </div>
    );
  };
  
  // Render the App component to the root div
  ReactDOM.render(<App />, document.getElementById('root'));
  