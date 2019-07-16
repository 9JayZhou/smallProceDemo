Component({
    //   属性列表
    properties: {
        switch: {
            type: String,
            value: 'default value'
        }
    },
    // 数据
    data: {
        
    },
    // 函数
    methods: {
        switch1Change: function (e){
            console.log('switch1 发生 change 事件，携带值为', e.detail.value)
          },
          switch2Change: function (e){
            console.log('switch2 发生 change 事件，携带值为', e.detail.value)
          }
    },
})