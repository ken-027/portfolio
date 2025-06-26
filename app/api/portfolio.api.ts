import { PORTFOLIO_API } from "~/config/env.config";
import type { Certificate, DeveloperPlatform, WhatIDo } from "~/types";
import type { Experience } from "~/types";
import type { Project } from "~/types";
import type { Service } from "~/types";
import type { Skill } from "~/types";

interface YearsMonthExperience {
  years: number;
  months: number;
}

export const getExperiences = async (): Promise<Experience[]> => {
  const response = await fetch(`${PORTFOLIO_API}/portfolio/experiences`);

  const { experiences } = await response.json();

  return experiences;
};

export const getServices = async (): Promise<Service[]> => {
  const response = await fetch(`${PORTFOLIO_API}/portfolio/services`);

  const { services } = await response.json();

  return services;
};

export const getWhatIDo = async (): Promise<WhatIDo[]> => {
  const response = await fetch(`${PORTFOLIO_API}/portfolio/what-i-do`);

  const { whatIDo } = await response.json();

  return whatIDo;
};

export const getCertificates = async (): Promise<Certificate[]> => {
  const response = await fetch(`${PORTFOLIO_API}/portfolio/certificates`);

  const { certificates } = await response.json();

  return certificates;
};

export const getSkills = async (): Promise<Skill[]> => {
  const response = await fetch(`${PORTFOLIO_API}/portfolio/skills`);

  const { skills } = await response.json();

  return skills;
};

export const getProjects = async (): Promise<Project[]> => {
  const response = await fetch(`${PORTFOLIO_API}/portfolio/projects`);

  const { projects } = await response.json();

  return projects;
};

export const getDeveloperPlatform = async (): Promise<DeveloperPlatform[]> => {
  const response = await fetch(`${PORTFOLIO_API}/portfolio/developer-platform`);

  const { platforms } = await response.json();

  return platforms;
};

export const getAboutMe = async (): Promise<string[]> => {
  const response = await fetch(`${PORTFOLIO_API}/portfolio/about-me`);

  const { aboutMe } = await response.json();

  return aboutMe;
};

export const getTotalExperience = async (): Promise<YearsMonthExperience> => {
  const response = await fetch(
    `${PORTFOLIO_API}/portfolio/experiences/years-of-experience`
  );

  const { years, months } = (await response.json()) as {
    years: number;
    months: number;
  };

  return { years, months };
};
