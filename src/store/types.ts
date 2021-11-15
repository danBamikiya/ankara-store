export type ToggleState = {
  theme: string;
};

export type ToggleAction = {
  type: string;
};

export type ToggleFn = {
  toggle: () => void;
};
