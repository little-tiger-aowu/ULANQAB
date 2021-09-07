<template>
  <div class="guide">
    <!-- banner -->
    <div class="banner-txt">
      <div class="link-txt">
        <el-link type="info" href="/" :underline="false">首页></el-link>
        <el-link type="info" :underline="false">科室导航</el-link>
      </div>
      <div class="banner-img">
        <h2>就医指南</h2>
        <!-- <img src="@/assets/images/research/banner.png" width="100%" /> -->
      </div>
    </div>
    <!-- 选项 -->
    <el-row type="flex" justify="space-between" class="guide-option">
      <el-col :span="3" v-for="(item, index) in list" :key="index">
        <el-button
          plain
          :class="option == item.id ? 'options' : ''"
          @click="optionButs(item.id)"
          >{{ item.header }}</el-button
        >
      </el-col>
    </el-row>
    <!-- 选项内容 -->
    <el-row class="option-contion" type="flex" justify="space-between">
      <!-- 选项左边内容 -->
      <el-col :span="8">
        <el-row type="flex" style="flex-direction: column">
          <el-col :span="22" class="option-left">
            <ul>
              <li
                v-for="(item, index) in optionList"
                :key="index"
                :style="optionLi == item.id ? 'color: #308594;' : ''"
                @click="liopen(item.id)"
              >
                {{ item.title }}
              </li>
            </ul>
          </el-col>
          <el-col :span="22" class="option-left">
            <p>出诊信息查询</p>
            <input type="text" v-model="officeStr" placeholder="科室名称" />
            <input type="text" v-model="doctorName" placeholder="医生名称" />
            <div>
              <el-button @click="searchData">搜索</el-button>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <!-- 选项右边内容 -->
      <el-col :span="16" class="option-right">
        <h4>{{ opcontion.title }}</h4>
        {{ opcontion.contion == "" ? "暂无" : opcontion.comtion }}
      </el-col>
    </el-row>
    <!-- 了解这些有可能对您的就诊有所帮助  -->
    <h1 style="font-weight: normal;text-align: center; margin: 100px 0 50px 0">
      了解这些有可能对您的就诊有所帮助
    </h1>
    <!-- 功能区 -->
    <div class="functional">
      <ul>
        <li style="cursor: pointer">
          <router-link tag="p" :to="'/table'">
           <!-- <span> <svg-icon icon-class="referral"  color='red'/></span> -->
           
            <span class="font_family icon-zhuanjiachuzhenxinxi"></span>
            门诊出诊表
          </router-link>
        </li> 
        <li style="cursor: pointer">
          <router-link tag="p" :to="{path:'/guide',query:{option:1}}">
            <span class="font_family icon-a-yuyueguahao3"></span>
            就医须知
          </router-link>
        </li>
        <li>
          <router-link tag="p" style="cursor: pointer" :to="{path:'/guide',query:{option:4}}">
            <span class="font_family icon-weizhi"></span>
            方位指南
          </router-link>
        </li>
        <li>
          <router-link tag="p" style="cursor: pointer" :to="'/section?num=2'">
            <span class="font_family icon-lianxiwomen"></span>
            专科专病
          </router-link>
        </li>
        <li>
          <router-link tag="p" style="cursor: pointer" :to="'/research'">
            <span class="font_family icon-lianxiwomen"></span>
            健康体检
          </router-link>
        </li>
        <li>
          <router-link tag="p" style="cursor: pointer" :to="'/serve/health'">
            <span class="font_family icon-lianxiwomen"></span>
            健康科普
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { searchData } from "@/api/list.js";
import data from "../../utils/list";
export default {
  data() {
    return {
      option: 1,
      optionLi: 1,
      officeStr: "",
      doctorName: "",
      opcontion: {},
      optionList: [],
      list: data.list,
    };
  },
  methods: {
    // 获取搜索信息
    getSearchData() {
      let data = {
        current: 1,
        doctorName: this.$route.query.doctorName,
        officeStr: this.$route.query.officeStr,
        size: "5",
      };
      searchData(data).then((res) => {
        if (res.code == 200) {
          this.doctorData = res.data.records;
          this.total = res.data.total;
          // this.page.current = res.data.current;
        }
      });
    },
    // 搜索
    searchData() {
      this.$router.push(
        "/doctor?current=1&size=16&doctorName=" +
          this.doctorName +
          "&officeStr=" +
          this.officeStr +
          "&menu=introduce"
      );
      this.getSearchData();
    },
    //
    optionButs(val) {
      this.optionLi = 1;
      this.option = val;
      let num = val - 1;
      this.optionList = this.list[num].list;
      this.opcontion = this.optionList[0];
      // this.liopen(0)
    },
    //
    liopen(val) {
      this.optionLi = val;
      let num = val - 1;
      this.opcontion = this.optionList[num];
    },
  },
  created() {
    this.optionList = this.list[0].list;
    this.opcontion = this.optionList[0];
    console.log(this.$route.query.option);
  },
  watch:{
    $route:{
      handler:function(val,oldval){
        console.log(val,oldval);
        console.log(val.query.option);
        if(val.query.option != undefined){
          this.option=val.query.option
          let num=val.query.option-1
          this.optionList = this.list[num].list;
          this.opcontion = this.optionList[0];
          document.documentElement.scrollTop=0
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.guide {
  @include maxWidth;
  //   banenr
  .banner-txt {
    margin-bottom: 50px;
    .banner-img {
      width: 100%;
      height: 289px;
      background-image: url(../../assets/images/research/banner.png);
      h2 {
        margin: 0;
        padding: 0;
        font-size: 46px;
        line-height: 360px;
        font-weight: 600;
        letter-spacing: 2px;
        color: #fff;
        text-align: center;
      }
    }
    position: relative;
    .link-txt {
      position: absolute;
      left: 15%;
      top: 20px;
      z-index: 1;
      a {
        color: #fff;
      }
    }
  }
  //选项
  .guide-option {
    width: 70%;
    margin: 0 auto;
  }
  .guide-option /deep/ .el-button {
    padding: 10px 40px;
    font-size: 18px;
    box-shadow: 0px 0px 5px 1px #b2b2b2;
    border: none;
    &:hover {
      background-color: #308594;
      color: #fff;
      //border: 1px solid #2f8594;
    }
  }
  .options {
    background-color: #308594;
    color: #fff;
  }
  //   选项内容
  .option-contion {
    margin: 40px auto;
    width: 70%;
    .option-left div /deep/ .el-button {
      width: 100%;
      font-size: 18px;
      color: #fff;
      background-color: #308594;
    }
    .option-left {
      height: 300px;
      //overflow-y: scroll;
      box-shadow: 0px 0px 5px 1px #b2b2b2;
      padding: 30px 20px;
      box-sizing: border-box;
      p {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 25px;
      }
      input {
        width: 100%;
        outline: none;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 16px;
        line-height: 2;
        margin-bottom: 15px;
        border: 1px solid #898989;
      }
    }
    // 滚动样式（不全，有问题）
    // .option-left::-webkit-scrollbar{
    //   width: 2px;
    //   background-color: #ededed;
    // }
    // .option-left::-webkit-scrollbar-thumb {
    //   display: block;
    //   border-radius: 10px;
    //   background: #535353;
    // }
    // .option-left::-webkit-scrollbar-track {
    //   /*滚动条里面轨道*/
    //   border-radius: 10px;
    //   background: #ededed;
    // }
    // .option-left::-webkit-scrollbar-track-piece{
    //   width: 1px;
    //   background-color: red;
    // }
    .option-left:first-child {
      margin-bottom: 35px;
    }
    .option-right {
      overflow-y: scroll;
      padding: 30px 20px;
      box-shadow: 0px 0px 5px 1px #b2b2b2;
      h4 {
        padding: 0;
        margin: 0;
        font-size: 22px;
        font-weight: normal;
        margin-bottom: 20px;
      }
    }
    .option-left ul {
      // height: ;
      li:first-child {
        position: relative;
        img {
          position: absolute;
          right: -35px;
          width: 15px;
          height: auto;
        }
      }
      li {
        margin-bottom: 15px;
        font-size: 16px;
        &:hover {
          color: #308594;
        }
      }
    }
  }
  // /功能区
  .functional {
    margin: 0 auto;
    width: 60%;
    padding-bottom: 90px;
    ul {
      display: flex;
      li {
        text-align: center;
        width: 25%;
        height: auto;
        span {
          display: block;
          font-size: 50px;
          color: #4c4c4c;
          padding-bottom: 10px;
        }
        ::v-deep .el-dialog {
          width: 80%;
          .el-dialog__body {
            padding: 30px 20px 50px 50px;
          }
          span {
            letter-spacing: 3px;
            line-height: 1.5;
          }
          .footer-map {
            position: relative;
            padding-bottom: 5px;
            border-bottom: 1px solid #538b62;
            margin-bottom: 50px;
          }
          .strong {
            font-weight: 600;
            margin-bottom: 20px;
          }
          .message-text {
            h5 {
              display: inline-block;
              font-size: 20px;
              border-bottom: 3px solid #56a5aa;
              margin-bottom: 30px;
            }
            ul {
              display: block;
              li {
                margin-bottom: 10px;
                width: auto;
                font-size: 18px;
                text-align: left;
                span {
                  font-size: 18px;
                  display: inline-block;
                  letter-spacing: normal;
                  width: 8.7%;
                }
              }
            }
          }
        }
        p {
          
          color: #333333;
          font-size: 18px;
          margin: 0;
          span{
            font-weight: normal;
          }
          .svg-icon {
            width: 50px;
            display: block;
          }
        }
        p:hover {
          color: #01763a;
          span {
            color: #01763a;
          .referral{
            color: #01763a;
          }
          }
          
        }
      }
    }
  }
}
</style>