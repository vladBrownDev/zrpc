import './App.css';
import React, {Component} from "react"
import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import Doc1 from "./doctors/doc1"
import Review1 from './reviews/review1';
import language from "./languages"
import {Link} from 'react-scroll'

// import emailjs from "emailjs-com"


  let langObj = language()

  console.log(langObj)


class App extends Component {

  constructor (props) {
    super(props)
    const {ukr,rus} = langObj
    this.state = {
      currentLang : ukr
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

  }

  render () {
    return (
      <>
        <div id="upperBlock">
  
          <header>
  
            <div id="headerName">ЗРПЦ</div>
            <div id="nav">
  
              <span id="fBut">{this.state.currentLang.header.fBut}</span>
              <span><Link activeClass="active"  to="docHead" duration={300} offset={-200} spy={true} smooth={true}>{this.state.currentLang.header.secBut}</Link></span>
              <span><Link  to="services" duration={300} offset={-100}  smooth={true}>{this.state.currentLang.header.thirdBut}</Link></span>
              <span><Link  to="reviewHead" duration={300} offset={-200} spy={true} smooth={true}>{this.state.currentLang.header.fourthBut}</Link></span>
              <span><Link  to="mail" duration={300} offset={-200} spy={true} smooth={true}>{this.state.currentLang.header.fifthBut}</Link></span>
              <div id="langSelect">
                <span id="ru" class="lang" onClick={this.setRus}>RU</span>
                <span id="ukr" class="activeLang" onClick={this.setUkr}>UKR</span>
              </div>
  
            </div>
  
          </header>
  
          <div id="mainUpper">
  
            <h1>{this.state.currentLang.main.h1}</h1>
            <div id="descr">
              <Carousel controls={false} interval={2500}>
                <Carousel.Item>{this.state.currentLang.main.fact1}</Carousel.Item>
                <Carousel.Item>{this.state.currentLang.main.fact2}</Carousel.Item>
                <Carousel.Item>{this.state.currentLang.main.fact3}</Carousel.Item>
                <Carousel.Item>{this.state.currentLang.main.fact4}</Carousel.Item>
                <Carousel.Item>{this.state.currentLang.main.fact5}</Carousel.Item>
              </Carousel>
            </div>
            <button>{this.state.currentLang.main.but}</button>
  
          </div>
          
        </div>
        <main>
          <h1 id="docHead">{this.state.currentLang.doctors.h1}</h1>
          <section id="carousel" name="carousel">
            <Carousel>
              <Carousel.Item> <Doc1/> </Carousel.Item>
              <Carousel.Item> <Doc1/> </Carousel.Item>
            </Carousel>
            
          </section>
          <section id="oper">
            <div id="upperOp">
  
              <div id="services">
                <h2>{this.state.currentLang.servises.h1}</h2>
                <div id="upperOpDesc">{this.state.currentLang.servises.desc}</div>
              </div>
  
              <div class="operBlock">
                <div class="settings"></div>
                <div id="operText">
                  <h4>{this.state.currentLang.servises.serv1}</h4>
                  <div class="serviseDesc">{this.state.currentLang.servises.serv1Desk}</div>
                </div>
                
              </div>
  
              <div class="operBlock">
                <div class="settings"></div>
                <div id="operText">
                  <h4>{this.state.currentLang.servises.serv2}</h4>
                  <div class="serviseDesc">{this.state.currentLang.servises.serv2Desk}</div>
                </div>
                
              </div>
              <div id="downLfetBlock">
                <div class="operBlock">
                  <div class="settings"></div>
                  <div id="operText">
                    <h4>{this.state.currentLang.servises.serv3}</h4>
                    <div class="serviseDesc">{this.state.currentLang.servises.serv3Desk}</div>
                  </div>
                  
                </div>
    
                <div class="operBlock">
                  <div class="settings"></div>
                  <div id="operText">
                    <h4>{this.state.currentLang.servises.serv4}</h4>
                    <div class="serviseDesc">{this.state.currentLang.servises.serv4Desk}</div>
                  </div>
              </div>
              
                
              </div>
  
              <div class="operBlock">
                <div class="settings"></div>
                <div id="operText">
                  <h4>{this.state.currentLang.servises.serv5}</h4>
                  <div class="serviseDesc">{this.state.currentLang.servises.serv5Desk}</div>
                </div>
                
              </div>
  
              <div class="operBlock">
                <div class="settings"></div>
                <div id="operText">
                  <h4>{this.state.currentLang.servises.serv6}</h4>
                  <div class="serviseDesc">{this.state.currentLang.servises.serv6Desk}</div>
                </div>
                
              </div>
  
              
  
            </div>
            
              
              
            
          </section>
          <h1 id="reviewHead">{this.state.currentLang.reviews.h1}</h1>
          <section id="reviews">
          
            <div id="reviewGrid">
              <Review1/> <Review1/> <Review1/>
            </div>
                
            
          </section>
          <section id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10724.375128843645!2d35.204467!3d47.7796295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9dbe02740ea7d681!2z0JfQsNC_0L7RgNGW0LfRjNC60LjQuSDRgNC10LPRltC-0L3QsNC70YzQvdC40Lkg0L_RgNC-0YLQuNC_0YPRhdC70LjQvdC90LjQuSDRhtC10L3RgtGAIHwgItCX0KDQn9CmIg!5e0!3m2!1sru!2sua!4v1627998189522!5m2!1sru!2sua" width="100%"  height="100%" allowfullscreen="" loading="lazy"></iframe>
          </section>
          <footer>
              <div id="footerLeft">
                <div>
                  <div class="footerH">
                    Телефон:
                  </div>
                  <div id="number">
                    +380 (68) 958-67-86
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
