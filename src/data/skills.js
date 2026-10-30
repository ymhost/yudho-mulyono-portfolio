import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiPhp,
  SiLaravel,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import {
  FaDatabase,
  FaServer,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
} from "react-icons/fa";

const skills = [
  {
    category: "Web Development",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Database & Tools",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "SQL", icon: FaDatabase },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Postman", icon: SiPostman },
      { name: "XAMPP", icon: FaServer },
    ],
  },
  {
    category: "Administrative Applications",
    items: [
      { name: "Microsoft Word", icon: FaFileWord },
      { name: "Microsoft Excel", icon: FaFileExcel },
      { name: "Microsoft PowerPoint", icon: FaFilePowerpoint },
    ],
  },
];

export default skills;
