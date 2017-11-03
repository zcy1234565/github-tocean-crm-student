<template>


        <div class="header">
            <div class="logo">拓胜学生端系统</div>
            <img class="header-1" src="../../../screenshots/title.png"/>
                 <div>欢迎来到拓胜学生端系统
nom</div>
                <el-button type="success" size="mini" class="but">成功按钮</el-button>


            <div class="user-info">
                <el-dropdown trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        <!--
                        <img class="user-logo" src="../../../static/img/img.jpg">

                        {{username}}
                        -->
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <!--
                        <el-dropdown-item command="loginout">退出</el-dropdown-item>
                        -->
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>


</template>
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
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            }
        }
    }
</script>
<style scoped>

    .header {
        position: relative;
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
        top: 25px;
        margin: auto;
        margin-bottom: 10px;
    }
    .header-1{
        height: 70px;
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
</style>
