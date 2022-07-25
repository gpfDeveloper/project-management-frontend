import { Layout } from 'components/layout/Layout';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Layout>
      <Link to="/projects/65cc7df2-35a4-4342-b1ac-b72316a36a01/board">
        Sample Project
      </Link>
    </Layout>
  );
}

export default Home;
