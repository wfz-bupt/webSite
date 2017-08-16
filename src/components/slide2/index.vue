<template>
    <div class="compo-slide2">
        <div class="slide-wrapper">
            <a class="slide slide1" :style = "{width: width1, transition: animate1, zIndex: zIndex1}"></a>
            <a class="slide slide2" :style = "{width: width2, transition: animate2, zIndex: zIndex2}"></a>
            <a class="slide slide3" :style = "{width: width3, transition: animate3, zIndex: zIndex3}"></a>
        </div> 

        <div class="arrow_left" 
             @click="preHandler(cur)"
        >   
        </div>
        <div class="arrow_right" 
             @click="nextHandler(cur)"
        >
        </div>
    </div>
</template>

<script>
    export default{
        data: function(){
            return {
                width1: "100%",
                animate1: "none",
                width2: "0",
                animate2: "none",
                width3: "0",
                animate3: "none",
                cur: 1,
                zIndex1: 1,
                zIndex2: 0,
                zIndex3: 0
            }
        },
        methods: {
            //原理，下一个待播放的图片有动效，其余没有
            preHandler: function(cur){


            },
            nextHandler: function(cur){
                const wfz = "wfz";
                cur++;
                this.animate2 = "width ease 700ms";
                setTimeout(() => {this.width1 = "0";},700);
                this.width2 = "100%";
                this.zIndex1 = 0;
                this.zIndex2 = 1;
                this.zIndex3 = 0;
            }   
        },
        mounted() {
            
        },     
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .compo-slide2{
        width: 100%;
        height: 500px;
        position: relative;
        overflow: hidden;
        /*滑动对象*/
        .slide-wrapper{
            width: 100%;
            height: 100%;
            position: relative;
            .slide{
                height: 100%;
                display: block;
                position: absolute;
            }
            .slide1{
                background: url("../HeadSlide/slide1.jpg") center center/auto 100% no-repeat;
            }
            .slide2{
                background: url("../HeadSlide/slide2.jpg") center center/auto 100% no-repeat;
            }
            .slide3{
                background: url("../HeadSlide/slide3.jpg") center center/auto 100% no-repeat;
            }
        }
        .arrow_left{
            width: 50px;
            height: 50px;
            border: 1px solid red;
            position: absolute;
            left: 200px;
            bottom: 200px;
            z-index: 2;
        }
        .arrow_right{
            width: 50px;
            height: 50px;
            border: 1px solid red;
            position: absolute;
            right: 200px;
            bottom: 200px;
            z-index: 2;
        }
    }
</style>