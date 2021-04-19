<template>
    <div>

        <div class="innrbnr">
            <div class="container">
                <h2>Blogs Details</h2>
            </div>
        </div>

        <div class="blog-details">
            <div class="container">
                <div class="bg-box">
                    <div class="row" v-for="(row,index) in getSingleBlogs.data" :key="index">
                        <div class="col-md-4">
                            <div class="bimage">
                                <img :src="link+row.blogs_image" />
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="blgcnt">
                                <h4>{{ row.blogs_title }}</h4>
                                <p v-html="row.blogs_description">
                                    
                                </p>
                                <!-- <a href="#0" class="morebtn">Read More <i class="fa fa-long-arrow-right"></i></a> -->
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
            link:this.$store.state.fileFetchLink+'blogs/',
            id: this.$route.params.id,
        } 
    },
    computed:{
        ...mapGetters(["getSingleBlogs"]),
    },
    methods:{
        ...mapActions(["fetchSingleBlogs"]),
    },
    created(){
        console.log(this.id)
        this.fetchSingleBlogs(this.id)
    }
}
</script>

<style scoped>

</style>