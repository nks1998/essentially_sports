import Image from 'next/image';
import Styles from '../styles/item.module.css'
const Item = (props: any) => {
    let image = props?.data[`media:content`][0]?.$.url
    return (
      <div
        className={
          props.index === 0 ? Styles.mainContainerZero : Styles.mainContainer
        }
        onClick={() => console.log("hello")}
      >
        <Image
          priority={true}
          src={image}
          alt="newsImage"
          width={200}
          height={200}
          className={props.index === 0 ? Styles.imageZero : Styles.image}
        />
        <div className={Styles.imageDetails}>
          <p className={Styles.title}>{props?.data?.title}</p>
        </div>
      </div>
    );
}
export default Item
