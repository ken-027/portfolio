/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ASPNETIcon from "~/components/icons/aspnet.icon";
import AWSIcon from "~/components/icons/aws.icon";
import BashIcon from "~/components/icons/bash.icon";
import BootstrapIcon from "~/components/icons/bootstrap.icon";
import CodeIgniterIcon from "~/components/icons/codigniter.icon";
import CSharpIcon from "~/components/icons/csharp.icon";
import CSSIcon from "~/components/icons/css.icon";
import DockerIcon from "~/components/icons/docker.icon";
import ExpressJSIcon from "~/components/icons/expressjs.icon";
import FigmaIcon from "~/components/icons/figma.icon";
import GitIcon from "~/components/icons/git.icon";
import HTMLIcon from "~/components/icons/html.icon";
import JavascriptIcon from "~/components/icons/javascript.icon";
import JestIcon from "~/components/icons/jest.icon";
import JQueryIcon from "~/components/icons/jquery.icon";
import LaravelIcon from "~/components/icons/laravel.icon";
import MariaDBIcon from "~/components/icons/mariadb.icon";
import MySQLIcon from "~/components/icons/mysql.icon";
import NextJSIcon from "~/components/icons/nextjs.icon";
import NodeJSIcon from "~/components/icons/nodejs.icon";
import PhpIcon from "~/components/icons/php.icon";
import PostmanIcon from "~/components/icons/postman.icon";
import PythonIcon from "~/components/icons/python.icon";
import ReactJSIcon from "~/components/icons/reactjs.icon";
import ReduxIcon from "~/components/icons/redux.icon";
import SAPIcon from "~/components/icons/sap.icon";
import SassIcon from "~/components/icons/sass.icon";
import SocketIOIcon from "~/components/icons/socketio.icon";
import SQLServerIcon from "~/components/icons/sqlserver.icon";
import TailwindCSSIcon from "~/components/icons/tailwincss.icon";
import TypescriptIcon from "~/components/icons/typescript.icon";
import VSCodeIcon from "~/components/icons/vscode.icon";

export interface ItemSkill {
  name: string;
  Icon: React.FC<any>;
  proficiency: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export interface Skill {
  name: string;
  items: ItemSkill[];
}

const SKILLS: Skill[] = [
  {
    name: "Programming & Markup Languages",
    items: [
      { name: "HTML", Icon: HTMLIcon, proficiency: 8 },
      { name: "Sass", Icon: SassIcon, proficiency: 5 },
      { name: "Typescript", Icon: TypescriptIcon, proficiency: 7 },
      { name: "Javascript", Icon: JavascriptIcon, proficiency: 8 },
      { name: "PHP", Icon: PhpIcon, proficiency: 8 },
      { name: "Csharp", Icon: CSharpIcon, proficiency: 5 },
      { name: "Python", Icon: PythonIcon, proficiency: 5 },
      { name: "Bash", Icon: BashIcon, proficiency: 4 },
    ],
  },
  {
    name: "Frontend Development",
    items: [
      { name: "CSS", Icon: CSSIcon, proficiency: 7 },
      { name: "JQuery", Icon: JQueryIcon, proficiency: 7 },
      { name: "React JS", Icon: ReactJSIcon, proficiency: 8 },
      { name: "Tailwind CSS", Icon: TailwindCSSIcon, proficiency: 8 },
      { name: "Bootstrap", Icon: BootstrapIcon, proficiency: 8 },
    ],
  },
  {
    name: "Backend Development",
    items: [
      { name: "Node JS", Icon: NodeJSIcon, proficiency: 7 },
      { name: "Express JS", Icon: ExpressJSIcon, proficiency: 7 },
      { name: "SQL Server", Icon: SQLServerIcon, proficiency: 8 },
      { name: "MySQL", Icon: MySQLIcon, proficiency: 6 },
      { name: "Maria DB", Icon: MariaDBIcon, proficiency: 7 },
    ],
  },
  {
    name: "Fullstack Development",
    items: [
      { name: "Next JS", Icon: NextJSIcon, proficiency: 6 },
      { name: "Laravel", Icon: LaravelIcon, proficiency: 7 },
      { name: "CodeIgniter", Icon: CodeIgniterIcon, proficiency: 7 },
      { name: "ASP.NET", Icon: ASPNETIcon, proficiency: 5 },
    ],
  },
  {
    name: "Tools and Technologies",
    items: [
      { name: "Figma", Icon: FigmaIcon, proficiency: 5 },
      { name: "Crystal Report", Icon: SAPIcon, proficiency: 6 },
      { name: "VS Code", Icon: VSCodeIcon, proficiency: 8 },
      { name: "Postman", Icon: PostmanIcon, proficiency: 7 },
      { name: "Jest", Icon: JestIcon, proficiency: 5 },
      { name: "Redux Toolkit", Icon: ReduxIcon, proficiency: 6 },
      { name: "Socket.IO", Icon: SocketIOIcon, proficiency: 5 },
      { name: "GIT", Icon: GitIcon, proficiency: 8 },
      //   { name: "NPM", Icon: NPMIcon, proficiency: 8 },
      { name: "Docker", Icon: DockerIcon, proficiency: 4 },
      { name: "AWS", Icon: AWSIcon, proficiency: 4 },
    ],
  },
];

export default SKILLS;
