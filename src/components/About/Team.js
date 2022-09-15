import "../../../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import photo1 from '../../images/photo1.png';
import photo2 from '../../images/photo2.png';
import photo3 from '../../images/photo3.png';

function Team() {
    return (
<div class="py-5 team4">
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-7 text-center">
        <h3 class="mb-3">Meet Our Team</h3>
        <h6 class="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
      </div>
    </div>
    <div class="row">
      
      <div class="col-lg-3 mb-4">
        
        <div class="row">
          <div class="col-md-12">
            <img src={photo1} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Nitin Mungase</h5>
              <h6 class="subtitle mb-3">Project Specialist</h6>
              <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
              <ul class="list-inline">
              <a href="/" class="view" title="Contact Mail" style={{color:"#00911f"}}><i class="material-icons">&#xe0d0;</i></a>
                <a href="/" class="view" title="Facebook" style={{color:"#00911f"}}><i class="material-icons">&#xf234;</i></a>
                <a href="/" class="view" title="Wechat" style={{color:"#00911f"}}><i class="material-icons">&#xea81;</i></a>
                <a href="/" class="view" title="Instagram" style={{color:"#00911f"}}><i class="material-icons">&#xe438;</i></a>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      
      
      <div class="col-lg-3 mb-4">
        
        <div class="row">
          <div class="col-md-12">
          <img src={photo2} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Neeraj Meena</h5>
              <h6 class="subtitle mb-3">Project Specialist</h6>
              <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
              <ul class="list-inline">
              <a href="/" class="view" title="Contact Mail" style={{color:"#00911f"}}><i class="material-icons">&#xe0d0;</i></a>
                <a href="/" class="view" title="Facebook" style={{color:"#00911f"}}><i class="material-icons">&#xf234;</i></a>
                <a href="/" class="view" title="Wechat" style={{color:"#00911f"}}><i class="material-icons">&#xea81;</i></a>
                <a href="/" class="view" title="Instagram" style={{color:"#00911f"}}><i class="material-icons">&#xe438;</i></a>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
     
      <div class="col-lg-3 mb-4">
        
        <div class="row">
          <div class="col-md-12">
          <img src={photo3} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Vaibhav Narsale</h5>
              <h6 class="subtitle mb-3">Project Specialist</h6>
              <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
              <ul class="list-inline">
              <a href="/" class="view" title="Contact Mail" style={{color:"#00911f"}}><i class="material-icons">&#xe0d0;</i></a>
                <a href="/" class="view" title="Facebook" style={{color:"#00911f"}}><i class="material-icons">&#xf234;</i></a>
                <a href="/" class="view" title="Wechat" style={{color:"#00911f"}}><i class="material-icons">&#xea81;</i></a>
                <a href="/" class="view" title="Instagram" style={{color:"#00911f"}}><i class="material-icons">&#xe438;</i></a>
              </ul>
            </div>
          </div>
        </div>
       
      </div>
     
      <div class="col-lg-3 mb-4">
        
        <div class="row">
          <div class="col-md-12">
          <img src={photo1} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Pravin Nikam</h5>
              <h6 class="subtitle mb-3">Project Specialist</h6>
              <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
              <ul class="list-inline">
              <a href="/" class="view" title="Contact Mail" style={{color:"#00911f"}}><i class="material-icons">&#xe0d0;</i></a>
                <a href="/" class="view" title="Facebook" style={{color:"#00911f"}}><i class="material-icons">&#xf234;</i></a>
                <a href="/" class="view" title="Wechat" style={{color:"#00911f"}}><i class="material-icons">&#xea81;</i></a>
                <a href="/" class="view" title="Instagram" style={{color:"#00911f"}}><i class="material-icons">&#xe438;</i></a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Team;