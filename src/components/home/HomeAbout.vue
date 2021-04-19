<template>
    <div>
        <div class="about" id="about">
            <div class="container">
                <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="img-box">
                    <img :src="link+pageDetailsData.page_image" alt="">
                    </div>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <div class="txt">
                    <h2 class="top-header">{{ pageDetailsData.page_heading }}</h2>
                    <h3>{{ pageDetailsData.page_tagline }}  </h3>
                    <p class="ptxt"> {{ pageDetailsData.page_description }}  </p>
                    <!-- <p class="ptxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus eros, dictum sit amet nisi gravida, mollis rhoncus ligula. Donec eu arcu ipsum. Sed a magna ut lorem faucibus euismod et sed urna. Maecenas lectus purus, porttitor quis diam sollicitudin, laoreet eleifend magna. Vestibulum rutrum eros non velit efficitur laoreet. </p> -->
                    <!-- <p class="ptxt">Vivamus pellentesque tincidunt ante. Donec sollicitudin porttitor massa nec accumsan. Duis nec placerat odio, sodales commodo felis. Proin pharetra tempor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tincidunt augue est, id volutpat quam consectetur sit amet.</p> -->
                </div>
                </div>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="about-bottom"></div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data(){
        return{
            link:  this.$store.state.fileFetchLink+'pages/',
            pageDetails:{
                "action":"getPage",
                "pagename":"about"
            },
            pageDetailsData:[],
        }
    },
    methods:{
        ...mapActions(["getPageDetails"]),
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