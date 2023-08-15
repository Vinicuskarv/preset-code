import './footer.css';

function Footer() {
  return (
    <div className="container-fluid ContainerFooter">
      <div className='container campoFooter'>
        <p>Powered by <a style={styles.a}  href='https://github.com/Vinicuskarv'><strong>Vinicius Lucius</strong></a></p>
      </div>
    </div>
  );
}
const styles = {
    a:{
        textDecoration: 'none',
        color:' rgb(250, 252, 253)',
    },
    footer:{
      textDecoration: 'none',
      color:' rgb(250, 252, 253)',
      background: 'linear-gradient(0.25turn,#b53636,#B31312,#b53636)',
  }
};

export default Footer;