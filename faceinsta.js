jQuery(&quot;document&quot;).ready(function($){
    var pull        = $(&#39;#pull&#39;);  
        menu        = $(&#39;nav ul&#39;);  
        menuHeight  = menu.height();  
  
    $(pull).on(&#39;click&#39;, function(e) {  
        e.preventDefault();  
        menu.slideToggle();  
    });  
	$(&#39;#search-icon&#39;).on(&#39;click&#39;, function(){
		$(&#39;#nav-search&#39;).slideToggle(250);
	});
var nav = $(&#39;.conteudo-menu&#39;);
$(window).scroll(function () {
if ($(this).scrollTop() &gt; 275) {
nav.addClass(&quot;menu-fixo&quot;);
} else {
nav.removeClass(&quot;menu-fixo&quot;);
}
});	
$(document).ready(function() {
});
function changeThumbSize(id,size){
var blogGadget = document.getElementById(id);
var replacement = blogGadget.innerHTML;
blogGadget.innerHTML = replacement.replace(/s72-c/g,&quot;s&quot;+size+&quot;-c&quot;);
var thumbnails = blogGadget.getElementsByTagName(&quot;img&quot;);
for(var i=0;i&lt;thumbnails.length;i++){ 
thumbnails[i].width = size; 
thumbnails[i].height = size; 
}
}
changeThumbSize(&quot;PopularPosts1&quot;,0);    
}); 

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_PT/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
