import { useParams } from 'react-router-dom';

const CompanyDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Company Detail</h1>
      <p>You are viewing details for company ID: {id}</p>
    </div>
  );
};

export default CompanyDetail;
