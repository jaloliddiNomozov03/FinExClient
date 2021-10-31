import { Card } from 'antd';
const { Meta } = Card;

const CardForSLider = () => {
  return (<Card
    hoverable
    style={{ width: 180 }}
    cover={<img alt="example" src="https://www.picsum.photos/400" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>);
}
export default CardForSLider;