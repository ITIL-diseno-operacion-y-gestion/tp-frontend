export interface ActionResponse {
  detail: Array<FormState> | string;
}

export interface FormState {
  msg: string;
}

export const actionResponseToString = (response: ActionResponse) => {
  if (typeof response.detail === "string") {
    return response.detail;
  }

  return response.detail.map((error) => error.msg).join("\n");
};
