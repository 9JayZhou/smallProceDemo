//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        imgUrls: [
            '../../images/001.jpg', '../../images/001.jpg', '../../images/001.jpg',
        ],
        list: [
            {listid:1, name: '腾讯QQ', jieshao: '聊天,游戏' },
            {listid:2, name: '腾讯QQ', jieshao: '聊天,游戏' },
            {listid:3, name: 'Weex', jieshao: '聊天' },
            {listid:4, name: '腾讯QQ', jieshao: '聊天,游戏' },
            {listid:5, name: '腾讯游戏', jieshao: '聊天,游戏' },
            {listid:6, name: '腾讯企鹅', jieshao: '聊天,游戏' },
            {listid:7, name: '腾讯QQ', jieshao: '聊天,游戏,inter第9代cpu处理器' },
            
        ],
        list3:[
            { name: '蔡徐坤', jieshao: '唱,跳,rap,篮球' },
            { name: '吴亦凡', jieshao: '大碗宽面' },
            { name: 'Tfboy', jieshao: '王源,XXX,XXX' },
            { name: 'XXX', jieshao: '不知道谁破坏榜单' },
            { name: '赵本山', jieshao: '小品' },
            { name: '撒贝宁', jieshao: '主持人,今日说法' },
            
        ],
        index: 0,
        index1: 0,
        switch:"向Switch传值"
  },
  //事件处理函数
 
    onLoad: function (options) {
      
    },
    one: function () {
        console.log('object :', "one");
    },
    rankingClick: function (e) {
        this.setData({
            index: e.currentTarget.dataset.rankid,
        })
    },
    HomePageClick: function (e) {
        this.setData({
            index1: e.currentTarget.dataset.index1,
        })
        console.log('1222121 :', 1222121)
    },
    SuccessBtn: function () {
      wx.redirectTo({
        url: '../partActive/partActive',
      })
    },
    details: function (e) {
        var postad = e.currentTarget.dataset.postad   //获取传递的值
        // 输出要传递的值
        console.log(this.data.list);
        wx.navigateTo({
          //url: 'post-detail/post-detail'  //跳转详情页  切记配置app.json文件 
            // id为List_item页面传递的值     postad  JSON.stringify(this.data.list)
         url: '../list_item/list_item?id='+ postad    //传递参数
        })
    }

})
