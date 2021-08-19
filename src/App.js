import './App.css';
import React, {Component} from "react"
import Carousel from "react-bootstrap/Carousel"
import { Nav, Navbar, Accordion } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-scroll'

//components

import Doc from "./doctors/doc"
import Review1 from './reviews/review1';
import language from "./languages"
import MobileDocs from './mobile-carousel';

//images

import solomka from "./images/solomka.png"
import sidorenko from "./images/sidorenko.png"

 //icons

import fIcon from "./images/servIcons/1.png"
import sIcon from "./images/servIcons/2.png"
import tIcon from "./images/servIcons/3.png"
import fourthIcon from "./images/servIcons/4.png"
import fifthIcon from "./images/servIcons/5.png"
import sixthIcon from "./images/servIcons/6.png"


let langObj = language()

class App extends Component {

  constructor (props) {
    super(props)
    const {ukr,rus} = langObj
    this.state = {
      currentLang : ukr,
      currentMobileNavItem : "burger"
    }
    this.setRus = () => {    
      const ruEl = document.querySelector("#ru")
      const ukrEl = document.querySelector("#ukr")
      ruEl.className = "activeLang"
      ukrEl.className = "lang"
      this.setState(() => {return ( {currentLang : rus})})
    }
    this.setUkr = () => {
      const ruEl = document.querySelector("#ru")
      const ukrEl = document.querySelector("#ukr")
      ruEl.className = "lang"
      ukrEl.className = "activeLang"
      this.setState(() => {return ( {currentLang : ukr})})
    }
    this.changeColor = (e) => {
      e.target.style.backgroundColor="white"
    }
    this.setCross = () => {
      const burg = document.querySelector(".navbar-toggler-icon")
      const {currentMobileNavItem} = this.state
      if(currentMobileNavItem === "burger") {
        this.setState(() => {return ({currentMobileNavItem : "cross"})})
        burg.id="navbar-toggler-icon-cross"
      }
      if(currentMobileNavItem === "cross") {
        this.setState(() => {return ({currentMobileNavItem : "burger"})})
        burg.id=""
      }
      
    }
  }

