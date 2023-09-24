import Spline from '@splinetool/react-spline'
import Navigator from './Navigator.jsx'
import Search from './Search.jsx'
import Footer from './Footer.jsx';

import {NextUIProvider} from "@nextui-org/react";

export default function App() {
  return (
    <NextUIProvider>
      <Navigator />
      <Spline scene="https://prod.spline.design/afLgcY2ojZpUhD5C/scene.splinecode" />
      <Search />
      <Footer />
    </NextUIProvider>
  );
}
