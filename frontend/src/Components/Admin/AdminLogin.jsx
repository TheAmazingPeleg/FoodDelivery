import React from 'react';
import Input from '../Input/Input';

function AdminLogin() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <Input type="text" name="username" />
        <Input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default AdminLogin;
