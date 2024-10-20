import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div>
      <div className="home">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <br />
      <br />
      Services
    </div>
  )
}

export default Services
