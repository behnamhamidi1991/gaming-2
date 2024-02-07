import user1 from "./assets/users/1.jpg";
import user2 from "./assets/users/2.jpg";
import user3 from "./assets/users/3.jpg";
import user4 from "./assets/users/4.jpg";
import user5 from "./assets/users/5.jpg";
import user6 from "./assets/users/6.jpg";
import user7 from "./assets/users/7.jpg";
import user8 from "./assets/users/8.jpg";
import user9 from "./assets/users/9.jpg";
import user10 from "./assets/users/10.jpg";
import user11 from "./assets/users/11.jpg";
import user12 from "./assets/users/12.jpg";
import user13 from "./assets/users/13.jpg";
import user14 from "./assets/users/14.jpg";
import user15 from "./assets/users/15.jpg";
import user16 from "./assets/users/16.jpg";
import user17 from "./assets/users/17.jpg";
import user18 from "./assets/users/18.jpg";

interface UserInterface {
  id: string;
  name: string;
  profileImage: string;
  level: number;
  comment: string;
  isOnline: boolean;
  isPremium: boolean;
  country: string;
  city: string;
  age: number;
  awards: string[];
  followers: number;
  following: number;
}

export const users: UserInterface[] = [
  {
    id: "1",
    name: "Killyan Levux",
    profileImage: user1,
    level: 74,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    isOnline: true,
    isPremium: true,
    country: "France",
    city: "Paris",
    age: 27,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 7589,
    following: 2456,
  },
  {
    id: "2",
    name: "Alexa Nova",
    profileImage: user2,
    level: 61,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry?!!!!!!!!!!! :-l",
    isOnline: true,
    isPremium: true,
    country: "France",
    city: "Paris",
    age: 22,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 4256,
    following: 6845,
  },
  {
    id: "3",
    name: "Nika Schmedtmann",
    profileImage: user3,
    level: 92,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book :))))))))))))))",
    isOnline: true,
    isPremium: true,
    country: "Germany",
    city: "Frankfurt",
    age: 25,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 12549,
    following: 8465,
  },
  {
    id: "4",
    name: "Maria Lopez",
    profileImage: user4,
    level: 46,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry?!! ;)",
    isOnline: true,
    isPremium: true,
    country: "Spain",
    city: "Frankfurt",
    age: 21,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 9875,
    following: 3465,
  },
  {
    id: "5",
    name: "Jimmy Wardy",
    profileImage: user5,
    level: 96,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry!!!! looooooooooool =))))",
    isOnline: false,
    isPremium: true,
    country: "England",
    city: "London",
    age: 23,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 12564,
    following: 7465,
  },
  {
    id: "6",
    name: "Adam Taylor",
    profileImage: user6,
    level: 31,
    comment: "Lorem Ipsum is simply :)",
    isOnline: false,
    isPremium: false,
    country: "England",
    city: "London",
    age: 23,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 231,
    following: 598,
  },
  {
    id: "7",
    name: "Merlene Aymen",
    profileImage: user7,
    level: 31,
    comment: "Lorem Ipsum is simply :)",
    isOnline: false,
    isPremium: false,
    country: "England",
    city: "London",
    age: 23,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 231,
    following: 598,
  },
  {
    id: "8",
    name: "Merlene Aymen",
    profileImage: user8,
    level: 31,
    comment: "Lorem Ipsum is simply :)",
    isOnline: false,
    isPremium: false,
    country: "England",
    city: "London",
    age: 23,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 231,
    following: 598,
  },
  {
    id: "9",
    name: "Merlene Aymen",
    profileImage: user9,
    level: 31,
    comment: "Lorem Ipsum is simply :)",
    isOnline: false,
    isPremium: false,
    country: "England",
    city: "London",
    age: 23,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 231,
    following: 598,
  },
  {
    id: "10",
    name: "Merlene Aymen",
    profileImage: user10,
    level: 31,
    comment: "Lorem Ipsum is simply :)",
    isOnline: false,
    isPremium: false,
    country: "England",
    city: "London",
    age: 23,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 231,
    following: 598,
  },
  {
    id: "11",
    name: "Merlene Aymen",
    profileImage: user11,
    level: 31,
    comment: "Lorem Ipsum is simply :)",
    isOnline: false,
    isPremium: false,
    country: "England",
    city: "London",
    age: 23,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 231,
    following: 598,
  },
  {
    id: "12",
    name: "Merlene Aymen",
    profileImage: user12,
    level: 31,
    comment: "Lorem Ipsum is simply :)",
    isOnline: false,
    isPremium: false,
    country: "England",
    city: "London",
    age: 23,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 231,
    following: 598,
  },
  {
    id: "13",
    name: "Merlene Aymen",
    profileImage: user13,
    level: 31,
    comment: "Lorem Ipsum is simply :)",
    isOnline: false,
    isPremium: false,
    country: "England",
    city: "London",
    age: 23,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 231,
    following: 598,
  },
  {
    id: "14",
    name: "Merlene Aymen",
    profileImage: user14,
    level: 31,
    comment: "Lorem Ipsum is simply :)",
    isOnline: false,
    isPremium: false,
    country: "England",
    city: "London",
    age: 23,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 231,
    following: 598,
  },
  {
    id: "15",
    name: "Merlene Aymen",
    profileImage: user15,
    level: 31,
    comment: "Lorem Ipsum is simply :)",
    isOnline: false,
    isPremium: false,
    country: "England",
    city: "London",
    age: 23,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 231,
    following: 598,
  },
  {
    id: "16",
    name: "Merlene Aymen",
    profileImage: user16,
    level: 31,
    comment: "Lorem Ipsum is simply :)",
    isOnline: false,
    isPremium: false,
    country: "England",
    city: "London",
    age: 23,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 231,
    following: 598,
  },
  {
    id: "17",
    name: "Merlene Aymen",
    profileImage: user17,
    level: 31,
    comment: "Lorem Ipsum is simply :)",
    isOnline: false,
    isPremium: false,
    country: "England",
    city: "London",
    age: 23,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 231,
    following: 598,
  },
  {
    id: "18",
    name: "Merlene Aymen",
    profileImage: user18,
    level: 31,
    comment: "Lorem Ipsum is simply :)",
    isOnline: false,
    isPremium: false,
    country: "England",
    city: "London",
    age: 23,
    awards: [
      "WOW First Ins Warrior",
      "Battlefield V First Rank",
      "FIFA 2nd Rank",
    ],
    followers: 231,
    following: 598,
  },
];
