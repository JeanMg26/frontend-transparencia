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

const newPasswordVal = [
  (val: any) =>
    val.length >= 6 || "La contraseña debe tener al menos 6 caracteres.",
];

// const newPasswordVal = (password: any) => {
//   return [
//     (val: any) =>
//       (password && val == password) || "Las contraseñas no coinciden.",
//   ];
// };

// ++ Categories
const nameCategoryVal = [
  (val: any) => !!val || "Por favor ingrese el nombre de la categoria.",
  (val: any) =>
    val.length >= 6 || "La categoria debe de tener como mínimo 6 caracteres.",
  (val: any) =>
    val.length <= 30 || "La categoria debe de tener como máximo 30 caracteres.",
];

// ++ Subcategories
const nameSubcategoryVal = [
  (val: any) => !!val || "Por favor ingrese el nombre de la subcategoria.",
  (val: any) =>
    val.length >= 6 ||
    "La subcategoria debe de tener como mínimo 6 caracteres.",
  (val: any) =>
    val.length <= 30 ||
    "La subcategoria debe de tener como máximo 30 caracteres.",
];

const selectCategoryVal = [
  (val: any) => !!val || "Por seleccionar una categoria.",
];

const selectSubcategoryVal = [
  (val: any) => !!val || "Por seleccionar una subcategoria.",
];

export {
  emailRequired,
  passwordRequired,
  usernameRequired,
  fullnameRequired,
  currentPasswordVal,
  newPasswordVal,
  nameCategoryVal,
  nameSubcategoryVal,
  selectCategoryVal,
  selectSubcategoryVal,
};
