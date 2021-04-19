<template>
    <div id="home">
        <!-- {{ this.$store.state.apiLink }} -->
        <!-- carousel slier start  -->
            <Slider></Slider>
        <!-- end carousel -->
        
        <!-- start service  -->
        <Service></Service>
        <!-- end service -->

        <!-- Start about -->
        <About></About>
        <!-- End ABout  -->

        <!-- start featured-video -->
        <div class="featured-video">
            <div class="container">
                <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="big-block">
                    <div class="overlay">
                        <button type="button" class=""><i class="fa fa-caret-right fa-3x" style="color: #fff;" aria-hidden="true"></i></button>
                    </div>
                    <img src="images/video1.jpg" alt="">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="big-block">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="box">
                            <img src="images/video2.jpg" alt="">
                            <button type="button" class="btn btn-primary video-btn"><i class="fa fa-caret-right fa-3x" style="color: #fff; margin: -6px 0 0 0;" aria-hidden="true"></i></button>
                        </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="box">
                            <img src="images/video3.jpg" alt="">
                            <button type="button" class="btn btn-primary video-btn"><i class="fa fa-caret-right fa-3x" style="color: #fff; margin: -6px 0 0 0;" aria-hidden="true"></i></button>
                        </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="box">
                            <img src="images/video4.jpg" alt="">
                            <button type="button" class="btn btn-primary video-btn"><i class="fa fa-caret-right fa-3x" style="color: #fff; margin: -6px 0 0 0;" aria-hidden="true"></i></button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <!-- end featured-video -->

        <!-- start hmtestisec -->
            <HomeQry></HomeQry>
        <!-- end hmtestisec -->

        <!-- start hmblogsec -->
            <Blogs></Blogs>
        <!-- end hmblogsec -->

    </div>
</template>

<script>
import Slider from './HomeSlider';
import Service from './HomeService';
import About from './HomeAbout';
import Blogs from './HomeBlogs';
import HomeQry from './HomeQry';


import { mapActions } from "vuex";

export default {
    data(){
        return{
            pageDetails:{
                "action":"getPage",
                "pagename":"home"
            },
            pageDetailsData:[]
        }
    },
    components:{
        Slider,
        Service,
        About,
        Blogs,
        HomeQry
    },
    computed:{
        // ...mapGetters(["getPageData"]),
    },
    methods:{
       ...mapActions(["getPageDetails"]),

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
         this.getPageDetails(this.pageDetails)
        .then( (responce)=>{
            console.log(responce.data[0]);
            this.pageDetailsData = responce.data[0];
            // console.log("This is getter Function ",this.getPageData);   
        })
    }
}
</script>

<style scoped>

</style>