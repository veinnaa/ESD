<template>
<div class="bg">
  <div class="formheader">
    <h1 class="formword">FORM</h1>
  </div>
  <div class="dday mt-3">Thursday, 20 October 2022</div>
  <section class="section" id="personalDetails">
    <form>
    <div class="row row1">
      <div class="col-6 col1">
        <div class="form-group timeslot">
          <label for="exampleInputEmail1">10:00 AM</label>
        </div>
        <div class="form-group timeslot">
          <label for="exampleInputEmail1">10:30 AM</label>
        </div>
        <div class="form-group timeslot">
          <label for="exampleInputEmail1">11:00 AM</label>
        </div>
        <div class="form-group timeslot">
          <label for="exampleInputEmail1">11:30 AM</label>
        </div>
        <div class="form-group timeslot">
          <label for="exampleInputEmail1">12:00 PM</label>
        </div>
      </div>
      <div class="col-6 col2">
        <div class="form-group timeslot">
          <label for="exampleInputEmail1">12:30 PM</label>
        </div>
        <div class="form-group timeslot">
          <label for="exampleInputEmail1">13:00 PM</label>
        </div>
        <div class="form-group timeslot">
          <label for="exampleInputEmail1">13:30 PM</label>
        </div>
        <div class="form-group timeslot">
          <label for="exampleInputEmail1">14:00 PM</label>
        </div>
        <div class="form-group timeslot">
          <label for="exampleInputEmail1">14:30 PM</label>
        </div>
        <button type="button" class="btn btn-primary next1">Submit </button>
        
      </div>
    </div>
    </form>
  </section>
    <div class="position-relative prog1" >
      <div class="progress" style="height: 1px;">
        <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
      <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">2</button>
      <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">3</button>
    </div>
</div>

</template>

<style scoped>
.bg {
  margin-top: 5%;
  margin-bottom: 3%;
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
  /* margin-top: 0%; */
  width: 50%;
}

.next1{
  float: right;
  margin-top: 5%;
}

.timeslot{
  margin-top: 10px;
  background-color: #E6E6E6;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  text-align: center;
}

.dday{
  margin-left: 50px;
}
</style>