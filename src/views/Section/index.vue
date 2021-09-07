<template>
  <div class="introduct">
    <!-- banner -->
    <div class="banner-txt">
      <div class="link-txt">
        <el-link type="info" href="/" :underline="false">首页></el-link>
        <el-link type="info" :underline="false">科室导航</el-link>
      </div>
      <div class="banner-img">
        <h2>科室导航</h2>
        <!-- <img src="@/assets/images/research/banner.png" width="100%" /> -->
      </div>
    </div>
    <!-- 正文 -->
    <!-- search -->
    <!-- <div>
      <el-row type="flex" justify="center">
        <el-col :span="18" class="search">
          <el-col :span="8" :offset="3">
            科室选择：
            <input type="text" v-model="officeStr" />
          </el-col>
          <el-col :span="8">
            医生姓名：
            <input type="text" v-model="doctorName" />
          </el-col>
          <el-col :span="3">
            <el-button size="small" @click="searchData" icon="el-icon-search"
              >马上查询</el-button
            >
          </el-col>
        </el-col>
      </el-row>
    </div> -->
    <!-- 科室定位按钮 -->
    <el-row
      type="flex"
      justify="center"
      v-show="
        introduceId == '' ||
        introduceId == 'all1' ||
        introduceId == 'all2' ||
        introduceId == 'all3'
      "
    >
      <el-col :span="18" class="select">
        <div class="top">
          <el-col :span="3">
            <a href="#introduce?id=all1" class="a1">非手术科室</a>
          </el-col>
          <el-col :span="3">
            <a href="#introduce?id=all2" class="a2">手术科室</a>
          </el-col>
          <el-col :span="3">
            <a href="#introduce?id=all3" class="a3">诊断相关科室</a>
          </el-col>
          <el-col :span="2" class="top-text"> 信息查询 </el-col>
          <el-col :span="4" style="line-height: 40px">
            <!-- 科室选择： -->
            <input type="text" v-model="officeStr" placeholder="科室名称" />
          </el-col>
          <el-col :span="4" style="line-height: 40px">
            <!-- 医生姓名： -->
            <input type="text" v-model="doctorName" placeholder="医生名称" />
          </el-col>
          <el-col :span="2" style="line-height: 40px">
            <el-button size="small" @click="searchData" class="top-buts"
              >搜索</el-button
            >
          </el-col>
        </div>
      </el-col>
    </el-row>
    <!-- 列表 非手术科室 -->
    <el-row
      type="flex"
      justify="center"
      v-show="
        introduceId == 2 ||
        introduceId == '' ||
        introduceId == 'all1' ||
        introduceId == 'all2' ||
        introduceId == 'all3'
      "
    >
      <el-col :span="18">
        <div class="class-title" id="introduce?id=all1">非手术科室</div>
        <el-row :gutter="10">
          <el-col
            :span="4"
            v-for="item in listDataA"
            :key="item.id"
            style="margin-bottom: 10px"
          >
            <div class="clear">
              <el-button
                style="float: left; padding: 6px 0"
                type="text"
                icon="el-icon-arrow-left"
              ></el-button>
              <router-link
                :to="{ path: '/navigation', query: { id: item.id } }"
              >
                <span class="box-title">{{ item.name }}</span>
              </router-link>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <!-- 列表 手术科室 -->
    <el-row
      type="flex"
      justify="center"
      v-show="
        introduceId == 1 ||
        introduceId == '' ||
        introduceId == 'all1' ||
        introduceId == 'all2' ||
        introduceId == 'all3'
      "
    >
      <el-col :span="18">
        <div class="class-title" id="introduce?id=all2">手术科室</div>
        <el-row :gutter="10">
          <el-col
            :span="4"
            v-for="item in listDataB"
            :key="item.id"
            style="margin-bottom: 10px"
          >
            <div class="clear">
              <!--  -->
              <el-button
                style="float: left; padding: 6px 0"
                type="text"
                icon="el-icon-arrow-left"
              ></el-button>
              <router-link
                :to="{ path: '/navigation', query: { id: item.id } }"
              >
                <span class="box-title">{{ item.name }}</span>
              </router-link>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <!-- 列表 诊断相关科室 -->
    <el-row
      type="flex"
      justify="center"
      v-show="
        introduceId == 3 ||
        introduceId == '' ||
        introduceId == 'all1' ||
        introduceId == 'all2' ||
        introduceId == 'all3'
      "
    >
      <el-col :span="18">
        <div class="class-title" id="introduce?id=all3">医技、辅助科室</div>
        <el-row :gutter="10">
          <el-col
            :span="4"
            v-for="item in listDataC"
            :key="item.id"
            style="margin-bottom: 10px"
          >
            <div class="clear">
              <!--  -->
              <el-button
                style="float: left; padding: 6px 0"
                type="text"
                icon="el-icon-arrow-left"
                class="box-buts"
              >
              </el-button>
              <router-link
                :to="{ path: '/navigation', query: { id: item.id } }"
              >
                <span class="box-title">{{ item.name }}</span>
              </router-link>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { pageList, searchData, physicianInfo } from "@/api/list.js";
