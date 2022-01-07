import { DateTime } from "luxon";
import { IBlogPostDatum } from "@/my-types";

export function prepareDateFromBlogPostDatum(item: IBlogPostDatum): string {
  const dateISOString = new Date(item.date).toISOString();
  const luxonDate = DateTime.fromISO(dateISOString);

  return `${luxonDate.toFormat("DDDD")} (${luxonDate.toRelative()})`;
}
