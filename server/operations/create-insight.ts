import type { Insight } from "$models/insight.ts";
import type * as insightsTable from "$tables/insights.ts";
import type { HasDBClient } from "../shared.ts";

type Input = HasDBClient & {
  brand: number;
  text: string;
};

export default (input: Input): Insight => {
  console.log("Creating insight");

  const item: insightsTable.Insert = {
    brand: input.brand,
    createdAt: new Date().toISOString(),
    text: input.text,
  };

  const result = input.db.sql<
    insightsTable.Row
  >`INSERT INTO insights (brand, text) VALUES (${item.brand}, ${item.text})`;

  return {
    id: result[0].id,
    brand: result[0].brand,
    createdAt: new Date(result[0].createdAt),
    text: result[0].text,
  };
};