export default {
  name: "Introduce",
  data() {
    return {
      // dialogVisible: false,
      visit: false, //科室位置
      message: false,
      id: "", //
      //   搜索
      inputSearch: "",

      // 科室数据
      listDataA: [], // 非手术
      listDataB: [], // 手术
      listDataC: [], // 诊断相关科室
      // 科室选择
      officeStr: this.$route.query.officeStr || "",
      // 医生名称
      doctorName: this.$route.query.doctorName || "",
      // 医生列表
      doctorData: [],
      // 当前id
      introduceId: this.$route.query.id || "",
    };
  },
  mounted() {
    // 获取搜索信息
    this.getSearchData();
    // 通过id获取科室及医生数据
    this.getPhysicianInfo();
    this.getnum();
  },
  methods: {
    getPhysicianInfo() {
      // 非手术
      physicianInfo(1).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.listDataA = res.data;
        }
      });
      // 手术
      physicianInfo(2).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.listDataB = res.data;
        }
      });
      // 诊断相关科室
      physicianInfo(3).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.listDataC = res.data;
        }
      });
    },
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
    // 科室数据
    getPageList() {
      pageList(1).then((res) => {
        if (res.code == 200) {
          this.listDataA = res.data;
        }
      });
      pageList(2).then((res) => {
        if (res.code == 200) {
          this.listDataB = res.data;
        }
      });
      pageList(3).then((res) => {
        if (res.code == 200) {
          this.listDataC = res.data;
        }
      });
    },
    // 获取科室类型
    getnum() {
      let num = this.$route.query.num;
      this.introduceId = num;
      console.log(this.introduceId);
    },
  },
  watch: {
    $route: {
      handler: function (val, oldval) {
        console.log(oldval);
        this.introduceId = val.query.num;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.introduct {
  @include maxWidth;
  //   banenr
  .banner-txt {
    // margin-top: 10px;
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
  //   search
  .search {
    // @include width800;
    position: relative;
    z-index: 2;
    margin: -30px auto 0;
    background-color: #fff;
    padding: 10px;
    border-bottom: 5px solid $color-3;
    box-shadow: 0px -4px 18px rgba($color: #999, $alpha: 0.7);
    .el-button {
      // background-image: url(~@/assets/images/index/icon-search.png);
      background-repeat: no-repeat;
      background-size: 20px;
      background-position: 10px center;
      // padding-left: 40px;
      border: 0;
      color: #fff;
      background-color: $color-9;
      // box-shadow: 0px 2px 3px 0px #416948, inset 0px -1px 5px 0px rgba(45, 45, 45, 0.45);
      border-radius: 5px;
    }
    input {
      height: 25px;
      border: solid 1px #494949;
      width: 60%;
    }
  }
  // 列表
  .class-title {
    display: inline-block;
    // background-color: #609a70;
    // border-radius: 5px;
    // color: #fff;
    margin: 50px 0 20px;
    // padding: 8px 15px;
    padding: 8px 0;
    font-size: 20px;
    color: #474747;
    font-weight: bold;
  }
  .box-title {
    padding-left: 10px;
    font-weight: normal;
    //font-weight: bold;
    font-size: 18px;
    //color: $color-9;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 60%;
    display: inline-block;
  }
  .clear {
    padding: 0 10px;
    border: solid 1px #171d1d;
    width: auto;
    border-radius: 15px;

    .el-button--text {
      color: #171d1d;
    }
    &:hover {
      border: solid 1px $color-9;
      color: $color-9 !important;
      .box-title {
        color: $color-9 !important;
      }
      .el-button--text {
        //background-color: #2f8594;
        color: #2f8594;
      }
    }
  }

  .el-card {
    padding: 0 15px;
    cursor: pointer;
  }
  .el-card__header,
  .el-card__body {
    padding: 10px 0;
  }
}
.tooltip-box {
  width: 250px;
  .name {
    font-size: 18px;
    font-weight: bold;
    line-height: 50px;
  }
  .special {
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; //作为弹性伸缩盒子模型显示。
    -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
    -webkit-line-clamp: 4; //显示的行
    span {
      font-weight: bold;
    }
  }
}
.doctor-image {
  padding-bottom: 133%;
  background-color: #eee;
  background-size: cover;
}
.top a {
  display: inline-block;
  width: 148px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  margin-right: 10px;
}
.top input {
  width: 90%;
  height: 28px;
  text-indent: 15px;
  outline: none;
  border: solid 1px #171d1d;

  border-radius: 18px;
  //height: 30px;
}
.top .top-text {
  line-height: 40px;
  text-align: right;
  font-size: 17px;
  margin-right: 15px;
}
.top .top-buts {
  background-color: #308594;
  height: 40px;
  font-size: 18px;
  border-radius: 10px;
  color: #fff;
}
.top {
  margin-top: 50px;
}
.top .a1 {
  background: #528eb5;
}
.top .a2 {
  background: #55a5aa;
}
.top .a3 {
  background: #e5ca8f;
}

</style>
<style lang="scss">
// .el-button--text{
//    color: #2f8594;
// }
[class*=" el-icon-"],
[class^="el-icon-"] {
  font-weight: 900 !important;
}
</style>
