const { defineConfig } = require("cypress");
const xlsx = require('node-xlsx').default; 
const fs = require('fs'); // for file
const path = require('path'); // for file path
const readXlsx = require('./read-xlsx')
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { parseXlsx({ filePath }) 
   { return new Promise((resolve, reject) =>
     { try 
      {
         const jsonData = xlsx.parse(fs.readFileSync(filePath)); 
         resolve(jsonData);
         } catch (e) 
         {
            reject(e);
         } });
       }}); 
      
       on('task', {
        'readXlsx': readXlsx.read
      })
      
      } },})


   
   
