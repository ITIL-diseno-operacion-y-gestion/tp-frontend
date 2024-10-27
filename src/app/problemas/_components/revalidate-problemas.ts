"use server";

import { revalidateTag } from "next/cache";

export const revalidateProblemas = async () => {
  revalidateTag("problemas");
};
