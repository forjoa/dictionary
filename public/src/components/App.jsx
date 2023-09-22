import Spline from '@splinetool/react-spline'
import Navigator from './Navigator.jsx'
import Search from './Search.jsx'

export default function App() {
  return (
    <>
      <Navigator />
      <Spline scene="https://prod.spline.design/afLgcY2ojZpUhD5C/scene.splinecode" />
      <Search />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur explicabo, a nihil recusandae aut eaque voluptatibus. Natus asperiores amet exercitationem vitae, ducimus repellat deleniti sapiente mollitia! Molestias dolor minus explicabo.</p>
    </>
  );
}
