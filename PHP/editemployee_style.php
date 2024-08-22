<?php header("Content-type: text/css"); ?>
*{
    margin: 0;
    padding: 0;
    font-family: "poppins",sans-serif;
}

#header{
   display: flex;
   height: 100vh;
   width: 100%;
}
#admin {
    color: #ffffff;
    text-decoration: none;
    position: relative;
    top: 21px;
    left: 39px;
    font-size: 20px;
}
.header3 {
    color: #6d767e;
    position: relative;
    top: 10px;
    left: 55px;
}
#left-header{
    background: #ffffff;
    width:100%;
    height: 88px;
}
.logo{
    color: white;
    position: relative;
    top: 40px;
    margin-left: 20px;
}
.dash-left {
    flex: 1;
    background: #313a46;
    height: 200vh;
}
.nav{
    position: relative;
    top: 65px;
    left: 55px;
    /* bottom: 400px; */
    color: #6d767e;
}
.dash_data{
    font-size: 20px;
    color: #ffffff;
    position: relative;
    /* top: 100px;
    margin-right: 40px;
    padding: 50px; */
}
.dash_data:hover{
    background: #c3c8cd;
    color: black;
}

#dashtitle{
    text-decoration: none;
    color: #ffffff; 
}

.house-icon,.task-icon,.list-icon{
    color: #ffffff;
    font-size: 17px;
    padding-right: 12px;
}
.dash-right {
    flex: 5;
    background: #c3c8cd;
    height: 200vh;
}
.bars{
    font-size: 22px;
    margin-top: 37px;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
    
}
.bars:hover{
    color:#727cf5 ;
}
.search{
    padding: 4px;
    margin-top: 37px;
    background: #f0f3f8; 
}
.btn{
    padding: 4px;
    color: white;
    background: #6973e3;
    position: relative;
    right: 10px;
    cursor: pointer;
}
.btn:hover{
    background: #5159b0;
}
.icons{
    position: absolute;
    font-size: 22px;
    margin: 25px;
    margin-right: 10px;
    cursor: pointer;
    top: 5px;
    right:15%;
    word-spacing: 50px;
    color: #6d767e;
}
.fa-bell:hover{
    color: #727cf5;
}
.fa-gear:hover{
    color: #727cf5;
}
.fa-moon:hover{
    color: #727cf5;
}
.fa-expand:hover{
    color: #727cf5;
}
.fa-retweet:hover{
    color: #727cf5;
}
.profile{
    position: absolute;
    top: 0px;
    right: 0px;
    background: lightblue;
    height: 88px;
    width: 174px;
    display: flex;
}
.left_profile{
    color: black;
    padding: 15px;
    margin-top: 15px;
    font-size: 30px;
}
.right_profile {
    margin-top: 20px;
    color: black;
    cursor: pointer;
}
.left_profile:hover{
    color: black !important;
}
.h3:hover{
    color: #ffffff;
    cursor: pointer;
}
.h4:hover{
    color: #ffffff;
    cursor: pointer;
}
.add-task{
    text-align: center;
    position:relative;
    top: 70px;
    
}
.task{
    position: relative;
    bottom: 20px;
    font-size: 40px;
    color: black;
}
.fname{
    padding: 5px;
    width: 50%;
    background: white;
    border-color:black;
    color: black;
    margin-bottom: 20px;
}
.lname{
    padding: 5px;
    width: 50%;
    background: white;
    border-color:black;
    color: black;
    margin-bottom: 20px;
}
.Enter-Password{
    padding: 5px;
    width: 50%;
    background: white;
    border-color:black;
    color: black;
    margin-bottom: 20px;
}
.task-Property{
    padding: 5px;
    width: 50%;
    background: white;
    border-color:black;
    color: black;
    margin-bottom: 20px;
}
.task-Status{
    padding: 5px;
    width: 50%;
    background: white;
    border-color:black;
    color: black;
    margin-bottom: 20px;
}
.btn2 {
    padding: 8px 20px;
    color: white;
    background: #6973e3;
    position: relative;
    right: 10px;
    left: 10px;
    cursor: pointer;
    box-shadow: 1px #6973e3 ;
}
.btn2:hover{
    background: #5159b0;
}