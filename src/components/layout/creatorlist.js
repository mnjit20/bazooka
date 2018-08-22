import React, { Component } from "react";

class CreatorList extends Component {
  render() {
    const creators = this.props.creators;
    console.log(" creators", creators);
    return (
      <div>
        {creators.map(creator => (
          // <div key={creator._id}>

          <div className="box " key={creator._id}>
            <div className="detail">
              <div className="image">
                <a href="/influencer/519">
                  <img src={creator.yt_imageUrl} className="" />
                  <img src="http://aspire.firstwall.com/assets/images/profilepic.png" />
                </a>
              </div>
              <span className="title">
                <a href="/influencer/519" className="">
                  {creator.channel_name}
                </a>
              </span>
              <span className="type ">{creator.category_name}</span>
              <span className="loc ">{creator.user_state}</span>
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
                {parseInt(creator.fb_fan_count) +
                  parseInt(creator.yt_subscriber_count) +
                  parseInt(creator.ig_followers_count)}
              </span>
              Total Reach
            </div>
            <a className="view" href="/influencer/519">
              View Profile
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default CreatorList;
