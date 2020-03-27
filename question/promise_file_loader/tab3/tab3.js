(function(){
  console.log('tab3 is loaded')
  let span = document.createElement('span')
  span.className="tab3"
  span.innerText="我是tab3的内容"
  let content = document.querySelector('.content')
  let childNodes = content.childNodes
  for(let i = 0; i < childNodes.length; i++) {
     content.replaceChild(span, childNodes[i])
  }
})()