<template>
    <div>
        <div class="hmtestisec">
            <div class="overlay">
                <div class="container">
                    <div class="row">
                    <div class="col-md-5">
                        <div class="">
                            <div class="qury">
                                <h2>Have Any Query Ask Now</h2>
                                <h4 style="color:#0ff">{{ outputMessage }}</h4>
                                <div class="form-sec">
                                    <form @submit.prevent="submitQuery">
                                        <div class="form-group">
                                            <input type="text" v-model="query.name" class="form-control" placeholder="Name">
                                        </div>
                                        <div class="form-group">
                                            <input type="email" v-model="query.email" class="form-control" :placeholder="validationError.email">
                                            <!-- <span>{{ validationError.email }}</span> -->
                                        </div>
                                        <div class="form-group">
                                            <input type="phone" v-model="query.phone" @input="acceptNumber" class="form-control" :placeholder="validationError.phone">
                                            <!-- <span>{{ validationError.phone }}</span> -->
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control" v-model="query.message" placeholder="Message"></textarea>
                                        </div>
                                        <div class="form-group">
                                        <input type="submit" value="Submit" class="sub1" name="">
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 txtmo">
                        <h2>What Our Client Says</h2>
                        <div class="testmibox">
                        <div id="myCarousel2" class="carousel slide" data-ride="carousel">

                            <div class="carousel-inner">
                            <div class="item active">
                                <div class="image"><img src="images/testi-p-image.jpg"></div>
                                <h4>John Doe</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare pulvinar viverra. Aenean placerat ligula id odio ornare condimentum. Suspendisse at ultricies diam. Nulla cursus odio tortor, in dignissim arcu suscipit et.</p>
                                <div class="starmark"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                            </div>

                            <div class="item">
                                <div class="image"><img src="images/testi-p-image.jpg"></div>
                                <h4>John Doe</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare pulvinar viverra. Aenean placerat ligula id odio ornare condimentum. Suspendisse at ultricies diam. Nulla cursus odio tortor, in dignissim arcu suscipit et.</p>
                                <div class="starmark"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                            </div>

                            <div class="item">
                                <div class="image"><img src="images/testi-p-image.jpg"></div>
                                <h4>John Doe</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare pulvinar viverra. Aenean placerat ligula id odio ornare condimentum. Suspendisse at ultricies diam. Nulla cursus odio tortor, in dignissim arcu suscipit et.</p>
                                <div class="starmark"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                            </div>
                            </div>

                            <a class="left carousel-control" href="#myCarousel2" data-slide="prev">
                            <span class="fa fa-chevron-left"></span>
                            <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarousel2" data-slide="next">
                            <span class="fa fa-chevron-right"></span>
                            <span class="sr-only">Next</span>
                            </a>
                        </div>


                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
// import axios from 'axios';
// import config from '../../Config';

import { mapActions } from "vuex"; 

export default {
    data(){
        return{
            query:{
                action:"insertAskQry",
                name:'',
                email:'',
                phone:'',
                message:'',
            },
            validationError:{
                email:'Email',
                phone:'Phone',
            },
            outputMessage:""
        }
    },
    methods:{

        ...mapActions(["insertQuery"]),
        submitQuery(){
            // console.log(this.validationError)
            if(!this.query.email){
                this.validationError.email="Email is must be required"
                setTimeout( () => this.validationError.email = 'Email', 3000)
            }
            if(!this.query.phone.length){
                this.validationError.phone="Phone Number is must be required"
                setTimeout( () => this.validationError.phone = 'Phone', 3000)
            }
            else if( 1 <= parseInt(this.query.phone.length) &&  parseInt(this.query.phone.length) >10){
                this.query.phone=''
                this.validationError.phone="The Phone Number is must 10 digite"
                setTimeout( () => this.validationError.phone = 'Phone', 3000)
            }
            
            if( this.query.phone.length==10 && this.query.email){
                console.log(this.query)

                this.insertQuery(this.query)
                .then( responce => {
                    // console.log('login work good',responce)
                    if(responce){
                        this.outputMessage = "Perfectly Submited, Thank You..."
                        setTimeout( () => (
                            this.outputMessage = '',
                            this.query.name='',
                            this.query.email='',
                            this.query.phone='',
                            this.query.message=''),
                        3000)}
                });
                

            }
            
        },

        acceptNumber() {
            var x = this.query.phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.query.phone = !x[2] ? x[1] :  + x[1]  + x[2] + (x[3] ?   x[3] : '');
        },



        // validEmail() {
        //     var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     return re.test(this.query.email);
        // }




        // acceptNumber() {
        //         var x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        // this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        //     }
        // }

    }
}
</script>

<style scoped>

</style>