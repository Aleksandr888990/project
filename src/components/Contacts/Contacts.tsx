import Vector1 from './Vector1.svg'
import Vector2 from "./Vector2.svg";
import Vector3 from "./Vector3.svg";
import Vector4 from "./Vector4.svg";
import Vector5 from "./Vector5.svg";
import Vector6 from "./Vector6.svg";
import mobile from "./mobile.svg";
import mind from "./mind.svg";
import mail from "./mail.svg";
import './Contacts.scss'
import { TextField } from '@mui/material';
import Request from '../Request/Request';
import { useForm } from "react-hook-form";

type Props = {}
type FormData = {
  name: string;
  email: string;
  text: string;
};

const Contacts = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onBlur"
  });

  const onSubmit = () => {
    reset();
  };
  return (
    <div className="coontacts">
      <h2>CONTACTS</h2>
      <h3>
        We are open for dialog and you are welcome to share your opinions or
        thoughts with us
      </h3>
      <p>
        Hit us up any time through email with any idea and help us turn your
        great ideas into brilliant projects
      </p>
      <div className="contacts2">
        <ul>
          <li>
            <img src={Vector1} alt="" />
            <p>Ukraine, Kyiv, Rodyny Kristeriv 20B, office 188</p>
          </li>
          <li>
            <img src={Vector2} alt="" />
            <p>+38 (093) 345 56 76</p>
          </li>
          <li>
            <img src={Vector3} alt="" />
            <p>+38 (093) 345 56 77</p>
          </li>
          <li>
            <img src={Vector4} alt="" />
            <p>Stanassets</p>
          </li>
          <li>
            <img src={Vector5} alt="" />
            <p>stanAssets@gmail.com</p>
          </li>
          <li>
            <img src={Vector6} alt="" />
            <p>facebook.com/Stanassets</p>
          </li>
        </ul>
        <div className="request">
          <img className="mobile" src={mobile} alt="" />
          <img className="mind" src={mind} alt="" />
          <img className="mail" src={mail} alt="" />
          <form className="blank" onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
              <TextField
                className="field field-name"
                label="Name"
                {...register("name", { required: "The field is not filled" })}
                color={errors.name ? "error" : "success"}
              />
              <div className="error error-name">
                {errors?.name && <p>{errors?.name?.message || "Error:"}</p>}
              </div>

              <TextField
                className="field field-email"
                label="Mail"
                {...register("email", { required: "The field is not filled" })}
                color={errors.email ? "error" : "success"}
              />
              <div className="error error-email">
                {errors?.email && <p>{errors?.email?.message || "Error:"}</p>}
              </div>
              <TextField
                className="field field-big"
                multiline
                rows={2}
                label="Message"
                {...register("text", { required: "The field is not filled" })}
                color={errors.text ? "error" : "success"}
              />
              <div className="error error-text">
                {errors?.text && <p>{errors?.text?.message || "Error:"}</p>}
              </div>
              <Request isValid={isValid} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts