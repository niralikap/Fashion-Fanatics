import background from '../assets/fashion.jpg';

function Header() {
const myStyle={
    backgroundImage: `url(${background})`,
    height:'85vh',
    marginTop:'-10px',
    fontSize:'5px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
return (
  <div style={myStyle}>
      
  </div>
);
}

export default Header;