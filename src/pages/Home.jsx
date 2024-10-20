import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="home">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
      </div>
      <br />
      <br />
      <img src="/images/vercelHome.png" alt="" />
    </div>
  )
}

export default Home
