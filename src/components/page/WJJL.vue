<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 当前功能</el-breadcrumb-item>
                <el-breadcrumb-item>学员违纪信息查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">
            <div class="form1">
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
                <div class="blocks">
                    <span class="demonstration">时间：</span>
                    <el-date-picker
                        v-model="value4"
                        type="datetimerange"
                        :picker-options="pickerOptions2"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        align="right">
                    </el-date-picker>
                </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
            </div>
        </div>
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
                                width="80">
                            </el-table-column>
                            <el-table-column
                                prop="member"
                                label="学员"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="class"
                                label="班级"
                                width="250">
                            </el-table-column>
                            <el-table-column
                                prop="time"
                                label="违纪时间"
                                width="250">
                            </el-table-column>
                            <el-table-column
                                prop="qingkuang"
                                label="违纪情况"
                                width="200">
                            </el-table-column>
                            <el-table-column
                                prop="taidu"
                                label="学员违纪态度"
                                width="190">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-collapse-item>
            </el-collapse>
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
                formInline: {
                user: '',
                region: ''
            },
                tableData: [{
                    xuhao: '1',
                    member: ' 	郭子尧  ',
                    class:' 	SD0902  ',
                    time:'2009-07-22 ',
                    qingkuang:'早上迟到 ',
                    taidu:'		态度良好 '
                }, {
                    xuhao: '2',
                    member: ' 	郑允铎 ',
                    class:' 	SD0902  ',
                    time:'2009-07-22 ',
                    qingkuang:'早上迟到',
                    taidu:'		态度良好 '
                }, {
                    xuhao: '3',
                    member: '曾耀钧 ',
                    class:' 	SD0902  ',
                    time:'2009-07-22 ',
                    qingkuang:'早上迟到',
                    taidu:'		态度良好 '
                }, {
                    xuhao: '4',
                    member: '曾耀钧 ',
                    class:' 	SD0902  ',
                    time:' 	2009-07-21 ',
                    qingkuang:'迟到',
                    taidu:'态度恶劣'
                }, {
                    xuhao: '5',
                    member: '郭子尧  ',
                    class:' 	SD0902   ',
                    time:' 	2009-07-21 ',
                    qingkuang:'下午旷课 ',
                    taidu:'		态度良好 '
                }, {
                    xuhao: '6',
                    member: '杨嘉盛  ',
                    class:' 	SD0904',
                    time:' 	2009-07-21 ',
                    qingkuang:'下午上课迟到20分钟 ',
                    taidu:'		态度良好 '
                }, {
                    xuhao: '7',
                    member: ' 	郭子尧',
                    class:'SD0902',
                    time:' 	2009-07-16 ',
                    qingkuang:'迟到',
                    taidu:'		态度良好 '
                }, {
                    xuhao: '8',
                    member: '郑允铎  ',
                    class:'SD0902',
                    time:' 	2009-07-16 ',
                    qingkuang:'迟到',
                    taidu:'		态度良好 '
                }, {
                    xuhao: '9',
                    member: '熊鹰 ',
                    class:'SD0902',
                    time:' 	2009-07-16 ',
                    qingkuang:'迟到',
                    taidu:'		态度良好 '
                }, {
                    xuhao: '10',
                    member: '欧阳温苓 ',
                    class:'SD0902',
                    time:' 	2009-07-15',
                    qingkuang:'迟到',
                    taidu:'		态度良好 '

                }],
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value4: ''
            };
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
</style>
