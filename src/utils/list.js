export default {
    list:[
        {
          id: 1,
          header: "就医须知",
          list: [
            { id: 1,  identify:1, title: "就医流程图", contion: "http://wlcbzxyy.front.qiniu.synconize.com/081913531103_1.Jpeg" },
            { id: 2,  identify:2,title: "预约挂号方式", contion:`  <table
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="letter-spacing: 4px"
            v-show="opcontion.id == 2"
          >
            <tr style="height: 50px">
              <th style="width: 15%">预约渠道</th>
              <th>挂号方式</th>
              <th style="width: 15%">预约周期</th>
              <th>取号时间/地点</th>
            </tr>
            <tr>
              <td align="center">微信预约</td>
              <td valign="top" style="padding: 10px 15px">
                关注乌兰察布市中心医院公众号，在“健康服务”菜单栏中点击“预约挂号”，选择需要挂号的科室，进而选择可预约医生、预约时间（蓝色为可预约，灰色为停诊），点击进入后根据提示绑定就诊卡进行预约挂号
              </td>
              <td align="center">7天</td>
              <td style="padding: 10px 15px">
                预约成功后可到院支付诊查费（在公众号“个人信息”中点击“就诊二维码”到自助挂号机上进行扫码缴费），也可在公众号的“个人信息”中点击“门诊支付”进行缴费（只能在预约当日进行缴费），支付成功后在自助挂号机打印单据，根据挂号单据信息到对应科室进行诊查
              </td>
            </tr>
            <tr>
              <td align="center">电话预约</td>
              <td style="padding: 10px 15px">
                拨打预约挂号电话： 0474-2263875、 0474-2312126 进行预约挂号
              </td>
              <td align="center">7天</td>
              <td style="padding: 10px 15px">
                预约成功后，请在预约当日到门诊楼一层自助挂号机进行操作
              </td>
            </tr>
            <tr>
              <td align="center">自助挂号机预约</td>
              <td style="padding: 10px 15px">
                在门诊楼一层大厅自助挂号机使用本人有效二代身份证进行预约挂号
              </td>
              <td align="center">7天</td>
              <td style="padding: 10px 15px">
                预约成功后，根据打印挂号单据到对应科室进行诊查
              </td>
            </tr>
          </table>`},
            { id: 3,  identify:3,title: "医院门诊分布及开放时间", contion: ` <p style="font-size: 18px;font-weight: 600;margin-bottom: 15px;">市中心医院</p>
            <ul>
              <li style="margin-bottom: 5px;font-size: 16px;">周一至周日：8:00 - 12:00</li>
              <li style="margin-bottom: 5px;font-size: 16px;"><span style="opacity:0">周一至周日：</span>14:30 - 17:30</li>
            </ul>
            <p style="font-size: 18px;font-weight: 600;margin-bottom: 15px;">市中蒙医院</p>
            <ul>
              <li style="margin-bottom: 5px;font-size: 16px;">周一至周日：8:00 - 12:00</li>
              <li style="margin-bottom: 5px;font-size: 16px;"><span style="opacity:0">周一至周日：</span>14:30 - 17:30</li>
            </ul>` },
            { id: 4,  identify:4,title: "急诊就诊流程", contion: require('@/assets/images/emergent.png')},
          ],
        },
        {
          id: 2,
          header: "医保服务",
          list: [
            { id: 5,  identify:1,title: "城乡居民医疗保险政策解读", contion: `<p class="MsoNormal" style="text-indent:0cm;">
            <span>一、报销对象都有那些人？</span> 
          </p>
          <p class="MsoNormal" style="text-indent:32.0pt;">
            答：在我院住院治疗并参加乌兰察布市城乡居民医保，符合基本医疗报销范围的患者。意外伤害没有第三方承担责任的患者回参保地医保局报销。<span></span> 
          </p>
          <p class="MsoNormal" style="text-indent:0cm;">
            二、住院封顶线是多少？<span></span> 
          </p>
          <p class="MsoNormal" style="text-indent:32.0pt;">
            答：同一个参保年度内基本医疗保险最高支付限额为<span>16</span>万元。<span></span> 
          </p>
          <p class="MsoNormal">
            三、住院医疗起付线是多少？<span></span> 
          </p>
          <p class="MsoNormal" style="text-indent:32.0pt;">
            答：市内三级医疗机构住院起付线<span>1200</span>元，同一个参保年度内再次住院的起付线降低<span>100</span>元；同一个参保年度内同级别医疗机构再次住院的建档立卡贫困人口取消起付线。<span></span> 
          </p>
          <p class="MsoNormal">
            四、城乡居民医疗保险具体政策范围内报销比例是多少？<span></span> 
          </p>
          <p class="MsoNormal" style="text-indent:32.0pt;">
            答：住院分段支付标准：（市内三级医院）起付线－<span>3</span>万元<span>65%</span>、<span>3-7</span>万元<span>70%</span>、<span>7-20</span>万元<span>75%</span>、<span>20</span>万元以上<span>80%</span>。<span></span> 
          </p>
          <p class="MsoNormal" style="text-indent:0cm;">
            五、乙类药品支付标准？<span></span> 
          </p>
          <p class="MsoNormal" style="text-indent:32.0pt;">
            答：基本医疗保险药品目录中的乙类药品，其费用的<span>80%</span>由统筹基金按规定比例报销。
          </p>
          <p class="MsoNormal">
            六、特殊检查、特殊材料支付标准是什么？<span></span> 
          </p>
          <p class="MsoNormal" style="text-indent:32.0pt;">
            答：特殊检查以及进口、合资医用特殊材料（植入物），其费用的50%由统筹基金按规定比例报销，国产医用特殊材料（植入物），其费用的70%由统筹基金按规定比例报销。
          </p>
          <p class="MsoNormal">
            七、商业大病保险政策？<span></span> 
          </p>
          <p class="MsoNormal" style="text-indent:32.0pt;">
            答：城乡居民大病起付线<span>1.4</span>万元，基本医疗保险报销后属于政策范围内的个人自付部分，由商业大病医疗保险基金按<span>60%</span>的比例赔付。同一参保年度最高支付<span>50</span>万元。建档立卡贫困人口大病保险起付线降低<span>50%</span>，赔付比例提高<span>5%</span>，取消封顶线。<span></span> 
          </p>
          <p class="MsoNormal">
            八、民政救助政策？&emsp;<span></span> 
          </p>
          <p class="MsoNormal" style="text-indent:32.0pt;">
            答：住院总费用在<span>3</span>万元以下的年度累计封顶线<span>1</span>万元，住院总费用在<span>3</span>万元以上的年度累计封顶线<span>10</span>万，支付标准：低保户单次总费用<span>3</span>万以下<span>70%</span>、单次总费用<span>3</span>万以上的<span>80%</span>，五保户单次总费用<span>3</span>万以下<span>100%</span>、单次总费用<span>3</span>万以上<span>100%</span>，三无人员单次总费用<span>3</span>万以下<span>100%</span>、单次总费用<span>3</span>万以上<span>100%</span>，孤残儿童单次总费用<span>3</span>万以下<span>100%</span>、单次总费用<span>3</span>万以上<span>100%</span>，精准扶贫单次总费用<span>3</span>万以上<span>80%</span>。<span></span> 
          </p>
          <p class="MsoNormal">
            九、重特大疾病政府补助政策？<span></span> 
          </p>
          <p class="MsoNormal" style="text-indent:32.0pt;">
            答：单次住院费用<span>3</span>万元以上（不含<span>3</span>万元）享受政府重特大疾病补助政策，封顶线为<span>5</span>万元。支付标准：个人自付部分<span>0-3</span>万元分段支付比例是<span>40%</span>，<span>3-5</span>万元分段支付比例是<span>50%</span>，<span>5</span>万元以上分段支付比例是<span>60%</span>。
          </p>
          <p class="MsoNormal" align="left" style="text-align:left;text-indent:32.0pt;">
            以上所有政策最终实际报销比例不得超过<span>90%</span>。
          </p>
          <p class="MsoNormal">
            <span>十、如何引导落实分级诊疗制度？</span> 
          </p>
          <p class="MsoNormal" style="text-indent:0cm;">
            <span></span> 
          </p>
          <p class="MsoNormal" style="text-indent:32.0pt;">
            答：严格执行分级诊疗和转诊备案制度，符合转诊转院规定并经过备案的患者，转市外区内医院就诊、政策范围内的医疗费用个人自付<span>15%</span>：转区外医院就诊，政策范围内的医疗费用个人自付<span>20%</span>，对不符合转诊转院规定和未经转诊备案自行到市级以上医疗机构治疗的非急危重患者，基本医疗不予报销，建档立卡贫困患者按规定转诊转院的，享受健康扶贫倾斜政策，不按规定转诊转院的，原则上不再享受健康扶贫倾斜政策。<span></span> 
          </p>
          <p class="MsoNormal">
            十一、不予报销都有什么项目？<span></span> 
          </p>
          <p class="MsoNormal" style="text-indent:32.0pt;">
            答：凡是昌名顶替、伪造或涂改医疗费用、打架斗殴、自杀酗酒、吸毒、交通肇事、工伤、医疗事故、美容、整容、矫形、镶牙、牙齿美容、安装假肢、购置轮椅、配戴眼镜、安装义眼、人工流产、放环、试管婴儿、人工授精、变性手术、各种男女生殖器整形修复和性传播疾病、车旅费、急救车费、院外会诊费、医务人员出诊费、食宿费、点名手术附加费、各种医疗咨询费、医疗鉴定费等。<span></span> 
          </p>
          <p class="MsoNormal">
            <br />
          </p>
          <p class="MsoNormal">
            <br />
          </p>
          <p class="MsoNormal" align="right" style="text-align:right;">
            乌兰察布市中心医院医保科<span></span> 
          </p>
          <p>
            <br />
          </p>
          <p>
            <br />
          </p>`},
          ],
        },
        {
          id: 3,
          header: "医院位置",
          list: [
            { id: 6,  identify:1, title: "中心医院周边地图和交通", contion: 1 },
            {
              id: 7,
              title: "乌兰察布市中医蒙医医院周边地图和交通",
              contion: 2 ,
              identify:2,
            },
          ],
        },
        {
          id: 4,
          header: "院内导航",
          list: [
            { id: 8,  identify:1, title: "院区楼宇分布示意图及楼层索引示意图", contion: require('@/assets/images/tenement.jpg') },
          ],
        },
        {
          id: 5,
          header: "价格公示",
          list: [
            { id: 9, identify:1, title: "价格公示文件", contion: "" },
          ],
        },
      ]
}


   