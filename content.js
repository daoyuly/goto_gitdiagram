(function(){
    var ul = document.querySelector('header .AppHeader-globalBar .AppHeader-globalBar-start .AppHeader-context-full nav ul');
    if (!ul) {
        return
    }
    var url = ul.innerText.replace(/\n/g, '')

    var li = document.createElement('li')
    li.innerHTML = '<a target="_blank" href="https://gitdiagram.com/'+url+'"><img title="goto diagram" style="width: 28px;" src="https://raw.githubusercontent.com/daoyuly/gitdiagram_link/refs/heads/main/icon-128.png"></a>'
    ul.appendChild(li)
})()