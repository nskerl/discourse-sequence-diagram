import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features.diagram = true;
});

function replaceDiagrams(text) {
		text = text || "";
		var i = 0;
		text = text.replace(/\[diagram\]((?:.|\r?\n)*?)\[\/diagram\]/igm, function (_, contents) {
			return "<div class='discourse-sequence-diagram'>" + contents + "</div>";
		});

		return text;
}

export function setup(helper) {
  helper.whiteList(['div.discourse-sequence-diagram']);
  helper.addPreProcessor(text => replaceDiagrams(text));
}
