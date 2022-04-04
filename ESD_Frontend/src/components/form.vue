<template>
<div class="bg">
  <div class="formheader">
    <h1 class="formword">FORM</h1>
  </div>
  <section class="section" id="personalDetails">
    <form>
    <div class="row row1">
      <div class="col-6 col1">
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">NRIC No./Passport No.</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Date of Birth</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Age</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        
      </div>
      <div class="col-6 col2">
        <div class="form-group">
            <label for="exampleInputEmail1">Address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Citizenship</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Contact No.</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <label for="exampleInputEmail1">Address</label>
          <br>
          <div class="form-check form-check-inline">
            <input class="form-check-input r1" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">Female</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input r2" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2"> Male</label>
          </div>
          <br>
        </div>
      </div>
    </form>
  </section>
  <div class="position-relative prog1" >
    <div class="progress" style="height: 1px;">
      <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
    <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">2</button>
    <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">3</button>
  </div>
  <button type="button" class="btn btn-primary next1">Next </button>

</div>

</template>

<style scoped>
.bg {
  margin-top: 5%;
  margin-bottom: 3.5%;
  margin-left: auto;
  margin-right: auto;
  background-color: #F5F5F5	;
  width: 90%;
  height: 70vh;
  overflow: hidden;
}

.formheader{
  width: 100%;
  height: 10%;
  background-color: #E6E6E6;
}

.formword{
  padding-top: 10px;
  padding-left: 10px;
  font-weight: bolder;
}

.col1{
  padding-left: 5%;
}

.col2{
  padding-right: 5%;
}

.row1{
  padding-top: 3%;
}

label{
  padding-top: 10px;
  padding-bottom: 10px;
}

.r1, .r2{
  margin-top: 13px;
}

.prog1{
  margin-left: auto;
  margin-right:auto; 
  margin-top: 2.5%;
  width: 75%;
}

.next1{
  float: right;
  margin-top: 15px;
  margin-right: 50px;
}


</style>