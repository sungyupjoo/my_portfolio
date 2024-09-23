interface ProjectType {
  number: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  link: string;
  github: string;
}

export const projects: ProjectType[] = [
  {
    number: "01",
    category: "full-stack mobile app",
    title: "브레멘 앱",
    description:
      "합주하고 싶은 사람들을 위한 플랫폼을 제공하는 모바일 앱으로,\n 실시간 채팅 및 푸시 알림, 소셜 로그인, 투표, 필터를 통한 검색 기능 등을 제공했습니다.",
    stack: [
      { name: "React-native" },
      { name: "Typescript" },
      { name: "Emotion-Native" },
      { name: "Firebase" },
    ],
    image: "/static/assets/bremen.png",
    link: "https://play.google.com/store/apps/details?id=com.walkingbass.bremen",
    github: "https://github.com/team-legato/bremen-rn",
  },
  {
    number: "02",
    category: "Front-end web app",
    title: "Life is Jazz 홈페이지",
    description:
      "재즈 동호회/커뮤니티의 홈페이지로, 일정 공지 및 참석여부 체크, 일정 투표 등의 기능을 제공합니다.",
    stack: [
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "Emotion" },
      { name: "Firebase" },
    ],
    image: "/static/assets/lifeisjazz.png",
    link: "https://lifeisjazz-nextjs.vercel.app/",
    github: "https://github.com/sungyupjoo/lifeisjazz_nextjs",
  },
  {
    number: "03",
    category: "frontend",
    title: "Bremen 홈페이지",
    description:
      "모바일 앱 브레멘의 홈페이지로, Vanilla Javascript로 작성해 제가 처음으로 배포한 웹페이지입니다.",
    stack: [{ name: "Html" }, { name: "css" }, { name: "Javascript" }],
    image: "/static/assets/bremenweb.png",
    link: "https://bremen-website-24fd4.web.app/",
    github: "https://github.com/sungyupjoo/Bremen_Website",
  },
];
