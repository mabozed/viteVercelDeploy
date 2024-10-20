import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="home">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
      </div>
      <br />
      <br />
      About
    </div>
  )
}

export default About
