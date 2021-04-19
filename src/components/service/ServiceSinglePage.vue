<template>
    <div>
        <div class="innrbnr">
            <div class="container">
                <h2>Service Details</h2>
            </div>
        </div>


        <div class="blog-details">
            <div class="container">
                <div class="bg-box">
                    <div class="row" v-for="(row,index) in getSingleService.data" :key="index">
                        <div class="col-md-4">
                            <div class="bimage">
                                <img :src="link+row.service_image" />
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="blgcnt">
                                <h4>{{ row.service_title }}</h4>
                                <p v-html="row.service_description">
                                    
                                </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>


<script>

import { mapGetters, mapActions } from "vuex"; 


export default {
    data(){
        return{
            link:this.$store.state.fileFetchLink+'service/',
            // id: this.$route.params.id,
            data:{
                "action":"getSingleSerivce",
                "slug":this.$route.params.id
            }
        }
    },

    computed:{
        ...mapGetters(["getSingleService"]),
    },
    methods:{
        ...mapActions(["fetchSingleService"]),

    },
    created(){
        this.fetchSingleService(this.data)
    }


}
</script>


<style scoped>

</style>