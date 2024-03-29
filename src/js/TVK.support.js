var TVK = TVK || {};

TVK.support = (function() {
	
	var styles = 'html,body {height: 100%; width: 100%; overflow:hidden;} #support_container {background-color: #222; box-sizing: border-box; color: #FFF; font-family: Arial, Helvetica, sans-serif; line-height: 1.6em; position: fixed; top: 0; bottom: 0; left: 0; width: 100%; min-height: 100%; overflow-x: hidden; overflow-y: auto; z-index: 9999999999; } #support_container #support_content {box-sizing: border-box; max-width: 700px; margin: 0 auto; padding: 0 20px; text-align:center; } #support_container #support_content h1 {color: #d5031c; font-family: Arial, Helvetica, sans-serif; font-size: 36px; line-height: 1.2em; margin:0 ; padding: 40px 0 15px 0; } #support_container #support_content h2 {color: #FFF;font-size: 22px; line-height: 1.4em; margin: 0; } #support_container #support_content p {color: #CCC; font-size: 16px; margin: 20px; } #support_container #support_content a {font-family: sans-serif; text-decoration: none; } #support_container #support_content a:link, #support_container #support_content a:visited {color: #d5031c; text-decoration: none; } #support_container #support_content a:hover {color: #FFFFFF; text-decoration: underline; } #support_container #support_content .support_video {margin: 20px 0; }',
		markup = '<div id="support_content"><h1>PLEASE HELP SAVE VAPOR PRODUCTS</h1><h2>This site has been shut down for today to help support and spread the word about H.R.2058.</h2><p>H.R.2058 is an amendment to the FDA\'s regulations that will change the grandfather date of the coming FDA regulations so that all of the products currently on the market, can stay on the market.</p><div class="support_video"><iframe width="100%" height="315" src="https://www.youtube.com/embed/0_2g5rPY9Yo" frameborder="0" allowfullscreen></iframe></div><p>To help save vaping and all of the vapor products you love, please follow the steps listed on CASAA\'s website to support:<br><a href="http://blog.casaa.org/2015/10/national-call-to-action-tell-white.html" target="_blank">http://blog.casaa.org/2015/10/national-call-to-action-tell-white.html</a></p><p>This website will be back online at 8pm, your time.</p><p>To get this message setup on your website, please follow this link:<br><a href="https://shop.thevapekit.com/support">https://shop.thevapekit.com/support</a></p></div>',
		body,
		styleTag,
		containerDiv,
		rightNow = new Date(),
		startTime = new Date(2015, 10, 05, 8, 00),
		endTime = new Date(2015, 10, 05, 20, 00);
		
	if (rightNow > startTime && rightNow < endTime) {
		showSupportPage();
	}
	
	function showSupportPage() {
		body = document.body;
		styleTag = document.createElement('style');
		containerDiv = document.createElement('div');
		
		styleTag.innerHTML = styles;
		containerDiv.id = 'support_container';
		containerDiv.innerHTML = markup;
		
		// Add styles to head.
		document.getElementsByTagName('head')[0].appendChild(styleTag);
		// Append markup to the body.
		body.appendChild(containerDiv);
	}
	
})();

document.addEventListener('DOMContentLoaded', TVK.support);