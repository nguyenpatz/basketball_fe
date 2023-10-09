import "../assets/scss/About.scss";
import BasketballCourt1 from "../assets/images/basketball-court.jpg";
import BasketballCourt2 from "../assets/images/basketball_court_2.jpg";
import BasketballCourt3 from "../assets/images/basketball_court_3.jpg";
import BasketballCourt4 from "../assets/images/basketball_court_4.jpg";
import BasketballCourt5 from "../assets/images/basketball_court_5.jpg";
export default function About() {
  return (
    <div className="about-section">
      <h2 className="about-section-title">Về chúng tôi</h2>
      <div className="about-header">
        <div className="about-image">
          <img src={BasketballCourt1} alt="basketball-court" />
        </div>
        <div className="about-image">
          <img src={BasketballCourt2} alt="basketball-court" />
        </div>
        <div className="about-image">
          <img src={BasketballCourt3} alt="basketball-court" />
        </div>
        <div className="about-image">
          <img src={BasketballCourt4} alt="basketball-court" />
        </div>
        <div className="about-image">
          <img src={BasketballCourt5} alt="basketball-court" />
        </div>
      </div>
      <div className="about-body">
        <p>
          Câu lạc bộ bóng rổ Tuổi trẻ thành lập vào ngày{" "}
          <span className="about-header-date">02/22/2022</span>
        </p>
        <p>Địa chỉ: <span className="about-header-address">498 Đà Nẵng - Đông Hải - Hải An - Hải Phòng</span> </p>
        {/* <p>Các thà</p>  */}
      </div>
    </div>
  );
}
