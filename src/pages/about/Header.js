import imgTeam from '../../components/undraw_team_spirit_re_yl1v.svg'
import './Header.css'

function Header() {
  return (
    <>
      <div className="primarySection">
        <div className='container'>
          <h1>PresetCode</h1>
          <p>
            Imagine you're about to start developing a new website, but you want to save time and effort during construction.
            Fortunately, you've discovered an amazing website called "PresetCode." This site offers a variety of pre-built code snippets
            that can significantly accelerate the website building process.
          </p>
          <p>
            When you visit PresetCode, you're greeted with a wide range of options, from home page templates to more specific components
            like navigation menus, image carousels, and contact forms. Each of these elements has been thoughtfully designed.
          </p>
        </div>
      </div>
      <div className="secondarySection">
        <div className='container'>
          <div className='topTeamImage'>
            <img src={imgTeam} alt="Imageundraw_web_devices"/>
          </div>
          <h3>Advantages of Using PresetCode:</h3>
          <ol className='list'>
            <li>
              <small>Time Savings:</small> Instead of starting from scratch, you can choose a template that fits your project and customize
              it according to your needs. This can significantly reduce the time required to have a functional website.
            </li><br/>
            <li>
              <small>Professional Design:</small> The provided pre-built codes are created by talented designers and developers, ensuring
              that your website has a professional and appealing appearance.
            </li><br/>
            <li>
              <small>Consistency:</small> With standardized pre-built codes, you ensure visual consistency throughout your website. This
              helps create a cohesive user experience.
            </li><br/>
            <li>
              <small>Updates and Support:</small> PresetCode frequently updates its pre-built codes to align with the latest web trends and
              best practices.
            </li><br/>
            <li>
              <small>Adaptation to Needs:</small> Whether it's a corporate website, a personal blog, or an online store, PresetCode offers
              a wide variety of pre-built codes that can be adapted to meet your specific needs.
            </li><br/>
            <li>
              <small>Learning and Customization:</small> Even if you're new to web development, exploring the pre-built codes provided by
              the website can be a great way to learn about code structuring and responsive design. Additionally, you can customize the
              pre-built codes to add unique touches to your website.
            </li><br/>
          </ol>
          <p>
            In summary, PresetCode is a valuable tool to expedite the website construction process, allowing you to leverage the efficiency
            of pre-built codes without compromising the quality or individuality of your project. If you're seeking a way to save time and
            still have an attractive and functional website, it's definitely worth exploring what PresetCode has to offer.
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
