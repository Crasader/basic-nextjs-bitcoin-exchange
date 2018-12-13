
class Prices extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currency: 'USD'
    };  
  }
  
  render() {
    const { bpi } = this.props;
    let cards = [];
    for(const [key, {rate_float, description}] of Object.entries(bpi)) {
        cards = [...cards, (<div key={key} className="column col-4">
           <div className="card">
              <div className="card-header">
                <div className="card-title h5">{key}</div>
                <div className="card-subtitle text-gray">{description}</div>
              </div>
              <div className="card-body">
                <p> Rate: {rate_float}</p>
              
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Do something</button>
              </div>
            </div>
           </div>
         )]};
        
    return (
      <div className="columns">
      {cards}
    </div>);
  }
}

export default Prices;
