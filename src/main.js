import ItemList from './class/ItemLIst'
import './css/main.less'

// 以下代码均可修改
const arrayList = new ItemList({
  ele: '.container2',
  itemClassName: 'item'
})

arrayList.init()

// event
document.getElementById('add').addEventListener('click', function(e) {
  arrayList.addItem()
})

document.getElementById('delete').addEventListener('click', function(e) {
  arrayList.removeItem()
})