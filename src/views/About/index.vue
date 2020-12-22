<template>
  <div class="about">
    <!-- <img src="@/assets/images/nopic/banner.jpg" width="100%" /> -->
    <img src="@/assets/images/about/banner.png" width="100%" />
    <!-- 医院概况 -->
    <div class="about-box-1">
      <div class="title">医院概况</div>
      <div class="min-title">了解市中心医院</div>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <img src="@/assets/images/img-5.jpg" width="100%" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/img-7.jpg" width="100%" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/img-7.jpg" width="100%" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="about-box-2">
      <!-- <h1>乌兰察布市中心医院概况</h1> -->
      <p class="min-txt">
        乌兰察布市中心医院始建于1953年11月1日，前身为平地泉镇医院，1958年更名为乌盟医院，2004年7月更名为乌兰察布市中心医院。<br />是本地区最大的一所集医疗、科研、教学、紧急救援和健康管理为一体的现代化的三级甲等综合医院，是包头医学院临床医学院和包头医学院附属医院、内蒙古医科大学教学医院，同时也是内蒙古医科大学和包头医学院的硕士研究生培养基地。
      </p>
      <p>
        医院现为一院四址，分别为院本部、新区分院(市中医蒙医医院)、教学园区和康复中心，总建筑面积21.1万平方米，编制床位计1600张。其中院本部建筑面积11万平方米，编制床位1150张；新区分院建筑面积7.1万平方米，编制床位450张；教学园区建筑面积2万平方米，康复中心建筑面积8100平方米。目前年门急诊量50余万人次、手术2万余台次、出院5余万人次。服务范围覆盖全市11个旗县、市、区的287万及周边省、区的各族人民群众。
      </p>
      <p>
        医院技术力量雄厚，专业梯队合理。目前，全院在职职工1997人，其中卫生专业技术人员1628人。有高级职称技术人员471人，中级职称技术人员327人。具有博士学位1人，硕士学位159人。享受国务院政府特殊津贴专家4名。
      </p>
      <p>
        医院医疗设施先进，医疗设备齐全。拥有飞利浦Ingenia3.0TCX全数字磁共振系统、西门子Force开源CT、GE公司全息数字PET/CT
        Discovery MI,双向数字平板心血管造影机、64排128层螺旋CT,
        瑞典医科达直线加速器、奥林巴斯CV290电子胃肠镜系统和EU-ME2
        Plus超声内镜诊断仪，以及先进的彩色多普勒超声诊断仪等高精医疗设备300余台件，为医院可持续发展奠定了良好的硬件基础。
      </p>
      <p>
        医院学科设置齐全，医疗服务到位。设有临床科室59个，医技科室28个。其中康复医学科是自治区临床医学重点学科。建院以来，特别是近年来，医院始终坚持并笃定实施“科技兴院”“人才强院”发展战略，重视加强学科建设和医疗技术水平的提高，现已形成了自己独有的医疗特色与优势。心脏大血管外科是医院的传统优势学科，在自治区处于领先地位，享有很高的知名度；老年医学科设备先进，人才梯队合理，技术全面，正向着自治区先进行列迈进；心血管内科在自治区较早开展了心脑血管疾病的介入治疗，疗效显著；血液、内分泌、呼吸系统，头颈部、胸腹部肿瘤等疾病的诊断和治疗，创伤类、骨科疾病、产妇及婴幼儿危重症疾病的救治能力均处于自治区先进水平；关节置换、间盘疾病手术治疗经验丰富、效果极佳；血液净化、肾脏疾病的诊治，消化糸统疾病诊治及内镜下治疗，重症创伤性疾病救治系统完善，技术先进；妇科、泌尿外科所有疾病及肝胆、胃肠、乳腺疾病广泛采用微创手术治疗，患者痛苦小，疗效好；中蒙医专科建设体系完善，设备先进，服务优良。目前，医院各学科建设均处于快速发展期，许多学科的多项技术在本地区处于领先水平。
      </p>
      <p>
        在倾力加强学科建设的基础上，近年来医院还着力推进胸痛中心、卒中中心、创伤救治中心、危重孕产妇救治中心、危重儿童和新生儿救治中心、糖尿病代谢疾病管理中心、高血压中心等“七大中心”建设，搭建影像、信息、检验三个平台，并成功建立了陆地救援、120微急救、空中救援“三位一体”的立体救援模式。建立了自治区地市级首家规模最大、检测项目最全的优生与分子医学检测实验室。同时，与北京、上海等国内多家知名医院及医学院校进行了全方位的交流与合作，主动邀请国内外知名专家来院讲学、手术示教，努力搭建技术合作交流平台，开展医联体建设。
      </p>
      <p>
        经过几代人近70年的不懈奋斗，医院先后荣膺全国卫生文明先进集体、全国百姓放心示范医院、全国百姓放心百佳示范医院、全国消费者査询中心“守诚信、重服务、消费者公开查询医院”，自治区百佳医院、文明医院、卫生系统先进集体、下乡技术扶贫先进集体、援外医疗队先进管理单位、文化科技卫生三下乡先进集体等多项荣誉称号。
      </p>
      <p>
        不忘初心，牢记使命。今天的乌兰察布市中心医院，已站在了历史新起点，步入了发展新时代，医院将继续以习近平新时代中国特色社会主义思想为指导，上下同心、左右协力，全面推进医院高质量发展，奋力谱写现代医院建设的新华章，为健康乌兰察布做出新的更大的贡献!
      </p>
    </div>
    <!-- 组织结构 -->
    <!-- <div class="about-box-2">
      <div class="title">组织机构</div>
      <div class="min-title">了解市中心医院完善的组织机构</div>
      <img src="@/assets/images/about/img2.png" width="100%" />
    </div> -->

    <!-- 历/现任领导 -->
    <!-- <el-row>
      <el-col :span="18" :offset="4">
        <div class="about-box-3">
          <div class="title-2">历/现任领导</div>
          <el-row :gutter="8">
            <el-col
              :span="3"
              v-for="(item, index) in 16"
              :key="index"
              class="content"
            >
              <img src="@/assets/images/nopic/img2.jpg" width="100%" />
              <div class="name">
                【加】启尔德<br />
                1892年创办仁济医院
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row> -->
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: -100,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.about {
  @include maxWidth;
  .about-box-1 {
    max-width: 1800px;
    min-width: 960px;
    overflow: hidden;
    padding-bottom: 50px;
  }
  .title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-top: 100px;
  }
  .min-title {
    text-align: center;
    line-height: 30px;
    color: #999;
  }
  .title-2 {
    background-color: #5a81b9;
    color: #fff;
    display: inline-block;
    font-size: 22px;
    padding: 10px;
    margin-top: 100px;
    margin-bottom: 50px;
  }
  .about-box-3 {
    .name {
      font-size: 12px;
    }
    .content {
      margin-bottom: 20px;
    }
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);
    opacity: 0.5;
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1);
    opacity: 1;
    position: relative;
    z-index: 999;
  }
}
.about-box-2 {
  max-width: 1000px;
  margin: auto;
  text-align: justify;
  p {
    text-indent: 2rem;
    line-height: 28px;
    font-size: 15px;
  }
  h1 {
    text-align: center;
    font-size: 28px;
  }
  .min-txt {
    text-indent: 0;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #999;
  }
}
</style>
