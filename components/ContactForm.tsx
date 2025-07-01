// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactForm.module.scss'
import clsx from 'clsx';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xgeggjpl");
  if (state.succeeded) {
      return <p>Thank you!</p>;
  }
  return (
    <section className={clsx(styles.contactform)}>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">
        Full Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
        placeholder="First and Last" 
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="email@domain.com" 
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="email">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </section>
  );
}