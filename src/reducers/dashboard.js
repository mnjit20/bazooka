const initState = {
  creators: [
    {
      name: "Satish Kushwaha",
      _id: "5b4365820acbcb54030b4279",
      reach: "729804",
      cat_id: {
        _id: "5b435fdd0acbcb54030b1ac1",
        wall_cat: "Health",
        wall_cat_code: "HLT"
      },
      channel_name: "Fitness Fighters Hindi",
      category_name: "Health",
      fb_fan_count: "3615",
      ig_followers_count: "0",
      yt_subscriber_count: "726189"
    },
    {
      name: "F3 First Frame Films Pvt.",
      _id: "5b4365820acbcb54030b4177",
      reach: "354081",
      cat_id: {
        _id: "5b435fdd0acbcb54030b1ac1",
        wall_cat: "Health",
        wall_cat_code: "HLT"
      },
      channel_name: "F3 HEALTHCARE",
      category_name: "Health",
      fb_fan_count: "17779",
      ig_followers_count: "0",
      yt_subscriber_count: "336302"
    },
    {
      name: "Vipin kumar Singh",
      _id: "5b43658a0acbcb54030b481c",
      reach: "277283",
      cat_id: {
        _id: "5b435fdd0acbcb54030b1ac1",
        wall_cat: "Health",
        wall_cat_code: "HLT"
      },
      channel_name: "Health Care Hindi",
      category_name: "Health",
      fb_fan_count: "4092",
      ig_followers_count: "0",
      yt_subscriber_count: "273191"
    },
    {
      name: "",
      _id: "5b4365820acbcb54030b4164",
      reach: "20442",
      cat_id: {
        _id: "5b435fdd0acbcb54030b1ac1",
        wall_cat: "Health",
        wall_cat_code: "HLT"
      },
      channel_name: "Fitness Guru",
      category_name: "Health",
      fb_fan_count: "11889",
      ig_followers_count: "0",
      yt_subscriber_count: "8553"
    },
    {
      name: "Alakh haryana tv",
      _id: "5b4365880acbcb54030b47a7",
      reach: "18021",
      cat_id: {
        _id: "5b435fdd0acbcb54030b1ab6",
        wall_cat: "Auto",
        wall_cat_code: "AUTO"
      },
      channel_name: "Alakh haryana tv",
      category_name: "Auto",
      fb_fan_count: "16662",
      ig_followers_count: "0",
      yt_subscriber_count: "1359"
    },
    {
      name: "ashok nayak",
      _id: "5b43658a0acbcb54030b4918",
      reach: "5663",
      cat_id: {
        _id: "5b435fdd0acbcb54030b1ac1",
        wall_cat: "Health",
        wall_cat_code: "HLT"
      },
      channel_name: "Blood Call Center",
      category_name: "Health",
      fb_fan_count: "5663",
      ig_followers_count: "0",
      yt_subscriber_count: "0"
    }
  ]
};

export default (state = initState, action) => {
  switch (action.type) {
    case "LOAD_DASHBOARD":
      return { ...state };
    default:
      return state;
  }
};
