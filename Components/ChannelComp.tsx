import Item from "./ItemsComp"
import Styles from "../styles/channel.module.css"
import moment from "moment";
import React from "react";
import HamburgerComponent from "./HamburgerComp";

const Channel = (props: any) => {
    return (
      <>
        {!props.onClick ? (
          <div>
            <div className={Styles.headingContainer}>
              <p className={Styles.heading}>{props?.data?.title.join()}</p>
              <p className={Styles.subHeading}>
                {props?.data?.description.join()}
              </p>
              <p className={Styles.date}>
                {moment(props?.data?.lastBuildDate.join()).format("LLL")}
              </p>
            </div>
            <div className={Styles.grid}>
              {props?.data?.item.map((e: any, i: number) => (
                <Item data={e} index={i} key={e.pubDate.join()} />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className={Styles.headingContainer}>
              <p className={Styles.heading}>{props?.data?.title.join()}</p>
            </div>
            <HamburgerComponent />
          </div>
        )}
      </>
    );
}
export default Channel
