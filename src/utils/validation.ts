// ++SignIn++
const emailRequired = [
  (val: any) => !!val || "Por favor ingrese su correo electrónico.",
  (val: any, rules: any) =>
    rules.email(val) || "Ingrese un correo electrónico válido",
];

const passwordRequired = [
  (val: any) => !!val || "Por favor ingrese su contraseña.",
];

// ++Profile++
const usernameRequired = [
  (val: any) => !!val || "Por favor ingrese su nombre de usuario.",
];

const fullnameRequired = [
  (val: any) => !!val || "Por favor ingrese sus nombres completos.",
];

const currentPasswordVal = [
  (val: any) =>
    val.length >= 6 || "La contraseña debe tener al menos 6 caracteres.",
];

const newPasswordVal = (password: any) => {
  return [
    (val: any) =>
      (password && val == password) || "Las contraseñas no coinciden.",
  ];
};

export {
  emailRequired,
  passwordRequired,
  usernameRequired,
  fullnameRequired,
  currentPasswordVal,
  newPasswordVal,
};
