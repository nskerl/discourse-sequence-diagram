import { withPluginApi, decorateCooked } from 'discourse/lib/plugin-api';
 
function drawDiagrams($elem) {
	$('.discourse-sequence-diagram', $elem).each(function(i, v){
		try {
			$(v).sequenceDiagram({theme: 'hand'});	
		}
		catch(e) {
		}
  	});
 }
 		
export default {
 	name: 'discourse-sequence-diagram',
 	initialize(container) {	
 		const siteSettings = container.lookup('site-settings:main');
 		if (siteSettings.enable_sequence_diagram_plugin) {
 			withPluginApi('0.1', api => {
 				api.decorateCooked(drawDiagrams);
 			});
 		}
 	}
 }
