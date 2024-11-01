export interface ActionResponse {
  detail: Array<FormState> | string;
}

export interface FormState {
  msg: string;
  loc: ["body", string];
}

export const actionResponseToString = (response: ActionResponse) => {
  if (typeof response.detail === "string") {
    return response.detail;
  }

  return response.detail
    .map((error) => `${error.loc[1]}: ${error.msg}`)
    .join("\n");
};
