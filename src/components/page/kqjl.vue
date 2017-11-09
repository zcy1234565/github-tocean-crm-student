<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb class="crumbs-vue">
                <el-breadcrumb-item> 当前功能</el-breadcrumb-item>
                <el-breadcrumb-item>学员考勤信息查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="crumbs">
            <el-breadcrumb class="crumbs-vues">
                <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
                    <el-form-item label="班级：" size="mini" style="margin-left: 160px">
                        <el-select v-model="formInline.region" placeholder="" size="mini" style="width: 150px">
                            <el-option label="ASD08061" value="class1"></el-option>
                            <el-option label="ASD08062" value="class2"></el-option>
                            <el-option label="ASD08063" value="class3"></el-option>
                            <el-option label="ASD0807" value="class4"></el-option>
                            <el-option label="ASD0808" value="class5"></el-option>
                            <el-option label="ASD0809" value="class6"></el-option>
                            <el-option label="ASD08010(1)" value="class7"></el-option>
                            <el-option label="ASD08010(2)" value="class8"></el-option>
                            <el-option label="0803" value="class9"></el-option>
                            <el-option label="0804" value="class10"></el-option>
                            <el-option label="SD0806" value="class11"></el-option>
                            <el-option label="SD0808" value="class12"></el-option>
                            <el-option label="SD0807" value="class13"></el-option>
                            <el-option label="SD0809" value="class14"></el-option>
                            <el-option label="SD08010" value="class15"></el-option>
                            <el-option label="SD08011" value="class16"></el-option>
                            <el-option label="SD0802" value="class17"></el-option>
                            <el-option label="SD0805" value="class18"></el-option>
                            <el-option label="WSD0804" value="class19"></el-option>
                            <el-option label="SD0901" value="class20"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="学员：" size="mini" >
                        <el-input v-model="formInline.user" placeholder="" size="mini" style="width: 120px"></el-input>
                    </el-form-item>
                    <el-form-item>
                    <div class="block">
                        <span class="demonstration">时间：</span>
                        <el-date-picker
                            v-model="value3" size="mini" style="width: 300px"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                    </el-form-item>
                    <el-form-item label="" size="mini">
                        <el-select v-model="formInline.res" placeholder="" size="mini" style="width: 80px">
                            <el-option label="正常" value="zhengchang"></el-option>
                            <el-option label="请假" value="qingjia"></el-option>
                            <el-option label="迟到" value="chidao"></el-option>
                            <el-option label="早退" value="zaotui"></el-option>
                            <el-option label="旷课" value="kuangke"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-breadcrumb></div>
        <div class="plugins-2">
                <div class="informationss"><el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="学员考勤信息列表(+单击标题栏展开）" name="1">
            <template>
                <el-table :data="tableData" border  style="width: 82%; margin-left: 90px;margin-top: 20px">
                    <el-table-column
                        prop="number"
                        label="序号"
                        width="70">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="学员"
                    width="120">
                </el-table-column>
                    <el-table-column
                        prop="class"
                        label="班级"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="140">
                    </el-table-column>
                    <el-table-column
                        prop="ksdate"
                        label="开始时间"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="jsdate"
                        label="结束时间"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="状态"
                        width="100">
                    </el-table-column>
                </el-table>
            </template>
                    </el-collapse-item>
                </el-collapse>

                        <div class="crumbs1">
                            <div class="paginations">
                                <el-pagination
                                    @current-change ="handleCurrentChange"
                                    layout="prev, pager, next"
                                    :total="1000">
                                </el-pagination>
                            </div>
                        </div>
        </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: '',
                    res:''

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
                value3: [new Date(2017, 10, 10, 10, 10), new Date(2017, 11, 11, 17, 10)],
                tableData: [{
                    number:'1',
                    name: '甘文帝',
                    class:'SD0810',
                    date: '2008-12-03',
                    ksdate: '08:46',
                    jsdate: '18:01',
                    address: ''
                }, {
                    number:'2',
                    name: '甘文帝',
                    class:'SD0810',
                    date: '2008-12-04',
                    ksdate: '08:58',
                    jsdate: '17:58',
                    address: ''
                }, {
                    number:'3',
                    name: '甘文帝',
                    class:'SD0810',
                    date: '2008-12-05',
                    ksdate: '09:04',
                    jsdate: '21:51',
                    address: ''
                },
                    {
                        number:'4',
                        name: '甘文帝',
                        class:'SD0810',
                        date: '2008-12-08',
                        ksdate: '08:55',
                        jsdate: '17:55',
                        address: ''
                    },
                    {
                        number:'5',
                        name: '甘文帝',
                        class:'SD0810',
                        date: '2008-12-10',
                        ksdate: '09:07',
                        jsdate: '21:10',
                        address: ''
                    },
                    {
                        number:'6',
                        name: '甘文帝',
                        class:'SD0810',
                        date: '2008-12-11',
                        ksdate: '08:59',
                        jsdate: '18:01',
                        address: ''
                    },{
                        number:'7',
                        name: '甘文帝',
                        class:'SD0810',
                        date: '2008-12-12',
                        ksdate: '09:11',
                        jsdate: '17:46',
                        address: '早退'
                    },{
                        number:'8',
                        name: '甘文帝',
                        class:'SD0810',
                        date: '2008-12-16',
                        ksdate: '09:02',
                        jsdate: '18:32',
                        address: ''
                    },
                    {
                        number:'9',
                        name: '甘文帝',
                        class:'SD0810',
                        date: '2008-12-17',
                        ksdate: '09:08',
                        jsdate: '21:32',
                        address: ''
                    },
                    {
                        number:'10',
                        name: '甘文帝',
                        class:'SD0810',
                        date: '2008-12-18',
                        ksdate: '08:51',
                        jsdate: '18:16',
                        address: ''
                }],
                methods: {
                    onSubmit() {
                        console.log('submit!');
                    },
                handleCurrentChange(val){
                this.cur_page = val;
                this.getData();
            }

                }
            }
        }
    }
</script>

<style >

    .crumbs{
        background-color:#EEF7FD;
        border: 1px solid  #B3CDE8;
    }
    .crumbs-vue{
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
    .crumbs-vues{
        width: 100%;
        height: 40px;
    }
    .plugins-2{
        background-color:#ffffff;
        border: 1px solid  #B3CDE8;
        height: 585px;

    }
    .paginations{
      margin-top: 5px;
      margin-left: 770px;
    }
    .informationss{
        color: #1A438E;
        background-color: #CFE0F1;
        height: 30px;
        width: 100%;
    }
    .crumbs1{
        background-color:#EEF7FD;
        border-top: 1px solid  #B3CDE8;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
</style>
