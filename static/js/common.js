

/**
 * 将js页面的number类型转换为java的int类型
 * @param num
 * @return intValue
 */
function intValue(num)
{
    var MAX_VALUE = 0x7fffffff;
    var MIN_VALUE = -0x80000000;
    if(num > MAX_VALUE || num < MIN_VALUE)
    {
	return num &= 0xFFFFFFFF;
    }
    return num;
}

/**
 * java String hashCode 的实现
 * @param strKey
 * @return intValue
 */
function hashCode(strKey)
{
    if(strKey == null || strKey.value == ""){
        return 0 ;
    }
    var hash = 0;

    for (var i = 0; i < strKey.length; i++)
    {
	hash = hash * 31 + strKey.charCodeAt(i);
	hash = intValue(hash);
    }

    return hash;
}

function addDuoshuoPlugin(){
    duoshuoQuery = {short_name:"ooom"};
    (function() {
        var ds = document.createElement('script');
        ds.type = 'text/javascript';ds.async = true;
        ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.unstable.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('head')[0] 
         || document.getElementsByTagName('body')[0]).appendChild(ds);
    })();
}

function addForkMeOnGithub(){
    var a = document.createElement('a');
    a.className = 'fork-me-github' ;
    a.href = 'https://github.com/jsuper';
    var img = document.createElement('img');
    img.className = 'fork-me-img' ;
    img.src = '/static/img/github-fork-me.png' ;
    img.alt = 'Fork me on Github';
    a.appendChild(img) ;
    document.body.appendChild(a);
}


$(document).ready(function(){
    var title = $(document).find('title').text();
    var href = window.location.href ;
    var pathName = window.location.pathname ;
    var isIndex = pathName === "/" || pathName === "/index.html" ;
    var isSitemap = pathName === "/sitemap.html" ;
    if(!isIndex && !isSitemap){
        var id = hashCode(pathName) ;
        var dsThread = $("#ds-thread") ;
        dsThread.attr('data-thread-key',id);
        dsThread.attr('data-title',title);
        dsThread.attr('data-url',href);

        addDuoshuoPlugin();
    }
    //append fork me icon on index page
    if(isIndex) addForkMeOnGithub();
});

