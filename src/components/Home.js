import React from "react";
import { Link } from "react-router-dom";
import News from "./News";
import AskService from "./AskService";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from "swiper";

import ha from "../assets/ha.png";
import me from "../assets/me.png";
import la from "../assets/la.png";
import about from "../assets/about.png";

const Home = ({ slider, services, clients, lng, info }) => {
  const { t } = useTranslation();
  let sentencesAR = info[3]?.description?.ar?.split("\n");
  let sentencesEN = info[3]?.description?.en?.split("\n");
  return (
    <React.Fragment>
      <header className="header-slider">
        <Swiper
          autoplay={{
            delay: 5000
          }}
          pagination={{
            clickable: true
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slider.map(slide => {
            return (
              <SwiperSlide key={slide._id}>
                <img
                  src={`https://api.tawyanoffice.com/images/${slide.image}`}
                  alt={slide._id}
                />
                <div className="layer" />
                <div className="right" />
                <div className="left" />
                <div className="decription">
                  <p>
                    {lng === "ar" ? slide.text.ar : slide.text.en}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </header>
      <section className="about">
        <div className="about-flex">
          <div className="description">
            <span>
              {t("aboutTitle")}
            </span>
            <h1>
              {t("CompanyTitle")}
            </h1>
            <p>
              {lng === "ar" ? info[0]?.description?.ar : info[0]?.description?.en}
            </p>
          </div>
          <div className="wrapper">
            <img src={about} alt="about" />
          </div>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">
              <img src={la} alt="vision" />
            </div>
            <h2>
              {t("vision")}
            </h2>
            <p className="cen">
              {lng === "ar" ? info[1]?.description?.ar : info[1]?.description?.en}
            </p>
          </div>
          <div className="about-card">
            <div className="card-icon">
              <img src={me} alt="message" />
            </div>
            <h2>
              {t("message")}
            </h2>
            <p className="cen-p">
            {lng === "ar" ? info[2]?.description?.ar : info[2]?.description?.en}
            </p>
          </div>
          <div className="about-card">
            <div className="card-icon">
              <img src={ha} alt="value" />
            </div>
            <h2>
              {t("value")}
            </h2>
            <ul className="cen-p">
          {lng === "ar"? sentencesAR?.map(sen=>{
            return(<li key={sen}>{sen}</li>)
          }) : sentencesEN?.map(sen=>{
            return(<li key={sen}>{sen}</li>)
          })}
          </ul>
          </div>
        </div>
      </section>
      <section className="services">
        <h2>
          {t("services")}
        </h2>
        <div className="services_grid">
          {services.map(ser => {
            return (
              <Link
                key={ser._id}
                className="service_card"
                to={`/services/${ser.title.en}`}
              >
                <div className="img">
                  <img
                    loading="lazy"
                    src={`https://api.tawyanoffice.com/images/${ser.image}`}
                    alt={ser.title.en}
                  />
                  <div className="img_layer">
                    <p>
                      {lng === "ar" ? ser.subTitle.ar : ser.subTitle.en}
                    </p>
                  </div>
                </div>
                <pre>
                  {lng === "ar" ? ser.title.ar : ser.title.en}
                </pre>
              </Link>
            );
          })}
        </div>
      </section>
      <AskService />
      <section className="clients">
        <h3>
          {t("clients")}
        </h3>
        <Swiper
          pagination={{
            clickable: true
          }}
          navigation={true}
          spaceBetween={90}
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            576: {
              slidesPerView: 2
            },
            1200: {
              slidesPerView: 3
            }
          }}
          className="mySwiper"
          modules={[Navigation, Mousewheel, Keyboard]}
        >
          {clients.map(client => {
            return (
              <SwiperSlide className="swiper_card" key={client._id}>
                <img
                  loading="lazy"
                  src={`https://api.tawyanoffice.com/images/${client.image}`}
                  alt={client.name}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <News />
    </React.Fragment>
  );
};

export default Home;
