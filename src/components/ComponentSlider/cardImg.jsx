import { Image } from "antd";
import './imgstyle.css';

const ImageDemo = () => {
  return (
    <div className="img-wrapper-swiper">
      <Image key="img-1" width={180} src="https://www.picsum.photos/400" />
      <Image key="img-2" width={180} src="https://www.picsum.photos/400" />
      <Image key="img-3" width={180} src="https://www.picsum.photos/400" />
    </div>
  );
};
export default ImageDemo;
