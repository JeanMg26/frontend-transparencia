import { Notify } from "quasar";

const icon_action = {
  success: "fa-solid fa-circle-check",
  warning: "fa-solid fa-circle-exclamation",
  error: "fa-solid fa-circle-xmark"
}

const notify = (action: string, message: string) => {

  let iconColor = ""

  switch (action) {
    case "success":
      action = icon_action.success
      iconColor = "green"
      break;
    case "warning":
      action = icon_action.warning
      iconColor = "amber-5"
      break;
    case "error":
      action = icon_action.error
      iconColor = "red"
      break;
    default:
      break;
  }

  Notify.create({
    message: message,
    color: "blue-1",
    textColor: "grey-7",
    position: "top-right",
    icon: action,
    iconColor: iconColor,
    iconSize: "1.1rem",
    timeout: 3000,
    badgeStyle: "display: none",
    classes: "q-notify",
  })
}

export {
  notify
}