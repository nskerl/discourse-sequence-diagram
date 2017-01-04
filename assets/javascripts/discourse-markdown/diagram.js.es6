import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features.diagram = !!siteSettings.diagrams_plugin_enabled;
});

function replaceDiagrams(text) {
		text = text || "";
		var i = 0;
		text = text.replace(/\[seqdiagram\]((?:.|\r?\n)*?)\[\/seqdiagram\]/igm, function (_, contents) {
			return "<div class='discourse-sequence-diagram'>" + contents + "</div>";
		});

		return text;
}

export function setup(helper) {
  helper.addPreProcessor(text => {
    return replaceDiagrams(text);
  });
}
