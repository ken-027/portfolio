"use client";

import EXPERIENCES from "~/shared/experiences";
import moment from "moment";

const getExperience = () => {
  const daysOfExperience = EXPERIENCES.map(({ startDate, endDate }) =>
    moment(endDate === "Present" ? new Date() : endDate).diff(startDate, "days")
  ).reduce((total, value) => total + value, 0);

  const start = moment();
  const end = moment().add(daysOfExperience, "days");

  const monthsOfExperience = end.diff(start, "months");

  const years = Math.floor(monthsOfExperience / 12);
  const months = monthsOfExperience % 12;

  return { years, months };
};

export default getExperience;
