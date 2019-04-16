
var data = { "result": { "code": "200", "data": { "list": { "isParent": true, "children": [{ "isParent": true, "children": [{ "isParent": true, "children": [{ "isParent": false, "name": "发车员", "permission": 2, "id": "31861d5c296c4d0fbbe046921ecf5afe", "parentId": "42ccea3fc36c403eaba73202be6a4429" }], "name": "发车员", "permission": 1, "id": "42ccea3fc36c403eaba73202be6a4429", "parentId": "f56f605b575d466ca2ecede425d8973b" }, { "isParent": true, "children": [{ "isParent": false, "name": "唐路", "permission": 2, "id": "f774fc3ef627483c8e961e6a687ac1d6", "parentId": "77bc91b907264cb384834974dc7ab2f3" }], "name": "监管员", "permission": 1, "id": "77bc91b907264cb384834974dc7ab2f3", "parentId": "f56f605b575d466ca2ecede425d8973b" }, { "isParent": true, "children": [{ "isParent": false, "name": "jgf省区经理", "permission": 2, "id": "800ac7a1b4674d06b8233d07defc4fea", "parentId": "93af7652acdf4e2da3ef12d70cb74a8c" }], "name": "省区经理", "permission": 1, "id": "93af7652acdf4e2da3ef12d70cb74a8c", "parentId": "f56f605b575d466ca2ecede425d8973b" }, { "isParent": true, "children": [{ "isParent": false, "name": "jgf大区经理", "permission": 2, "id": "ca3fe690042849b48a3a14837dea6f3b", "parentId": "a404854a5ecc4880a6327e33793d926e" }], "name": "大区经理", "permission": 1, "id": "a404854a5ecc4880a6327e33793d926e", "parentId": "f56f605b575d466ca2ecede425d8973b" }, { "isParent": true, "children": [{ "isParent": false, "name": "jgf总经理", "permission": 2, "id": "b00cf920b43f4414a605dee92ef77186", "parentId": "a51ce28881014609b8a214868eb5bcee" }], "name": "总经理", "permission": 1, "id": "a51ce28881014609b8a214868eb5bcee", "parentId": "f56f605b575d466ca2ecede425d8973b" }], "name": "众杰泰一分公司", "permission": 0, "id": "f56f605b575d466ca2ecede425d8973b", "parentId": "c3e05b7c16c34ecf9d9e260197795abe" }], "name": "众杰泰", "permission": 0, "id": "c3e05b7c16c34ecf9d9e260197795abe", "parentId": "" } }, "message": "操作成功" } };
Page({
  data: {
    treeData: data.result.data.list,
  },
  //事件处理函数
  tapItem: function (e) {
    // console.log('index接收到的itemid: ' + e.detail.itemid);
  },

  onLoad: function () {

  },
  onShow:function(){

  }
})