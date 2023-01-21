import Swal from "sweetalert2";

export const CheckLogin = (email, password) => {
  let itsOkey = false;

  if ([email, password].includes("")) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Email or Password can't be empty",
      color: "#f8d388",
      background: "#4b0f0c",
      showConfirmButton: true,
    });
    return;
  }
  if (email !== "gmail@.com" || password !== "gmail@.com") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Wrong Username or password !",
      color: "#f8d388",
      background: "#4b0f0c",
      showConfirmButton: true,
    });

    return;
  }
  itsOkey = true;

  return { itsOkey };
};
