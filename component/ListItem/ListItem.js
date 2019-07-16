Component({
    //   属性列表
    properties: {
        switch: {
            type: String,
            value:''
        }
    },
    // 数据
    data: {
        list:["1","2","3"]
    },
    // 函数
    methods: {
        switch1Change: function (e){
            console.log('switch1 发生 change 事件，携带值为', e.detail.value)
        },
        listBtn: function (e) {
            console.log('e :', e);
            if (e.currentTarget.dataset.id==0) {
               
            }
            if (e.currentTarget.dataset.id==1) {
                console.log('页面 :', "22222222222222");
            }
            if (e.currentTarget.dataset.id==2) {
                console.log('页面 :', "3333333333");
            }
        }
    },
})