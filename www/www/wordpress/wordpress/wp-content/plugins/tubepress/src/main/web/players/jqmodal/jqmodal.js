(function(b,g){var a="jqmodal",c=g.Beacon.subscribe,i=g.Environment.getBaseUrl()+"/src/main/web/vendor/jqmodal/jqModal.",h=g.DomInjector,d="tubepress.playerlocation.",e=function(q,m,j,l,p,n){if(m!==a){return}var k=b('<div id="jqmodal'+n+p+'" style="visibility: none; height: '+j+"px; width: "+l+'px;"></div>').appendTo("body"),o=function(r){r.o.remove();r.w.remove()};k.addClass("jqmWindow");k.jqm({onHide:o}).jqmShow()},f=function(p,m,q,k,j,l,o,n){if(m!==a){return}b("#jqmodal"+n+o).html(k)};if(!b.isFunction(b.fn.jqm)){h.loadJs(i+"js");h.loadCss(i+"css")}c(d+"invoke",e);c(d+"populate",f)}(jQuery,TubePress));