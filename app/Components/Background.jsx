import style from "./Background.module.css";
import Navbar from "./Navbar";
const Background = () => {
  return (
    <div className={style.cardContainer}>
      <div className={style.bigcard}>
        <Navbar />
      </div>
    </div>
  );
};
export default Background;
