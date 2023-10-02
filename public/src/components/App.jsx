import Spline from '@splinetool/react-spline'
import Navigator from './Navigator.jsx'
import Search from './Search.jsx'
import Footer from './Footer.jsx';

export default function App() {
  return (
    <>
      <Navigator />
      <Spline scene="https://prod.spline.design/afLgcY2ojZpUhD5C/scene.splinecode" />
      <Search />
      <Footer />
    </>
  );
}
