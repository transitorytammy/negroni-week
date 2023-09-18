import { useEffect } from "react";

import "./App.css";
import grayWhale from "./imgs/gins/gray-whale-gin.webp";
import junipero from "./imgs/gins/junipero-gin.webp";
import newAmsterdam from "./imgs/gins/new-amsterdam-gin.webp";
import no209gin from "./imgs/gins/no-209-gin.jpeg";
import botanivore from "./imgs/gins/st-george-botanivore-gin.webp";
import terrior from "./imgs/gins/st-george-terrior-gin.webp";

import campari from "./imgs/amaros/campari.webp";
import loFi from "./imgs/amaros/lo-fi-amaro.jpeg";
import bruto from "./imgs/amaros/st-george-bruto.webp";

import Swiper from "swiper/bundle";

import "swiper/css/bundle";

function App() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
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
          <div>California Edition</div>
          <div>$11 for any combo</div>
        </h3>
        <span>
          Select your favorite California gin and amaro combination to make your
          own special Negroni!!
        </span>
      </header>
      <section>
        <div class="sliders">
          <div class="swiper section">
            <div class="swiper-wrapper">
              <div class="swiper-slide" data-swiper-autoplay="2000">
                <img src={grayWhale} className="image" alt="logo" />
                <div class="description">
                  A refreshingly citrus palate with a smooth creamy finish that
                  includes six Californian botanicals: juniper, mint, lime, fir
                  tree, kombu, and almonds.
                </div>
              </div>
              <div class="swiper-slide">
                <img src={junipero} className="image" alt="logo" />
                <div class="description">
                  Dry-yet-fruity full body and a warming, complex, long finish
                </div>
              </div>
              <div class="swiper-slide">
                <img src={newAmsterdam} className="image" alt="logo" />
                <div class="description">
                  Soft and smooth. Fruity with crisp citrus flavor and light
                  hints of juniper.
                </div>
              </div>
              <div class="swiper-slide">
                <img src={no209gin} className="image" alt="logo" />
                <div class="description">
                  209's juniper berries are softened with orange bergamot,
                  cardamom, lemon myrtle and cassia bark.
                </div>
              </div>
              <div class="swiper-slide">
                <img src={botanivore} className="image" alt="logo" />
                <div class="description">
                  Distilled with 19 different botanicals for a gin that is
                  beautifully balanced and vibrant.
                </div>
              </div>
              <div class="swiper-slide">
                <img src={terrior} className="image" alt="logo" />
                <div>
                  <div>
                    Intense earthy, wood, with flavors of fir trees, sage and
                    bright citrus.
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
                <img src={campari} className="image" alt="logo" />
                <div class="description">
                  The shockingly red liqueur is infused with 68 different bitter
                  herbs and aromatic plants, a secret recipe of natural
                  ingredients that dates back to 1860 and has become an Italian
                  tradition.
                </div>
              </div>
              <div class="swiper-slide">
                <img src={loFi} className="image" alt="logo" />
                <div class="description">
                  Starting with a California white wine base, we fortify the
                  wine using neutral grape spirits. Then, we add grape
                  concentrate and cane sugar for a rich mouth feel and a sweet
                  finish.
                </div>
              </div>
              <div class="swiper-slide">
                <img src={bruto} className="image" alt="logo" />
                <div class="description">
                  Vibrant citrus with notes of cinnamon, sandalwood, and forest
                  on the nose. Initial palate entry is bitter, followed by a
                  woodsy mid-palate and lingering bitter/citrus finish
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
        <a
          className="App-link"
          href="https://www.negroniweek.com/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={
              "https://cdn.shortpixel.ai/spai/q_lossless+w_2000+to_webp+ret_img/imbibemagazine.com/wp-content/uploads/2023/08/NW-Logos-2023_no-background-or-border-red-blue-type.jpg"
            }
            className="App-logo"
            alt="logo"
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
