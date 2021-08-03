import './App.css';
import React from "react"
import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import Doc1 from "./doctors/doc1"
import Review1 from './reviews/review1';
// import emailjs from "emailjs-com"





function App (){
  return (
    <>
      <div id="upperBlock">

        <header>

          <div id="headerName">ЗРПЦ</div>
          <div id="nav">

            <span>Главная</span>
            <span>Врачи</span>
            <span>Услуги</span>
            <span>Отзывы</span>
            <span>Контакты</span>

          </div>

        </header>

        <div id="mainUpper">

          <h1>Абдоминальное хирургическое отделение </h1>
          <div id="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</div>
          <button>Свяжитесь с нами</button>

        </div>
        
      </div>
      <main>
        <section id="carousel">
          <Carousel>
            <Carousel.Item> <Doc1/> </Carousel.Item>
            <Carousel.Item> <Doc1/> </Carousel.Item>
          </Carousel>
          
        </section>
        <section id="oper">
          <div id="upperOp">
            <div id="services">
              <h2>Услуги</h2>
              <div id="upperOpDesc">Врачи в абдоминальном отделении нашего центра успешно проводят лечение в виде:</div>
            </div>

            <div class="operBlock">
              <div class="settings"></div>
              <h4>Колоноскопия</h4>
              <div class="serviseDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
            </div>

            <div class="operBlock">
              <div class="settings"></div>
              <h4>Колоноскопия</h4>
              <div class="serviseDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
            </div>

          </div>
          <div id="downOp">
            <div class="operBlock">
              <div class="settings"></div>
              <h4>Колоноскопия</h4>
              <div class="serviseDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
            </div>

            <div class="operBlock">
              <div class="settings"></div>
              <h4>Колоноскопия</h4>
              <div class="serviseDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
            </div>

            <div class="operBlock">
              <div class="settings"></div>
              <h4>Колоноскопия</h4>
              <div class="serviseDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
            </div>

            <div class="operBlock">
              <div class="settings"></div>
              <h4>Колоноскопия</h4>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
            </div>
            
          </div>
        </section>
        <section id="reviews">
          <Carousel>
              <Carousel.Item> <Review1/> </Carousel.Item>
              <Carousel.Item> <Review1/> </Carousel.Item>
          </Carousel>
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
                    Почта:
                </div>
                <div class="footerText">
                    mail@gmail.com
                </div>
              </div>

              <div id="adress">
                <div class="footerH">
                    Адрес:
                </div>
                <div class="footerText">
                  вул. Культурна, 177А, Запоріжжя, Запорізька область
                </div>    
              </div>
            </div>
        </footer>
      </main>
    </>
  );

}
  

export default App;
