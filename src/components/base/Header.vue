<template>
    <div>
    <div class="header" id="myHeader">
	<nav class="navbar navbar-default navbar-fixed-top ">
		<div id="header">
			<div class="upper-header">
				<div class="container">
					<div class="row">
						<div class="col-md-6 col-sm-8 col-xs-12">
							<div class="social">
								<a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
								<a href="#"><i class="fa fa-twitter	" aria-hidden="true"></i></a>
								<a href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a>
								<a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
								<a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
							</div>
						</div>
						<div class="col-md-6 col-sm-4 col-xs-12">
							<div class="contact-top">
								<a href="#"><span class="tl"><i class="fa fa-envelope" aria-hidden="true"></i></span>loremipsumdolar@gmail.com</a>
								<a href="#"><span class="tl"><i class="fa fa-phone" aria-hidden="true"></i></span> 000 000 0000</a>
								
							</div>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div> 
			<div class="header-top">
				<div class="container">
                        <div class="btmsec">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div class="logo-block">
                                        <img :src="baseUrl+`images/logo.png`">
                                       
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                    <div class="rt-block">
                                        <div id="nav-menu-container">
                                            <ul class="nav-menu">
                                            <li class="hvr-underline-from-center"><router-link to="/" class="active">Home</router-link></li>
                                            <li class="hvr-underline-from-center"><router-link to="/about" class="active">About US</router-link></li>
                                            <li class="hvr-underline-from-center"><router-link to="/service" class="active">Service</router-link></li>
                                            <li class="hvr-underline-from-center"><router-link to="/portfolio" class="active">Portfolio</router-link></li>
                                            <li class="hvr-underline-from-center"><router-link to="/blogs" class="active">Blogs</router-link></li>
                                            <!-- <li><a href="index.html"class="active">Pricing </a></li> -->
                                            <li class="hvr-underline-from-center"><router-link to="/feedback" class="active">Feedback </router-link></li>
                                            <li class="hvr-underline-from-center"><router-link to="/reach" class="active">Reach Us</router-link></li>  
                                            </ul>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="clearfix">
                        </div>
				</div>
			</div>
		</div>
	</nav>
	</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            baseUrl:"http://localhost:8080/",
        }
    },

    created(){       
            if (process.env.NODE_ENV === 'production') {
            this.baseUrl = 'http://webstereo.co.in/'
            } else {
            this.baseUrl = 'http://localhost:8080/'
            }
    }
}
</script>

<style scoped>

</style>