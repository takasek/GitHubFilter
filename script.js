$(function(){
	var conditions = {
		"/10sec/iOS/issues" : {
			"開発" : "is:issue is:open -label:backlog -label:design",
			"未着手" : "is:issue is:open -label:backlog -label:design -label:reviewing -label:checking -label:waiting-distribution",
			"bug" : "is:issue is:open label:bug",
			"refactor" : "is:open label:refactoring",
		}
	}[document.location.pathname];
	var generate = (function(title, query){
		return $("<a>"+title+"</a>").addClass("js-selected-navigation-item subnav-item").attr("href", document.location.pathname+"?q="+encodeURIComponent(query).replace(/%20/g, "+"));
	});
	
	for (title in conditions) {
		generate(title, conditions[title]).appendTo($(".subnav-links"));
	}
});