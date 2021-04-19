<template>
    <div>
        <div class="hmblogsec">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                    <h3>Letest Blog</h3>
                    <p class="top">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare pulvinar viverra. Aenean placerat ligula id odio ornare</p>
                    </div>
                </div>
                <div class="row">


                     <div class="col-md-6" v-for="(row,index) in getBlogsTow" :key="index">    
                        <div class="row">
                            <div class="col-md-6">
                            <div class="bimage">
                                <img :src="link+row.blogs_image" />
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div class="blgcnt">
                                <h4>{{ row.blogs_title }}</h4>
                                <div class="date">{{ row.blogs_date | formatDate}}</div>
                                <p>{{ row.blogs_short_description }}</p>
                                <router-link  class="morebtn" :to="`blogs/`+row.blogs_slug">Read More <i class="fa fa-long-arrow-right"></i></router-link>
                            </div>
                            </div>
                        </div>
                    </div>


                    <!-- <div class="col-md-6">    
                        <div class="row">
                            <div class="col-md-6">
                            <div class="bimage">
                                <img src="images/blg-big-img2.jpg" />
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div class="blgcnt">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                                <div class="date">25/07/2019</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare pulvinar viverra. Aenean placerat ligula id odio ornare condimentum. Suspendisse at ultricies diam. Nulla cursus odio tortor, in dignissim arcu suscipit et.</p>
                                <a href="blog-details.php" class="morebtn">Read More <i class="fa fa-long-arrow-right"></i></a>
                            </div>
                            </div>
                        </div>
                    </div> -->

                    <!-- <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6">
                            <div class="bimage">
                                <img src="images/blg-big-img.jpg" />
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div class="blgcnt">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                                <div class="date">25/07/2019</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare pulvinar viverra. Aenean placerat ligula id odio ornare condimentum. Suspendisse at ultricies diam. Nulla cursus odio tortor, in dignissim arcu suscipit et.</p>
                                <a href="blog-details.php" class="morebtn">Read More <i class="fa fa-long-arrow-right"></i></a>
                            </div>
                            </div>
                        </div>
                    </div> -->
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
        }
    },
    computed:{
        ...mapGetters(["getBlogsTow"]),
    
    },
    methods:{
         ...mapActions(["fetchBlogs"]),
    },
    created(){
        this.fetchBlogs()
    }
}
</script>


<style scoped>

</style>