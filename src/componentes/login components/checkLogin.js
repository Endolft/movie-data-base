import Swal from "sweetalert2";

export const checkLogin = (email, password) => {
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

  const tokenRecibido = "token ficticio";
  sessionStorage.setItem("token", tokenRecibido);
};
