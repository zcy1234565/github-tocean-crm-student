<template>
    <div>
        <div class="table">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item><i class="el-icon-menu"></i> 当前功能</el-breadcrumb-item>
                    <el-breadcrumb-item class="wd">调查列表管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        <div class="form">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="班级">
                <el-select v-model="formInline.region" placeholder="">
                    <el-option label="信管1" value="xinguan1"></el-option>
                    <el-option label="信管2" value="xinguan2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="学员">
                <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <div>
            <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="班级考评积极性列表 (+ 单击标题栏展开)" name="1">
                   <div>
                       <el-table
                           :data="tableData"
                           border
                           style="width: 100%">
                           <el-table-column
                               prop="xuhao"
                               label="序号"
                               width="150">
                           </el-table-column>
                           <el-table-column
                               prop="member"
                               label="学员"
                               width="200">
                           </el-table-column>
                           <el-table-column
                               prop="class"
                               label="班级"
                               width="200">
                           </el-table-column>
                           <el-table-column
                               prop="cishu"
                               label="参与评考次数"
                               width="300">
                           </el-table-column>
                           <el-table-column
                               prop="youxu"
                               label="有序次数"
                               width="200">
                           </el-table-column>
                           <el-table-column
                               prop="garder"
                               label="得分"
                               width="150">
                           </el-table-column>
                       </el-table>
                   </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
        <div class="block">
            <span class="demonstration"></span>
            <el-pagination
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                    tableData: [{
                        xuhao: '1',
                        member: '吴良飞 ',
                        class:'SD0806 ',
                        cishu:'1',
                        youxu:'1',
                        garder:'2'
                    }, {
                        xuhao: '2',
                        member: '黄冲',
                        class:'SD0806 ',
                        cishu:'1',
                        youxu:'1',
                        garder:'2'
                    }, {
                        xuhao: '3',
                        member: '刘丹华',
                        class:'SD0806 ',
                        cishu:'1',
                        youxu:'1',
                        garder:'2'
                    }, {
                        xuhao: '4',
                        member: '郑仕安',
                        class:'SD0806 ',
                        cishu:'1',
                        youxu:'1',
                        garder:'2'
                    }, {
                        xuhao: '5',
                        member: '黄健 ',
                        class:'SD0810  ',
                        cishu:'10',
                        youxu:'10',
                        garder:'20'
                    }, {
                        xuhao: '6',
                        member: '朱忠耿 ',
                        class:'ASD08061',
                        cishu:'4',
                        youxu:'4',
                        garder:'8'
                    }, {
                        xuhao: '7',
                        member: '王亚丹',
                        class:'ASD08061',
                        cishu:'1',
                        youxu:'1',
                        garder:'2'
                    }, {
                        xuhao: '8',
                        member: ' 	肖博知  ',
                        class:'ASD08061',
                        cishu:'1',
                        youxu:'1',
                        garder:'2'
                    }, {
                        xuhao: '9',
                        member: '李义',
                        class:'ASD08061',
                        cishu:'5',
                        youxu:'5',
                        garder:'10'
                    }, {
                        xuhao: '10',
                        member: '谢锦明',
                        class:'SD0810 ',
                        cishu:'5',
                        youxu:'5',
                        garder:'10'

                    }],
                formInline: {
                    user: '',
                    region: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>
<style>
    .block{
        margin-top: 10px;
        margin-left:1285px;
    }
    .form{
        margin-top: 10px;
    }
</style>
