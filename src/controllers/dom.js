import computerImg from '../style/res/computer.png';
import listeners from './listeners';

const dom = (() => {
  listeners.computerImg.src = computerImg;
})();

export default dom;
