import React from "react";
import "./About.css";
import Layout from "./index";

const AboutusComponent = (props) => {
  return (
    <div className="flex flex-col items-center justify-center my-20">
      {/* <span>
        <svg
          className="w-32 h-32 text-gray-700"
          fill="none"
          stroke="red"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span> */}
      {/* <span className="text-center text-gray-700 text-4xl font-bold tracking-widest">
        404 not found
      </span> */}
      <>
      
        <>
          {/* <MetaData title="About" /> */}
          <div>
            {/* <Header /> */}
            <div
              style={{
                width: "90%",
                margin: "0px auto",
              }}
            >
              <div className="about__page">
                {/* 1st verse */}
                <div className="row flex">
                  <div className="col__2">
                    <img src="http://localhost:8000/uploads/customize/1689232779696_Screenshot%202023-05-18%20083044.png" />
                    
                  </div>
                  
                  <div className="col__2">
                    <div className="meta">
                      <span
                        style={{
                          fontSize: "45px",
                          fontWeight: "1000",
                          lineHeight: "2",
                        }}
                      >
                       Welcome to Movies Warriors
                      </span>
                      <p>
                      Movie Warriors is a specialist online store that offers a wide selection of both creative pop and action figures to its customers. If you want a traditional superhero Action figure or one that follows the most recent Marvel trend, movie warriors provide everything you could ever want. Customers may search from the website's vast inventory of action figures according to category, brand, character, or popularity to get exactly what they're looking for. Customers may also access photographs and detailed descriptions to aid them in making sound decisions about their purchases. Movie Warriors is dedicated to creating an exceptional User experience, which will introduce the User to an entirely new way of making an online purchase transaction. It is now much simpler for collectors to add rare and valuable action figures to their collections thanks to a website that not only provides some of the rarest goods but also provides fair prices for such products. In general, those who collect action figures will find this website to be an extremely helpful resource. The site was able to provide a fantastic user experience because of its Unique and simple design along with much cheaper action figures. 
                      </p>
                      <p>
                      Purchasing a particular product can be challenging and time-consuming, which consumes people's time and energy; this is where movie warriors come in. Move Customers can find a great variety of products directly from a single website thanks to the cutting-edge e-commerce platform that is known as Warrior, which sells a broad variety of action figures that vary in shape, size, and price. The website was designed specifically to sell action figures. Additionally, the website possesses a specialized part in which it sells unique and collectible products, from which customers can purchase unusual items to add to their collections
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd verse */}
                <div className="second">
                  <div className="heading">
                    <h2>What We Provide?</h2>
                  </div>
                  <div className="row flex">
                    <div className="col__3">
                      <div
                        style={{
                          padding: "5px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" />
                          </div>
                        <span>Best Prices & Offers</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" />
                        </div>
                        <span>Best For Trust & Quality</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" />
                        </div>
                        <span>Fast Delivery System</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" />
                        </div>
                        <span>Easy Returns Service</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg" />
                        </div>
                        <span>100% satisfication</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg" />
                        </div>
                        <span>Great Daily Deal</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <Footer /> */}
          </div>
          {/* <BottomTab /> */}
        </>
      
    </>
    </div>
  );
};

const Aboutus = (props) => {
  return <Layout children={<AboutusComponent />} />;
};

export default Aboutus;
