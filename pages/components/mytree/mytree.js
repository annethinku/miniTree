Component({
  properties: {
    model: Object,
  },

  data: {
    open: false,
    isBranch: false,
    currentId:null
  },

  methods: {
    toggle: function (e) {
      if (this.data.isBranch) {
        this.setData({
          open: !this.data.open,
        })
      }
    },

    tapItem: function (e) {
      var itemid = e.currentTarget.dataset.itemid;
      // console.log('组件里点击的id: ' + itemid);
      if (this.data.currentId){
        this.setData({
          currentId: null
        })
      }else{
        this.setData({
          currentId: itemid
        })
      }
      this.triggerEvent('tapitem', { itemid: itemid }, { bubbles: true, composed: true });
    }
  },

  ready: function (e) {
    this.setData({
      isBranch: Boolean(this.data.model.children && this.data.model.children.length),
    });
    // console.log(this.data);
  },
})