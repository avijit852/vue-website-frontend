<template>
    <div>
        <div class="innrbnr">
            <div class="container">
                <h2>Service</h2>
            </div>
        </div>



        <div class="service-sec coursepg">
            <div class="container">
                <div class="row">
                <!-- <div class="col-md-3 col-sm-3 col-xs-12" v-for="(row,index) in getService.data" :key="index"> 
                    <div class="box hvr-float-shadow" :style="{ background: `url(${link+row.service_bg_icon}) no-repeat center 10px #fff `} ">
                    <div class="icon-box">
                        <img :src="link+row.service_icon">
                    </div>
                    <div class="txt">
                        <h2>{{ row.service_title }}</h2>
                        <p>{{ row.service_description }} </p>
                        <a href="#">Buy Now</a>
                    </div>
                    </div>
                </div> -->

                <div class="col-md-3 col-sm-3 col-xs-12" v-for="(row,index) in getService" :key="index"> 
                    <div class="box hvr-float-shadow" :style="{ background: `url(${link+row.service_bg_icon}) no-repeat center 10px #fff `} ">
                    <div class="icon-box">
                        <img :src="link+row.service_icon">
                    </div>
                    <div class="txt">
                        <h2>{{ row.service_title }}</h2>
                        <p>{{ row.service_short_discription }} </p>
                        <router-link :to="`/service/`+row.service_slug">Buy Now</router-link>
                    </div>
                    </div>
                </div>

                
                <!-- <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="box hvr-float-shadow">
                    <div class="icon-box">
                        <img src="images/sri2.png">
                    </div>
                    <div class="txt">
                        <h2>Online Marketing</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <a href="#">Buy Now</a>
                    </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="box hvr-float-shadow">
                    <div class="icon-box">
                        <img src="images/sri3.png">
                    </div>
                    <div class="txt">
                        <h2>Web & Email Hosting</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <a href="#">Buy Now</a>
                    </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="box hvr-float-shadow">
                    <div class="icon-box">
                        <img src="images/sri4.png">
                    </div>
                    <div class="txt">
                        <h2>Ecommerce</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <a href="#">Buy Now</a>
                    </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="box hvr-float-shadow">
                    <div class="icon-box">
                        <img src="images/sri1.png">
                    </div>
                    <div class="txt">
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <a href="#">Buy Now</a>
                    </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="box hvr-float-shadow">
                    <div class="icon-box">
                        <img src="images/sri2.png">
                    </div>
                    <div class="txt">
                        <h2>Online Marketing</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <a href="#">Buy Now</a>
                    </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="box hvr-float-shadow">
                    <div class="icon-box">
                        <img src="images/sri3.png">
                    </div>
                    <div class="txt">
                        <h2>Web & Email Hosting</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <a href="#">Buy Now</a>
                    </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="box hvr-float-shadow">
                    <div class="icon-box">
                        <img src="images/sri4.png">
                    </div>
                    <div class="txt">
                        <h2>Ecommerce</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <a href="#">Buy Now</a>
                    </div>
                    </div>
                </div> -->
                </div>
            </div>
            <div>
                <button class="btn btn-success" @click="toGetFourValue">view more</button>
            </div>
        </div>

        

    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; 

export default {
    data(){
        return{
            start:0,
            link:this.$store.state.fileFetchLink+'service/',
            pageDetails:{
                "action":"getPage",
                "pagename":"service"
            },
            pageDetailsData:[],
        }
    },
    computed:{
        ...mapGetters(["getService"]),
    },
    methods:{
        ...mapActions(["fetchService","getPageDetails"]),

        toGetFourValue(){
            this.start = this.start + 4;
            console.log(this.start);
            this.fetchService(this.start);
        }

    },

     metaInfo() {
        return { 
            title: "Creative Web Design - "+ this.pageDetailsData.meta_title ,
            meta: [
                { name: this.pageDetailsData.meta_keyword, content: this.pageDetailsData.meta_description },
            ]
        }
    },

    mounted(){
         this.fetchService(this.start);

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

</style>