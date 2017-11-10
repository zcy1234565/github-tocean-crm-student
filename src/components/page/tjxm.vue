<template>
    <div>
        <div class="crumbs_a">
            <el-breadcrumb class="crumbs_itool">
                <el-breadcrumb-item><i style="margin-left: 2px" class="el-icon-upload"></i> <strong>当前功能</strong></el-breadcrumb-item>
                <el-breadcrumb-item class="txt">提交项目</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <div class="crumbs_d">
                <el-collapse>
                    <el-collapse-item title="基本信息 / (+ 单击标题栏展开)" name="1">
                <hr style="border:0;background-color:#345ee0;" class="hr1">
                <div style="margin-left:1px;" class="itool3">您不是学员，不能提交项目！</div>
                <hr style="border:2px;background-color:#1c8de0;height:3px;width: inherit" class="hr2">
                <el-form :inline="true" class="form">
                    <el-form-item style="margin-left: 10px" label="项目">
                        <el-input size="mini" class="form1" v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item   label="班级">
                        <el-input size="mini" class="form1" v-model="formLabelAlign.region"></el-input>
                    </el-form-item>
                    <hr style="border:0;background-color:#d2ecff;height:1px;" class="hr3">
                    <el-form-item style="margin-left: 10px" label="小组">
                        <el-input size="mini" class="form1" v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item   label="考试类型">
                        <el-input size="mini" class="form1" v-model="formLabelAlign.reson"></el-input>
                        <el-option label="JAVA" value="shanghai"></el-option>
                        <el-option label="数据库" value="beijing"></el-option>
                    </el-form-item>
                    <hr style="border:0;background-color:#d2ecff;height:1px;" class="hr4">
                    <div  style="margin-left: 10px;color: #1f2d3d; margin-top: 12px" class="itool4">源代码和文档</div>
                    <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form>
                    </el-collapse-item>
                </el-collapse>

            </div>
        </div>
        <div class="btn2" >
            <el-button type="primary">确认提交</el-button>
            <el-button type="primary">重新输入</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    name: '',
                    region: '',
                    reson:''
                }
            };
        }
    }
</script>

<style>
    /*.crumbs_a{
        background-color: #4db3ff;
        border:1px solid #3097D1;
        width: 980px;
        height:50px;
    }
    */
    .crumbs_itool{
        line-height: 30px;
    }
    /*.btn {
        background-color: #73ccff;
        border: 1px solid #3097D1;
        width: 980px;
        height: 35px;
        margin-top: -10px;
    }
    */
    .submit{
        float: right;
        /*margin-right: 10px;
        margin-top: 8px;
        color:#1d90e6;
        border: 1px solid #1d90e6;
        background-color:  #EEF7FD;
        */
    }

    .crumbs_d{
        background-color:#ffffff;
        border: 0;
        width: 980px;
        height:500px;
        margin-top: 10px;
    }
    .crumbs_d_itool{
        line-height: 20px;
        background-color: #cccccc /*#EEF7FD;*/
    }
    .itool{
        font-weight: bold;
        color: #0000ff;
        font-size: 16px;
    }
    .itool3{
        background-color: yellow;
        border: 1px solid #ffffff;
        width: 160px;
        font-size: 10px;
        margin-top: 5px;
    }
    .form1{
        width:250px;
    }
    .form{
        margin-top: 5px;
        width:950px;
        height: 360px;
        /*border: 1px solid #4db3ff;/*#d2ecff;*/
        margin-left: 13px;
    }
    .hr2{
        margin-top: 5px;
    }
    .itool4{
        font-size:13px;
        margin-top: -20px;
    }
    .btn2{
        /*margin-top: 20px;*/
        margin:0 auto;
        text-align:center;
        padding-top: 0;
    }
    .txt{
        font-size: 20px;
    }
</style>
