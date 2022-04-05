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
            <input type="text" class="form-control" id="PatientName"  name="PatientName" aria-describedby="emailHelp" placeholder="Enter FullName (As of NRIC)">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">NRIC No./Passport No.</label>
            <input type="text" class="form-control" id="ICNo" name="ICNo" placeholder="NRIC No.">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Date of Birth</label>
            <input type="date" class="form-control" id="PatientDOB" name="PatientDOB" aria-describedby="emailHelp" placeholder="DD/MM/YYYY">
          </div>

        </div>

        <div class="col-6 col2">
          <div class="form-group">
            <label for="exampleInputEmail1">Address</label>
            <input type="text" class="form-control" id="PatientAddress" name="PatientAddress" aria-describedby="emailHelp" placeholder="Address">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Citizenship</label>
            <input type="text" class="form-control" id="citizenship" name="citizenship" placeholder="eg. Singaporean">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Contact No.</label>
            <input type="text" class="form-control" id="PatientPhonetNo" name="PatientPhoneNo" aria-describedby="emailHelp" placeholder="xxxxxxxx">
          </div>
          <br>
        </div>
      </div>

  
      <div class="row row1">
        <div class="col-6 col1">
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Allergies</label>
            <textarea class="form-control" id="PatientAllergies" name="PatientAllergies" rows="4" v-model="allergies"></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea2">Symptoms</label>
            <textarea class="form-control" id="symptoms" name="symptoms" rows="4" v-model="symptoms"></textarea>
          </div>
          
        </div>
        <div class="col-6 col2">
          <div class="w-100">
            <label class="mt-3" for="datepicker-dateformat2">Choose Appointment Date </label>
            <br>
            <input type="date" id="ApptDate" name="Date" style="width:100%" v-model="date">
          </div>

          <label class="mt-3" for="datepicker-dateformat2">Choose your Timeslot</label>
          <div class="input-group mb-3 w-100" >
            <select class="custom-select w-100" name="Time" style="height: 28px" id="ApptTime">
              <option selected v-for="(time, i) in schedule" :key="i"> {{time}}</option>
            </select>
          </div>
                    
          <label class="mt-3" for="datepicker-dateformat2">Doctors</label>
          <div class="input-group mb-3 w-100" >
            <select class="custom-select w-100" name="DoctorName" style="height: 28px" id="DoctorName">
              <option selected v-for="(doc, i) in doctorList" :key="i"> {{doc.DoctorName}}</option>
            </select>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary next1" id="submit">Submit</button>

    </form>
  </section>


</div>

</template>

<script>

export default {
  data(){
    return {    
      schedule: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM','13:00 PM','13:30 PM','14:00 PM', '14:30 PM' ],
      allergies: '',
      symptoms: '',
      date: '',
      doctors: ['Veinna Tio', 'Richie Chan', 'Adrian Poh', 'Zi Qing', 'Lim Shu Ying'],
      doctorList: []
      
      }
  },
  mounted() {
    document.querySelector("form").addEventListener('submit', this.handleSubmit);
    this.getDoctorList()
  },
  methods: {
    handleSubmit: function(event){
      event.preventDefault()
      const data = new FormData(event.target)
      const value = Object.fromEntries(data.entries());
      console.log(JSON.stringify(value))
      console.log(value);
    },

    getDoctorList() {
      const response = fetch("http://localhost:5001/doctor")
        .then((response) => response.json())
        .then((data) => {
          console.log(response);
          console.log(data);
          this.doctorList = data.data.books;
        })
        .catch((error) => {
          // Errors when calling the service; such as network error,
          // service offline, etc
          console.log("unable to get doctor" + error);
        });
    },
  }
}


</script>


<style scoped>
.bg {
  margin-top: 5%;
  margin-bottom: 3.5%;
  margin-left: auto;
  margin-right: auto;
  background-color: #F5F5F5	;
  width: 90%;
  min-height: 100vh;

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