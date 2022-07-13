import { Layout } from 'components/layout/Layout';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Layout>
      <Link to="/project/sampleproject">Sample Project</Link>
    </Layout>
  );
}

export default Home;
