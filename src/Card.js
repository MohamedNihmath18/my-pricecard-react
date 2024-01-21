function Card(props){
    return  <div class="col-lg-4">
    <div class="card mt-5 mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">{props.data.planName}</h4>
        <h1 class="card-title pricing-card-title">${props.data.price}<small class="text-body-secondary fw-light">/mo</small></h1>
      </div>
      <div class="card-body">
        
        <ul class="list-unstyled mt-3 mb-4">
        {
            props.data.features.map((feature) => {
                return feature.enabled ? <li ml-3><i class="fa fa-check" aria-hidden="true"></i>{feature.name}</li> : <li style={{color: "gray"}}><i class="fa fa-times opacity:50"></i>{feature.name}</li>;
            })
        }
          
        </ul>
        <button type="button" class="w-100 btn  btn-primary">Button</button>
      </div>
    </div>
  </div>
}

export default Card;