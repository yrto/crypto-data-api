import moment from "moment";

function formatUnixDate(unixDateInMiliseconds: number): string {
  try {
    const unixDateInSeconds = unixDateInMiliseconds / 1000;
    const stringDate = moment
      .unix(unixDateInSeconds)
      .utc()
      .format("DD/MM/YYYY hh:mm a");
    return stringDate;
  } catch (err) {
    throw new Error(err);
  }
}

export default formatUnixDate;
