import moment from "moment";

type EndDate = Date | "Present";
type DateBy = "months" | "years";

export const getDateBy = (startDate: Date, endDate: EndDate, dateBy: DateBy) =>
  moment(endDate === "Present" ? new Date() : endDate).diff(
    moment(startDate),
    dateBy
  );

export const getDateFormat = (date: EndDate) =>
  moment(date === "Present" ? new Date() : date).format("MMMM YYYY");

export const getTotalByFormat = (startDate: Date, endDate: EndDate) => {
  const totalMonths = getDateBy(startDate, endDate, "months");

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearsFormat = years > 0 ? `${years} Year${years > 1 ? "s" : ""}` : "";
  const monthsFormat =
    months > 0 ? `${months} Month${months > 1 ? "s" : ""}` : "";

  const space = years > 0 ? " " : "";

  return `${yearsFormat}${space}${monthsFormat}`;
};
