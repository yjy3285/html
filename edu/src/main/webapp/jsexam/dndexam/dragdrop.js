var source, drop;
function initiate(){
  source=document.getElementById('image');
  source.addEventListener('dragstart', dragged, false);

  drop=document.getElementById('dropbox');
  drop.addEventListener('dragover', function(e){ e.preventDefault(); }, false);
  drop.addEventListener('drop', dropped, false);
}
function dragged(e){
  var code='<img src="'+source.getAttribute('src')+'">';
  e.dataTransfer.setData('Text', code);
}
function dropped(e){
  e.preventDefault();s
  drop.innerHTML=e.dataTransfer.getData('Text');
}
window.addEventListener('load', initiate, false);