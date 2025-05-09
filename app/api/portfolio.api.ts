import { PORTFOLIO_API } from "~/config/env.config";
import type { Certificate } from "~/shared/certificates";
import type { Experience } from "~/shared/experiences";
import type { Project } from "~/shared/projects";
import type { Service } from "~/shared/services";
import type { Skill } from "~/shared/skills";

export const getExperiences = async (): Promise<Experience[] | undefined> => {
  const response = await fetch(`${PORTFOLIO_API}/experiences`);

  const { experiences } = await response.json();

  return experiences;
};

export const getServices = async (): Promise<Service[] | undefined> => {
  const response = await fetch(`${PORTFOLIO_API}/services`);

  const { services } = await response.json();

  return services;
};

export const getCertificates = async (): Promise<Certificate[] | undefined> => {
  const response = await fetch(`${PORTFOLIO_API}/certificates`);

  const { certificates } = await response.json();

  return certificates;
};

export const getSkills = async (): Promise<Skill[] | undefined> => {
  const response = await fetch(`${PORTFOLIO_API}/skills`);

  const { skills } = await response.json();

  return skills;
};

export const getProjects = async (): Promise<Project[] | undefined> => {
  const response = await fetch(`${PORTFOLIO_API}/projects`);

  const { projects } = await response.json();

  return projects;
};
