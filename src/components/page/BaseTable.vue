<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb class="crumbs-vue">
                <el-breadcrumb-item> 当前功能</el-breadcrumb-item>
                <el-breadcrumb-item>就业申请信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins">
            <div class="div1">你已经填写了就业申请信息！</div>
        </div>
        <div class="list">
            <div class="table">
                <div class="information">申请信息列表</div>
            <template class="table1">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm" label-width="200px">
                    <el-form :inline="true" :model="ruleForm":rules="rules" ref="ruleForm"  class="demo-ruleForm" >
                    <el-form-item label="姓名" prop="name" style="margin-left: 100px">
                        <el-input style="width: 100px"  v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="班级" prop="class" >
                        <el-input style="width: 100px"  v-model="ruleForm.class"></el-input>
                    </el-form-item>
                    </el-form>
                    <el-form-item   label="期望就业方向" prop="region">
                        <el-select v-model="ruleForm.region" placeholder="请选择就业方向">
                            <el-option label="Andriod" value="Andriod"></el-option>
                            <el-option label="Java" value="Java"></el-option>
                            <el-option label="运维" value="运维"></el-option>
                            <el-option label="前端" value="前端"></el-option>
                            <el-option label="php" value="php"></el-option>
                            <el-option label="python" value="python"></el-option>
                            <el-option label="C++" value="C++"></el-option>
                            <el-option label="C#" value="C#"></el-option>
                            <el-option label="测试方向" value="测试方向"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="期望就业地点" prop="place">
                        <el-select v-model="ruleForm.region" placeholder="请选择就业地点">
                            <el-option label="广州" value="guangzhou"></el-option>
                            <el-option label="深圳" value="shenzhen"></el-option>
                            <el-option label="佛山" value="foshan"></el-option>
                            <el-option label="东莞" value="dongguang"></el-option>
                            <el-option label="上海" value="shanghai"></el-option>
                            <el-option label="北京" value="beijing"></el-option>
                            <el-option label="测试地点" value="place1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="期望推荐时间" required>
                        <el-col :span="11">
                            <el-form-item prop="date1">
                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 80%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="是否需要拓胜推荐" prop="resource" style="margin-left: 30px">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>

            </template>

</div> <div class="crumbs1">
            <el-button  size="small">确认提交</el-button>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
<<<<<<< HEAD
                url: './static/vuetable.json',
                tableData: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false
            }
        },
        created(){
            this.getData();
        },
        computed: {
            data(){
                const self = this;
                return self.tableData.filter(function(d){
                    let is_del = false;
                    for (let i = 0; i < self.del_list.length; i++) {
                        if(d.name === self.del_list[i].name){
                            is_del = true;
                            break;
                        }
                    }
                    if(!is_del){
                        if(d.address.indexOf(self.select_cate) > -1 &&
                            (d.name.indexOf(self.select_word) > -1 ||
                            d.address.indexOf(self.select_word) > -1)
                        ){
                            return d;
                        }
                    }
                })
            }
        },
        methods: {
            handleCurrentChange(val){
                this.cur_page = val;
                this.getData();
            },
            getData(){
                let self = this;
                if(process.env.NODE_ENV === 'development'){
                    self.url = '/ms/table/list';
                };
                self.$axios.post(self.url, {page:self.cur_page}).then((res) => {
                    self.tableData = res.data.list;
                })
            },
            search(){
                this.is_search = true;
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.$message('编辑第'+(index+1)+'行');
            },
            handleDelete(index, row) {
                this.$message.error('删除第'+(index+1)+'行');
            },
            delAll(){
                const self = this,
                    length = self.multipleSelection.length;
                let str = '';
                self.del_list = self.del_list.concat(self.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += self.multipleSelection[i].name + ' ';
=======
                ruleForm: {
                    name: '',
                    class:'',
                    region: '',
                    place:'',
                    date1: '',
                    resource: '',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    class: [
                        { required: true, message: '请输入班级', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择就业方向', trigger: 'change' }
                    ],
                    place: [
                        { required: true, message: '请选择就业地点', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择是否需要推荐', trigger: 'change' }
                    ],
>>>>>>> origin/dev
                }
            };
        },

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
.plugins{
    background-color:#ffffff;
    border: 1px solid  #B3CDE8;
    height: 30px;
}
  .div1{
      font-size: 5px;margin-top: 5px;background-color: yellow;width: 160px;
  }
.list{
    background-color:#ffffff;
    border: 1px solid  #B3CDE8;
    margin-top: 10px;
    height: 500px;
}
.information{
    margin-bottom: 30px;
    text-align: center;
    color: #1A438E;
    background-color: #CFE0F1;
    height: 40px;
    line-height: 40px;
    width:480px;
}
    .table{
        margin-top: 40px;
        margin-left: 280px;
        width: 480px;
        height: 380px;
        border: 1px solid  #B3CDE8;
    }
.crumbs1{
    margin-top: 37px;
    background-color:#EEF7FD;
    border-top: 1px solid  #B3CDE8;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
</style>
