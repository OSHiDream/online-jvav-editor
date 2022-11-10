function run(){
			var bo = '<b style=display:block;>';
			var ld = '</b>';
			var ft = '<title>';
			var lt = '</title>';
			var fi = '<i>';
			var li = '</i>';
			var selectnone = '<style>:root{user-select:none;}</style>';
			var center = '<style>:root{position: absolute;text-align: center;left: 50%;top: 50%;transform: translate(-50%, -50%);}</style>';
			var time = new Date();
			var help = 'Jvav DSK 6+ 语法帮助:<br/>help:获取语法帮助<br/>time:获取当前时间<br/>bo + ld:加粗字体<br/>fi + li:倾斜字体<br/>ft + lt:设置程序标题<br/>selectnone/sn:设置程序不可选中普通文本<br/>center/middle:将显示位置绝对居中(垂直+水平)<br/>提示:语法带+指闭合语法,前后者顺序分明,如:<br/>bo 你好 ld:<b> 你好 </b><br/><a href=\'https://vdse.bdstatic.com/192d9a98d782d9c74c96f09db9378d93.mp4\' target=\'_blank\'>点此查看详细文档</a>'
			var acode = code.replace(/time/g,time);
			var bcode = acode.replace(/ld/g,ld);
			var ccode = bcode.replace(/bo/g,bo);
			var dcode = ccode.replace(/ft/g,ft);
			var ecode = dcode.replace(/selectnone|sn/g,selectnone);
			var fcode = ecode.replace(/center|middle/g,center);
			var gcode = fcode.replace(/fi/g,fi);
			var hcode = gcode.replace(/li/g,li);
			var lastcode = hcode.replace(/lt/g,lt);
			var finalcode = lastcode.replace(/help/g,help);
			window.open().document.write(finalcode);
		}