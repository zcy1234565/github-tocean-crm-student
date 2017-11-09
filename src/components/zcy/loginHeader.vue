<template>
    <el-container>
        <el-header>
            <div class="header">
                <div class="logo">拓胜学生端系统</div>
                <img class="header-1" src="../../../screenshots/title.png"/>

                <dev class="Welcome">欢迎来到拓胜学生端系统！</dev>
                <el-button type="success" size="mini" class="but" @click="handleCommand('login')" >请您登录</el-button>
                <div class="user-info">
                </div>
            </div>
        </el-header>





        <el-main>
            <!-- #EndLibraryItem -->
            <div class="main_div">
                <div class="image_big"><img src="images/page_images/flicking_img1.png" width="660" height="360" alt="图片"  />
                    <a><img src="images/page_images/left_button.png" width="19" height="41" alt="左方向" />
                        留学生怎么申请奖学金？<img src="images/page_images/right_button.png" width="19" height="41" alt="右方向" /></a>
                </div>
                <div class="right_massage">
                    <div class="massage_top"><span>重大消息</span>
                    </div>
                    <div class="massage_body"><div><img src="images/other_images/new_img.png" width="135" height="81" alt="城市图片" />
                        <p>北京政治学院英语专业</p><p class="small_word">目前北京留学行业服务协会（以下简称BOSSA）···[详细]</p></div>
                        <ul>
                            <li>央广：把足球绑上高考的指挥棒 能一挥就灵</li>
                            <li>教育部划特招红线：校领导子女本校特招须···</li>
                            <li>央广：把足球绑上高考的指挥棒 能一挥就灵</li>
                            <li>教育部划特招红线：校领导子女本校特招须···</li>
                        </ul>
                    </div>
                </div>
                <div class="image">
                    <div class="image1"><img src="images/page_images/index_img1.png" width="243" height="105" alt="图1" /></div>
                    <div class="image2"><img src="images/page_images/index_img2.png" width="243" height="105" alt="图2" /></div>
                    <div class="image2"><img src="images/page_images/index_img3.png" width="243" height="105" alt="图3" /></div>
                    <div class="image2"><img src="images/page_images/index_img4.png" width="243" height="105" alt="图4" /></div>
                    <div class="image1"><img src="images/page_images/index_img5.png" width="243" height="105" alt="图5" /></div>
                    <div class="image2"><img src="images/page_images/index_img6.png" width="243" height="105" alt="图6" /></div>
                    <div class="image2"><img src="images/page_images/index_img7.png" width="243" height="105" alt="图7" /></div>
                    <div class="image2"><img src="images/page_images/index_img8.png" width="243" height="105" alt="图8" /></div>
                </div>

                <div class="news_list">
                    <div class="news_top"><span>行页动态</span><a href="#">more</a></div>
                    <div class="news_body">
                        <div><img src="images/page_images/flicking_img4.jpg" width="110" height="80" alt="图片" />
                            <p>北京政治学院英语专业</p><p class="small_word">目前北京留学行业服务协会（以下简称BOSSA）···[详细]</p></div>
                        <ul>
                            <li>央广：把足球绑上高考的指挥棒 能一挥就灵</li>
                            <li>教育部划特招红线：校领导子女本校特招须···</li>
                            <li>央广：把足球绑上高考的指挥棒 能一挥就灵</li>
                            <li>教育部划特招红线：校领导子女本校特招须···</li>
                            <li>九成被拒绝：加入BC企业移民这么难</li>
                        </ul>
                    </div>
                </div>
                <div class="news_list">
                    <div class="news_top"><span>留学动态</span><a href="#">more</a></div>
                    <div class="news_body">
                        <div><img src="images/page_images/flicking_img3.jpg" width="110" height="80" alt="图片" />
                            <p>北京政治学院英语专业</p><p class="small_word">目前北京留学行业服务协会（以下简称BOSSA）···[详细]</p></div>
                        <ul>
                            <li>央广：把足球绑上高考的指挥棒 能一挥就灵</li>
                            <li>教育部划特招红线：校领导子女本校特招须···</li>
                            <li>央广：把足球绑上高考的指挥棒 能一挥就灵</li>
                            <li>教育部划特招红线：校领导子女本校特招须···</li>
                            <li>九成被拒绝：加入BC企业移民这么难</li>
                        </ul>
                    </div>
                </div>
                <div class="news_list">
                    <div class="news_top"><span>最新公告</span><a href="#">more</a></div>
                    <div class="news_body">
                        <div><img src="images/page_images/flicking_img4.jpg" width="110" height="65" alt="图片" />
                            <p>北京政治学院英语专业</p><p class="small_word">目前北京留学行业服务协会（以下简称BOSSA）···[详细]</p></div>
                        <div><img src="images/page_images/flicking_img2.jpg" width="110" height="65" alt="图片" />
                            <p>北京政治学院英语专业</p><p class="small_word">目前北京留学行业服务协会（以下简称BOSSA）···[详细]</p></div>
                        <div><img src="images/page_images/flicking_img3.jpg" width="110" height="65" alt="图片" />
                            <p>北京政治学院英语专业</p><p class="small_word">目前北京留学行业服务协会（以下简称BOSSA）···[详细]</p></div>
                    </div>
                </div>
                <div class="news_list_2">
                    <div class="news_top"><span>行业活动</span><a href="#">more</a></div>
                    <div class="news_body">
                        <div><img src="images/page_images/flicking_img3.jpg" width="110" height="80" alt="图片" />
                            <p>北京政治学院英语专业</p><p class="small_word">目前北京留学行业服务协会（以下简称BOSSA）···[详细]</p></div>
                        <ul>
                            <li>央广：把足球绑上高考的指挥棒 能一挥就灵</li>
                            <li>教育部划特招红线：校领导子女本校特招须···</li>
                            <li>央广：把足球绑上高考的指挥棒 能一挥就灵</li>
                            <li>教育部划特招红线：校领导子女本校特招须···</li>
                            <li>九成被拒绝：加入BC企业移民这么难</li>
                        </ul>
                    </div>
                </div>
                <div class="news_list">
                    <div class="news_top"><span>会员动态</span><a href="#">more</a></div>
                    <div class="news_body">
                        <div><img src="images/page_images/flicking_img2.jpg" width="110" height="80" alt="图片" />
                            <p>北京政治学院英语专业</p><p class="small_word">目前北京留学行业服务协会（以下简称BOSSA）···[详细]</p></div>
                        <ul>
                            <li>央广：把足球绑上高考的指挥棒 能一挥就灵</li>
                            <li>教育部划特招红线：校领导子女本校特招须···</li>
                            <li>央广：把足球绑上高考的指挥棒 能一挥就灵</li>
                            <li>教育部划特招红线：校领导子女本校特招须···</li>
                            <li>九成被拒绝：加入BC企业移民这么难</li>
                        </ul>
                    </div>
                </div>
                <div class="news_recommend">
                    <div class="news_rcm_top"><span>本月推荐机构</span></div>
                    <div><img src="images/page_images/qdjy.png" width="106" height="73" alt="" /><p>启迪教育官方</p>
                        <p>中国一站式留学、考试培训及学游服务旗舰机构···</p>
                    </div>
                </div>
                <div class="news_list">
                    <div class="news_top"><span>视频展示</span><a href="#">more</a></div>
                    <div class="news_body"><p class="top_small">留学生怎样申国际请奖学金</p>
                        <div><img src="images/page_images/flicking_img2.jpg" width="110" height="80" alt="图片" />
                            <p class="small_word">学会讲话的技巧···</p>
                            <p class="small_word">2015-12-20</p>
                            <p class="small_word">播放次数：2638</p>
                        </div>
                    </div>
                    <div class="news_body"><p class="top_small">TED官方视频：教你讲好一个故事</p>
                        <div><img src="images/page_images/flicking_img3.jpg" width="110" height="80" alt="图片" />
                            <p class="small_word">学会讲话的技巧···</p>
                            <p class="small_word">2015-12-20</p>
                            <p class="small_word">播放次数：2638</p>
                        </div>
                    </div>
                </div>
                <div class="image3"><img src="images/page_images/index_ad.png" width="640" height="160" alt="广告图片" /></div>
                <div class="image_bottom">
                    <div class="dot"></div>
                    <div class="word_title"><span>成员机构</span></div>
                    <div class="dot"></div>
                </div>
                <div class="image4_zone">
                    <div class="image4_left"><img src="images/page_images/left_button2.png" width="20" height="61" alt="左向" /></div>
                    <div class="image4_top">
                        <div class="image4"><img src="images/page_images/member1.png" width="144" height="65" alt="图片" /></div>
                        <div class="image4"><img src="images/page_images/member2.png" width="144" height="65" alt="图片" /></div>
                        <div class="image4"><img src="images/page_images/member3.png" width="144" height="65" alt="图片" /></div>
                        <div class="image4"><img src="images/page_images/member4.png" width="144" height="65" alt="图片" /></div>
                        <div class="image4"><img src="images/page_images/member5.png" width="144" height="65" alt="图片" /></div>
                        <div class="image4"><img src="images/page_images/member6.png" width="144" height="65" alt="图片" /></div>
                    </div>
                    <div class="image4_bottom">
                        <div class="image4"><img src="images/page_images/member7.png" width="144" height="65" alt="图片" /></div>
                        <div class="image4"><img src="images/page_images/member8.png" width="144" height="65" alt="图片" /></div>
                        <div class="image4"><img src="images/page_images/member9.png" width="144" height="65" alt="图片" /></div>
                        <div class="image4"><img src="images/page_images/member10.png" width="144" height="65" alt="图片" /></div>
                        <div class="image4"><img src="images/page_images/member11.png" width="144" height="65" alt="图片" /></div>
                        <div class="image4"><img src="images/page_images/member12.png" width="144" height="65" alt="图片" /></div>
                    </div>
                    <div class="image4_right"><img src="images/page_images/right_button2.png" width="20" height="61" alt="右向" /></div>
                </div>
            </div>
            <!-- #BeginLibraryItem "/lib/bottom.lbi" -->
            <!--网页末尾部-->
            <div class="bottom_div">
                <div class="bottom_body">
                    <div class="bottom_title"> <span class="friend_link">友情链接</span> <img src="images/page_images/hide.png" width="10" height="6" alt="收起图片" /> <span class="link">收起</span> </div>
                    <ul>
                        <li><a href="#">广东省教育厅</a></li>
                        <li><a href="#">广州市教育局</a></li>
                        <li><a href="#">美国领事馆</a></li>
                        <li><a href="#">广东省教育厅</a></li>
                        <li><a href="#">广州市教育局</a></li>
                        <li><a href="#">美国领事馆</a></li>
                        <li><a href="#">英国领事馆</a></li>
                        <li><a href="#">雅思培训</a></li>
                        <li><a href="#">SAT培训</a></li>
                        <li><a href="#">ACT培训</a></li>
                        <li><a href="#">学术英语</a></li>
                    </ul>
                    <p class="address">电话：020-61101095 &nbsp;&nbsp;传真：020-6110109&nbsp;&nbsp;地址：广东省广州市天河区天河北路30号东812A室</p>
                    <p class="right">&copy;版权所有&nbsp;&nbsp;广东省留学服务&nbsp;&nbsp;粤ICP备XXXXXXXX号</p>
                </div>
            </div>
            <!-- #EndLibraryItem -->

        </el-main>





        <el-footer>
            <div class="WBDHL"></div>
        </el-footer>
    </el-container>





