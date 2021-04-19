<template>
    <div>
        <div class="innrbnr">
            <div class="container">
                <h2>Contact Us</h2>
            </div>
        </div>
        <div class="contactpg">
            <div class="container">
            <div class="row">
                <div class="col-md-4">
                <div class="boxmin">
                    <div class="box">
                    <i class="fa fa-map-marker"></i>
                    <p>Demo address 254 Road,<br> Demo city</p>
                    </div>
                </div>
                </div>
                <div class="col-md-4">
                <div class="boxmin">
                    <div class="box">
                    <i class="fa fa-phone"></i>
                    <p>000 000 0000<br>000 000 0000</p>
                    </div>
                </div>
                </div>
                <div class="col-md-4">
                <div class="boxmin">
                    <div class="box">
                    <i class="fa fa-envelope"></i>
                    <p>info@demomail.com<br>support@demomail.com</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="contfrm">
            <div class="container">
            <div class="row">
                <div class="col-md-8">
                <h3>You can complete this form for a quick contact</h3>
                <h4 style="color:#0ff">{{ outputMessage }}</h4>
                <div class="row">
                    <form action="" @submit.prevent="submitContact">
                        <div class="col-md-6">
                        <div class="form-group">
                            <label for="">Name:</label>
                            <input type="type" class="form-control"  v-model="contact.name" >
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="form-group">
                            <label for="">Email:</label>
                            <input type="email" class="form-control" id="" v-model="contact.email" :placeholder="error.errorEmail">
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="form-group">
                            <label for="">Phone:</label>
                            <input type="phone"  class="form-control" id="" v-model="contact.phone"  @input="acceptNumber"  :placeholder="error.errorPhone">
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="form-group">
                            <label for="">Subject</label>
                            <input type="text" class="form-control" id="" v-model="contact.subject">
                        </div>
                        </div>
                        <div class="col-md-12">
                        <div class="form-group">
                            <label for="comment">Message:</label>
                            <textarea class="form-control" rows="5" id="comment" v-model="contact.message"></textarea>
                        </div>  
                        </div>
                        <div class="col-md-12">
                        <input type="submit" name="" value="Send Message">
                        </div>
                    </form>
                </div>
                </div>
                <div class="col-md-4">
                <h3>Find Us with Google</h3>
                <div class="cmap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29406.9893743741!2d88.74759746470023!3d22.88112459158044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8b36ae4c4aca9%3A0x91211ab07c42ad58!2sGobardanga%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1573392908696!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {

    data(){
        return{
            contact:{
                action:"insertContact",
                name:'',
                email:'',
                phone:'',
                subject:'',
                message:''
            },
            error:{
                errorName:'',
                errorEmail:'',
                errorPhone:'',
                errorSubject:'',
                errorMessage:''
            },
            outputMessage:'',
            pageDetails:{
                "action":"getPage",
                "pagename":"reach"
            },
            pageDetailsData:[],
        }
    },
    
    methods:{
        ...mapActions(["insertContact","getPageDetails"]),
         submitContact(){
            console.log('Its work');

            if(!this.contact.email){
                this.error.errorEmail="Please insert your email "
                setTimeout( ()=> { this.error.errorEmail="" },3000)
            }

            if(!this.contact.phone){
                this.error.errorPhone = "Please insert phone number"
                setTimeout( ()=>{ this.error.errorPhone="" }, 3000)
            }

            if( 1 <= this.contact.phone.length && this.contact.phone.length < 10){
                console.log('getter then one');
                let phone = this.contact.phone;
                this.contact.phone = '';
                this.error.errorPhone="The phone number is must 10 digite";
                setTimeout( () => {
                    this.contact.phone = phone;
                    this.error.errorPhone = '';
                }, 3000);
            }

            if(this.contact.email && this.contact.phone ){

                this.insertContact(this.contact)
                .then( responce => {
                    if(responce){
                        this.outputMessage = "Perfectly Submited, Thank You..."
                        setTimeout( ()=>{
                            this.outputMessage = '';
                            this.contact.name="";
                            this.contact.email ="";
                            this.contact.phone = "";
                            this.contact.subject = "";
                            this.contact.message = "";
                        }, 3000)
                    }
                });
            }

            // console.log( parseInt(this.contact.phone.length) );
        },
        
        acceptNumber(){
            var x = this.contact.phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.contact.phone = !x[2] ? x[1] :  + x[1]  + x[2] + (x[3] ?   x[3] : '');
        },

        
        
    },

    metaInfo() {
        return { 
            title: "Creative Web Design - "+ this.pageDetailsData.meta_title ,
            meta: [
                { name: this.pageDetailsData.meta_keyword, content: this.pageDetailsData.meta_description },
            ]
        }
    },

    created(){
        console.log("this is obj",this.pageDetails)
            this.getPageDetails(this.pageDetails)
        .then( (responce)=>{
            console.log(responce.data[0]);
            this.pageDetailsData = responce.data[0];
            console.log("This is pagedetails Function ",this.getPageData);   
        });
    }

   

}
</script>

<style scoped>
::placeholder { 
  color: rgb(250, 110, 110);
  opacity: 1;
}


</style>