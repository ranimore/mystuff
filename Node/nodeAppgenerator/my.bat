@echo off
mkdir NodeProject
cd NodeProject
mkdir routes controller config
copy nul app.js
cd routes 
copy nul index.js
cd ..
cd controller 
copy nul index.js
cd..
cd config
copy nul db.js
cd ..
@echo var express=require('express')>>app.js
@echo var app=express()>>app.js
