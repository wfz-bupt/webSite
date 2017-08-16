<template>
    <div class="compo-slide1">
        <div class="slide-wrapper" :style="{transform: translateX, transition: transition}">
            <a class="slide slide1">   
            </a>
            <a class="slide slide2">
            </a>
            <a class="slide slide3" href="http://thecollection.yioulai.com/partnership" target="_blank">
            </a>
            <a class="slide slide1">   
            </a>
            <a class="slide slide2">
            </a>
            <a class="slide slide3" href="http://thecollection.yioulai.com/partnership" target="_blank">
            </a>
            <a class="slide slide1">   
            </a>
            <a class="slide slide2">
            </a>
            <a class="slide slide3" href="http://thecollection.yioulai.com/partnership" target="_blank">
            </a>
        </div>
        <div class="left_mask" :style="{opacity: maskShow, width: maskWidth}"></div>
        <div class="right_mask" :style="{opacity: maskShow,width: maskWidth}"></div>
        
        <span class="arrow_left_hover" 
              :style="{left: arrowHoverDis}" 
              v-show="leftHoverShow"
        ></span>
        <span class="arrow_right_hover" 
              :style="{right: arrowHoverDis}"
              v-show="rightHoverShow"
        >
        </span>

        <div class="arrow_left" 
             :style="{left: arrowDis}"
             @click="preHandler(1)"
             @mouseover="hoverHandler('left')"
             @mouseout="outHandler('left')"
        >   
        </div>
        <div class="arrow_right" 
             :style="{right: arrowDis}" 
             @click="nextHandler(1)"
             @mouseover="hoverHandler('right')"
             @mouseout="outHandler('right')"
        >
        </div>

        <div class="pagination">
            <span class="page" :class="{active: this.cur==1}" @click="pageControl(1)"></span>
            <span class="page" :class="{active: this.cur==2}" @click="pageControl(2)"></span>
            <span class="page" :class="{active: this.cur==3}" @click="pageControl(3)"></span>
        </div>
    </div>
</template>

<script>
    export default{
        data: function(){
            return {
                // 视口宽度和高度
                viewport: {},  
                translateX: "translate3d(0,0,0)",
                transition: "all ease 700ms",
                maskShow: 0.5,
                maskWidth: "0px",
                arrowDis: "20px",
                arrowHoverDis: "0px",
                slideList: null,
                slideWrapper: null,
                cur: 1,
                leftHoverShow: false,
                rightHoverShow: false,
                intervalId: 0,
            }
        },
        methods: {
            nextHandler: function(count){
                //左移几帧，目前为一位，每个slide宽度＋间隙。2
                var shift = (1160 + 10) * count;
                this.translateX = "translate3d(-" + shift + "px,0,0)";
                this.maskShow = 0;
                this.transition = "all ease 700ms";
                var that = this;
                this.cur += count;
                if(this.cur == 4){
                    this.cur = 1;
                }
                setTimeout(function(){
                    that.maskShow = 0.5;
                    for(var i=0; i<count; i++){
                        that.slideWrapper.appendChild(that.slideList[0]);
                        that.slideList = document.querySelectorAll(".slide");
                    } 
                    that.translateX = "translate3d(0,0,0)";
                    that.transition = "none";
                },700);
            },
            //右移几帧
            preHandler: function(count){
                var shift = (1160 + 10) * count;
                this.translateX = "translate3d(" + shift + "px,0,0)";
                this.maskShow = 0;
                this.transition = "all ease 700ms";
                var that = this;
                this.cur -= count;
                if(this.cur == 0){
                    this.cur = 3;
                }
                setTimeout(function(){
                    that.maskShow = 0.5;
                    for(var i=0; i<count; i++){
                        that.slideWrapper.insertBefore(that.slideList[8],that.slideList[0]);
                        that.slideList = document.querySelectorAll(".slide");
                    } 
                    that.translateX = "translate3d(0,0,0)";
                    that.transition = "none";
                },700);
            },
            pageControl: function(page){
                var dis = page - this.cur;
                if(dis > 0){
                    this.nextHandler(dis);
                }else{
                    this.preHandler(-dis);
                }
            },
            hoverHandler: function(direction){
                if(direction == "left"){
                    this.leftHoverShow = true;
                }else if(direction == "right"){
                    this.rightHoverShow = true;
                }
                // 停止自动播放
                clearInterval(this.intervalId);
            },
            outHandler: function(direction){
                this.leftHoverShow = false;
                this.rightHoverShow = false;
                // 开始自动播放
                var that = this;
                this.intervalId = setInterval(function(){
                    that.nextHandler(1);
                },5000);
            }
        },
        mounted() {
            this.slideList = document.querySelectorAll(".slide");
            this.slideWrapper = document.querySelector(".slide-wrapper");
            //计算mask宽度
            this.viewport.width = 1160;
            if(this.viewport.width > 1160){
                this.maskWidth = (this.viewport.width - 1160 - 20)/2 + "px";
                this.arrowDis = (this.viewport.width - 1160 - 20)/2 + 30 + "px";
                this.arrowHoverDis = (this.viewport.width - 1160 - 20)/2 + 10 + "px";
            }
            //自动播放
            var that = this;
            this.intervalId = setInterval(function(){
                that.nextHandler(1);
            },5000);
        },     
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .compo-slide1{
        width: 100%;
        height: 500px;
        position: relative;
        overflow: hidden;
        /*滑动对象*/
        .slide-wrapper{
            /*width计算：1160*9 + 8*10 滑动计算：*/
            width: 10520px;
            height: 100%;
            position: absolute;
            left: 50%;
            margin-left: -5260px;
            .slide{
                width: 1160px;
                height: 100%;
                float: left;
                margin-left: 10px;
                display: block;
            }
            .slide:nth-child(1){
                margin-left: 0;
            }
            .slide1{
                background: url("./slide1.jpg") center center/cover;
            }
            .slide2{
                background: url("./slide2.jpg") center center/cover;
            }
            .slide3{
                background: url("./slide3.jpg") center center/cover;
            }
        } 
        .left_mask{
            height: 100%;
            position: absolute;
            width: 300px;
            left: 0;
            background-color: black;
            transition: all ease 300ms;
        }
        .right_mask{
            height: 100%;
            position: absolute;
            width: 300px;
            right: 0;
            background-color: black;
            transition: all ease 300ms;
        }
        /*箭头*/
        .arrow_left{
            width: 30px;
            height: 30px;
            background: url("./pre.png") center center/cover;
            position: absolute;
            top: 50%;
            left: 10%;
            margin-top: -15px;
            cursor: pointer;
        }
        .arrow_right{
            position: absolute;
            top: 50%; 
            right: 10%;
            width: 30px;
            height: 30px;
            margin-top: -15px;
            background: url("./next.png") center center/cover;
            cursor: pointer;
        } 
        .arrow_left_hover{
            width: 159px;
            height: 100%;
            position: absolute;
            top: 0px;
            background: url("./left_hover.png") center center/cover;
        }
        
        .arrow_right_hover{
            width: 159px;
            height: 100%;
            position: absolute;
            top: 0px;
            background: url("./right_hover.png") center center/cover;
        }
        
        .pagination{
            width: 170px;
            height: 5px;
            position: absolute;
            bottom: 15px;
            left: 50%;
            margin-left: -85px;
            .page{
                float: left;
                width: 50px;
                height: 5px;
                background-color: rgba(255,255,255,0.5);
                margin-right: 10px;
                cursor: pointer;
            }
            .page:nth-child(3){
                margin-right: 0px;
            }
            .active{
                background-color: white;
            }
        }
    }
</style>