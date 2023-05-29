//直接监控父元素，使用事件委托
const container = document.querySelector('.container');

let source;

//拖拽开始事件，只触发一次
container.ondragstart = e => {
    //移动取消出现+号的效果
    e.dataTransfer.effectAllowed = e.target.dataset.effect;
    source = e.target
    console.log('start', e.target)
}

//拖拽结束事件,表示拖拽这个元素到哪个元素之上，不断触发
container.ondragover = e => {
    e.preventDefault();
    // console.log('over', e.target)
}


//拖拽移入事件，只触发一次
container.ondragenter = e => {
    //清除之前拖拽的样式
    removeDropStyle()
    const dropNode = getDropNode(e.target)
    if (dropNode && dropNode.dataset.drop === e.dataTransfer.effectAllowed) {
        //该节点能够接受目前拖拽节点
        e.target.classList.add('drop-over')
    }

    // console.log('enter', e.target)
}

//拖拽放手在哪个元素,table,tr,td,这些元素是不允许元素拖拽到他的上面的，因此是不会触发这个事件的，触发阻止浏览器默认事件，在ondragover中阻止
container.ondrop = e => {
    //清除拖拽的样式
    removeDropStyle()
    console.log('drop', e.target)
    const dropNode = getDropNode(e.target)
    //该节点能够接受目前拖拽节点
    if (dropNode && dropNode.dataset.drop === e.dataTransfer.effectAllowed) {
        //两种情况，是拖拽到哪个区域,如果是copy区域
        if (dropNode.dataset.drop === 'copy') {
            //清除之前的元素
            dropNode.innerHTML = ''
            //把该元素复制一份
            const cloned = source.cloneNode(true)
            cloned.dataset.effect = 'move'
            dropNode.appendChild(cloned)
            //如果是move区域
        } else {
            console.log("1111111")
            source.remove()
        }
    }
}

//获取该元素是否有父元素
function getDropNode(node) {
    while (node) {
        if (node.dataset.drop) {
            return node
        }
        node = node.parentNode
    }
}

//清除移动的样式
function removeDropStyle() {
    document.querySelectorAll('.drop-over').forEach((node) => {
        node.classList.remove('drop-over')
    })
}
