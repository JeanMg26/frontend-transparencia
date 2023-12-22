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
  (val: any) => val.length >= 3 || "Ingrese como mínimo 3 caracteres.",
];

const fullnameRequired = [
  (val: any) => !!val || "Por favor ingrese sus nombres completos.",
  (val: any) => val.length >= 3 || "Ingrese como mínimo 3 caracteres.",
];

const currentPasswordVal = [
  (val: any) =>
    val.length >= 6 || "La contraseña debe tener al menos 6 caracteres.",
];

const newPasswordVal = [
  (val: any) =>
    val.length >= 6 || "La contraseña debe tener al menos 6 caracteres.",
];

// ++ Categories
const nameCategoryVal = [
  (val: any) => !!val || "Por favor ingrese el nombre de la categoria.",
  (val: any) =>
    val.length >= 6 || "La categoria debe de tener como mínimo 6 caracteres.",
  (val: any) =>
    val.length <= 30 || "La categoria debe de tener como máximo 30 caracteres.",
];

const selectCategoryVal = [
  (val: any) => !!val || "Por seleccionar una categoria.",
];

// ++Section
const titleArticleVal = [
  (val: any) => !!val || "Por ingrese un titulo.",
  (val: any) =>
    val.length >= 6 || "El título tiene que tener como mínimo 6 carácteres.",
  (val: any) =>
    val.length <= 100 ||
    "El título tiene que tener como máximo 100 carácteres.",
];

const descArticleVal = [
  (val: any) => !!val || "Por ingrese una descripción para la publicación.",
  (val: any) =>
    val.length >= 6 || "La descripción debe tener como mínimo 6 carácteres.",
];

const routeValidation = [
  (val: any) => !!val || "Por ingresa la ruta de la publicación.",
  (val: any) =>
    val.length >= 6 ||
    "La ruta de la publicación debe tener como mínimo 6 carácteres.",
];

export {
  emailRequired,
  passwordRequired,
  usernameRequired,
  fullnameRequired,
  currentPasswordVal,
  newPasswordVal,
  nameCategoryVal,
  selectCategoryVal,
  routeValidation,
  titleArticleVal,
  descArticleVal,
};
