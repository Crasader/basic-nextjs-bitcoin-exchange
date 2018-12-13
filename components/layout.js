import Header from './header';

export default (props) => {
   return (
    <div className="container">
          <div className="columns">   
              <Header/>
              {props.children}
          </div>
    </div>
   );
};