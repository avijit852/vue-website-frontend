<template>
    <div>
        <div class="banner-full"> 
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                     
                     
                     <div class="item active">
                        <div class="box">
                        <img :src="link+getSlider[0].slider_img" alt=""> 
                        <div class="desc">
                            <div class="container">
                            <div class="text">
                                <h2>{{ getSlider[0].slider_title }}</h2>
                                <p>{{ getSlider[0].slider_description }}</p>
                            </div>
                            </div>
                        </div>         
                        </div>
                     </div>
                    
                   
                    <div class="item" v-for="(row, index) in getSliderTwo" :key="index" >
                        <div class="box" >
                            <img :src="link+row.slider_img" alt=""> 
                            <div class="desc">
                                <div class="container">
                                <div class="text">
                                    <h2> {{ row.slider_title }}</h2>
                                    <p>{{ row.slider_description }}</p>
                                </div>
                                </div>
                            </div>         
                        </div>
                    </div>

                </div>


                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; 

export default {
    data(){
        return{
            isZero:0,
            link:  this.$store.state.fileFetchLink+'slider/',
        }
    },
    computed:{
        ...mapGetters(["getSlider","getSliderTwo"]),
    },
    methods:{
        ...mapActions(["fetchSlider"]),
    },

    created(){
        this.fetchSlider();
    }

}
</script>

<style scoped>

</style>