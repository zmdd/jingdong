<template>
    
    <div class="wrap">
        <header class="header">
            <div class="pos">
                <ul>
                    <li><i class="iconfont">&#xe661;</i><span>扫啊扫</span></li>
                    <li>
                        <i class="iconfont">&#xe729;</i>
                        <p><input type="text" placeholder="京东生鲜超级品类日,领劵满199"></p>
                    </li>
                    <li><i class="iconfont">&#xe646;</i></li>
                    <li><i class="iconfont">&#xe60e;</i><span>消息</span></li>
                </ul>
            </div>
        </header>
         <main class="main">
            <iscroll-view class="scroll-view">
                <div class="toppic">
                    <mt-swipe :auto="3000">
                         <mt-swipe-item v-for="i in data.index.banner"><img :src=i alt=""></mt-swipe-item> 
                    </mt-swipe>
                </div>
                <div class="banner">
                    <mt-swipe :auto="0">
                        <mt-swipe-item><img src="static/img/banner/newpeople.jpg" alt=""></mt-swipe-item>
                    </mt-swipe>
                </div>
                <div class="nav">
                     <mt-swipe :auto="0">
                        <mt-swipe-item>
                            <ul>
                                <li v-for="j in data.index.nav"><p><img :src=j.img></p><span>{{j.con}}</span>  </li>
                            </ul>
                        </mt-swipe-item>
                    </mt-swipe>
                </div>

                <div class="bigbanner">
                </div> 

                <div class="up_down">
                    <ul>
                        <li>京东<span>快报</span></li>
                        <li>
                            <mt-swipe :auto="1000" :show-indicators="false" :speed="1000">
                                <mt-swipe-item><b>热</b> 啦啦啦啦啦~~~~~</mt-swipe-item>
                                <mt-swipe-item><b>抢</b> 哈哈哈哈哈~~~~~</mt-swipe-item>
                                <mt-swipe-item><b>爆</b> 嘎嘎嘎嘎嘎~~~~~</mt-swipe-item>
                            </mt-swipe>
                        </li>
                        <li> | 更多</li>
                    </ul>
                </div>
                <!--秒杀  -->
                 <div class="seckill">
                    <div class="top">
                        <ul>
                            <li><img src="static/img/clock.png" alt=""></li>
                            <li>京东秒杀</li>
                            <li>12点场</li>
                            <li>
                                <span>00</span> :
                                <span>01</span> :
                                <span>16</span>
                            </li>
                            <li>京选尖选轮番秒 <span>></span></li>
                        </ul>
                    </div>
                </div> 
                <!--电器列表  -->
                 <div class="electric-appliance">
                    <div class="nei">
                        <dl v-for="k in data.index.shop">
                            <dt><img :src=k.img alt=""></dt>
                            <dd>
                                <b>￥{{k.price}}</b>
                                <s>￥{{k.lastprice}}</s>
                            </dd>
                        </dl>
                    </div>
                </div> 

                <!--发现好货  -->
                 <div class="find">
                    <ul v-for="h in data.index.findone">
                        <li><img :src=h.img alt=""></li>
                        <li>{{h.cont}}</li>
                        <li><img :src=h.imgs alt=""></li>
                    </ul>
                </div>
                <div class="find">
                    <ul v-for="h in data.index.findtwo">
                        <li><img :src=h.img alt=""></li>
                        <li>{{h.cont}}</li>
                        <li><img :src=h.imgs alt=""></li>
                    </ul>
                </div> 

                <!--国庆  -->
                <div class="national-day">
                    <div class="top">
                        <p>国庆长假</p>
                        <b>怎么嗨?</b>
                        <p>自营图书每满100减40</p>
                    </div>
                    <div class="left-top">
                        <b>智能数码</b>
                        <p>爆款平板满千减百</p>
                    </div>
                    <div class="right-top">
                        <b>智能数码</b>
                        <p>爆款平板满千减百</p>
                    </div>
                    <div class="left-bot">
                        <b>智能数码</b>
                        <p>爆款平板满千减百</p>
                    </div>
                    <div class="right-bot">
                        <b>智能数码</b>
                        <p>爆款平板满千减百</p>
                    </div>
                </div>
                <div class="word">
                    <div class="con">
                        <div class="word_left">
                            <p>专属优惠</p>
                            <p>JMGO</p>
                        </div>
                        <div class="word_right">
                            <p>借助喽！坚果给你专属福利</p>
                            <p><i class="iconfont">&#xe6d6;</i></p>
                        </div>
                    </div>
                </div>

                 <div class="find">
                    <ul v-for="h in data.index.findone">
                        <li><img :src=h.img alt=""></li>
                        <li>{{h.cont}}</li>
                        <li><img :src=h.imgs alt=""></li>
                    </ul>
                </div>
                <div class="find">
                    <ul v-for="h in data.index.findtwo">
                        <li><img :src=h.img alt=""></li>
                        <li>{{h.cont}}</li>
                        <li><img :src=h.imgs alt=""></li>
                    </ul>
                </div>        
        <div class="tt">
          <p></p>
          <p><img src="../../static/img/hr/1 (4).jpg" alt=""></p>
          <p>更多</p>
        </div>
          <div class="shopss">
          <ul class="uls_imgs">
            <li v-for="item in data.index.goutese">
              <p>{{item.tit}}</p>
              <p>{{item.cont}}</p>
              <p>
               <span><img :src=item.oneimg alt=""></span>
               <span><img :src=item.twoimg alt=""></span>
              </p>
            </li>
          </ul>
        </div>  


            </iscroll-view>
        </main>
        <footer class="footer">
            <ul>
                <li class="bg"><i class="iconfont">&#xe6cd;</i><span>首页</span></li>
                <li><i class="iconfont">&#xe649;</i><span>分类</span></li>
                <li><i class="iconfont">&#xe715;</i><span>觅Me</span></li>
                <li><i class="iconfont">&#xe63c;</i><span>购物车</span></li>
                <li><i class="iconfont">&#xe611;</i><span>我的</span></li>
            </ul>
        </footer>
    </div>
    
</template>
<script>
    import {mapState,mapGetters,mapMutations,mapActions} from "vuex";
    export default {
        computed:({
          ...mapState(['data'])
        }),
        mounted(){
            console.log(this.data.index.banner)
        }
        // created(){
		// 	console.log('123')
		// },
        // data(){
		// 	return{
		// 		aa:"yzm"
		// 	}
		// },
		// beforeRouteEnter(to,from,next){
		// 	next(vm =>{
		// 		vm.axios.get('/some').then(data =>{
        //           vm.aa = data
        //           alert(data)
		// 		})
				
		// 	})
        //     console.log('beforeRouteEnter')
            
        // },
        // mounted(){
        //     console.log(this.aa)
        // }

    }
</script>