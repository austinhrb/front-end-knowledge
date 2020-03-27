(function(){
  console.log('tab2 is loaded')
  let span = document.createElement('span')
  span.className="tab2"
  span.innerText="我是tab2的内容"
  let content = document.querySelector('.content')
  let childNodes = content.childNodes
  for(let i = 0; i < childNodes.length; i++) {
     content.replaceChild(span, childNodes[i])
  }
})()