</template>
<div class="hello">你好</div>
<script>
    export default {
        data() {
            return {
                name: 'linxin'
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout') {
                    localStorage.removeItem('ms_username')
                    this.$route.go(0);
                }else if(command=='login'){
                    this.$router.push('/login');
                }
            }
        }
    }
</script>
<style scoped>

    .header {
        background: url('../../../screenshots/timg2.jpg')no-repeat;
        background-size: 100%;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .but{
        position: absolute;
        right: 20px;
        top: 23px;
        margin: auto;
        margin-bottom: 10px;
    }
    .header-1{
        height: 70px;
    }
    .Welcome{
        float: right;
        margin-right: 100px;
        text-align: center;
        height: 70px;
        width: 200px;
        font-size: 10px;
        color: #000000;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .user-info {

        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #000000;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
    .WBDHL{
        height: 50px;
        width: 100%;
        background-color: magenta;
    }




    .main_div {
        width: 1003px;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 300px;
    }
    .image_big {
        height: 360px;
        width: 660px;
        overflow: hidden;
        float: left;
    }

    .image_big a {
        line-height: 60px;
        font-weight: bold;
        background-color: #000;
        text-align: center;
        filter: Alpha(Opacity=50);
        opacity: .5;
        margin-top: -64px;
        position: absolute;
        width: 660px;
        color: #FFF;
    }


    .right_massage {
        float: left;
        height: 360px;
        width: 343px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #060;
    }
    .right_massage span {
        font-size: x-large;
        font-weight: bold;
        color: #030;
        line-height: 60px;
        margin-left: 10px;
    }
    .right_massage .massage_top {
        height: 60px;
        width: 343px;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: #093;
    }
    .right_massage .massage_body p {
        font-size: medium;
        font-weight: bold;
        color: #666;
        margin-left: 150px;
    }
    .right_massage .massage_body .small_word {
        font-size: 13px;
        color: #999;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    .right_massage .massage_body div img {
        float: left;
        margin-left: 10px;
    }

    .right_massage .massage_body li {
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: #CCC;
        list-style-image: url(../../../screenshots/dot.png);
        line-height: 40px;
        font-size: 13px;
        margin-left: 30px;
        margin-top: 0px;
        padding-top: 4px;
    }

    .image {
        float: left;
        margin-top: 50px;
    }
    .image1 {
        float: left;
        clear: left;
        margin-top: 10px;
    }
    .image2 {
        float: left;
        margin-top: 10px;
        margin-left: 10px;
    }

    .news_list {
        float: left;
        width: 330px;
        margin-top: 20px;
    }
    div.news_top {
        background-color: #CCC;
        width: 322px;
        height: 35px;
        border-bottom-width: 3px;
        border-bottom-style: solid;
        border-bottom-color: #096;
        float: right;
        margin-bottom: 20px;
    }
    div.news_top span {
        font-size: medium;
        font-weight: bold;
        color: #060;
        width: 80px;
        height: 35px;
        line-height: 35px;
        border-bottom-width: 3px;
        border-bottom-style: solid;
        border-bottom-color: #030;
        display: block;
        text-align: center;
    }
    div.news_top a {
        float: right;
        display: block;
        margin-top: -30px;
        color: #333;
    }
    a:link,visited,hover,active {
        text-decoration: none;
    }
    div.news_body li {
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: #CCC;
        list-style-image: url(../../../screenshots/dot.png);
        line-height: 35px;
        font-size: 13px;
        margin-left: 20px;
        padding-top: 4px;
    }
    div.news_body div p {
        font-size: 15px;
        font-weight: bold;
        color: #666;
        margin-left: 150px;
        margin-bottom: 0px;
    }
    div.news_body .small_word {
        font-size: small;
        color: #999;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    div.news_body img {
        float: left;
        margin-left: 7px;
    }
    .news_list_2 {
        float: left;
        width: 330px;
        margin-top: 20px;
        clear: left;
    }
    .main_div .image3 img {
        margin-top: -180px;
    }

    .news_recommend {
        width: 330px;
        float: left;
        margin-top: 25px;
    }

    .news_recommend .news_rcm_top {
        width: 330px;
        height: 30px;
        border-bottom-width: 3px;
        border-bottom-style: solid;
        border-bottom-color: #999;
        float: right;
        margin-bottom: 20px;
    }

    .news_recommend .news_rcm_top span {
        background-color: #0C0;
        width: 150px;
        height: 30px;
        font-weight: bold;
        color: #FFF;
        display: block;
        text-align: center;
        font-size: large;
        line-height: 30px;
    }
    .news_recommend img {
        margin-left: 15px;
        float: left;
    }
    .news_recommend p {
        font-size: 16px;
        margin-left: 110px;
        margin-bottom: 15px;
    }
    .news_recommend  {
        font-size: medium;
        margin-left: 10px;
        margin-top: 20px;
        margin-bottom: 50px;
    }
    .news_list .news_body .top_small {
        font-size: large;
        color: #666;
        margin-left: 20px;
        font-weight: bold;
    }

    .main_div .image_bottom {
        width: 1003px;
        margin-top: 35px;
        margin-bottom: 50px;
        height:40px;
    }
    .main_div .image_bottom .word_title span {
        font-size: xx-large;
        font-weight: bold;
        color: #090;
    }
    .main_div .image_bottom .dot {
        background-image: url(../../../screenshots/dot.png);
        background-repeat: repeat;
        height: 40px;
        width: 420px;
        float: left;
    }
    .main_div .image4_zone {
        width: 1003px;
        margin-bottom: 40px;
    }
    .main_div .image4_zone .image4_left {
        height: 210px;
        width: 35px;
        float: left;
    }
    .main_div .image4_zone .image4_right {
        float: left;
        height: 210px;
        width: 35px;
        margin-top: -120px;
    }
    .image4_right img{
        margin-top: 70px;
    }
    .image4_left img{
        margin-top: 70px;
    }
    .main_div .image4_zone .image4_top {
        float: left;
        height: 120px;
        width: 930px;
    }
    .main_div .image4_zone .image4_bottom {
        float: left;
        height: 90px;
        width: 930px;
    }
    .main_div .image4_zone .image4_bottom img{
        float: left;
        margin-right: 10px;
    }
    .main_div .image4_zone .image4_top .image4 img {
        margin-top: 40px;
        float: left;
        margin-right: 10px;
    }
    .main_div .word_title {
        width: 160px;
        height: 40px;
        float: left;
        text-align: center;
    }
</style>
