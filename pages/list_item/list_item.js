// pages/list_item/list_item.js
var app = getApp();
// 引入data
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list_itemid: null,
        list_item: [{
            img: '../../images/001.jpg',
            username: 'ASD',
            time: JSON.stringify(new Date()),
            content: "Hello World,Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World",
                list_text: "AAAAAAAAAAAAAAAAAAAAAAAAA"
            },
            {
                img: '../../images/002.jpg',
            username: 'ASDFG',
            time: JSON.stringify(new Date()),
            content: "Hello World,Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World",
                list_text: "BBBBBBBBBBBBBBBBBBBBBBBBB"
            },
            {
                img: '../../images/001.jpg',
            username: 'ASDCV',
            time: JSON.stringify(new Date()),
            content: "Hello World,Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World",
                list_text: "CCCCCCCCCCCCCCCCCCCCCCCCC"
            },
            {
                img: '../../images/002.jpg',
            username: 'AQWSD',
            time: JSON.stringify(new Date()),
            content: "Hello World,Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World",
                list_text: "DDDDDDDDDDDDDDDDDDDDDDDDD"
            },
            // { list_itemid: 5, list_text: "EEEEEEEEEEEEEEEEEEEEEEEEE" },

        ],
        listObj: {}
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //   JSON.parse
        let postad = options.id;
        this.setData({
            list_itemid: postad,
            listObj: this.data.list_item[postad - 1]

        })
        console.log(options);
        console.log(this.data.listObj);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})