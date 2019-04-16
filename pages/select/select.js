var treeData = {
  text: 'My Tree',
  id: 0,
  nodes: [
    {
      text: 'Parent 1',
      id: 1,
      nodes: [
        {
          text: 'Child 1',
          id: 2,
          nodes: [
            {
              text: 'Grandchild 1',
              id: 3,
            },
            {
              text: 'Grandchild 2',
              id: 4,
            },
          ]
        },
        {
          text: 'Child 2',
          id: 5,
        }
      ]
    },
    {
      text: 'Parent 2',
      id: 6,
      nodes: [
        {
          text: 'Child 1',
          id: 7,
        },
        {
          text: 'Child 2',
          id: 8,
        }
      ]
    }
  ]
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    multiIndex: [0, 0, 0],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = { "result": { "code": "200", "data": { "list": { "isParent": true, "children": [{ "isParent": true, "children": [{ "isParent": true, "children": [{ "isParent": false, "name": "发车员", "permission": 2, "id": "31861d5c296c4d0fbbe046921ecf5afe", "parentId": "42ccea3fc36c403eaba73202be6a4429" }], "name": "发车员", "permission": 1, "id": "42ccea3fc36c403eaba73202be6a4429", "parentId": "f56f605b575d466ca2ecede425d8973b" }, { "isParent": true, "children": [{ "isParent": false, "name": "唐路", "permission": 2, "id": "f774fc3ef627483c8e961e6a687ac1d6", "parentId": "77bc91b907264cb384834974dc7ab2f3" }], "name": "监管员", "permission": 1, "id": "77bc91b907264cb384834974dc7ab2f3", "parentId": "f56f605b575d466ca2ecede425d8973b" }, { "isParent": true, "children": [{ "isParent": false, "name": "jgf省区经理", "permission": 2, "id": "800ac7a1b4674d06b8233d07defc4fea", "parentId": "93af7652acdf4e2da3ef12d70cb74a8c" }], "name": "省区经理", "permission": 1, "id": "93af7652acdf4e2da3ef12d70cb74a8c", "parentId": "f56f605b575d466ca2ecede425d8973b" }, { "isParent": true, "children": [{ "isParent": false, "name": "jgf大区经理", "permission": 2, "id": "ca3fe690042849b48a3a14837dea6f3b", "parentId": "a404854a5ecc4880a6327e33793d926e" }], "name": "大区经理", "permission": 1, "id": "a404854a5ecc4880a6327e33793d926e", "parentId": "f56f605b575d466ca2ecede425d8973b" }, { "isParent": true, "children": [{ "isParent": false, "name": "jgf总经理", "permission": 2, "id": "b00cf920b43f4414a605dee92ef77186", "parentId": "a51ce28881014609b8a214868eb5bcee" }], "name": "总经理", "permission": 1, "id": "a51ce28881014609b8a214868eb5bcee", "parentId": "f56f605b575d466ca2ecede425d8973b" }], "name": "众杰泰一分公司", "permission": 0, "id": "f56f605b575d466ca2ecede425d8973b", "parentId": "c3e05b7c16c34ecf9d9e260197795abe" }], "name": "众杰泰", "permission": 0, "id": "c3e05b7c16c34ecf9d9e260197795abe", "parentId": "" } }, "message": "操作成功" } };
    console.log(data);
  },
  bindMultiPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange(e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value)
    const data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    }
    data.multiIndex[e.detail.column] = e.detail.value
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物']
            data.multiArray[2] = ['猪肉绦虫', '吸血虫']
            break
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物']
            data.multiArray[2] = ['鲫鱼', '带鱼']
            break
        }
        data.multiIndex[1] = 0
        data.multiIndex[2] = 0
        break
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫']
                break
              case 1:
                data.multiArray[2] = ['蛔虫']
                break
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥']
                break
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓']
                break
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物']
                break
            }
            break
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼']
                break
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼']
                break
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎']
                break
            }
            break
        }
        data.multiIndex[2] = 0
        break
    }
    console.log(data.multiIndex)
    this.setData(data)
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