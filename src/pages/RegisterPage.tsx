import { useState } from "react";
import type { ChangeEvent, FocusEvent, SubmitEvent } from "react";
import Button from "../components/ui/Button";
import TextField from "../components/ui/TextField";
import { validateRegistration } from "../lib/validateRegistration";
import type { RegistrationValues } from "../lib/validateRegistration";

const emptyValues: RegistrationValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

type Touched = Partial<Record<keyof RegistrationValues, boolean>>;

function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>(emptyValues);
  const [touched, setTouched] = useState<Touched>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [registeredName, setRegisteredName] = useState("");

  const errors = validateRegistration(values);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length === 0) {
      setRegisteredName(values.fullName.trim());
    }
  }

  function visibleError(field: keyof RegistrationValues) {
    return touched[field] || submitAttempted ? errors[field] : undefined;
  }

  if (registeredName) {
    return <p role="status">Thanks, {registeredName}. You are registered.</p>;
  }

  const termsError = visibleError("acceptTerms");

  return (
    <section>
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          autoComplete="name"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError("fullName")}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError("email")}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError("password")}
        />
        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError("confirmPassword")}
        />

        <div className="field">
          <div className="check">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={termsError ? true : undefined}
              aria-describedby={termsError ? "acceptTerms-error" : undefined}
            />
            <label htmlFor="acceptTerms">I accept the terms</label>
          </div>
          {termsError && (
            <p id="acceptTerms-error" className="field-error">
              {termsError}
            </p>
          )}
        </div>

        <Button type="submit">Create account</Button>
      </form>
    </section>
  );
}

export default RegisterPage;