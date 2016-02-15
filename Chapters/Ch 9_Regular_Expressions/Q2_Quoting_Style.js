console.log(text.replace(/(\s'|'\s|^'|'$)/g, function(str){
 return str.replace(/'/g,"\"");
}));