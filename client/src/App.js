import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <Routes />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
