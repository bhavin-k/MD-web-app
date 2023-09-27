export const tabSelection = (tab: number) => {
  return {
    type: 'TAB_SELECTION',
    selectedTab: tab,
  };
};

export const sizeSelection = (size: string) => {
  return {
    type: 'SIZE_SELECTION',
    size,
  };
};

export const colorselection = (color: number) => {
  return {
    type: 'COLOR_SELECTION',
    color,
  };
};
