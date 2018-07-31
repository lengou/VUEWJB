
export default ({
    // 一种模式查
    namespaced:true,
    state: {
        tableData4:[{
            serviceName: "王小虎",
            serviceType: "上海市普陀区金沙江路 1518 弄",
            serviceSchedule: "1111111",
            serviceDetial: "22222",
            serviceTime: "44444",
            serviceLevel: "3213213",
            servicePrice: "222222",
            _id:"",
            row:[],
            // mendianId:localStorage.mendianGliId,
        }],
        curPage:1,
        eachPage:10,
        count:0,
        form1:{
            serviceName: "王小虎",
            serviceType: "上海市普陀区金沙江路 1518 弄",
            serviceSchedule: "1111111",
            serviceDetial: "22222",
            serviceTime: "44444",
            serviceLevel: "3213213",
            servicePrice: "222222",
            _id:"",
            row:[]
        },
       
    },
    mutations: {
        assign(state,data){
            Object.assign(state.tableData,data)
        },
        // 下一页
        eachPage_fu(state,val){
            console.log(state)
           state.eachPage = val
        },
        // 上一页
        curPage_fu(state,val){
            console.log(state)
            state.curPage = val
        },
        assign1(state,data){
            console.log(data)
            if(data.row[0]){
                const { row,eachPage,curPage,count} =data 
                console.log(count)
                state.count=count
                state.tableData4=row
                state.curPage=curPage
                state.eachPage=eachPage
            }else{
                state.tableData4=data.row
            }
        }
    },
    
    
    actions:{
        //修改
        async xiugai_f({state}) {
            console.log(state.form1)
             await fetch("/goods/xiugai", {
                method: "post",
                body: JSON.stringify(state.form1),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json());
            // context.commit("assign",data)
             },

        // 商品查询
        async getFoods(context) {    
           const  curPage =  context.state.curPage
           const  eachPage =  context.state.eachPage
        const data = await fetch("/goods/getFoods", {
            method: "post",
            body: JSON.stringify({
                curPage,
                eachPage,
                mendianId:localStorage.mendianGliId
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
        console.log(data)
       context.commit("assign1",data)
        
            // console.log(data)
         },

         
        //   // 商品查询
        // async getFoods(context,state) {     
        //     const data = await fetch("/goods/getFoods", {
        //         method: "post",
        //         body: JSON.stringify(),
        //         headers: {
        //             "Content-Type": "application/json"
        //         }
        //     }).then(res => res.json());
        //     context.commit("assign",data)
            
        //     //    console.log(data)
        //      },



        //  添加食品
        async addEmp(context,data1) {
            data1.mendianGliId = localStorage.mendianGliId
             await fetch("/goods/addEmp", {
                method: "post",
                body: JSON.stringify(data1),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json());
            // context.commit("assign",data)
             },

//               //  添加用品
//         async articalAdd(context,adata) {
            
//             await fetch("/goods/articalAdd", {
//                method: "post",
//                body: JSON.stringify(adata),
//                headers: {
//                    "Content-Type": "application/json"
//                }
//            }).then(res => res.json());
//            // context.commit("assign",data)
//             },

            //  删除
            async delet(context,data2) {
                console.log(data2)
                 await fetch("/goods/delet", {
                    method: "post",
                    body: JSON.stringify(data2),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(res => res.json());
                // context.commit("assign",data)
                 },
   }
})