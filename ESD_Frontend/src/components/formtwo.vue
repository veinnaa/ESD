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
          <label for="exampleFormControlTextarea1">Allergies</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" v-model="allergies"></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea2">Symptoms</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" v-model="symptoms"></textarea>
        </div>
        
      </div>
      <div class="col-6 col2">
        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">Multiple files input example</label>
          <input class="form-control" type="file" id="formFileMultiple" multiple>
        </div>
        <div class="w-100">
          <label class="mt-3" for="datepicker-dateformat2">Choose Appointment Date </label>
          <br>
          <input type="date" id="appt" name="appt" style="width:100%" v-model="date">
        </div>
        <!-- <br> -->
      </div>
      </div>
    </form>
  </section>
  <div class="position-relative prog1" >
    <div class="progress" style="height: 1px;">
      <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
    <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">2</button>
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
  padding-top: 2%;
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
  margin-top: 3%;
  width: 75%;
}

.next1{
  float: right;
  margin-right: 50px;
  margin-top: 15px;
}
</style>

<script>

export default {
  data(){
    return {    
      allergies: 'sweat',
      symptoms: 'rashes',
      file: false,
      date: '03/04/2022'

      }
  }
}

</script>
