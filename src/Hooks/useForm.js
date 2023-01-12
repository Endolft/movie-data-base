import  { useState } from "react";
import { useNavigate, navigate } from "react-router-dom";
import { checkLogin } from "../componentes/login components/checkLogin";

export const useForm = ({ initialForm = {} }) => {
  const [formState, setFormState] = useState({ initialForm });
 
  let navigate = useNavigate();

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const email = target.email.value;
    const password = target.password.value;

    checkLogin(email, password);

    let tokenAlmacenado = sessionStorage.getItem("token");

    if (!tokenAlmacenado) {
      navigate("/");
      return;
    }
    navigate("/listado");
  };

  return {
    formState,
    onInputChange,
    handleSubmit,
  };
};
