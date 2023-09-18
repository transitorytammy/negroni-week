import { useEffect } from "react";

import "./App.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import grayWhale from "./imgs/gins/gray-whale-gin.webp";
import junipero from "./imgs/gins/junipero-gin.webp";
import newAmsterdam from "./imgs/gins/new-amsterdam-gin.webp";
import no209gin from "./imgs/gins/no-209-gin.jpeg";
import botanivore from "./imgs/gins/st-george-botanivore-gin.webp";
import terrior from "./imgs/gins/st-george-terrior-gin.webp";

import campari from "./imgs/amaros/campari.webp";
import loFi from "./imgs/amaros/lo-fi-amaro.jpeg";
import bruto from "./imgs/amaros/st-george-bruto.webp";
import lizardTail from "./imgs/amaros/LizardTailAperitivo.webp";

import instagram from "./imgs/instagram-rainbow.jpeg";

function App() {
  useEffect(() => {
    new Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="App">
      <header class="header">
        <h1 class="title">Negroni Week at Last Call</h1>
        <h3>
          <div>Build Your Own Negroni (BYON)</div>
          <div className="california">California Edition</div>
          <div>$11 for any combo</div>
        </h3>
        <div>
          <div>
            Find a new favorite gin from California and try it as a classic
            Negroni or experiment with one of our California amaros!
          </div>
        </div>
      </header>
      <section>
        <div class="sliders">
          <div class="swiper section">
            <div class="swiper-wrapper">
              <div class="swiper-slide" data-swiper-autoplay="2000">
                <a
                  href="https://www.graywhalegin.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={grayWhale} className="image" alt="logo" />
                </a>
                <div className="distiller">
                  Distiller: Golden State Distillery
                </div>
                <div className="location">Sebastopol, California</div>
                <div class="description">
                  A refreshingly citrus palate with a smooth creamy finish that
                  includes six Californian botanicals: juniper, mint, lime, fir
                  tree, kombu, and almonds. . The palate is slick and slightly
                  viscous, with a lemony, faintly saline note that winds into a
                  brisk, cooling finish that suggests an ocean breeze.
                </div>
              </div>
              <div class="swiper-slide">
                <a
                  href="https://juniperogin.com/#about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={junipero} className="image" alt="logo" />
                </a>
                <div className="distiller">
                  Distiller: Anchor Distilling Company
                </div>
                <div className="location">San Franciso, California</div>
                <div class="description">
                  Dry-yet-fruity full body and a warming, complex, long finish.
                  Strong juniper core. Crisp and clean with bright citrus notes
                  and herbal complexity. Big structure with juniper at the
                  forefront that opens up and reveals its full complexity in the
                  ﬁnish with notes of lemon peel, cardamom and lemongrass.
                </div>
              </div>
              <div class="swiper-slide">
                <a
                  href="https://www.newamsterdamgin.com/our-gins/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={newAmsterdam} className="image" alt="logo" />
                </a>
                <div className="distiller">Distiller: Modesto Distillery</div>
                <div className="location">Modesto, California</div>
                <div class="description">
                  Soft and smooth. Fruity with crisp citrus flavor and light
                  hints of juniper with a crisp, clean taste.
                </div>
              </div>
              <div class="swiper-slide">
                <a
                  href="https://www.distillery209.com/spirits/no-209-gin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={no209gin} className="image" alt="logo" />
                </a>
                <div className="distiller">Distiller: Distillery No. 209</div>
                <div className="location">San Franciso, California</div>
                <div class="description">
                  209's juniper berries are softened with orange bergamot,
                  cardamom, lemon myrtle and cassia bark. Vastly different from
                  the juniper-heavy gins of the past, No. 209 opens with a
                  beautifully aromatic nose of predominately citrus and floral
                  notes with a hint of spiciness.
                </div>
              </div>
              <div class="swiper-slide">
                <a
                  href="https://stgeorgespirits.com/spirits/botanivore-gin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={botanivore} className="image" alt="logo" />
                </a>
                <div class="description">
                  <div className="distiller">Distiller: St. George Spirits</div>
                  <div className="location">Alameda, California</div>
                  <div className="description">
                    Distilled with 19 different botanicals for a gin that is
                    beautifully balanced and vibrant. Its “meadow in bloom”
                    balance of tangy citrus, bright hops, fresh herbs, and
                    exotic spices has been winning the hearts of drink lovers
                    ever since.
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <a
                  href="https://stgeorgespirits.com/spirits/terroir-gin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={terrior} className="image" alt="logo" />
                </a>
                <div class="description">
                  <div className="distiller">Distiller: St. George Spirits</div>
                  <div className="location">Alameda, California</div>
                  <div className="description">
                    Intense earthy, wood, with flavors of fir trees, sage and
                    bright citrus. Wildcrafted Douglas fir and locally foraged
                    California bay laurel form its signature, while coastal sage
                    and wok-roasted coriander connote the hillside chaparral.
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <div class="swiper section">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a
                  href="https://www.campari.com/en-us/our-products/campari/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={campari} className="image" alt="logo" />
                </a>
                <div className="distiller">Distiller: Campari</div>
                <div className="location">Milan, Italy</div>
                <div class="description">
                  The shockingly red liqueur is infused with 68 different bitter
                  herbs and aromatic plants, a secret recipe of natural
                  ingredients that dates back to 1860 and has become an Italian
                  tradition.
                </div>
              </div>
              <div class="swiper-slide">
                <a
                  href="https://lithespirits.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={lizardTail} className="image" alt="logo" />
                </a>
                <div className="distiller">Distiller: Lithe Spirits</div>
                <div className="location">San Franciso, California</div>
                <div class="description">
                  Lizard Tail is an everyday aperitivo with a NorCal twist a
                  balanced blend of bitter, herbal, and citrus flavors.
                  Chamomile floralness up front leads to eucalyptus and menthol
                  herbalness. Delicate anise spice leads to a dry finish.
                </div>
              </div>
              <div class="swiper-slide">
                <a
                  href="https://www.lofiaperitifs.com/000000000210012089.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={loFi} className="image" alt="logo" />
                </a>
                <div className="distiller">Distiller: Lo-Fi Aperitifs</div>
                <div className="location">Napa, California</div>
                <div class="description">
                  Predominant aromas of sweet citrus fruit with hints of ginger,
                  exotic flowers and spices are supported by a framework of
                  cinchona bark and bitter root extracts. Adds refreshing fruit
                  flavors and crisp bitterness to a variety of cocktails.
                </div>
              </div>
              <div class="swiper-slide">
                <a
                  href="https://stgeorgespirits.com/spirits/bruto-americano"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={bruto} className="image" alt="logo" />
                </a>
                <div className="distiller">Distiller: St. George Spirits</div>
                <div className="location">Alameda, California</div>
                <div class="description">
                  Bruto Americano is a bold red bitter with classic roots and a
                  counter-cultural attitude. While Bruto’s bitter gentian base
                  makes it the perfect anchor for a Negroni, its distinct notes
                  of balsam fir and cascara sagrada will open up your mind as
                  well as your palate.
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footerWrapper">
          <a
            href="https://www.instagram.com/lastcallbarsf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} className="logo" alt="logo" />
          </a>

          <a
            href="https://www.negroniweek.com/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={
                "https://cdn.shortpixel.ai/spai/q_lossless+w_2000+to_webp+ret_img/imbibemagazine.com/wp-content/uploads/2023/08/NW-Logos-2023_no-background-or-border-red-blue-type.jpg"
              }
              className="logo"
              alt="logo"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
