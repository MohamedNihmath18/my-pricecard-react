import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Card from './Card';
 


function App() {
  let priceCardDetail = [
    {
      planName : "FREE",
      price : "0",
      features : [
        {name:"Single User",enabled: true},
        {name:"50GB Storage",enabled: true},
        {name:"Unlimited Public Projects",enabled: true},
        {name:"Community Access",enabled: true},
        {name:"Unlimited Private Projects",enabled: false},
        {name:"Dedicated Phone Support",enabled: false},
        {name:"Free Sub-domain",enabled: false},
        {name:"Monthly Status Reports",enabled: false}
      ]
    },
    
    {
      planName : "PLUS",
      price : "9",
      features : [
        {name:"Single User",enabled: true},
        {name:"50GB Storage",enabled: true},
        {name:"Unlimited Public Projects",enabled: true},
        {name:"Community Access",enabled: true},
        {name:"Unlimited Private Projects",enabled: true},
        {name:"Dedicated Phone Support",enabled: true},
        {name:"Free Sub-domain",enabled: true},
        {name:"Monthly Status Reports",enabled: false}
      ]
    },
    
    {
      planName : "PRO",
      price : "49",
      features : [
        {name:"Single User",enabled: true},
        {name:"50GB Storage",enabled: true},
        {name:"Unlimited Public Projects",enabled: true},
        {name:"Community Access",enabled: true},
        {name:"Unlimited Private Projects",enabled: true},
        {name:"Dedicated Phone Support",enabled: true},
        {name:"Free Sub-domain",enabled: true},
        {name:"Monthly Status Reports",enabled: true}
      ]
    }
  ]
  return (
     
          <div className="container mt-5">
          <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal text-body-emphasis">React Price Card Task</h1>
       
    </div>
            <div className="row bg-primary">

            {
              priceCardDetail.map((card) =>{
                return <Card data={card}/>
              })
            }
             
             
      
            </div>
          </div>

  );
}

export default App;