  render () {
    return (
      <>
      <header>
  
        <div id="headerName"></div>
        <div id="nav">

    <span id="fBut">{this.state.currentLang.header.fBut}</span>
    <span><Link activeClass="active"  to="docHead" duration={300} offset={-200} spy={true} >{this.state.currentLang.header.secBut}</Link></span>
    <span><Link  to="services" duration={300} offset={-100}  >{this.state.currentLang.header.thirdBut}</Link></span>
    <span><Link  to="reviewHead" duration={300} offset={-200} spy={true}>{this.state.currentLang.header.fourthBut}</Link></span>
    <span><Link  to="mail" duration={300} offset={-200} spy={true} >{this.state.currentLang.header.fifthBut}</Link></span>
    <div id="langSelect">
      <span id="ru" class="lang" onClick={this.setRus}>RU</span>
      <span id="ukr" class="activeLang" onClick={this.setUkr}>UKR</span>
    </div>

  </div>
  <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
    <Navbar.Brand href="#home">
      <div id="logo"></div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={this.setCross}/>
    <Navbar.Collapse id="responsive-nav-dropdown">
      <Nav className="mr-auto">
          <Link activeClass="active"  to="docHead" duration={300}  spy={true} >{this.state.currentLang.header.secBut}</Link>
          <Link activeClass="active"  to="servHead" duration={300}  spy={true} >{this.state.currentLang.header.thirdBut}</Link>
          <Link activeClass="active"  to="reviewHead" duration={300}  spy={true} >{this.state.currentLang.header.fourthBut}</Link>
          <Link activeClass="active"  to="number" duration={300}  spy={true} >{this.state.currentLang.header.fifthBut}</Link>
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>

</header>
        <div id="upperBlock">
  
          
  
          <div id="mainUpper">
            <h1>{this.state.currentLang.main.h1}</h1>
            <div id="descr">
              <Carousel controls={false} interval={2500}>
                {this.state.currentLang.main.facts.map(fact => <Carousel.Item>{fact}</Carousel.Item>)}
              </Carousel>
            </div>
            <Link activeClass="active"  to="number" duration={300}  spy={true} ><button>{this.state.currentLang.main.but}</button></Link>
          </div>
          
        </div>
        <main>
          <h1 id="docHead">{this.state.currentLang.doctors.h1}</h1>
          <section id="carousel" name="carousel">
            <Carousel>
              <Carousel.Item>
                 <Doc img={solomka} data={this.state.currentLang.doctors.docList.zghurskyi}/> 
              </Carousel.Item>
              <Carousel.Item>
                 <Doc img={solomka} data={this.state.currentLang.doctors.docList.sidorenko}/>
              </Carousel.Item>
              <Carousel.Item>
                 <Doc img={solomka} data={this.state.currentLang.doctors.docList.solomka}/>
              </Carousel.Item>
            </Carousel>
            
          </section>
          <section id="mobileCarousel">
            <Carousel interval={null}>
              <Carousel.Item>
                <MobileDocs img={solomka} data={this.state.currentLang.doctors.docList.sidorenko}/>
                
              </Carousel.Item>

              <Carousel.Item>
                <MobileDocs img={solomka} data={this.state.currentLang.doctors.docList.solomka}/>
              </Carousel.Item>

              <Carousel.Item>
                <MobileDocs img={sidorenko} data={this.state.currentLang.doctors.docList.sidorenko}/>
              </Carousel.Item>
            </Carousel>
            <Link activeClass="active"  to="number" duration={300}  spy={true} ><button id="docBut">{this.state.currentLang.doctors.docList.sidorenko.button}</button></Link>
          </section>  
          <section id="oper">
            <div id="upperOp">
  
              <div id="services">
                <h2>{this.state.currentLang.servises.h1}</h2>
                <div id="upperOpDesc">{this.state.currentLang.servises.desc}</div>
              </div>
  
              <div class="operBlock">
                <img src={fIcon} alt="icon" class="settings"></img>
                <div id="operText">
                  <h4>{this.state.currentLang.servises.serv1}</h4>
                  <div class="serviseDesc">{this.state.currentLang.servises.serv1Desk}</div>
                </div>
                
              </div>
  
              <div class="operBlock">
              <img src={sIcon} alt="icon" class="settings"></img>
                <div id="operText">
                  <h4>{this.state.currentLang.servises.serv2}</h4>
                  <div class="serviseDesc">{this.state.currentLang.servises.serv2Desk}</div>
                </div>
                
              </div>
              <div id="downLfetBlock">
                <div class="operBlock">
                <img src={tIcon} alt="icon" class="settings"></img>
                  <div id="operText">
                    <h4>{this.state.currentLang.servises.serv3}</h4>
                    <div class="serviseDesc">{this.state.currentLang.servises.serv3Desk}</div>
                  </div>
                  
                </div>
    
                <div class="operBlock">
                <img src={sixthIcon} alt="icon" class="settings"></img>
                  <div id="operText">
                    <h4>{this.state.currentLang.servises.serv4}</h4>
                    <div class="serviseDesc">{this.state.currentLang.servises.serv4Desk}</div>
                  </div>
              </div>
              
                
              </div>
  
              <div class="operBlock">
              <img src={fifthIcon} alt="icon" class="settings"></img>
                <div id="operText">
                  <h4>{this.state.currentLang.servises.serv5}</h4>
                  <div class="serviseDesc">{this.state.currentLang.servises.serv5Desk}</div>
                </div>
                
              </div>
  
              <div class="operBlock">
              <img src={fourthIcon} alt="icon" class="settings"></img>
                <div id="operText">
                  <h4>{this.state.currentLang.servises.serv6}</h4>
                  <div class="serviseDesc">{this.state.currentLang.servises.serv6Desk}</div>
                </div>
                
              </div>
  
              
  
            </div>
            
              
              
            
          </section>
          <section id="operMobile">
            <div id="servHead">Наші послуги</div>
          <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header onClick={this.changeColor}><div class="buttonText">{this.state.currentLang.servises.serv1}</div></Accordion.Header>
                    <Accordion.Body>
                    <div class="buttonText">{this.state.currentLang.servises.serv1Desk}</div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header onClick={this.changeColor}><div class="buttonText">{this.state.currentLang.servises.serv2}</div></Accordion.Header>
                    <Accordion.Body>
                      <div class="buttonText">{this.state.currentLang.servises.serv2Desk}</div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header onClick={this.changeColor}><div class="buttonText">{this.state.currentLang.servises.serv3}</div></Accordion.Header>
                    <Accordion.Body>
                    <div class="buttonText">{this.state.currentLang.servises.serv3Desk}</div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header onClick={this.changeColor}><div class="buttonText">{this.state.currentLang.servises.serv4}</div></Accordion.Header>
                    <Accordion.Body>
                    <div class="buttonText">{this.state.currentLang.servises.serv4Desk}</div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header onClick={this.changeColor}><div class="buttonText">{this.state.currentLang.servises.serv5}</div></Accordion.Header>
                    <Accordion.Body>
                    <div class="buttonText">{this.state.currentLang.servises.serv5Desk}</div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header onClick={this.changeColor}><div class="buttonText">{this.state.currentLang.servises.serv6}</div></Accordion.Header>
                    <Accordion.Body>
                    <div class="buttonText">{this.state.currentLang.servises.serv6Desk}</div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
          </section>
          <h1 id="reviewHead">{this.state.currentLang.reviews.h1}</h1>
          <section id="reviews">
          
            <div id="reviewGrid">
              <Review1/> <Review1/> <Review1/>
            </div>
                
            <a id="readReviews"  rel="noreferrer" target="_blank" href="https://www.google.com/search?q=%D0%B7%D1%80%D0%BF%D1%86&oq=%D0%B7%D1%80%D0%BF%D1%86&aqs=chrome..69i57j46i39i175i199j0i1i10j0i1l2j69i60l2.976j0j7&sourceid=chrome&ie=UTF-8#lrd=0x40dc5ee6088d346f:0x9dbe02740ea7d681,1,,,">
             
              <div>
                Читать все отзывы
              </div>
              
            </a>
            
          </section>
          
          <section id="map">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10724.375128843645!2d35.204467!3d47.7796295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9dbe02740ea7d681!2z0JfQsNC_0L7RgNGW0LfRjNC60LjQuSDRgNC10LPRltC-0L3QsNC70YzQvdC40Lkg0L_RgNC-0YLQuNC_0YPRhdC70LjQvdC90LjQuSDRhtC10L3RgtGAIHwgItCX0KDQn9CmIg!5e0!3m2!1sru!2sua!4v1627998189522!5m2!1sru!2sua" width="100%"  height="100%" allowFullScreen="" loading="lazy"></iframe>
          </section>
          <footer>
              <div id="footerLeft">
                <div>
                  <div class="footerH">
                    Телефон:
                  </div>
                  <div id="number">
                    <a href="tel:+380689586786">+380 (68) 958-67-86</a>
                  </div>
                </div>
                
              </div>
  
              <div id="footerRight">
                <div id="mail">
                  <div class="footerH">
                    {this.state.currentLang.footer.mail}
                  </div>
                  <div class="footerText">
                      mail@gmail.com
                  </div>
                </div>
  
                <div id="adress">
                  <div class="footerH">
                    {this.state.currentLang.footer.adress}
                  </div>
                  <div class="footerText">
                    {this.state.currentLang.footer.adressDesk}
                  </div>    
                </div>
              </div>
          </footer>
        </main>
      </>
    );
  }
}
  
export default App;
