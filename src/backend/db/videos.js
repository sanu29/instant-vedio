/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

   
 import { v4 as uuid } from "uuid";
export const videos = [
  {
    _id: "210001222",
    title: "Pirates Of The Carribean | Highlights",
    thumbnail: "https://i.ytimg.com/vi/maWoEwgEQsY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGFc1NMKVctBJQVvnrQQrWeYC-ZA",
    categoryName: "Movies",
    src:'maWoEwgEQsY',
    views: "31k",
    date: "Mar 2021",
    creator: "Disney",
    trending:true
  },
  {
    _id:"210001224",
    title: "Beauty and the Beast 'Belle' | Sing-A-Long | Disney",
    thumbnail: "https://i.ytimg.com/vi/tTUZswZHsWQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1yNycLAWRhV17SetjxLuYHGOPlw",
    categoryName: "Kids",
    src:'tTUZswZHsWQ',
    views: "74M",
    date: "Mar 2017",
    creator: "Disney",
    trending:false
  },
  {
    _id: "210001227",
    title: "Pepsi IPL 2015: RCB win thriller against SRH",
    thumbnail: "https://i.ytimg.com/vi/lIFodRLSdy0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_B51du85kwOhhf5LmRpMZQ2crCA",
    categoryName: "Sports",
    src:'lIFodRLSdy0',
    views: "7M",
    date: "Apr 2021",
    creator: "Hotstar",
    trending:false
  },
  {
    _id: uuid(),
    title: "The incredible MS Dhoni | ICC Cricket World Cup",
    thumbnail: "https://i.ytimg.com/vi/dIpaY_1aoUw/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBR6zBqX6zgU2A3mMF4KoNAuOLtBg",
    categoryName: "Sports",
    src:'dIpaY_1aoUw',
    views: "9M",
    date: "June 2021",
    creator: "ICC",
    trending:true
  },
  {
    _id: uuid(),
    title: "SPIDER-MAN HOMECOMING Best Action Scenes",
    thumbnail: "https://i.ytimg.com/vi/Z_60UnN0wak/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsdSZXKc5j_hX1QZJgiXfH4YZdgA",
    categoryName: "Movies",
    src:'r8-BFx3xFJ4',
    views: "11M",
    date: "June 2020",
    creator: "One Media",
    trending:false
  },
  {
    _id:uuid(),
    title: "Titanic 3D Re-Release Official Trailer",
    thumbnail: "https://i.ytimg.com/vi/kVrqfYjkTdQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDN7Feo78Kfx9tWIPGdJMvQ_2GkXA",
    categoryName: "Movies",
    src:'ZQ6klONCq4s',
    views: "11M",
    date: "Dec 2011",
    creator: "One Media",
    trending:true
  },
  {
    _id: uuid(),
    title: "MySQL Tutorial for Beginners [Full Course]",
    thumbnail: "https://i.ytimg.com/vi/7S_tz1z_5bA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQRzwgDiYUwdEuDvClYax7UBqlWA",
    categoryName: "Knowledge",
    src:'7S_tz1z_5bA',
    views: "6M",
    date: "May 2022",
    creator: "MOSH",
    trending:false
  },
  {
    _id: uuid(),
    title: "Kota Factory - EP 01 - Inventory",
    thumbnail: "	https://i.ytimg.com/vi/JWbnEt3xuos/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBuqrw5BQ6o0LLyvRCfQIlZgjEJMg",
    categoryName: "WebSeries",
    src:'JWbnEt3xuos',
    views: "56M",
    date: "May 2022",
    creator: "TVF",
    trending:false
  },
  {
    _id: uuid(),
    title: "F.R.I.E.N.D.S |Highlights| WebSeries",
    thumbnail: "	https://i.ytimg.com/vi/a8mgLuqUae4/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBn1JReVPvcv_USpC0XRQIV3V50VA",
    categoryName: "WebSeries",
    src:'a8mgLuqUae4',
    views: "1M",
    date: "Feb 2020",
    creator: "AF henry",
    trending:false
  },
  {
    _id: uuid(),
    title: "The EARL of BEAN | Mr Bean Cartoon Season 2 ",
    thumbnail: "https://i.ytimg.com/vi/ywBmA3OXdEw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEn0KXSHPfJwLF54Cja47kAqb4Cw",
    categoryName: "Kids",
    src:'ywBmA3OXdEw',
    views: "340k",
    date: "May 2022",
    creator: "Mr Bean",
    trending:false
  },
  {
    _id: uuid(),
    title: "Please Find Attached | Mini WebSeries",
    thumbnail: "https://i.ytimg.com/vi/IYWK4f1cvy0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBCBoBWUqq9DHLcxf_rODGZJldtSQ",
    categoryName: "WebSeries",
    src:'IYWK4f1cvy0',
    views: "16M",
    date: "May 2020",
    creator: "Dice Media",
    trending:true
  },
  {
    _id: uuid(),
    title: "map, filter & reduce 🙏 Namaste JavaScript Ep. 19 🔥",
    thumbnail: "https://i.ytimg.com/vi/zdp0zrpKzIE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwoOnC1M5t9L9FxkDB7w1y6Huq9g",
    categoryName: "Knowledge",
    src:'zdp0zrpKzIE',
    views: "304k",
    date: "Nov 2020",
    creator: "Akshay Saini",
    trending:false
  },
];
