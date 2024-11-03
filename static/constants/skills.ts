import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiSupabase,
  SiFirebase,
} from 'react-icons/si';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAws,
} from 'react-icons/fa';

export const skills = {
  title: 'My Skills',
  description:
    '프론트엔드 개발자로서 필요한 기존 및 최신 언어/프레임워크들을 계속해서 배우고 활용하며 발전하고 있습니다.',
  skillList: [
    { icon: FaHtml5, name: 'html' },
    { icon: FaCss3, name: 'css' },
    { icon: FaJs, name: 'javascript' },
    { icon: SiTypescript, name: 'typescript' },
    { icon: FaReact, name: 'react' },
    { icon: SiTailwindcss, name: 'tailwind css' },
    { icon: FaReact, name: 'react-native' },
    { icon: SiNextdotjs, name: 'next.js' },
    { icon: SiFirebase, name: 'firebase' },
    { icon: SiSupabase, name: 'supabase' },
    { icon: FaAws, name: 'aws' },
    // { icon: FaNodeJs, name: "node.js" },
  ],
};
