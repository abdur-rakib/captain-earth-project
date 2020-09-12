import Mascots_03 from "../../styles/img/mascorts/Mascots-01.png";
import Mascots_02 from "../../styles/img/mascorts/Mascots-02.png";
import Mascots_01 from "../../styles/img/mascorts/Mascots-03.png";

const getCategoryImage = (ref) => {
  switch (ref) {
    case 0:
      return Mascots_01;
    case 1:
      return Mascots_02;
    case 2:
      return Mascots_03;
    default:
      return;
  }
};

export default getCategoryImage;
