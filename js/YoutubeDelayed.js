var YoutubeDelayed={initPlayer:function(a){var b=a.getAttribute("data-videoid"),c=a.getAttribute("data-image")||"0.jpg";a.style.backgroundImage="url(http://img.youtube.com/vi/"+b+"/"+c+")",a.innerHTML='<a class="YoutubeDelayedPlay" href="http://www.youtube.com/watch?v='+b+'" target="_blank"></a>',a.firstChild.onclick=YoutubeDelayed.loadPlayer},init:function(){for(var a=document.getElementsByClassName("YoutubeDelayed"),b=0;b<a.length;b++)YoutubeDelayed.initPlayer(a[b])},loadPlayer:function(a){a.preventDefault(),this.parentNode.innerHTML='<iframe class="YoutubeDelayedPlayer" src="http://www.youtube.com/embed/'+this.parentNode.getAttribute("data-videoid")+'?autoplay=1" frameborder="0" allowfullscreen></iframe>'}};window[addEventListener?"addEventListener":"attachEvent"](addEventListener?"load":"onload",YoutubeDelayed.init);
