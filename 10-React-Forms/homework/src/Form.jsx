import React from 'react';

export function validate(input) {
  let errors = {};

  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

  if (!input.password) {
    errors.password = 'Password is required';
  } else if ((!/(?=.*[0-9])/.test(input.password))) {
    errors.password = 'Password is invalid';
  }

  return errors;
};

export default function  Form() {

  // const [username, setUsername] = React.useState('')
  // const [password, setPassword] = React.useState('')

  const [errors, setErrors] = React.useState({});

  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" name="username" className={errors.username && 'danger'} onChange={handleInputChange} value={input.username}  />
        {errors.username && (
          <p className="danger">{errors.username}</p>
        )}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" className={errors.password && 'danger'} onChange={handleInputChange} value={input.password} />
        {errors.password && (
          <p className="danger">{errors.password}</p>
        )}
      </div>
      <input type="submit" value="Send" />
    </form>
  )
}
