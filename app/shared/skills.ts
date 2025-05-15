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
  icon: string;
  proficiency: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export interface Skill {
  name: string;
  items: ItemSkill[];
}
