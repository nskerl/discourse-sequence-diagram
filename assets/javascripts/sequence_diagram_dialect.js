(function() {
	function replaceDiagrams(text) {
		text = text || "";
		var i = 0;
		text = text.replace(/\[seqdiagram\]((?:.|\r?\n)*?)\[\/seqdiagram\]/igm, function (_, contents) {
			return "<div class='discourse-sequence-diagram'>" + contents + "</div>";
		});

		return text;
	}
  
	Discourse.Dialect.addPreProcessor(function(text) {
		if (Discourse.SiteSettings.enable_sequence_diagram_plugin) {
		  text = replaceDiagrams(text);
		}
		return text;
	});
	Discourse.Markdown.whiteListTag('div', 'class', 'discourse-sequence-diagram');
})();
