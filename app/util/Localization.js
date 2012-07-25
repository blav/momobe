var i18nManager = function (){
    var i18nFile = 'mobilesearch';
    var i18nLang = ['en','fr']; //first is default (warning empty value is not supported in i18n file names)
    var path = 'internal-resources/i18n/';
    return {
	    buildFileName: function(fileName, lang){
			var fd = fileName;
	        if (!!lang)
	            fd += "_" + lang;
	        else
	        	fd += "_" + i18nLang[0];

	        fd += "." + "js"

	        return fd;
		},

	    loadInternationalizedFile: function(fileName, lang){
	        document.write('<script type="text/javascript" src="' + path + this.buildFileName(fileName, lang) + '"></script>');
	    },

	    getI18nFile : function(){
	        return i18nFile;
	    },

	    getLanguage : function(){
	    	var language = window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage || window.navigator.systemLanguage || null;
	    	
	    	if (!!language)
	    		language = language.split("-")[0];

	    	for (var i = i18nLang.length - 1; i >= 0; i--) {
			    if (language == i18nLang[i])
			    	return language;
			};
			return i18nLang[0];
	    }
	};
}();


i18nManager.loadInternationalizedFile(i18nManager.getI18nFile(), i18nManager.getLanguage());





