import React from "react";

const Creator = props => {
  return (
    <React.Fragment key={props.data._id}>
      <div className="box" key={props.data._id}>
        <div className="detail">
          <div className="image">
            <a href="/influencer/519">
              <img src={props.data.yt_imageUrl} className="" />
              <img src="http://aspire.firstwall.com/assets/images/profilepic.png" />
            </a>
          </div>
          <span className="title">
            <a href="/influencer/519" className="">
              {props.data.channel_name}
            </a>
          </span>
          <span className="type ">{props.data.category_name}</span>
          <span className="loc ">{props.data.user_state}</span>
        </div>
        <div className="socail">
          <span>Social Platform</span>
          <ul>
            <li className="">
              <a className="youtube" href="">
                Youtube
              </a>
            </li>
            <li className="">
              <a className="facebook" href="">
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="total">
          <span className="">
            {parseInt(props.data.fb_fan_count) +
              parseInt(props.data.yt_subscriber_count) +
              parseInt(props.data.ig_followers_count)}
          </span>
          Total Reach
        </div>
        <a className="view" href="/influencer/519">
          View Profile
        </a>
      </div>
    </React.Fragment>
  );
};

export default Creator;
