import Layout from './../components/layout';
import Fetch from 'isomorphic-unfetch';
import Prices from './../components/prices';
const Index = (props) => (<div>
   <Layout>
        <div className="column col-8 col-mx-auto">
          <h1>Welcome to bitcoin prices</h1>
              <Prices bpi={props.bpi}/>
         </div>
   </Layout>
 </div>);
                     
Index.getInitialProps = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi
  }
};

export default Index;

