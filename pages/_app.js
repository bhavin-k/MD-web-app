import { persistor, store } from '../contexts/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import '../public/fonts/fonts.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavBar />
        <Component {...pageProps} />;
        <Footer />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
