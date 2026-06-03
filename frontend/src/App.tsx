import { AppRoutes } from './routes/AppRoutes';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
