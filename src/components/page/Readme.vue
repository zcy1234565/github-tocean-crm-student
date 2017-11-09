<template>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 当前功能</el-breadcrumb-item>
                <el-breadcrumb-item class="wd">提交作业</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="btn">
            <button class="submit">提交</button>
        </div>
        <div class="forms">
            <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="调查列表 (+ 单击标题栏展开)" name="1">
                    <div class="word3">您不是学员，不能提交作业！</div>
                    <el-form :inline="true" class="form">
                        <el-form-item style="margin-left: 10px" label="标题">
                            <el-input size="mini" class="form1" v-model="formLabelAlign.name"></el-input>
                        </el-form-item>
                        <el-form-item   label="学员">
                            <el-input size="mini" class="form1" v-model="formLabelAlign.region"></el-input>
                        </el-form-item>
                        <div  style="margin-left: 10px;color: #1f2d3d" class="word4">源代码和文档</div>
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
        <div class="btn2">
            <button class="submit2">确认提交</button>
            <button class="submit2">重新输入</button>
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
                    region: ''
                }
            };
        }
    }
</script>
<style>
    .crumbs{
        width: 980px;
        height:30px;
    }
    .btn {
        background-color: #EEF7FD;
        border: 1px solid #f2f2f2;
        width: 1010px;
        height: 50px;
        margin-top: -10px;
    }
    .submit{
        float: right;
        margin-right: 10px;
        margin-top: 15px;
        color:#1d90e6;
        border: 1px solid #1d90e6;
        background-color:  #EEF7FD;
    }
    .word3{
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
        height: 280px;
        border: 1px solid #d2ecff;
        margin-left: 13px;
    }
    .word4{
        font-size:13px;
        margin-top: -20px;
    }
    .btn2{
        margin-top: 10px;
    }
    .submit2{
        background-color:  #EEF7FD;
        color:#1d90e6;
    }
    .wd{
        font-weight: bold;
        font-size: 15px;
    }
    .forms{
        margin-top: 15px;
    }
</style>
