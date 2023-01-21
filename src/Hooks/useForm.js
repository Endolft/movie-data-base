import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../componentes/context/AuthContext";
import { CheckLogin } from "../componentes/login-components/CheckLogin";
export const useForm = ({ initialForm = {} }) => {
  const [formState, setFormState] = useState({ initialForm });
  const { login } = useContext(AuthContext);

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

    const { itsOkey } = CheckLogin(email, password);

    login("Endolf");

    if (itsOkey) {
      navigate("/listado");
    }
  };

  return {
    formState,
    onInputChange,
    handleSubmit,
  };
};
