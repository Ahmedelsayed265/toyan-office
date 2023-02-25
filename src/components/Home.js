import React from "react";
import "swiper/css";
import News from "./News";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AskService from "./AskService";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from "swiper";

import ha from "../assets/ha.png";
import me from "../assets/me.png";
import la from "../assets/la.png";
import about from "../assets/about.png";

const Home = ({ slider, services, clients }) => {
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
                  src={`https://el-twyan.onrender.com/images/${slide.image}`}
                  alt={slide._id}
                />
                <div className="layer" />
                <div className="right" />
                <div className="left" />
                <div className="decription">
                  <p>
                    {slide.text}
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
            <span>من نحن</span>
            <h1>مكتب عمر الطويـان للاستشـارات الإداريـة</h1>
            <p>
              الحــاصــل علــى التــرخيــص المـهنــي رقــم 15384، نقدم
              الاستشارات الإداريـة والاقتصاديـة والتسويقية والمالية للمنظمات
              الحكـومية والخاصة والأفراد. خدماتنـا للاستشـارات الإداريـة هي
              الأداة المسـاعدة للشركات والمؤسسات في مراحل التأسـيس والنـمو،
              والتطـوير إلـى النجــاح، ووضع خطط لتحسين وتطوير الإداء في مجال
              الإدارة، والعلاقات العامة، والموارد البشرية، والتسويق.
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
            <h2>رؤيتنا</h2>
            <p className="cen">
              مكتب إقليمي رائد فـي الاستشــارات الإداريــة والتطوير يرشد قرارات
              المستفيدين بآراء الخبراء والوصول إلــى المفهوم الشــامــل لخدمــات
              الاستشـارات والحـلول الإداريــة والاستشـاريــة المبنية علـى الخبرة
              وتقديم أفضل الممارسات العالمية.
            </p>
          </div>
          <div className="about-card">
            <div className="card-icon">
              <img src={me} alt="message" />
            </div>
            <h2>رسالتنا</h2>
            <p className="cen-p">
              تقديم خدمات تدريبية، واستشارات إدارية احترافية، وحلول إبداعية
              بجودة عالمية.
            </p>
          </div>
          <div className="about-card">
            <div className="card-icon">
              <img src={ha} alt="value" />
            </div>
            <h2>قيمنا</h2>
            <p className="cen-p">
              الالتزام والمسؤولية <br /> الأمانة والمصداقية <br /> الجودة
              والمهنية
            </p>
          </div>
        </div>
      </section>
      <section className="services">
        <h2>خدمتنا</h2>
        <div className="services_grid">
          {services.map(ser => {
            return (
              <Link
                key={ser._id}
                className="service_card"
                to={`/services/${ser.title.en}`}
              >
                <div className="img">
                  <img loading="lazy" src={ser.image} alt={ser.title.en} />
                  <div className="img_layer">
                    <p>
                      {ser.subTitle.ar}
                    </p>
                  </div>
                </div>
                <pre>
                  {ser.title.ar}
                </pre>
              </Link>
            );
          })}
        </div>
      </section>
      <AskService />
      <section className="clients">
        <h3>عملاؤنا</h3>
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
            768: {
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
                  src={`https://el-twyan.onrender.com/images/${client.image}`}
                  alt={client.title}
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
