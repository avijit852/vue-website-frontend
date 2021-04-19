<template>
    <div>
        <!-- start service  -->
        <div class="service-sec">
            <div class="container">
                <div class="row">
                    <!-- {{ this.$store.state.fileFetchLink }} -->
                    <div class="col-md-3 col-sm-3 col-xs-12" v-for="(row,index) in getServiceFour" :key="index"> 
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
                </div>
            </div>
        </div>
        <!-- end service -->
        <!-- {{ getLastFourService() }} -->
    </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex"; 

export default {
    data(){
        return{
            link:  this.$store.state.fileFetchLink+'service/',
        }
    },
    computed:{
        ...mapGetters(["getServiceFour"]),
    },
    methods:{
        ...mapActions(["fetchServiceFour"]),

    },

    created(){
         this.fetchServiceFour();
    }
}
</script>

<style scoped>

</style>