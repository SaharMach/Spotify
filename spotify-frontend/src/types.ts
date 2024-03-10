export interface Type {
    type: string;
  }

export interface SideBarProps {
    onChangeDynamic: (t: Type) => string;
  }