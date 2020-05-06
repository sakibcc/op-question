class ItemList {
  constructor(payload) {
    const {ele, itemClassName} = payload
    const element = document.querySelector(ele)
    if(element) {
      this._el = element
    } else {
      throw new Error('找不到对应的dom元素')
    }
    this._className = itemClassName
    this.list = [
      'item1',
      'item2',
      'item3',
    ]
  }
  init() {
    this._reset()
    this._dom()
  }
  addItem (item) {
    const length = this.list.length
    this.list.push(`item${length + 1}`)
    this.init()
  }
  removeItem () {
    this.list.pop()
    this.init()
  }
  _reset () {
    const length = this._el.children.length
    if( length === 0 ) return
    for(let i = length -1; i >= 0; i--) {
      this._el.removeChild(this._el.children[i])
    }
   
  }
  _dom () {
    this.list.forEach(item => {
      const divItem = this._createItemDom()
      divItem.innerHTML = item
      this._el.appendChild(divItem)
    })
  }
  _createItemDom () {
    const _div = document.createElement('div')
    _div.setAttribute('class', this._className)
    return _div
  }
}

export default ItemList