var connection=require("../config/connection.js");function printQuestionMarks(n){for(var o=[],t=0;t<n;t++)o.push("?");return o.toString()}function objToSql(n){var o=[];for(var t in n){var r=n[t];Object.hasOwnProperty.call(n,t)&&("string"==typeof r&&0<=r.indexOf(" ")&&(r="'"+r+"'"),o.push(t+"="+r))}return o.toString()}var orm={all:function(n,t){var o="SELECT * FROM "+n+";";connection.query(o,function(n,o){if(n)throw n;t(o)})},create:function(n,o,t,r){var i="INSERT INTO "+n;i+=" (",i+=o.toString(),i+=") ",i+="VALUES (",i+=printQuestionMarks(t.length),i+=") ",console.log(i),connection.query(i,t,function(n,o){if(n)throw n;r(o)})},update:function(n,o,t,r){var i="UPDATE "+n;i+=" SET ",i+=objToSql(o),i+=" WHERE ",i+=t,console.log(i),connection.query(i,function(n,o){if(n)throw n;r(o)})},delete:function(n,o,t){var r="DELETE FROM "+n;r+=" WHERE ",r+=o,connection.query(r,function(n,o){if(n)throw n;t(o)})}};module.exports=orm;