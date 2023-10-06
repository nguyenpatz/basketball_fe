import "../assets/scss/BodyHeader.scss";
import BasketballIcon from "../assets/images/basketball_icon_1.png";

export default function BodyHeader1() {
  return (
    // Đây là nơi chứa phần tiêu đề
    <div className="body-header">
      {/* <h2>
                Chào mừng đến với Câu lạc bộ bóng rổ  Tuổi trẻ
            </h2> */}
      <h2 className="rainbow-text body-header-title">Welcome to the Youth Basketball Club</h2>
      <div className="basketball-container-icon">
        <img
          className="basketball-icon"
          src={BasketballIcon}
          alt="basketball-icon"
        />
        <img
          className="basketball-icon"
          src={BasketballIcon}
          alt="basketball-icon"
        />
      </div>
      <div className="body-header-content">
        <p className="header-content">
          Khám phá thế giới bóng rổ cùng câu lạc bộ: Hành trình phát triển kỹ
          năng và tạo niềm đam mê cho các bạn trẻ
        </p>
        <p className="header-content">
          Đồng hành cùng Câu lạc bộ Bóng rổ: Xây dựng tinh thần đồng đội và kỹ
          năng vượt bậc!
        </p>
        <p className="header-content">Thử thách bản thân và vươn tới thành công với Câu lạc bộ Bóng rổ!</p>
      </div>
    </div>
  );
}
