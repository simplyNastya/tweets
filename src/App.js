import { store } from './redux/store';
import { Provider } from 'react-redux';
import TweetsPage from './pages/TweetsPage/TweetsPage';

function App() {
  return (
    <Provider store={store}>
      <TweetsPage />
    </Provider>
  );
}

export default App;
