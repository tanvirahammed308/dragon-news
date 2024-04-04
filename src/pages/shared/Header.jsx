import logo from "/logo.png"
import moment from 'moment';

const Header = () => {
  return (
    <div className="text-center">
        <img src={logo} alt="" className="mx-auto"/>
        <h3>Journalism Without Fear or Favour</h3>
        <p>{moment().format("dddd, MMMM Do ,YYYY,")
}</p>
    </div>
  )
}

export default Header