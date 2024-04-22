import { Outlet } from 'react-router-dom';

const Company = () => {
  return (
    <div>
      <h1>Company</h1>
      <p>Welcome to our company page!</p>
      <Outlet />
    </div>
  );
};

export default Company;
