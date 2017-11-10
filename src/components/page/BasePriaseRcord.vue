<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb class="crumbs_itool">
                <el-breadcrumb-item><i style="margin-left: 2px" class="el-icon-document"></i> <strong>当前功能</strong></el-breadcrumb-item>
                <el-breadcrumb-item class="txt">查询学员表扬信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="crumbs_g">

            <el-form :inline="true" :model="formInline" class="demo-form-inline">

                <el-form-item label="班级">
                    <el-select v-model="formInline.region" placeholder="15计应2班">
                        <el-option label="15计应1班" value="shanghai"></el-option>
                        <el-option label="15软件1班" value="beijing"></el-option>
                        <el-option label="15软件2班" value="beijing"></el-option>
                        <el-option label="15多媒体1班" value="beijing"></el-option>
                        <el-option label="15多媒体2班" value="beijing"></el-option>
                        <el-option label="15信管1班" value="beijing"></el-option>
                        <el-option label="15信管2班" value="beijing"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="学员">
                    <el-input v-model="formInline.user" placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item >
                    <template>
                        <div class="block">
                            <span class="demonstration">时间</span>
                            <el-date-picker
                                v-model="value7"
                                type="daterange"
                                align="right"
                                unlink-panels
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :picker-options="pickerOptions2">
                            </el-date-picker>
                        </div>
                    </template>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
                <el-badge :value="6" class="item">
                    <el-button size="small">评论</el-button>
                </el-badge>
            </el-form>
        </div>

        <el-collapse>
            <el-collapse-item title="基本信息 / (+ 单击标题栏展开)" name="1">
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                    <el-table-column
                        prop="number"
                        label="序号"
                        width="65">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="110">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="表扬时间"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="reson"
                        label="表扬原因"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="evaluate"
                        label="评论"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="grade"
                        label="评分"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="count"
                        label="总分"
                        width="100">
                    </el-table-column>
                </el-table>
            </el-collapse-item>
        </el-collapse>

        <div class="block_itool">
            <span class="demonstration"></span>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentPage4: 4,
                tableData:[{
                    number: '1',
                    name: '王小虎',
                    date: '2017-11-02',
                    reson:'美若天仙',
                    evaluate:'',
                    grade:'',
                    count:'',
                }, {
                    number: '2',
                    name: '王小虎',
                    date: '2016-11-12',
                    reson:'',
                    evaluate:'',
                    grade:'',
                    count:'',
                }, {
                    number: '3',
                    name: '王小虎',
                    date: '2016-06-11',
                    reson:'',
                    evaluate:'',
                    grade:'',
                    count:'',
                }, {
                    number: '4',
                    name: '王小虎',
                    date: '2015-12-25',
                    reson:'',
                    evaluate:'',
                    grade:'',
                    count:'',
                },{
                    number: '5',
                    name: '王小虎',
                    date: '2015-12-25',
                    reson:'',
                    evaluate:'',
                    grade:'',
                    count:'',
                },{
                    number: '6',
                    name: '静安',
                    date: '2015-11-01',
                    reson:'',
                    evaluate:'',
                    grade:'',
                    count:'',
                },{
                    number: '6',
                    name: '大熊',
                    date: '2015-12-25',
                    reson:'',
                    evaluate:'',
                    grade:'',
                    count:'',
                },{
                    number: '7',
                    name: '多啦a梦',
                    date: '2015-12-25',
                    reson:'',
                    evaluate:'',
                    grade:'',
                    count:'',
                }],
                formInline: {
                    user: '',
                    region: '',
                },
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
                value6: '',
                value7: ''
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
    .block_itool{
        margin-top: 20px;
        margin-left: 250px;
    }
    .item {
        margin-top: 4px;
        margin-right: 40px;
    }
    .txt{
        font-size: 20px;
    }
</style>
