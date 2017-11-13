<template>
    <div>
        <div>
            <el-breadcrumb class="crumbs-vue">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 当前功能</el-breadcrumb-item>
                <el-breadcrumb-item>上传简历信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="crumbs">
        <el-breadcrumb class="crumbs-vue">
            <div class="div"><el-button  size="mini">提交</el-button></div>
        </el-breadcrumb>
        </div>
        <div class="plugins-1">
            <div class="informations">个人简历：</div>
            <a href="http://element.eleme.io/#/zh-CN/component/upload" target="_blank"></a>
        <el-upload
            class="upload-demo"
            drag
            action="/api/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        </div>

        <div class="crumbss">
            <el-button  size="small">确认提交</el-button>
            <el-button  size="small">重新上传</el-button>
        </div>

    </div>
</template>

<script>
    import VueCoreImageUpload  from 'vue-core-image-upload';
    import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
    import ElBreadcrumb from "../../../node_modules/element-ui/packages/breadcrumb/src/breadcrumb";
    export default {
        data: function(){
            return {
                src: './static/img/img.jpg',
                fileList: []
            }
        },
        components: {
            ElBreadcrumb, ElInput, VueCoreImageUpload
        },
        methods:{
            imageuploaded(res) {
                console.log(res)
            },
            handleError(){
                this.$notify.error({
                    title: '上传失败',
                    message: '图片上传接口上传失败，可更改为自己的服务器接口'
                });
            }
        }
    }
</script>

<style scoped>
   .crumbs{
       background-color:#EEF7FD;
      border: 1px solid  #B3CDE8;
   }
    .crumbs-vue{
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
    .div{
        float: right;
        padding-right: 20px;
    }
    .plugins-1{
        background-color:#ffffff;
        border: 1px solid  #B3CDE8;
    }
    .informations{
        color: #1A438E;
        background-color: #CFE0F1;
        height: 30px;
    }
    .crumbss{
        margin-top: 20px;
        background-color:#EEF7FD;
        border: 1px solid  #B3CDE8;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
  .upload-demo{
      text-align: center;
  }
</style>
