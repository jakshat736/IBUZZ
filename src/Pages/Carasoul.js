import React, { useState } from "react";
import "./VerticalCarousel.css";
const services = [
    {
      name: "Website Design",
      description:
        "Be prepared for the future with visually appealing websites that are as distinctive as you are. Showcase your creativity to your customers or potential clients with a stunningly designed website that is created to leave a lasting impression.",
      avatar: require("../assets/webdesign.png"),
    },
    {
      name: "Website Development",
      description:
        "Our website development process is customized to meet your business requirements. Through thorough and meticulous development, we transform your ideas into innovative technological solutions that stand out from the competition.",
      avatar: require("../assets/webdev.png"),
    },
    {
      name: "eCommerce Solution",
      description:
        "Whether you're focused on selling products, services, or both, we have you covered with comprehensive e-commerce website development. Our full-fledged e-commerce solutions can get your online business up and running in no time, providing a seamless experience for your customers.",
      avatar: require("../assets/ecommerce.png"),
    },
    {
      name: "Digital Marketing",
      description:
        "Connect with your customers where they spend the majority of their time - online - with IBUZZ Digital Marketing. Our result-oriented ad campaigns and search engine optimization (SEO) techniques will distinguish your business from the competition. We offer a comprehensive range of digital marketing services to cover all aspects of your business needs.",
      avatar: require("../assets/digital.png"),
    },
    {
      name: "Mobile Application",
      description:
        "Bring your business to your customers' fingertips with IBUZZ Tech Mobile Application Development. We provide top-notch Android, IOS, Windows, cross-platform, or responsive applications tailored to meet your specific needs.",
      avatar: require("../assets/app.png"),
    },
    {
      name: "Multimedia Solutions",
      description:
        "Visual assets can be more impactful than words, and well-designed graphics can attract customers like nothing else. We offer designs that highlight your brand and resonate with your target audience to drive engagement and satisfaction.",
      avatar: require("../assets/multimedia.png"),
    },
  ];
const VerticalCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e) => {
    const delta = Math.sign(e.deltaY);
    const lastIndex = items.length - 1;
    let nextIndex = currentIndex + delta;
    if (nextIndex < 0) {
      nextIndex = lastIndex;
    } else if (nextIndex > lastIndex) {
      nextIndex = 0;
    }
    setCurrentIndex(nextIndex);
  };

  const renderItems = () => {
    return services.map((item, index) => {
      const isActive = currentIndex === index;
      const isNext = currentIndex === index + 1 || (currentIndex === 0 && index === services.length - 1);
      const isPrev = currentIndex === index - 1 || (currentIndex === services.length - 1 && index === 0);
      const zIndex = isActive ? 2 : isNext || isPrev ? 1 : 0;

      return (
        <div
          key={item.id}
          className="carousel-item"
          style={{
            transform: isActive ? "translateY(0)" : isNext ? "translateY(100%)" : "translateY(-100%)",
            zIndex,
          }}
        >
          <div className="carousel-item-details">
            <h2 className="carousel-item-name">{item.name}</h2>
            <p className="carousel-item-description">{item.description}</p>
          </div>
          <div className="carousel-item-image">
            <img src={item.avatar} alt={item.name} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="vertical-carousel" onWheel={handleScroll}>
      {renderItems()}
    </div>
  );
};

export default VerticalCarousel;
