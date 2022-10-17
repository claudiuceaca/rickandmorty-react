
type Status = {
    status: string;
}

type StatusAction = {
    type: string;
    payload?: string;
}


export const initialState = {
  status: "",
};

export const init = (initialState:string) => {
  return { initialState };
};

export const reducer = (state: Status, action:StatusAction) => {
  switch (action.type) {
    case "alive":
      return { status: "alive" };
    case "dead":
      return { status: "dead" };
    case "unknown":
      return { status: "unknown" };
    case "clean":
      return { status: "" };
    default:
      return { status: "" };
  }
};


