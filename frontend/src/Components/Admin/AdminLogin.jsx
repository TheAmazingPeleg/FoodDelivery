import React from 'react';
import Input from '../Input/Input';

function AdminLogin() {
  return (
    <div>
      <form method="POST">
        <Input type="text" name="username" />
        <Input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default AdminLogin;
