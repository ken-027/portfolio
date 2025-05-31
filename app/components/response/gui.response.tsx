import { switchStyle } from "~/shared/local-storage";

export default function GUIResponse() {
  switchStyle("gui");
  location.reload();

  return null;
}
